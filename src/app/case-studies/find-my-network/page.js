"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  // Apple Find My Network
  'Apple Inc. (2021). "Find My Network: How it Works." Apple Platform Security Guide.',
  'Apple Developer Documentation. (2023). "Find My Network Accessory Protocol Specification." developer.apple.com/accessories/',
  'Schneier, B. (2021). "Understanding Apple\'s Find My Network Privacy Features." Blog post analyzing cryptographic and privacy aspects.',
  
  // Disjoint Set Union (Union-Find)
  'Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). "Introduction to Algorithms, 4th ed., Chapter 21: Data Structures for Disjoint Sets." MIT Press.',
  'Tarjan, R. E. (1975). "Efficiency of a Good but Not Linear Set Union Algorithm." Journal of the ACM, 22(2), 215-225.',
  'Galler, B. A., & Fischer, M. J. (1964). "An Improved Equivalence Algorithm." Communications of the ACM, 7(5), 301-303.',
  
  // Bloom Filters
  'Bloom, B. H. (1970). "Space/Time Trade-offs in Hash Coding with Allowable Errors." Communications of the ACM, 13(7), 422-426.',
  'Mitzenmacher, M., & Upfal, E. (2017). "Probability and Computing: Randomized Algorithms and Probabilistic Analysis, 2nd ed., Chapter 5." Cambridge University Press.',
  'Broder, A., & Mitzenmacher, M. (2004). "Network Applications of Bloom Filters: A Survey." Internet Mathematics, 1(4), 485-509.',
  
  // Additional Cryptography Reference
  'Hankerson, D., Menezes, A., & Vanstone, S. (2004). "Guide to Elliptic Curve Cryptography." Springer.'
];

export default function FindMyNetworkCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Apple's Find My Network: Privacy-Preserving Device Location"
      description="An analysis of Apple's Find My Network, focusing on its use of Union-Find and Bloom Filters for efficient, privacy-preserving device location"
      content={
        <div className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              Apple's Find My Network is a sophisticated, privacy-preserving system that enables users to locate lost devices and accessories, such as AirTags, by leveraging a global network of billions of Apple devices. This distributed system combines advanced cryptographic techniques with classical algorithms to ensure scalability, efficiency, and user privacy.
            </p>
            <p className="text-gray-700 mb-4">
              At its core, the network relies on three key technologies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Bluetooth Low Energy (BLE) beacons</li>
              <li>End-to-end encryption based on Elliptic Curve Cryptography (ECC)</li>
              <li>Optimized algorithms like Disjoint Set Union (Union-Find) and Bloom Filters</li>
            </ul>
          </section>
          <section className="mb-8">
            <div className="md:float-right md:w-3/5 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0583.jpeg" 
                alt="The working of the FindMy Network" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The working of the FindMy Network</p>
            </div>
            
          </section>
          {/* Core Functionality */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Functionality</h2>
            <p className="text-gray-700 mb-4">
              When a device or accessory is marked as lost, it emits periodic BLE beacons containing an ephemeral public key. Nearby Apple devices, acting as passive observers, detect these beacons and upload encrypted location data to iCloud. The owner can then retrieve and decrypt this data using their private key, ensuring that only they can access the location information.
            </p>
          </section>

          {/* Union-Find Algorithm */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Disjoint Set Union (Union-Find) Algorithm</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Context</h3>
            <p className="text-gray-700 mb-4">
              When a lost device emits a BLE beacon, multiple nearby Apple devices may detect it simultaneously. If each device were to upload its location data independently, the system would face significant redundancy, leading to increased bandwidth usage, battery drain, and server load.
            </p>
            <p className="text-gray-700 mb-4">
              To address this, Apple employs the Disjoint Set Union (DSU) algorithm, also known as Union-Find, to group devices that detect the same beacon into equivalence classes or clusters. Only one representative device from each cluster uploads the location data, significantly reducing redundancy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mathematical Foundation</h3>
            <p className="text-gray-700 mb-4">
              The Union-Find algorithm maintains a forest of trees, where each tree represents a cluster of devices that have detected the same beacon. Each device is a node, and the root of each tree is the representative of the cluster. The algorithm supports two primary operations:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Find(x):</strong> Determines the root (representative) of the tree containing node x. This identifies which cluster a device belongs to.</li>
              <li><strong>Union(x, y):</strong> Merges the clusters containing nodes x and y by attaching the root of one tree to the root of the other.</li>
            </ul>

            
          </section>

          {/* Bloom Filters */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bloom Filters</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Problem Context</h3>
            <p className="text-gray-700 mb-4">
              Even with Union-Find reducing redundancy within clusters, devices must quickly check whether a beacon has already been processed to avoid duplicate uploads across clusters or over time. Storing all processed beacon IDs would require significant memory, which is impractical on resource-constrained devices.
            </p>
            <p className="text-gray-700 mb-4">
              Apple addresses this using Bloom Filters, a probabilistic data structure that tests set membership in constant time with minimal memory usage.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mathematical Foundation</h3>
            <p className="text-gray-700 mb-4">
              A Bloom Filter is an m-bit array, initially set to zeros, paired with k independent hash functions h₁, h₂, ..., hₖ, each mapping a beacon ID to a position in the array [0, 1, ..., m-1]. The operations are:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Insert(x):</strong> For a beacon ID x, compute h₁(x), h₂(x), ..., hₖ(x) and set the corresponding bits in the array to 1.</li>
              <li><strong>Query(x):</strong> Compute h₁(x), h₂(x), ..., hₖ(x) and check if all corresponding bits are 1. If any bit is 0, x is not in the set. If all bits are 1, x is likely in the set, with a small probability of a false positive.</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <p className="text-gray-800">The probability of a false positive is given by:</p>
              <div className="flex justify-center">
                <div className="font-mono text-lg">
                  p ≈ (1 - e^(-kn/m))^k
                </div>
              </div>
              <p className="text-gray-700">where:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>n is the number of items inserted</li>
                <li>m is the size of the bit array</li>
                <li>k is the number of hash functions</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-4">
              <p className="text-gray-800">The optimal number of hash functions is:</p>
              <div className="flex justify-center">
                <div className="font-mono text-lg">
                  k = (m/n)ln(2) ≈ 0.693(m/n)
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              For example, with m = 10n and k = ⌊0.693 · 10⌋ = 7, the false positive rate is approximately 0.008, or 0.8%, which is acceptable for most applications.
            </p>

            
          </section>

          {/* Efficiency Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Efficiency Analysis</h2>
            
            {/* DSU Analysis */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Disjoint Set Union (DSU)</h3>
              <p className="text-gray-700 mb-3">
                DSU groups devices detecting a beacon into clusters, using Find (with path compression) and Union (with union by rank) operations.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Time Complexity:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Initialization: O(N)</li>
                  <li>Find/Union: Amortized O(α(N)), where α(N) is the inverse Ackermann function, effectively constant (α(N) ≤ 5)</li>
                  <li>Per Beacon: Up to 5 operations (4 Union, 1 Find), costing O(α(N)) ≈ O(1)</li>
                  <li>Total for M beacons: O(M · α(N)) ≈ O(M)</li>
                </ul>
                <p className="font-semibold mt-3">Space Complexity:</p>
                <p className="text-gray-700">O(N) for parent and rank arrays</p>
              </div>
            </div>

            {/* Bloom Filter Analysis */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bloom Filter</h3>
              <p className="text-gray-700 mb-3">
                Checks if a beacon was processed, using an m-bit array and k hash functions (m ≈ 9.6M, k ≈ 7 for p = 0.01).
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Time Complexity:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Initialization: O(m) ≈ O(M)</li>
                  <li>Add/Contains: O(k) ≈ O(1)</li>
                  <li>Per Beacon: 1 Add, 1 Contains, costing O(k) ≈ O(1)</li>
                  <li>Total for M beacons: O(M · k) ≈ O(M)</li>
                </ul>
                <p className="font-semibold mt-3">Space Complexity:</p>
                <p className="text-gray-700">O(M) bits (≈ 1.2M bytes for M beacons)</p>
              </div>
            </div>

            {/* Overall Efficiency */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Overall System Efficiency</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Time Complexity:</p>
                  <p className="text-gray-700">O(M) for processing M beacons, as both DSU and Bloom Filter operations are effectively constant per beacon.</p>
                </div>
                <div>
                  <p className="font-semibold">Space Complexity:</p>
                  <p className="text-gray-700">O(N + M), dominated by DSU arrays (O(N)) and Bloom Filter (O(M) bits)</p>
                </div>
                <div>
                  <p className="font-semibold">Practical Efficiency:</p>
                  <p className="text-gray-700">
                    With α(N) ≈ 1 and k ≈ 7, the system scales efficiently. DSU reduces uploads from O(k · M) to O(M), and Bloom Filters minimize memory usage (e.g., 6 bytes for M = 5).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Implementation Details</h2>
            <p className="text-gray-700 mb-4">
              The Find My Network combines these algorithms to achieve efficient, privacy-preserving device location:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-4">
              <li>
                <strong>Beacon Detection:</strong> When a device detects a BLE beacon, it first queries the Bloom Filter to check if this beacon has been recently processed.
              </li>
              <li>
                <strong>Cluster Management:</strong> If the beacon is new, the device uses Union-Find to either join an existing cluster or start a new one.
              </li>
              <li>
                <strong>Data Upload:</strong> Only the representative device (root of the Union-Find tree) uploads the encrypted location data to iCloud.
              </li>
              <li>
                <strong>Memory Management:</strong> The Bloom Filter is periodically reset to prevent saturation, with timing based on the optimal false positive rate calculations.
              </li>
            </ol>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Apple's decentralized approach using Bloom filters and Union-Find demonstrates that privacy and utility can coexist in large-scale networks. The O(1) lookup time and space-efficient probabilistic data structures enable scaling to billions of devices while maintaining user privacy through cryptographic techniques. This implementation shows how careful algorithm selection can solve seemingly contradictory requirements - maintaining privacy while enabling global device location.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Bloom filters enable efficient membership testing without storing actual device identifiers</li>
                <li>Union-Find provides optimal cluster management with near-constant time operations</li>
                <li>The combination supports global scale while preserving local privacy</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/ShreyaPI/portfolio/tree/main/public/codes/find-my-network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </section>

          <ReferencesSection references={references} />
        </div>
      }
    />
  );
} 