"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  // Apple-Related References
  'Apple Developer Documentation (2025). "Xcode Build System Overview." Retrieved from https://developer.apple.com/documentation/xcode/build-system',
  'Apple WWDC (2018). "Advanced Debugging with Xcode and LLDB." Retrieved from https://developer.apple.com/videos/play/wwdc2018/413/',
  
  // Data Structures and Algorithms References
  'Kahn, A. B. (1962). "Topological Sorting of Large Networks." Communications of the ACM, 5(11), 558-562.',
  'Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2009). "Introduction to Algorithms (3rd ed.), Chapter 22.2." MIT Press.',
  'Knuth, D. E. (1997). "The Art of Computer Programming, Volume 1: Fundamental Algorithms (3rd ed.), Section 2.2.3." Addison-Wesley.',
  'Tarjan, R. E. (1972). "Depth-First Search and Linear Graph Algorithms." SIAM Journal on Computing, 1(2), 146-160.',
  'McCauley, S., Moseley, B., Niaparast, A., & Singh, S. (2023). "Incremental Topological Ordering and Cycle Detection with Predictions." Retrieved from https://github.com',
  
  // Build System and Parallel Processing References
  'Bernstein, D., & Rodeh, M. (1989). "Scheduling Parallel Tasks on Multiprocessors." IEEE Transactions on Computers, 38(7), 933-942.',
  'GeeksforGeeks (2025). "Kahn\'s Algorithm for Topological Sorting." Retrieved from https://www.geeksforgeeks.org/topological-sorting-kahns-algorithm/',
  'Sarkar, V. (1989). "Partitioning and Scheduling Parallel Programs for Multiprocessors." MIT Press.'
];

export default function XcodeBuildCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Topological Sort for Xcode Dependency Resolution"
      description="Understanding how Xcode manages complex build dependencies using topological sorting algorithms"
      content={
        <div className="space-y-8">

          {/* Introduction */}
          <section className="mb-8">
            <div className="md:float-right md:w-1/2 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0579.jpeg" 
                alt="XCode's Build System" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">XCode's Build System</p>
            </div>
            
          </section>
          <section>
            <p className="text-gray-700 mb-4">
              Xcode, Apple's IDE, manages complex projects that often include multiple source files, libraries, frameworks, and Swift packages with intricate dependencies. For example, a Swift file may depend on a framework, which in turn depends on another library, or a target may rely on other targets within the same project. To build the project correctly, Xcode must determine the order in which these components are compiled or linked, ensuring that dependencies are resolved before their dependents.
            </p>
            <p className="text-gray-700 mb-4">
              Topological sort is an algorithm well-suited for this purpose, as it orders the nodes of a DAG such that for every directed edge (u, v), node u (the dependency) appears before node v (the dependent) in the ordering.
            </p>
            <p className="text-gray-700">
              Xcode likely uses a variant of Kahn's algorithm or DFS-based topological sort to order build tasks. Below is how Kahn's algorithm could be applied, as it is well-suited for detecting cycles and scheduling tasks efficiently.
            </p>
          </section>

          {/* Algorithm Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kahn's Algorithm for Xcode</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Steps:</h3>
              <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                <li>
                  <strong>Compute In-Degrees:</strong> For each node (e.g., file, target, or package), calculate the number of incoming edges (dependencies). For example, App has two dependencies (FrameworkA and FrameworkB), so its in-degree is 2.
                </li>
                <li>
                  <strong>Initialize Queue:</strong> Add all nodes with an in-degree of 0 (no dependencies) to a queue. These are components that can be built immediately (e.g., FrameworkA and FrameworkB).
                </li>
                <li>
                  <strong>Process Queue:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Dequeue a node and add it to the build order.</li>
                    <li>For each dependent of the dequeued node, decrease its in-degree by 1.</li>
                    <li>If a dependent's in-degree becomes 0, enqueue it.</li>
                  </ul>
                </li>
                <li>
                  <strong>Cycle Detection:</strong> If the number of processed nodes is less than the total number of nodes, a cycle exists, and Xcode reports an error (e.g., "Cycle in dependencies detected").
                </li>
                <li>
                  <strong>Output:</strong> The resulting list is the build order.
                </li>
              </ol>
            </div>
          </section>

          {/* Complexity Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Complexity Analysis</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Computing in-degrees requires iterating through all nodes and their edges, taking O(V + E) time, where V is the number of vertices (components) and E is the number of edges (dependencies). Thus, overall the complexity is O(V + E).
              </p>
              <div className="font-mono text-sm bg-white p-4 rounded border">
                Time Complexity: O(V + E)
                <br />• V = number of vertices (components)
                <br />• E = number of edges (dependencies)
              </div>
            </div>
          </section>

          {/* Optimizations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Build Optimizations</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Build Time Prediction</h3>
                <p className="text-gray-700">
                  The optimizations can include predicting the build time for each dependency. Prioritize nodes with longer build times in the topological order to maximize parallelization.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Parallel Processing</h3>
                <p className="text-gray-700">
                  Use clustering approaches to group independent nodes (e.g., files with no mutual dependencies) for parallel compilation, leveraging multi-core systems.
                </p>
              </div>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The application of graph theory (topological sorting) and parallel processing demonstrates how classical algorithms can solve modern development challenges. The O(V + E) complexity for dependency resolution enables efficient builds even with large codebases. This implementation shows how theoretical concepts can be applied to improve developer productivity.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Topological sorting ensures correct build order</li>
                <li>Parallel processing maximizes available hardware resources</li>
                <li>Incremental builds optimize common development workflows</li>
                <li>The system scales effectively with project complexity</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/ShreyaPI/portfolio/tree/main/public/codes/xcode-build"
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