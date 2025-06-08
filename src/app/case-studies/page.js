"use client";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Link from 'next/link';

const caseStudies = [
  {
    title: "Compression and Retrival Techniques in Apple's File System",
    description: "A deep dive into LZFSE compression, APFS structures, and AI-driven compression decisions in Apple's ecosystem.",
    link: "/case-studies/file-system"
  },
  
  {
    title: "Image Segmentation Using Ford-Fulkerson",
    description: "Graph-based image segmentation for intelligent wallpaper suggestions and photo editing features in Apple's ecosystem.",
    link: "/case-studies/image-segmentation"
  },
  {
    title: "Apple Spotlight: Intelligent System-Wide Search",
    description: "Exploring the algorithms, data structures, and ML techniques behind Apple's powerful search feature.",
    link: "/case-studies/spotlight-search"
  },
  {
    title: "Find My Network: Privacy-Preserving Device Location",
    description: "Analysis of Apple's Find My Network, exploring Union-Find and Bloom Filters for efficient, privacy-preserving device location.",
    link: "/case-studies/find-my-network"
  },
  {
    title: "Mo's Algorithm in iOS Personalizations",
    description: "Efficient range query processing for user experience personalization using Mo's Algorithm and square root decomposition.",
    link: "/case-studies/mo-personalization"
  },
  {
    title: "Kd-trees in Audio and Visual Recognition",
    description: "How Apple optimizes classification and recognition tasks using kd-trees for efficient spatial search.",
    link: "/case-studies/kd-trees"
  },
  
  /*{
    title: "iCloud Sync",
    description: "Architecture behind iCloud synchronization and data consistency.",
    link: "/case-studies/icloud-sync"
  },
  */
  
  {
    title: "Topological Sort for Xcode Dependency Resolution",
    description: "Understanding how Xcode manages complex build dependencies using topological sorting algorithms for efficient compilation.",
    link: "/case-studies/xcode-build"
  },
  {
    title: "GameKit Multiplayer Matchmaking",
    description: "Exploring graph algorithms and AI-enhanced optimization in Apple's GameKit matchmaking system for real-time multiplayer games.",
    link: "/case-studies/gamekit-matchmaking"
  },
  {
    title: "On-Device AI and Hardware Acceleration",
    description: "Deep dive into Apple's Neural Engine evolution, hardware advancements, and mathematical foundations powering efficient AI capabilities.",
    link: "/case-studies/on-device-ai"
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Banner Section */}
      <div
  className="h-[50vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("/portfolio/image/background.jpg")`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />
  {/* Image attribution */}
  <div className="absolute bottom-2 right-3 z-20">
    <span className="text-xs text-gray-400/50">
      Image: wallpapersafari.com
    </span>
  </div>
  {/* Text content */}
  <h1 className="text-5xl font-bold text-white relative z-10 text-center px-4">
    Apple Software Engineering Case Studies
  </h1>
</div>


      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto animate-fadeIn space-y-6">
          <p className="text-lg text-gray-700">
            This portfolio provides a deep dive into how Apple might be handling some of the most critical behind-the-scenes tasks that power its ecosystem. From managing files and scheduling tasks to personalizing your experience and integrating AI, this collection explores the technology and logic that could be working under the hood of Apple's software and devices.
          </p>
          <p className="text-lg text-gray-700">
            Apple Inc. is a global leader in technology, best known for its iconic hardware like the iPhone, iPad, Mac, Apple Watch, and now, Vision Pro. But just as impressive is its software ecosystem: iOS, macOS, watchOS, and visionOS work seamlessly with services like iCloud, Siri, Apple Photos, Spotlight Search, and Xcode to deliver fluid, intuitive user experiences. Apple's strength lies not just in hardware design but in its tight integration of software and custom silicon (like the M-series and A-series chips), all working together for maximum efficiency and personalization.
          </p>
          <p className="text-lg text-gray-700">
            Now, a quick heads-up: Apple's software is famously proprietary, meaning the real algorithms and systems they use aren't publicly shared. So, everything you'll find here is based on a mix of open-source information, technical papers, patents, and educated guesses. Think of it as a thoughtful reconstruction of what could be happening, rather than an exact blueprint of Apple's inner workings.
          </p>
          <p className="text-lg text-gray-700">
            Beyond just exploring existing systems, this portfolio also suggests new ideas—like how AI might further optimize or personalize user experiences, or how certain algorithms could be improved for better efficiency.
          </p>
          <p className="text-lg text-gray-700">
            The aim of this portfolio is not to present factually accurate description of the company's software but to try and understand how the algorithms work on a deeper level and understand their real-world applications.
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {caseStudies.map((study, index) => (
            <Link
              key={study.title}
              href={study.link}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600">
                  {study.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-purple-800 hover:text-purple-900 font-semibold transition duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
} 