"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  // Competitive Programming Resources
  'Halim, S., & Halim, F. (2021). "Competitive Programming 4: The Lower Bound of Programming Contests in the 2020s." Self-published.',
  'Apple Developer. (2024). "Apple Developer Documentation." Retrieved from https://developer.apple.com/documentation',
  
  // iOS and Mobile Computing
  'Apple Inc. (2024). "iOS User Experience Guidelines." Apple Developer Documentation.',
];

export default function AIIntegrationCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Applying Mo's Algorithm to iOS Personalizations"
      description="Exploring efficient range query processing for user experience personalization in iOS"
      content={
        
        <div className="space-y-8">
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0578.jpeg" 
                alt="Implementation of MO's Algorithm for static query processing and offline analysis for personalization" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Image Segmentation Pipeline</p>
            </div>
            
          </section>
          {/* Introduction */}
          <section>
            <p className="text-gray-700 mb-4">
              iOS personalizations involve tailoring user experiences, such as app recommendations, UI layouts, notification settings, or content feeds, based on user data like preferences, behavior, or demographics. These personalizations often involve processing large datasets (e.g., user activity logs) to compute aggregates (e.g., most-used apps, preferred themes) over specific time ranges or contexts.
            </p>
            <p className="text-gray-700 mb-4">
              Mo's Algorithm, combined with square root decomposition, is a technique primarily used in competitive programming to efficiently handle range queries on static arrays. It optimizes query processing by sorting queries in a specific order to minimize the number of updates needed to compute answers, achieving a time complexity of O((N + Q)√N), where N is the array size and Q is the number of queries.
            </p>
          </section>

          {/* Implementation Details */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Modeling User Data as an Array</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Scenario:</h3>
                <p className="text-gray-700">
                  Imagine an iOS app that personalizes the user interface by analyzing user interactions (e.g., app usage frequency, screen time, or theme preferences) over specific time periods.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Data Representation:</h3>
                <p className="text-gray-700 mb-4">
                  Represent user interactions as an array where each element corresponds to an event (e.g., app opened, theme selected, notification clicked) with attributes like timestamp, type, or value. For example, arr[i] = {`{app_id, timestamp, duration}`} for app usage events.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Queries:</h3>
                <p className="text-gray-700 mb-2">
                  Personalization tasks can be modeled as range queries, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>"What are the top 5 apps used between time T1 and T2?"</li>
                  <li>"How many times did the user switch to dark mode in the last week?"</li>
                  <li>"What is the average screen time for a specific app category from day X to day Y?"</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Applications in iOS</h2>
            <p className="text-gray-700 mb-4">
              Customize the iOS theme (e.g., light/dark mode) or notification settings based on user behavior over specific periods. The output (top apps per range) can feed into Swift code to update the home screen via WidgetKit or UIKit for dynamic layouts.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Algorithm Benefits:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Efficient query processing for range-based personalization tasks</li>
                <li>Privacy-friendly implementation (data stays on device)</li>
                <li>Manageable memory usage</li>
                <li>Straightforward implementation</li>
                <li>Well-suited for offline analysis of user interactions</li>
              </ul>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations and Considerations</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Reliance on static data and offline queries limits real-time personalization capabilities</li>
                <li>Query sorting and resource usage can introduce overhead</li>
                <li>Less versatile for complex, non-range-based personalization tasks</li>
              </ul>
            </div>
          </section>

          {/* Technical Details */}
          <section>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Time Complexity Analysis:</h3>
              <div className="font-mono text-sm bg-white p-4 rounded border">
                O((N + Q)√N) where:
                <br />• N = size of the user interaction array
                <br />• Q = number of personalization queries
                <br />• √N = block size in square root decomposition
              </div>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The application of square root decomposition to user data analysis shows how theoretical algorithmic concepts can be adapted for practical personalization systems. The O((N + Q)√N) complexity provides a good balance between query efficiency and implementation simplicity, demonstrating how algorithmic theory can enhance user experience.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Square root decomposition enables efficient range queries</li>
                <li>The algorithm balances complexity with practical performance</li>
                <li>Implementation supports real-time personalization features</li>
                <li>The approach scales well with increasing data volume</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/yourusername/ios-personalization"
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