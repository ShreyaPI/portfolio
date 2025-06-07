import numpy as np
from collections import defaultdict, deque

def gaussian_weight(intensity1, intensity2, sigma=10.0):
    """Compute edge weight based on pixel intensity difference using Gaussian function."""
    diff = abs(intensity1 - intensity2)
    return np.exp(-diff**2 / (2 * sigma**2))

def build_graph(image, fg_seeds, bg_seeds, lambda_=1000):
    """Construct the graph for image segmentation."""
    height, width = image.shape
    num_pixels = height * width
    source, sink = num_pixels, num_pixels + 1  # Source and sink nodes
    graph = defaultdict(dict)
    
    # Add edges between adjacent pixels (4-connectivity)
    for i in range(height):
        for j in range(width):
            pixel = i * width + j
            intensity = image[i, j]
            
            # Connect to right neighbor
            if j + 1 < width:
                right_pixel = i * width + (j + 1)
                weight = gaussian_weight(intensity, image[i, j + 1])
                graph[pixel][right_pixel] = weight
                graph[right_pixel][pixel] = weight
            
            # Connect to bottom neighbor
            if i + 1 < height:
                bottom_pixel = (i + 1) * width + j
                weight = gaussian_weight(intensity, image[i + 1, j])
                graph[pixel][bottom_pixel] = weight
                graph[bottom_pixel][pixel] = weight
    
    # Connect source to foreground seeds and background seeds to sink
    for (i, j) in fg_seeds:
        pixel = i * width + j
        graph[source][pixel] = lambda_  # High capacity to foreground
    for (i, j) in bg_seeds:
        pixel = i * width + j
        graph[pixel][sink] = lambda_   # High capacity to background
    
    return graph, source, sink

def bfs(graph, source, sink, parent):
    """Find an augmenting path using BFS."""
    visited = set()
    queue = deque([source])
    visited.add(source)
    parent[source] = -1
    
    while queue:
        u = queue.popleft()
        for v, capacity in graph[u].items():
            if v not in visited and capacity > 0:
                queue.append(v)
                visited.add(v)
                parent[v] = u
                if v == sink:
                    return True
    return False

def ford_fulkerson(graph, source, sink):
    """Implement Ford-Fulkerson algorithm to find maximum flow and minimum cut."""
    parent = {}
    max_flow = 0
    residual_graph = defaultdict(dict)
    
    # Copy the graph to residual graph
    for u in graph:
        for v, capacity in graph[u].items():
            residual_graph[u][v] = capacity
    
    # Find augmenting paths and update residual graph
    while bfs(residual_graph, source, sink, parent):
        path_flow = float("inf")
        s = sink
        while s != source:
            path_flow = min(path_flow, residual_graph[parent[s]][s])
            s = parent[s]
        
        max_flow += path_flow
        
        # Update residual capacities
        v = sink
        while v != source:
            u = parent[v]
            residual_graph[u][v] -= path_flow
            residual_graph[v][u] = residual_graph.get(v, {}).get(u, 0) + path_flow
            v = parent[v]
    
    # Determine the cut (foreground vs. background)
    visited = set()
    def dfs(u):
        visited.add(u)
        for v, capacity in residual_graph[u].items():
            if v not in visited and capacity > 0:
                dfs(v)
    
    dfs(source)
    return visited, max_flow

def segment_image(image, fg_seeds, bg_seeds):
    """Segment the image using Ford-Fulkerson algorithm."""
    height, width = image.shape
    graph, source, sink = build_graph(image, fg_seeds, bg_seeds)
    foreground_nodes, max_flow = ford_fulkerson(graph, source, sink)
    
    # Create segmentation mask
    mask = np.zeros((height, width), dtype=np.uint8)
    for i in range(height):
        for j in range(width):
            pixel = i * width + j
            if pixel in foreground_nodes:
                mask[i, j] = 1  # Foreground
            # Else background (0)
    
    return mask

# Example usage with a small synthetic image
if __name__ == "__main__":
    # Create a 5x5 grayscale image (0-255 intensities)
    image = np.array([
        [100, 100, 150, 150, 150],
        [100, 100, 150, 150, 150],
        [50,  50,  200, 200, 200],
        [50,  50,  200, 200, 200],
        [50,  50,  200, 200, 200]
    ], dtype=np.float32)
    
    # Define foreground and background seeds (row, col)
    fg_seeds = [(0, 0), (1, 1)]  # Top-left corner (intensity ~100)
    bg_seeds = [(4, 4), (3, 3)]  # Bottom-right corner (intensity ~200)
    
    # Perform segmentation
    mask = segment_image(image, fg_seeds, bg_seeds)
    
    # Print results
    print("Original Image:")
    print(image)
    print("\nSegmentation Mask (1=Foreground, 0=Background):")
    print(mask)