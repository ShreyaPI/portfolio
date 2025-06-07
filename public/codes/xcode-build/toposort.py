from collections import defaultdict, deque

# Kahn's Algorithm for Topological Sort
def topological_sort_kahn(graph):
    """
    Perform topological sort using Kahn's algorithm.
    Args:
        graph (dict): Adjacency list where graph[node] = list of dependents.
    Returns:
        list: Topological order of nodes, or None if a cycle is detected.
    """
    # Initialize in-degree for each node
    in_degree = defaultdict(int)
    for node in graph:
        in_degree[node] += 0  # Ensure all nodes are in in_degree
        for dependent in graph[node]:
            in_degree[dependent] += 1
    
    # Initialize queue with nodes having in-degree 0
    queue = deque([node for node in graph if in_degree[node] == 0])
    result = []
    
    # Process nodes
    while queue:
        node = queue.popleft()
        result.append(node)
        
        # Update in-degrees of dependents
        for dependent in graph[node]:
            in_degree[dependent] -= 1
            if in_degree[dependent] == 0:
                queue.append(dependent)
    
    # Check for cycles
    return result if len(result) == len(graph) else None

# DFS-Based Topological Sort
def topological_sort_dfs(graph):
    """
    Perform topological sort using DFS.
    Args:
        graph (dict): Adjacency list where graph[node] = list of dependents.
    Returns:
        list: Topological order of nodes, or None if a cycle is detected.
    """
    visited = set()
    recursion_stack = set()
    result = []
    
    def dfs(node):
        visited.add(node)
        recursion_stack.add(node)
        
        for dependent in graph[node]:
            if dependent not in visited:
                if not dfs(dependent):
                    return False  # Cycle detected
            elif dependent in recursion_stack:
                return False  # Cycle detected
        
        recursion_stack.remove(node)
        result.append(node)
        return True
    
    for node in graph:
        if node not in visited:
            if not dfs(node):
                return None  # Cycle detected
    
    return result[::-1]  # Reverse to get correct order

# Example Usage: Xcode Dependency Graph
def main():
    # Example graph representing Xcode project dependencies
    # Keys are components (files, targets, packages); values are lists of dependents
    xcode_graph = {
        'FrameworkA': ['App'],
        'FrameworkB': ['App'],
        'App': [],
        'File1.swift': ['FrameworkA'],
        'File2.swift': ['FrameworkB']
    }
    
    print("Xcode Dependency Graph:", xcode_graph)
    
    # Run Kahn's algorithm
    kahn_result = topological_sort_kahn(xcode_graph)
    if kahn_result:
        print("Kahn's Algorithm Build Order:", kahn_result)
    else:
        print("Cycle detected in dependencies (Kahn's)")
    
    # Run DFS-based algorithm
    dfs_result = topological_sort_dfs(xcode_graph)
    if dfs_result:
        print("DFS-Based Build Order:", dfs_result)
    else:
        print("Cycle detected in dependencies (DFS)")

if __name__ == "__main__":
    main()