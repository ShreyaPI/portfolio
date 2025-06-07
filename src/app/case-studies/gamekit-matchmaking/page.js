"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  'Apple Developer Documentation (2024). "Real-Time Matches: Using Game Kit to Implement Social Games." Retrieved from https://developer.apple.com',
  'Apple Developer Documentation (2024). "GameplayKit: Architect and organize your game logic." Retrieved from https://developer.apple.com',
  'Apple Developer Documentation (2024). "Matchmaking rules: Game Center applies different type of rules you create in a particular order to find the best matches." Retrieved from https://developer.apple.com',
  'US Patent Application US20170259178A1 (2017). "Multiplayer video game matchmaking optimization." Retrieved from https://patents.google.com',
  'Apple Developer (2024). "Meet rule-based matchmaking in Game Center." Tech Talks. Retrieved from https://developer.apple.com'
];

export default function GameKitMatchmakingCaseStudy() {
  return (
    <CaseStudyTemplate
      title="GameKit Multiplayer Matchmaking Architecture"
      description="Exploring Apple's GameKit matchmaking system using graph algorithms and AI-enhanced optimization"
      content={
        <div className="space-y-8">
          <section className="mb-8">
            <div className="md:float-right md:w-1/2 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0580.jpeg" 
                alt="Process of Finding a Game Match for Online Gaming" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Process of Finding a Game Match for Online Gaming</p>
            </div>
            
          </section>
          {/* Introduction */}
          <section>
            <p className="text-gray-700 mb-4">
              GameKit, Apple's development kit for gaming features, enables real-time multiplayer matchmaking for iOS and macOS games, connecting players based on skill level, network latency, and personalized preferences (e.g., game mode, language). The core matchmaking logic in GameKit can be modeled as a weighted directed graph, where nodes represent players, edges represent potential matches, and edge weights reflect compatibility factors.
            </p>
          </section>

          {/* Real-Time Scenario */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Real-Time Matchmaking Scenario</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                When a player initiates a multiplayer match in a strategy game via GameKit on their iPad, the system evaluates available players, forms a group of four with similar skills and low latency, and starts the game quickly, ensuring a fair and responsive experience.
              </p>
              <h3 className="text-xl font-semibold mb-3">Core Algorithms:</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Priority Queue (Heap):</strong> Prioritizes match candidates in UCS and A*, favoring low-cost configurations.
                </li>
                <li>
                  <strong>Hash Table (Dictionary):</strong> Stores player metadata (e.g., skill rating, region, preferences) for O(1) access.
                </li>
                <li>
                  <strong>Uniform Cost Search (UCS):</strong> Explores the graph to find the least-cost group of players, with edge weights reflecting compatibility (O(b^(1+C/ε))).
                </li>
                <li>
                  <strong>A* Search:</strong> Enhances UCS by using a heuristic to reduce explored nodes (O(b^d)).
                </li>
                <li>
                  <strong>Stable Marriage Problem (SMP):</strong> Uses Gale-Shapley algorithm to ensure stable matches (O(n^2)).
                </li>
              </ul>
            </div>
          </section>

          {/* Rule-Based Scoring */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rule-Based Scoring with AI Enhancements</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Edge Weight Calculation</h3>
                <p className="text-gray-700 mb-4">
                  Edge weights are dynamically calculated using a combination of factors:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Game mode preferences (e.g., solo vs. team)</li>
                  <li>Language or region matching</li>
                  <li>Historical outcomes (e.g., win/loss ratios, rematch rates)</li>
                  <li>Player satisfaction scores</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Increases personalization and fairness of matches</li>
                  <li>Reduces player churn through behavioral alignment</li>
                  <li>Enables continuous improvement through learning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Graph Clustering */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Graph Clustering for Scalability</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Optimization Strategy</h3>
                <p className="text-gray-700 mb-4">
                  To handle large player bases efficiently, the matchmaking graph is partitioned into smaller subgraphs based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Geographical region (e.g., based on IP or time zone)</li>
                  <li>Skill tiers (e.g., Bronze, Silver, Gold)</li>
                  <li>Preferred gameplay styles</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Reduces computational complexity</li>
                  <li>Improves latency and matchmaking speed</li>
                  <li>Ensures better scalability for millions of players</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/image/Gamekit.png" 
                alt="The rules/criterias for GameKit matchmaking " 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The rules/criterias for GameKit matchmaking<br/>https://developer.apple.com/documentation/gamekit/matchmaking-rules</p>
            </div>
            
          </section>

          {/* Efficiency Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Efficiency Analysis</h2>
            
            <p className="text-gray-700 mb-4">
              Apple's GameKit matchmaking system models player matching as a weighted directed graph, where players are nodes, edges represent potential matches, and weights reflect compatibility factors. The system leverages various algorithms to optimize match quality and performance.
            </p>

            {/* Core Algorithms */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Time Complexity Analysis</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Uniform Cost Search (UCS):</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(b^(1+C/ε))</div>
                  <p className="mt-1">where b is branching factor, C is optimal cost, ε is cost increment</p>
                </li>
                <li>
                  <strong>A* Search:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(b^d)</div>
                  <p className="mt-1">where d is solution depth, with heuristics reducing explored nodes</p>
                </li>
                <li>
                  <strong>Gale-Shapley Algorithm:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n²)</div>
                  <p className="mt-1">for n players, ensuring stable matches</p>
                </li>
                <li>
                  <strong>Priority Queue Operations:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log n)</div>
                  <p className="mt-1">for insertion/deletion of match candidates</p>
                </li>
                <li>
                  <strong>Hash Table Access:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(1)</div>
                  <p className="mt-1">average-case for player metadata lookups</p>
                </li>
              </ul>
            </div>

            {/* Space and Scalability */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Space and Scalability</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Space Complexity:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n + e)</div>
                  <p className="mt-1">for n player nodes and e edges, plus O(n) for metadata</p>
                </li>
                <li>
                  <strong>Clustered Search:</strong>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log n)</div>
                  <p className="mt-1">within subgraphs after regional/skill-based clustering</p>
                </li>
              </ul>
            </div>

            {/* A* Heuristic Parameters */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">A* Heuristic Parameters</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Skill Difference:</strong> Weighted absolute difference in player ratings
                </li>
                <li>
                  <strong>Network Latency:</strong> Estimated RTT based on geographic proximity
                </li>
                <li>
                  <strong>Preference Similarity:</strong> Weighted score for matching preferences
                </li>
                <li>
                  <strong>Historical Engagement:</strong> Player retention and session metrics
                </li>
                <li>
                  <strong>Group Size Feasibility:</strong> Queue size adjusted matching criteria
                </li>
                <li>
                  <strong>Behavioral Compatibility:</strong> Player behavior and social metrics
                </li>
              </ul>
            </div>

            {/* Trade-offs */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Implementation Trade-offs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>A* Optimization:</strong> Trades perfect optimality for improved speed while maintaining near-optimal results
                </li>
                <li>
                  <strong>Graph Clustering:</strong> Improves scalability but may limit cross-region matching opportunities
                </li>
                <li>
                  <strong>Initial Setup:</strong> 
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n + e)</div>
                  <p className="mt-1">upfront cost amortized over multiple matchmaking queries</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Using graph algorithms (UCS, A*) with AI-enhanced scoring shows how traditional algorithms can be augmented with modern techniques. The O(log n) clustered search time enables scalable matchmaking while maintaining match quality through sophisticated heuristics. This hybrid approach demonstrates the power of combining classical computer science with modern machine learning.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Graph algorithms provide efficient player matching</li>
                <li>AI-enhanced scoring improves match quality</li>
                <li>Clustering enables scalable matchmaking</li>
                <li>The system balances speed with match quality effectively</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/yourusername/gamekit-matchmaking"
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