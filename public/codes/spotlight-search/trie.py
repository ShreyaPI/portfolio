class TrieNode:
    def __init__(self):
        self.children = {}  # Dictionary for child nodes (character -> TrieNode)
        self.is_end = False  # Marks end of a word
        self.metadata = None  # Stores metadata (e.g., file path, type)

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word, metadata=None):
        """Insert a word into the trie with optional metadata."""
        node = self.root
        for char in word.lower():
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
        node.metadata = metadata or {}

    def search_prefix(self, prefix):
        """Find all words with the given prefix and return their metadata."""
        node = self.root
        for char in prefix.lower():
            if char not in node.children:
                return []
            node = node.children[char]
        return self._collect_words(node, prefix)

    def _collect_words(self, node, prefix):
        """Helper to collect all words under a node."""
        results = []
        if node.is_end:
            results.append((prefix, node.metadata))
        for char, child in node.children.items():
            results.extend(self._collect_words(child, prefix + char))
        return results

# Example usage
if __name__ == "__main__":
    trie = Trie()
    # Sample data: app/file names with metadata
    trie.insert("Safari", {"type": "app", "path": "/Applications/Safari.app"})
    trie.insert("Sample.pdf", {"type": "pdf", "path": "/Documents/Sample.pdf"})
    trie.insert("Sales", {"type": "folder", "path": "/Documents/Sales"})
    
    # Search for prefix "Sa"
    results = trie.search_prefix("Sa")
    for word, metadata in results:
        print(f"Found: {word}, Metadata: {metadata}")