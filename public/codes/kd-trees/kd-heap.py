import heapq

def knn_search(node, target, k, heap=None):
    if node is None:
        return

    if heap is None:
        heap = []

    # Compute distance
    dist = euclidean_distance(target, node.point)

    # Max heap (negative distance)
    if len(heap) < k:
        heapq.heappush(heap, (-dist, node.point))
    else:
        if dist < -heap[0][0]:
            heapq.heappushpop(heap, (-dist, node.point))

    axis = node.axis
    diff = target[axis] - node.point[axis]

    # Choose near and far branches
    near_branch = node.left if diff < 0 else node.right
    far_branch = node.right if diff < 0 else node.left

    # Traverse near branch
    knn_search(near_branch, target, k, heap)

    # Check if we need to explore the far branch
    if len(heap) < k or abs(diff) < -heap[0][0]:
        knn_search(far_branch, target, k, heap)

    return heap
import math

class Node:
    def __init__(self, point, axis, left=None, right=None):
        self.point = point      # A tuple like (x, y)
        self.axis = axis        # Splitting axis (0 for x, 1 for y)
        self.left = left
        self.right = right

def build_kdtree(points, depth=0):
    if not points:
        return None

    k = len(points[0])             # Dimensionality
    axis = depth % k               # Alternate axis (x → y → x ...)

    points.sort(key=lambda x: x[axis])
    median = len(points) // 2

    return Node(
        point=points[median],
        axis=axis,
        left=build_kdtree(points[:median], depth + 1),
        right=build_kdtree(points[median + 1:], depth + 1)
    )

def euclidean_distance(p1, p2):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(p1, p2)))

def nearest_neighbor(node, target, depth=0, best=None):
    if node is None:
        return best

    k = len(target)
    axis = node.axis

    next_branch = None
    opposite_branch = None

    if target[axis] < node.point[axis]:
        next_branch = node.left
        opposite_branch = node.right
    else:
        next_branch = node.right
        opposite_branch = node.left

    best = nearest_neighbor(next_branch, target, depth + 1, best)

    if best is None or euclidean_distance(target, node.point) < euclidean_distance(target, best):
        best = node.point

    if abs(target[axis] - node.point[axis]) < euclidean_distance(target, best):
        best = nearest_neighbor(opposite_branch, target, depth + 1, best)

    return best
