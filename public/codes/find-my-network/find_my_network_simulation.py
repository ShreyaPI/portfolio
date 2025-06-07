import random
import math
import time

# Disjoint Set Union (Union-Find) class
class DisjointSet:
    def __init__(self, size):
        # Initialize parent array where each device points to itself
        self.parent = list(range(size))
        # Initialize rank array for union by rank
        self.rank = [0] * size
    
    def find(self, x):
        # Find the root of the set containing x with path compression
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        # Unite the sets containing x and y using union by rank
        px, py = self.find(x), self.find(y)
        if px == py:
            return
        # Attach smaller rank tree under root of higher rank tree
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1

# Bloom Filter class
class BloomFilter:
    def __init__(self, expected_items, false_positive_rate):
        # Calculate optimal size (m) and number of hash functions (k)
        self.size = int(- (expected_items * math.log(false_positive_rate)) / (math.log(2) ** 2))
        self.num_hashes = int((self.size / expected_items) * math.log(2))
        self.bit_array = [False] * self.size
    
    def _hashes(self, item):
        # Generate k hash values for an item
        # Using simple hash functions based on string conversion and seed variation
        results = []
        item_str = str(item)
        for i in range(self.num_hashes):
            # Combine item with seed to simulate different hash functions
            seed = i + int(time.time() * 1000)
            hash_val = abs(hash(item_str + str(seed))) % self.size
            results.append(hash_val)
        return results
    
    def add(self, item):
        # Add an item to the Bloom filter
        for hash_val in self._hashes(item):
            self.bit_array[hash_val] = True
    
    def contains(self, item):
        # Check if an item is likely in the Bloom filter
        return all(self.bit_array[hash_val] for hash_val in self._hashes(item))

# Simulation of Find My Network
def simulate_find_my_network(num_devices, num_beacons, false_positive_rate=0.01):
    # Initialize data structures
    ds = DisjointSet(num_devices)
    bloom = BloomFilter(num_beacons, false_positive_rate)
    uploads = []
    
    # Simulate each beacon
    for beacon_id in range(num_beacons):
        # Skip if beacon is already processed (Bloom Filter check)
        if bloom.contains(beacon_id):
            print(f"Beacon {beacon_id} already processed (Bloom Filter). Skipping.")
            continue
        
        # Add beacon to Bloom Filter
        bloom.add(beacon_id)
        
        # Randomly select devices that detect this beacon (1 to 5 devices)
        detecting_devices = random.sample(range(num_devices), random.randint(1, min(5, num_devices)))
        if not detecting_devices:
            continue
        
        print(f"Beacon {beacon_id} detected by devices: {detecting_devices}")
        
        # Use DSU to cluster devices detecting the same beacon
        for i in range(1, len(detecting_devices)):
            ds.union(detecting_devices[0], detecting_devices[i])
        
        # The root device of the cluster uploads the location
        root_device = ds.find(detecting_devices[0])
        uploads.append((beacon_id, root_device))
        print(f"Device {root_device} uploads location for beacon {beacon_id}")
    
    return uploads

# Main function to run the simulation
def main():
    # Simulation parameters
    NUM_DEVICES = 10  # Number of devices in the network
    NUM_BEACONS = 5   # Number of beacons emitted by lost device
    FALSE_POSITIVE_RATE = 0.01  # Desired false positive rate for Bloom Filter
    
    print("Starting Find My Network Simulation")
    print(f"Devices: {NUM_DEVICES}, Beacons: {NUM_BEACONS}, Bloom Filter FPR: {FALSE_POSITIVE_RATE}")
    
    # Run simulation
    uploads = simulate_find_my_network(NUM_DEVICES, NUM_BEACONS, FALSE_POSITIVE_RATE)
    
    # Print results
    print("\nUpload Summary:")
    for beacon_id, device_id in uploads:
        print(f"Beacon {beacon_id} uploaded by Device {device_id}")
    print(f"Total uploads: {len(uploads)}")

# Run the simulation
if __name__ == "__main__":
    main()