from typing import List, Dict, Optional

class StableMarriage:
    def __init__(self, matchmaker):
        self.matchmaker = matchmaker  # Reference to AStarMatchmaker for cost calculation

    def stable_marriage(self, candidates: List[List[str]], cost_threshold: float) -> Optional[List[str]]:
        if not candidates:
            return None

        # Generate preference lists based on compatibility costs
        player_prefs = {}
        all_players = list(set(sum(candidates, [])))
        for player in all_players:
            player_prefs[player] = sorted(
                [p for p in all_players if p != player],
                key=lambda p: self.matchmaker.calculate_cost(player, p)
            )

        # Gale-Shapley: Players propose to preferred matches
        group_size = len(candidates[0])
        engagements = {}  # player -> matched player
        free_players = all_players.copy()

        while free_players:
            player = free_players[0]
            for pref in player_prefs[player]:
                if pref not in engagements:
                    engagements[pref] = player
                    free_players.remove(player)
                    break
                else:
                    current = engagements[pref]
                    if player_prefs[pref].index(player) < player_prefs[pref].index(current):
                        engagements[pref] = player
                        free_players.remove(player)
                        free_players.append(current)
                        break

        # Form group from stable matches
        group = list(engagements.values())
        if len(group) >= group_size:
            return group[:group_size]
        return None

# Example Usage
if __name__ == "__main__":
    from a_star_matchmaking import AStarMatchmaker
    matchmaker = AStarMatchmaker()
    matchmaker.add_player("P1", 1500, 50, {"mode": "race", "region": "US"})
    matchmaker.add_player("P2", 1550, 60, {"mode": "race", "region": "US"})
    matchmaker.add_player("P3", 1450, 70, {"mode": "race", "region": "US"})
    matchmaker.add_player("P4", 1520, 55, {"mode": "race", "region": "US"})

    for p1 in ["P1", "P2", "P3", "P4"]:
        for p2 in ["P1", "P2", "P3", "P4"]:
            if p1 < p2 and matchmaker.metadata[p1]["preferences"]["region"] == matchmaker.metadata[p2]["preferences"]["region"]:
                matchmaker.add_match_edge(p1, p2)

    smp = StableMarriage(matchmaker)
    candidates = [["P1", "P2", "P3"], ["P1", "P3", "P4"]]  # Mock A* results
    group = smp.stable_marriage(candidates, 1.0)
    print(f"SMP Group: {group}")