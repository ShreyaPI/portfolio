"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  // Data Structures and Algorithms
  'Lowe, D. G. (2004). "Distinctive Image Features from Scale-Invariant Keypoints." International Journal of Computer Vision, 60(2), 91-110.',
  'Bentley, J. L. (1975). "Multidimensional Binary Search Trees Used for Associative Searching." Communications of the ACM, 18(9), 509-517.',
  'Muja, M., & Lowe, D. G. (2009). "Fast Approximate Nearest Neighbors with Automatic Algorithm Configuration." International Conference on Computer Vision Theory and Applications (VISAPP).',
  'Friedman, J. H., Bentley, J. L., & Finkel, R. A. (1977). "An Algorithm for Finding Best Matches in Logarithmic Expected Time." ACM Transactions on Mathematical Software, 3(3), 209-226.',
  'Beis, J., & Lowe, D. G. (1997). "Shape Indexing Using Approximate Nearest-Neighbour Search in High-Dimensional Spaces." IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 1000-1006.',
];

export default function MemoryManagementCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Kd-trees for Optimization of Classification and Recognition Tasks"
      description="Exploring how Apple leverages kd-trees for efficient spatial search in audio and visual recognition systems"
      content={
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 mb-4">
              Apple's ecosystem is rich with real-time audio intelligence—whether it's "Hey Siri" on your iPhone, personalized spatial audio on AirPods, or Shazam-style music recognition. While much attention is given to deep learning models powering these features, classical data structures like kd-trees continue to play a strategic role in enabling low-latency, on-device performance.
            </p>
          </section>
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0575.jpeg" 
                alt="Multi-dimensional Data" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Multi-dimensional data can be efficiently processed using kd-trees as you can eork with a tree in logarithmic time instead od a plane in linear</p>
            </div>
            
          </section>
          {/* Core Concept */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Kd-trees</h2>
            <p className="text-gray-700 mb-4">
              A kd-tree is a binary tree that recursively partitions k-dimensional space. Unlike brute-force search over N points in ℝⁿ, kd-trees organize data into a structure that reduces both search complexity and runtime overhead. Instead of comparing against all data points in an n-dimensional space (O(n)), kd-trees reduce the problem to O(log n) queries in lower dimensions and sublinear in practice for moderate dimensions.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">K-Nearest Neighbors (k-NN) Implementation</h3>
              <p className="text-gray-700 mb-4">
                When performing k-NN search, you need to maintain the best k points found so far. A priority queue (max-heap) allows:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>O(log k) insertion/deletion of elements</li>
                <li>Fast access to the farthest (worst) point in the current top-k—so you know when to prune</li>
              </ul>
            </div>
          </section>

          {/* Audio Applications */}
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0576.jpeg" 
                alt="Audio Recognition pipelinepipeline" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Audio Recognition Pipeline</p>
            </div>
            
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Applications in Audio Recognition</h2>
            <p className="text-gray-700 mb-4">
              In Apple's wake-word detection or speaker recognition, each voice sample is transformed into an embedding vector. Comparing this against stored user profiles involves:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>k-NN search in high-dimensional space</li>
              <li>Kd-trees rapidly filter irrelevant regions</li>
              <li>Efficiently return closest matches (top-k) without scanning all profiles</li>
            </ul>
            <p className="text-gray-700">
              This optimization is crucial for on-device performance, preserving battery and speed—essential for features like "Hey Siri" or voice personalization on AirPods/HomePod.
            </p>
          </section>

          {/* Visual Applications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Applications in Computer Vision</h2>
            <p className="text-gray-700 mb-4">
              This feature most likely can also be extended to images. In computer vision tasks like panorama stitching, kd-trees are used to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Match keypoints (e.g., SIFT, SURF descriptors) between overlapping images</li>
              <li>Reduce feature matching time from brute-force O(n²) to near O(n log n) using Kd-trees</li>
              <li>Power spatial joins in ARKit mapping</li>
            </ul>
            <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0577.jpeg" 
                alt="Image classification pipeline pipeline" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Image Classification Pipeline</p>
            </div>
            
          </section>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">
                Note: SIFT and SURF are techniques used in traditional computer vision to describe keypoints. They work based on image gradients. The ARKit is an API for iOS, iPadOS and VisionOS which lets third-party developers build augmented reality apps, taking advantage of a device's camera, CPU, GPU, and motion sensors.
              </p>
            </div>
          </section>

          {/* SIFT Feature Matching Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SIFT Feature Matching with k-d Trees</h2>
            
            <p className="text-gray-700 mb-4">
              Scale-Invariant Feature Transform (SIFT) is a powerful feature detection algorithm in image processing that identifies and describes robust keypoints that remain invariant to scale, rotation, and illumination changes. The algorithm's effectiveness is significantly enhanced by using k-d trees for efficient feature matching.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">SIFT Algorithm Stages</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Scale-Space Extrema Detection:</strong> Identifies potential keypoints across multiple scales using a Difference of Gaussian (DoG) pyramid
                  </li>
                  <li>
                    <strong>Keypoint Localization:</strong> Refines the candidate points by eliminating low-contrast points and edge responses
                  </li>
                  <li>
                    <strong>Orientation Assignment:</strong> Establishes consistent orientation for each keypoint based on local image gradient directions
                  </li>
                  <li>
                    <strong>Keypoint Descriptor:</strong> Generates distinctive 128-dimensional feature vectors that describe local image patches
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Best-Bin-First (BBF) Search</h3>
                <p className="text-gray-700 mb-4">
                  The matching of SIFT descriptors is optimized using a Best-Bin-First (BBF) search strategy implemented with k-d trees. This approach:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Organizes 128-dimensional SIFT descriptors in a hierarchical binary tree structure</li>
                  <li>Prioritizes searching in bins most likely to contain the closest matches</li>
                  <li>Balances search speed with matching accuracy</li>
                  <li>Enables efficient nearest-neighbor searches in high-dimensional space</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Benefits</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Reduces matching complexity from O(n) to O(log n) in average case</li>
                  <li>Enables real-time feature matching in computer vision applications</li>
                  <li>Maintains high accuracy while significantly improving search speed</li>
                  <li>Scales efficiently with large feature sets common in image processing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Efficiency Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Efficiency Metrics</h2>
            
            <div className="space-y-8">
              {/* Time Complexity */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Time Complexity</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Brute-force matching:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n²)</div>
                    <p className="mt-1">for n keypoints</p>
                  </li>
                  <li>
                    <strong>K-d tree with BBF:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log n)</div>
                    <p className="mt-1">average-case for nearest-neighbor searches</p>
                  </li>
                  <li>
                    <strong>Overall matching:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n log n)</div>
                    <p className="mt-1">with BBF optimization</p>
                  </li>
                </ul>
              </div>

              {/* Space and Performance */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Space and Performance</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Space Complexity:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n)</div>
                    <p className="mt-1">for storing the k-d tree, with minimal overhead for hierarchical partitioning</p>
                  </li>
                  <li>
                    <strong>Search Performance:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log n)</div>
                    <p className="mt-1">sublinear query times in practice for moderate dimensions</p>
                  </li>
                  <li>
                    <strong>Construction Cost:</strong>
                    <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n log n)</div>
                    <p className="mt-1">one-time cost, amortized over multiple queries</p>
                  </li>
                </ul>
              </div>

              {/* Trade-offs */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 text-gray-800 mb-3">Implementation Trade-offs</h3>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Scalability:</strong>
                    <p className="mt-1">Efficiently handles large feature sets, critical for real-time applications like ARKit or panorama stitching</p>
                  </li>
                  <li>
                    <strong>On-Device Performance:</strong>
                    <p className="mt-1">Low-latency searches minimize CPU/GPU usage, preserving battery life on devices like iPhones or AirPods</p>
                  </li>
                  <li>
                    <strong>Accuracy vs. Speed:</strong>
                    <p className="mt-1">BBF may sacrifice some accuracy for speed but maintains high precision for SIFT matching</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The implementation in SIFT feature matching showcases how spatial data structures can dramatically improve performance in computer vision applications. The O(log n) average search time enables real-time feature matching, critical for AR and computational photography. This demonstrates the practical impact of efficient data structures on modern applications.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>k-d trees enable efficient spatial searches in high dimensions</li>
                <li>BBF search balances accuracy with performance</li>
                <li>The structure supports real-time computer vision applications</li>
                <li>Implementation shows careful consideration of practical trade-offs</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/ShreyaPI/portfolio/tree/main/public/codes/kd-trees"
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