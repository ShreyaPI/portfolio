import math
from collections import defaultdict
import heapq

# Mo's Algorithm implementation for iOS app usage personalization
def mos_algorithm(events, queries):
    # Number of events and block size for square root decomposition
    N = len(events)
    block_size = math.isqrt(N)
    
    # Add and remove functions for maintaining frequency counts
    freq = defaultdict(int)  # Tracks app frequency in current range
    max_app = None  # Tracks app with max frequency
    max_freq = 0    # Tracks max frequency
    
    def add(index):
        nonlocal max_app, max_freq
        app = events[index]
        freq[app] += 1
        # Update max_app if this app's frequency is higher
        if freq[app] > max_freq:
            max_freq = freq[app]
            max_app = app
        elif freq[app] == max_freq and (max_app is None or app < max_app):
            # Break ties by choosing lexicographically smaller app_id
            max_app = app
    
    def remove(index):
        nonlocal max_app, max_freq
        app = events[index]
        freq[app] -= 1
        # If the removed app was the max, recompute max_app
        if freq[app] < max_freq:
            # Find new max using a heap for efficiency
            if freq[app] == 0:
                del freq[app]
            max_freq_new = 0
            max_app_new = None
            for app, count in freq.items():
                if count > max_freq_new:
                    max_freq_new = count
                    max_app_new = app
                elif count == max_freq_new and (max_app_new is None or app < max_app_new):
                    max_app_new = app
            max_freq = max_freq_new
            max_app = max_app_new
    
    # Sort queries by block number and right endpoint
    sorted_queries = sorted(enumerate(queries), key=lambda x: (
        x[1][0] // block_size,  # Block of left endpoint
        x[1][1] if (x[1][0] // block_size) % 2 == 0 else -x[1][1]  # Right endpoint (ascending for even blocks, descending for odd)
    ))
    
    # Process queries using Mo's Algorithm
    answers = [None] * len(queries)  # Store results in original query order
    cur_l, cur_r = 0, -1  # Current range [cur_l, cur_r]
    
    for query_idx, (l, r) in sorted_queries:
        # Adjust left pointer
        while cur_l < l:
            remove(cur_l)
            cur_l += 1
        while cur_l > l:
            cur_l -= 1
            add(cur_l)
        # Adjust right pointer
        while cur_r < r:
            cur_r += 1
            add(cur_r)
        while cur_r > r:
            remove(cur_r)
            cur_r -= 1
        # Store result for this query
        answers[query_idx] = max_app if max_app is not None else "None"
    
    return answers

# Example usage for iOS personalization
def main():
    # Sample events: list of app_ids representing usage events
    events = [
        "Safari", "Messages", "Safari", "Notes", "Messages",
        "Photos", "Safari", "Messages", "Notes", "Safari"
    ]
    # Sample queries: list of [L, R] ranges (0-based indexing)
    queries = [
        [0, 4],  # Top app in first 5 events
        [2, 7],  # Top app from event 3 to 8
        [5, 9]   # Top app from event 6 to 10
    ]
    
    # Process queries using Mo's Algorithm
    results = mos_algorithm(events, queries)
    
    # Output results
    print("Query Results (Top App per Range):")
    for i, (l, r) in enumerate(queries):
        print(f"Range [{l}, {r}]: {results[i]}")

if __name__ == "__main__":
    main()