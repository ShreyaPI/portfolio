"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  // Apple Spotlight System
  'Apple Inc. (2025). "macOS User Guide: Use Spotlight to search." Retrieved from https://support.apple.com/guide/mac-help/search-with-spotlight-mh26783/mac',
  'Apple Inc. (2025). "iOS User Guide: Use Spotlight to search." Retrieved from https://support.apple.com/guide/iphone/search-with-spotlight-iphb6d2a3c6d/ios',
  'Apple Developer. (2025). "Metadata Importer Reference." Retrieved from https://developer.apple.com/documentation/corespotlight',
  
  // Inverted Index
  'Manning, C. D., Raghavan, P., & Schütze, H. (2008). "Introduction to Information Retrieval." Cambridge University Press.',
  'Zobel, J., & Moffat, A. (2006). "Inverted files for text search engines." ACM Computing Surveys, 38(2), 6.',
  
  // Trie
  'Knuth, D. E. (1998). "The Art of Computer Programming, Volume 3: Sorting and Searching (2nd ed.)." Addison-Wesley.',
  'Fredkin, E. (1960). "Trie memory." Communications of the ACM, 3(9), 490-499.',
  
  // TF-IDF
  'Salton, G., & Buckley, C. (1988). "Term-weighting approaches in automatic text retrieval." Information Processing & Management, 24(5), 513-523.',
  'Jones, K. S. (1972). "A statistical interpretation of term specificity and its application in retrieval." Journal of Documentation, 28(1), 11-21.',
  
  // Fuzzy Matching
  'Levenshtein, V. I. (1966). "Binary codes capable of correcting deletions, insertions, and reversals." Soviet Physics Doklady, 10(8), 707-710.',
  'Navarro, G. (2001). "A guided tour to approximate string matching." ACM Computing Surveys, 33(1), 31-88.'
];

export default function SpotlightSearchCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Apple Spotlight: Intelligent System-Wide Search Architecture"
      description="A deep dive into the algorithms, data structures, and machine learning techniques powering Apple's Spotlight search"
      content={
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 mb-4">
              Apple Spotlight is a system-wide search feature built into macOS, iOS, and iPadOS, designed to help users quickly find files, apps, settings, and information across their Apple devices. It acts as a powerful, centralized search tool that indexes content on your device and, optionally, integrates with web and app data for broader results.
            </p>
            <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0573.jpeg" 
                alt="Spotlight Search Sytem Workflow" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Spotlight Search Sytem Workflow</p>
            </div>
            
          </section>
            <p className="text-gray-700">
              Apple Spotlight, as a system-wide search feature, relies on a combination of algorithms and data structures to deliver fast, relevant results across files, apps, settings, and other content on macOS and iOS/iPadOS. While Apple doesn't publicly disclose the exact implementation details, we can infer the likely algorithms and data structures based on standard search system practices, Spotlight's behavior, and general indexing/search principles.
            </p>
          </section>

          {/* Core Data Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Core Data Structure: Inverted Index</h2>
            <p className="text-gray-700 mb-4">
              Spotlight's core data structure is likely an inverted index, a widely adopted structure in search engines to map keywords (terms) to documents, files, or metadata. An inverted index consists of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>A dictionary of terms (words, phrases, or metadata attributes like file types).</li>
              <li>For each term, a posting list containing identifiers of documents/files where the term appears, often with additional metadata (e.g., term frequency, position, or file attributes).</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Complexity Analysis:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Construction:</strong> 
                  <p>Time complexity for building the index:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(N * T)</div>
                  where N is the number of documents and T is average terms per document
                </li>
                <li><strong>Query Lookup:</strong> 
                  <p>Time to retrieve matching documents:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(1 + P)</div>
                  where P is the size of posting list for the query term
                </li>
                <li><strong>Space Complexity:</strong> 
                  <p>Total memory required:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(T + P)</div>
                  where T is total unique terms and P is total size of posting lists
                </li>
                <li><strong>Index Update:</strong> 
                  <p>Time to modify the index:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log T + log P)</div>
                  for adding/removing a single term occurrence
                </li>
              </ul>
            </div>
          </section>

          {/* Trie Data Structure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Trie: Efficient Prefix-Based Search</h2>
            <p className="text-gray-700 mb-4">
              A Trie (prefix tree) is a specialized tree structure used in Spotlight for fast autocompletion of app and file names. When users type partial queries like "Saf", the Trie enables instant suggestions like "Safari".
            </p>
            

            <p className="text-gray-700 mb-4">
              Each node in the Trie represents a character, and paths from root to leaf form complete words. This structure enables:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Instant prefix-based suggestions</li>
              <li>Memory-efficient storage of strings with common prefixes</li>
              <li>Deterministic lookup times independent of dataset size</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Complexity Analysis:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Construction:</strong> 
                  <p>Time to build the trie:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(L * S)</div>
                  where L is total string length and S is number of strings
                </li>
                <li><strong>Query Lookup:</strong> 
                  <p>Time for prefix search:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(M)</div>
                  where M is query length
                </li>
                <li><strong>Space:</strong> 
                  <p>Memory usage:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(L * A)</div>
                  where A is alphabet size
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                The Trie's efficiency makes it ideal for real-time autocompletion, as query time depends only on the length of the search string, not the size of the dataset.
              </p>
            </div>
          </section>

          {/* TF-IDF Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">TF-IDF: Relevance Ranking</h2>
            <p className="text-gray-700 mb-4">
              TF-IDF is a relevance-ranking algorithm that scores documents based on the importance of query terms. It balances two factors:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li><strong>Term Frequency (TF):</strong> How often a term appears in a document (indicating local relevance).</li>
              <li><strong>Inverse Document Frequency (IDF):</strong> How rare a term is across all documents (rare terms are more informative).</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Mathematical Formulation:</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>TF(t, d):</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">count(t, d) / len(d)</div>
                </li>
                <li>
                  <strong>IDF(t, D):</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">log(N / df(t))</div>
                </li>
                <li>
                  <strong>Final Score:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">TF(t, d) * IDF(t, D)</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Efficiency Analysis:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Preprocessing:</strong> 
                  <p>Initial document processing time:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(N * D)</div>
                  where N is number of documents and D is average document length
                </li>
                <li><strong>Score Computation:</strong> 
                  <p>Time to calculate relevance scores:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(Q * R)</div>
                  where Q is query terms and R is matching documents
                </li>
                <li><strong>Space:</strong> 
                  <p>Storage requirements:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(N * T)</div>
                  where T is average unique terms per document
                </li>
              </ul>
            </div>
          </section>

          {/* Fuzzy Matching */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fuzzy Matching</h2>
            <p className="text-gray-700 mb-4">
              Fuzzy matching allows Spotlight to handle misspellings or partial matches by finding strings similar to the query. It's crucial for queries like "Safar" matching "Safari."
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Levenshtein Distance Algorithm:</h3>
              <p className="text-gray-700 mb-2">
                Measures the minimum number of single-character edits (insertions, deletions, substitutions) to transform one string into another.
              </p>
              <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">
                dp[i][j] = min(
                  dp[i-1][j] + 1,           // deletion
                  dp[i][j-1] + 1,           // insertion
                  dp[i-1][j-1] + (s1[i] != s2[j])  // substitution
                )
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Efficiency Analysis:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Time Complexity:</strong> 
                  <p>Processing time for string comparison:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(M * N)</div>
                  where M and N are lengths of the two strings being compared
                </li>
                <li><strong>Space Complexity:</strong> 
                  <p>Memory required for computation:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(M * N)</div>
                  for the dynamic programming matrix
                </li>
                <li><strong>Optimized Space:</strong> 
                  <p>Memory with optimization:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(min(M, N))</div>
                  using the two-row optimization technique
                </li>
              </ul>
            </div>
          </section>


          {/* Personalization */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Personalized Search with Reinforcement Learning</h2>
            <p className="text-gray-700 mb-4">
              A proposed enhancement using reinforcement learning (RL) to adapt result ranking based on user behavior.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Implementation:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Lightweight RL model (contextual bandits) on-device</li>
                  <li>Reward function based on user actions</li>
                  <li>Incremental model updates preserving privacy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Personalized results based on user behavior</li>
                  <li>Adaptation to changing user habits</li>
                  <li>Privacy-preserving on-device processing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The integration of multiple data structures (inverted index, trie, TF-IDF) demonstrates how combining different algorithmic approaches can create a fast, relevant search experience. The O(log n) average search time and efficient prefix matching make system-wide search practical on resource-constrained devices, while maintaining high relevance through sophisticated ranking algorithms.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Inverted index enables efficient full-text search capabilities</li>
                <li>Trie structure provides fast prefix-based autocompletion</li>
                <li>TF-IDF ensures relevant results through statistical analysis</li>
                <li>The combination creates a responsive and accurate search system</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/ShreyaPI/portfolio/tree/main/public/codes/spotlight-search"
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