from heapq import heappush, heappop
from collections import defaultdict, deque
from typing import List, Dict, Tuple
import math

# Player Graph for Matchmaking
class PlayerGraph:
    def __init__(self):
        self.nodes = defaultdict(list)  # node: [(neighbor, cost), ...]
    
    def add_edge(self, player1: str, player2: str, cost: float):
        self.nodes[player1].append((player2, cost))
        self.nodes[player2].append((player1, cost))  # Undirected for matchmaking

# GameKit Matchmaker
class GameKitMatchmaker:
    def __init__(self):
        self.graph = PlayerGraph()
        self.metadata = {}  # Hash Table: player -> {skill, latency, preferences}
        self.elo_k = 32  # Elo constant
    
    def add_player(self, player: str, skill: int, latency: int, preferences: Dict):
        self.metadata[player] = {"skill": skill, "latency": latency, "preferences": preferences}
    
    def calculate_cost(self, player1: str, player2: str) -> float:
        # Rule-based scoring: Combine skill difference, latency, preference mismatch
        p1 = self.metadata[player1]
        p2 = self.metadata[player2]
        skill_diff = abs(p1["skill"] - p2["skill"]) / 100.0
        latency_cost = (p1["latency"] + p2["latency"]) / 1000.0
        pref_mismatch = 0.5 if p1["preferences"]["mode"] != p2["preferences"]["mode"] else 0.0
        return skill_diff + latency_cost + pref_mismatch
    
    def add_match_edge(self, player1: str, player2: str):
        cost = self.calculate_cost(player1, player2)
        self.graph.add_edge(player1, player2, cost)
    
    def uniform_cost_search(self, start_player: str, goal_size: int) -> Tuple[List[str], float]:
        open_list = [(0, [start_player], 0)]  # (total_cost, group, path_cost)
        closed = set()
        
        while open_list:
            total_cost, group, path_cost = heappop(open_list)
            group_tuple = tuple(sorted(group))
            if group_tuple in closed:
                continue
            if len(group) == goal_size:
                return group, path_cost
            closed.add(group_tuple)
            
            last_player = group[-1]
            for neighbor, cost in self.graph.nodes[last_player]:
                if neighbor in group:
                    continue
                new_group = group + [neighbor]
                new_cost = path_cost + cost
                heappush(open_list, (new_cost, new_group, new_cost))
        
        return None, float('inf')
    
    def greedy_matching(self, players: List[str], goal_size: int) -> List[str]:
        if len(players) < goal_size:
            return None
        group = [players[0]]
        remaining = players[1:]
        
        while len(group) < goal_size and remaining:
            best_player = min(remaining, key=lambda p: self.calculate_cost(group[-1], p))
            group.append(best_player)
            remaining.remove(best_player)
        
        return group if len(group) == goal_size else None
    
    def update_elo(self, winner: str, loser: str):
        # Elo rating update
        w_skill = self.metadata[winner]["skill"]
        l_skill = self.metadata[loser]["skill"]
        expected_w = 1 / (1 + 10 ** ((l_skill - w_skill) / 400))
        self.metadata[winner]["skill"] += int(self.elo_k * (1 - expected_w))
        self.metadata[loser]["skill"] += int(self.elo_k * (0 - (1 - expected_w)))
    
    def match_players(self, players: List[str], goal_size: int):
        # Cluster by region (simplified)
        for i, p1 in enumerate(players):
            for p2 in players[i+1:]:
                if self.metadata[p1]["preferences"]["region"] == self.metadata[p2]["preferences"]["region"]:
                    self.add_match_edge(p1, p2)
        
        # Try UCS
        group, cost = self.uniform_cost_search(players[0], goal_size)
        if group:
            print(f"UCS Match: {group}, Cost: {cost:.2f}")
            return group
        # Fallback to Greedy
        group = self.greedy_matching(players, goal_size)
        if group:
            print(f"Greedy Match: {group}")
        return group

# Example Usage
if __name__ == "__main__":
    matchmaker = GameKitMatchmaker()
    
    # Add players
    matchmaker.add_player("Player1", 1500, 50, {"mode": "race", "region": "US"})
    matchmaker.add_player("Player2", 1550, 60, {"mode": "race", "region": "US"})
    matchmaker.add_player("Player3", 1450, 70, {"mode": "race", "region": "US"})
    matchmaker.add_player("Player4", 1600, 80, {"mode": "battle", "region": "US"})
    
    # Match 3 players
    group = matchmaker.match_players(["Player1", "Player2", "Player3", "Player4"], 3)
    
    # Update Elo (e.g., Player1 wins against Player2)
    if group:
        matchmaker.update_elo("Player1", "Player2")
        print(f"Updated Skills: Player1={matchmaker.metadata['Player1']['skill']}, Player2={matchmaker.metadata['Player2']['skill']}")