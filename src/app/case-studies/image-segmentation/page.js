"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  'https://julie-jiang.github.io/image-segmentation/',
  'Boykov, Yuri, and Gareth Funka-Lea. Graph cuts and efficient ND image segmentation." International journal of computer vision 70, no. 2 (2006): 109-131.',
  'Boykov, Yuri Y., and M-P. Jolly. "Interactive graph cuts for optimal boundary & region segmentation of objects in ND images." In Computer Vision, 2001. ICCV 2001. Proceedings. Eighth IEEE International Conference on, vol. 1, pp. 105-112. IEEE, 2001.',
  'Boykov, Yuri, and Vladimir Kolmogorov. "An experimental comparison of min-cut/max-flow algorithms for energy minimization in vision." IEEE transactions on pattern analysis and machine intelligence 26, no. 9 (2004): 1124-1137.',
  'Shi, Jianbo, and Jitendra Malik. "Normalized cuts and image segmentation." IEEE Transactions on pattern analysis and machine intelligence 22, no. 8 (2000): 888-905.',
  'Eriksson, Anders P., Olof Barr, and Kalle Astrom. "Image segmentation using minimal graph cuts." (2006).',
  'Felzenszwalb, Pedro F., and Daniel P. Huttenlocher. "Efficient graph-based image segmentation." International journal of computer vision 59, no. 2 (2004): 167-181.',
];

export default function ImageSegmentationCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Image Segmentation Using Ford-Fulkerson for Intelligent Wallpaper Suggestions"
      description="A graph-based approach to image segmentation using the Ford-Fulkerson algorithm, optimized for Apple's ecosystem"
      content={
        <div className="space-y-8">
          {/* Overview */}
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/diagrams/IMG_0571.jpeg" 
                alt="File System Architecture Diagram 1" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Image Segmentation using Graph-cut</p>
            </div>
            
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              The Ford-Fulkerson algorithm can be applied for graph-based image segmentation, tailored for use in interactive image editing tools and intelligent wallpaper generation. The method leverages the max-flow/min-cut theorem to distinguish foreground and background regions in an image. While typically used in network flow problems, Ford-Fulkerson proves to be a powerful tool in image processing, especially when precision and interpretability are critical.
            </p>
            <p className="text-gray-700 mb-4">
              The algorithm operates by modeling an image as a flow network, where:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Each pixel is a graph node.</li>
              <li>Edges connect adjacent pixels (e.g., 4-neighbors), and their capacities are derived from pixel similarity—higher similarity implies higher edge capacity.</li>
              <li>Two additional nodes, source and sink, represent the foreground and background respectively. They are connected to selected pixels based on confidence (user-guided or ML-predicted) in being foreground or background.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Using the Edmonds-Karp variant (a BFS-based implementation of Ford-Fulkerson), the algorithm computes the maximum flow from source to sink. The corresponding minimum cut defines the segmentation boundary, effectively separating the foreground and background by minimizing the capacity of cut edges. Pixels on the source side are labeled as foreground and those on the sink side as background.
            </p>
          </section>

          {/* Efficiency Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Efficiency Analysis</h2>
            <p className="text-gray-700 mb-4">
              The Edmonds-Karp algorithm, which we use for finding the maximum flow, has a time complexity of O(VE²), where V is the number of vertices (pixels) and E is the number of edges in the graph. Here's the detailed breakdown:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>Finding an augmenting path using BFS takes O(E) time</li>
                <li>The length of such a path is O(V)</li>
                <li>Since at least one edge becomes fully saturated in each iteration, the same path can be found as an augmenting path at most O(V) times</li>
                <li>Therefore, the total number of augmenting paths is bounded by O(VE)</li>
                <li>The body of the while loop runs in O(E) time</li>
              </ul>
              
              <div className="mt-4">
                <p className="text-gray-800 font-semibold">Total Time Complexity:</p>
                <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">
                  O(VE) paths × O(E) per path = O(VE²)
                </div>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              For image segmentation, where V is the number of pixels and each pixel is connected to its neighbors, this translates to a significant computational cost for high-resolution images. This is one reason why the algorithm is more suitable for interactive editing tools where some latency is acceptable, rather than real-time video processing.
            </p>
          </section>

          {/* Application to Apple Ecosystem */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application to Apple Ecosystem</h2>
            <p className="text-gray-700 mb-4">
              This approach has strong relevance for enhancing photo and video features across Apple products such as the iPhone, iPad, Mac, and Vision Pro:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Enhanced Cutouts in the Photos App:</strong> The algorithm improves object separation tools like "Remove Background" or "Markup" by refining the boundary around selected objects (e.g., pets, people) with minimal user input.</li>
              <li><strong>Wallpaper Creation:</strong> Users can generate high-quality wallpapers by tapping on a subject. The algorithm segments it cleanly, blurs the background, and offers ranked suggestions based on boundary quality.</li>
            </ul>
          </section>

          {/* Technical Advantages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Advantages over ML-Based Methods</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pros:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Interpretability:</strong> Unlike deep learning models, the algorithm's decision-making process is transparent and grounded in graph theory.</li>
                  <li><strong>Efficiency on Lower-End Devices:</strong> Requires no GPU or neural engine, making it suitable for older hardware or low-power environments.</li>
                  <li><strong>Precision with User Input:</strong> With minimal user guidance, it yields high-quality segmentations, particularly in tasks where clarity and control matter (e.g., medical imaging, photo editing).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cons:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Limited Generalization:</strong> The algorithm depends on pixel-level features, lacking the semantic understanding embedded in modern neural networks.</li>
                  <li><strong>User Input Requirement:</strong> Often needs foreground/background seed pixels, which may reduce ease of use compared to one-tap ML tools.</li>
                  <li><strong>Scalability:</strong> Graph size increases significantly with image resolution, making real-time or 4K video segmentation more challenging.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/diagrams/IMG_0572.jpeg" 
                alt="Image Segmentation pipeline" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Image Segmentation Pipeline</p>
            </div>
            
          </section>
          {/* System Pipeline */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">System Pipeline</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-4">
              <li>
                <strong>Image Preprocessing:</strong> The image is converted to grayscale or feature channels. Apple's Core Image framework can be used for optimized computation on iOS/macOS devices.
              </li>
              <section className="mb-8">
            <div className="md:float-right md:w-1/4 md:ml-6 mb-4">
              <img 
                src="/image/wallpaper.png" 
                alt="Segmentated wallpaper Suggestions" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Segmentated wallpaper Suggestions<br/>src:support.apple.com</p>
            </div>
            
          </section>
              <li>
                <strong>Graph Construction:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Each pixel becomes a node.</li>
                  <li>Edges between neighboring pixels have capacities calculated by:
                    <div className="bg-gray-50 p-4 my-2 rounded-lg font-mono text-sm">
                      w<sub>ij</sub> = 100 * exp(-((I<sub>i</sub> - I<sub>j</sub>)²)/(2σ²))
                    </div>
                    where I<sub>i</sub> and I<sub>j</sub> are pixel intensities and σ controls sensitivity.
                  </li>
                  <li>Source and sink connect to likely foreground and background pixels, with high capacity links (λ = 1000) based on user selection or ML-inferred seeds.</li>
                </ul>
              </li>
              <li>
                <strong>Segmentation Using Edmonds-Karp:</strong> The algorithm computes maximum flow and derives the segmentation boundary from the minimum cut.
              </li>
              <li>
                <strong>Boundary Evaluation:</strong> The total capacity of edges in the cut is used to assess segmentation quality. Lower capacity implies higher contrast and a cleaner boundary.
              </li>
              <li>
                <strong>Wallpaper Generation:</strong> Multiple segmentations are generated by varying seed points. The results are ranked by boundary cleanliness (i.e., lowest cut capacity) to present the user with optimal wallpaper options.
              </li>
            </ol>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The use of the Edmonds-Karp algorithm (O(VE²)) for image segmentation demonstrates how network flow algorithms can be applied to computer vision problems. The trade-off between accuracy and performance is managed through careful implementation and hardware optimization, showing how theoretical algorithms can be adapted for practical image processing tasks.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Network flow algorithms provide robust image segmentation</li>
                <li>Hardware optimization enables practical performance</li>
                <li>The implementation balances accuracy with speed</li>
                <li>The approach scales effectively with image complexity</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/yourusername/image-segmentation"
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