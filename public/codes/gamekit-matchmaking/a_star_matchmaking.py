from fibonacci_heap import FibonacciHeap
from collections import defaultdict
from typing import List, Dict, Tuple, Optional
import math

class PlayerGraph:
    def __init__(self):
        self.nodes = defaultdict(list)  # player: [(neighbor, cost), ...]

    def add_edge(self, player1: str, player2: str, cost: float):
        self.nodes[player1].append((player2, cost))
        self.nodes[player2].append((player1, cost))

class AStarMatchmaker:
    def __init__(self):
        self.graph = PlayerGraph()
        self.metadata = {}  # player -> {skill, latency, preferences}

    def add_player(self, player: str, skill: int, latency: int, preferences: Dict):
        self.metadata[player] = {"skill": skill, "latency": latency, "preferences": preferences}

    def calculate_cost(self, player1: str, player2: str) -> float:
        p1 = self.metadata[player1]
        p2 = self.metadata[player2]
        skill_diff = abs(p1["skill"] - p2["skill"]) / 100.0
        latency_cost = (p1["latency"] + p2["latency"]) / 1000.0
        pref_mismatch = 0.5 if p1["preferences"]["mode"] != p2["preferences"]["mode"] else 0.0
        return skill_diff + latency_cost + pref_mismatch

    def add_match_edge(self, player1: str, player2: str):
        cost = self.calculate_cost(player1, player2)
        self.graph.add_edge(player1, player2, cost)

    def heuristic(self, group: List[str], goal_size: int) -> float:
        remaining = goal_size - len(group)
        return remaining * 0.5  # Average cost per player

    def a_star_search(self, start_player: str, goal_size: int) -> List[Tuple[List[str], float]]:
        heap = FibonacciHeap()
        start_entry = heap.insert(0, ([start_player], 0))  # (group, g_score)
        node_map = {start_entry: 0}  # Track heap entries
        closed = set()
        results = []

        while heap.node_count:
            group, g_score = heap.extract_min()
            group_tuple = tuple(sorted(group))
            if group_tuple in closed:
                continue
            if len(group) == goal_size:
                results.append((group, g_score))
                if len(results) >= 3:  # Collect multiple candidates
                    break
            closed.add(group_tuple)

            last_player = group[-1]
            for neighbor, cost in self.graph.nodes[last_player]:
                if neighbor in group:
                    continue
                new_group = group + [neighbor]
                new_g_score = g_score + cost
                f_score = new_g_score + self.heuristic(new_group, goal_size)
                heap.insert(f_score, (new_group, new_g_score))

        return results if results else [(None, float('inf'))]

# Example Usage
if __name__ == "__main__":
    matchmaker = AStarMatchmaker()
    matchmaker.add_player("P1", 1500, 50, {"mode": "race", "region": "US"})
    matchmaker.add_player("P2", 1550, 60, {"mode": "race", "region": "US"})
    matchmaker.add_player("P3", 1450, 70, {"mode": "race", "region": "US"})
    matchmaker.add_player("P4", 1520, 55, {"mode": "race", "region": "US"})

    for p1 in ["P1", "P2", "P3", "P4"]:
        for p2 in ["P1", "P2", "P3", "P4"]:
            if p1 < p2 and matchmaker.metadata[p1]["preferences"]["region"] == matchmaker.metadata[p2]["preferences"]["region"]:
                matchmaker.add_match_edge(p1, p2)

    results = matchmaker.a_star_search("P1", 3)
    for group, cost in results:
        print(f"A* Group: {group}, Cost: {cost:.2f}")