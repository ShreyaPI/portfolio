def levenshtein_distance(s1, s2):
    """Compute Levenshtein distance between two strings."""
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize first row and column
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    # Fill dp table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(dp[i-1][j] + 1,  # deletion
                              dp[i][j-1] + 1,  # insertion
                              dp[i-1][j-1] + 1)  # substitution
    return dp[m][n]

class FuzzyMatcher:
    def __init__(self):
        self.items = []  # List of (string, metadata)

    def add_item(self, item, metadata=None):
        """Add a string with metadata."""
        self.items.append((item.lower(), metadata or {}))

    def search(self, query, max_distance=2):
        """Find items with Levenshtein distance <= max_distance."""
        query = query.lower()
        results = []
        for item, metadata in self.items:
            distance = levenshtein_distance(query, item)
            if distance <= max_distance:
                results.append((item, distance, metadata))
        # Sort by distance
        return sorted(results, key=lambda x: x[1])

# Example usage
if __name__ == "__main__":
    matcher = FuzzyMatcher()
    # Sample data: app/file names with metadata
    matcher.add_item("Safari", {"type": "app", "path": "/Applications/Safari.app"})
    matcher.add_item("Sample.pdf", {"type": "pdf", "path": "/Documents/Sample.pdf"})
    matcher.add_item("Sales", {"type": "folder", "path": "/Documents/Sales"})
    
    # Search with misspelling
    results = matcher.search("Safar")
    for item, distance, metadata in results:
        print(f"Found: {item}, Distance: {distance}, Metadata: {metadata}")