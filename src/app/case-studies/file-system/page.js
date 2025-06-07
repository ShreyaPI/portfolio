"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";

const references = [
  'Apple Inc. (2023). "Apple File System Reference." Apple Developer Documentation.',
  'Code:https://github.com/lzfse/lzfse',
  'Sample:https://developer.apple.com/library/archive/samplecode/CompressionSample/Introduction/Intro.html',
  'Documentation:https://developer.apple.com/documentation/compression/compression_algorithm/compression_lzfse',
];

export default function FileSystemCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Compression and Sorting Techniques in Apple's File System"
      description="A Deep Dive into LZFSE, APFS Structures, and AI-Driven Compression Decisions"
      content={
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 mb-4">
              Apple's ecosystem is known for its sleek user experience, but what makes this experience seamless goes far beyond the visible interface. Behind every file you save, image you share, or video you stream, Apple's systems are hard at work optimizing storage, speed, and efficiency.
            </p>
            <p className="text-gray-700 mb-4">
              At the heart of these processes are Apple's proprietary compression algorithms and file system architectures. From intelligently compressing data using algorithms like LZFSE to retrieving files with high efficiency through data structures like B-trees, Apple has designed an ecosystem that emphasizes performance, energy efficiency, and speed—especially important for devices like iPhones, MacBooks, and now, the Apple Vision Pro.
            </p>
            
            <p className="text-gray-600 italic mt-4">
              All insights are based on open-source documentation, developer guides, and publicly available code. This is a conceptual study—not a direct replication of Apple's proprietary implementations.
            </p>
          </section>

          <section className="mb-8">
            <div className="md:float-right md:w-2/5 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0566.jpeg" 
                alt="File System Architecture Diagram 1" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Overview of File System Architecture</p>
            </div>
            
          </section>

          {/* Compression Techniques */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Compression Techniques Used in Apple's Ecosystem</h2>
            <p className="text-gray-700 mb-4">
              Apple uses a variety of compression algorithms, tailored for different media types and performance requirements. Here are the most prominent:
            </p>

            <div className="space-y-6">
              {/* LZFSE */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">LZFSE (Lempel-Ziv Finite State Entropy):</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Description:</strong> LZFSE is Apple's proprietary lossless compression algorithm, designed to balance compression ratio, speed, and energy efficiency. It is based on Lempel-Ziv compression combined with Finite State Entropy coding, derived from Jarek Duda's work on Asymmetric Numeral Systems (ANS). LZFSE achieves a compression ratio similar to ZLIB level 5 but offers 2x–3x faster encoding and decoding with higher energy efficiency, making it ideal for portable devices like iPhones and MacBooks.
                  </li>
                  <li>
                    <strong>Use Cases:</strong> LZFSE is recommended as the default compression algorithm for Apple platforms, particularly for iOS and macOS, where energy efficiency is critical. It is used in system-level compression tasks, such as file archiving and data storage, but is not suitable for cross-platform payloads due to its exclusivity to Apple's ecosystem.
                  </li>
                  <li>
                    <strong>Availability:</strong> Apple open-sourced LZFSE in 2016, with its reference implementation available on GitHub. It is integrated into tools like Archive Utility and supported by APIs in Apple's Compression Library.
                  </li>
                </ul>
              </div>

              {/* ALAC */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">ALAC (Apple Lossless Audio Codec):</h3>
                <p className="text-gray-700">
                  ALAC is a lossless audio compression algorithm developed by Apple, part of the MPEG-4 standard. It is designed to compress audio files without any loss of quality, allowing perfect reconstruction of the original audio data. It is widely used in Apple Music and iTunes for high-fidelity audio streaming and storage.
                </p>
              </div>

              {/* H.264 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">H.264:</h3>
                <p className="text-gray-700">
                  H.264 is part of the MPEG-4 standard, used for high-quality video compression. It is a lossy compression algorithm that achieves significant size reduction while maintaining good visual quality. Employed in Apple's video-related applications, such as Final Cut Pro, and video streaming services like Apple TV+.
                </p>
              </div>
            </div>
          </section>
          
          {/* Internal Architecture */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Internal Architecture: How Apple Handles Files Behind the Scenes</h2>
            <section className="mb-8">
            <div className="md:float-right md:w-3/5 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0567.jpeg" 
                alt="The compression Module" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The compression Module</p>
            </div>
          </section>
            <p className="text-gray-700 mb-4">
              Apple's approach to compression and storage follows a modular and layered model. The primary compression algorithm for files on Apple devices is LZFSE.
            </p>
            <p className="text-gray-700 mb-4">LZFSE combines:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Lempel-Ziv (LZ) Stage:</strong> Identifies repeated patterns in the input data and encodes them as (distance, length) pairs, storing non-repeated data as literals. LZFSE uses a fixed-size matches table (typically 8 KB) for fast lookups, prioritizing speed over maximum compression.
              </li>
              <li>
                <strong>Finite State Entropy (FSE) Stage:</strong> Encodes literals, lengths, and distances using FSE, a variant of Asymmetric Numeral Systems (ANS). To simplify, FSE assigns variable-length codes based on symbol probabilities, achieving near-optimal compression with fast decoding.
              </li>
            </ol>
            <br></br>
            <p className="text-gray-700">The provided code has a simplified FSE implementation. Real FSE uses a state machine and probability distributions to encode symbols efficiently. Here, we use a basic table (FSETable) with uniform frequencies and directly append symbols (mimicking raw output). Other optimizations included by Apple are processing data in fixed-size blocks (e.g., 4 KB) for parallelization (which this code omits), hash-based matches table, leveraging Apple Silicon.</p>
            <br></br>
            <p className="text-gray-700">A similar approach is ZLIB algorithm which uses Huffman Coding instead of FSE.
Huffman coding assigns shorter binary codes to more frequent symbols and longer codes to less frequent ones, resulting in compressed output. It builds a binary tree from symbol frequencies and encodes based on traversal paths. A sample code is available below.
</p>
<section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/image/huffman_coding_visualisation.png" 
                alt="Huffman Coding Example" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Huffman Coding Example<br/>src:https://www.wikiwand.com/en/Huffman_coding</p>
            </div>
            
          </section>
          </section>
          
          {/* Data Structures */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Structures Behind APFS: B-trees and Inodes</h2>
            <section className="mb-8">
            <div className="md:float-right md:w-3/5 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0568.jpeg" 
                alt="The Storage Module" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The Storage Module</p>
            </div>
          </section>
            <p className="text-gray-700 mb-4">
              Apple's APFS (Apple File System) uses a B-tree structure to manage file directories and metadata indexing. It enables fast searching and sorting with logarithmic time complexity. A B-tree is a self-balancing tree data structure used for efficient storage and retrieval of data, particularly in databases and file systems. Unlike binary search trees, B-trees allow nodes to have multiple children, which helps to reduce the height of the tree and improve search performance, especially for large datasets.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Inodes store:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>File size</li>
                <li>Location on disk</li>
                <li>Creation/modification timestamps</li>
                <li>Permissions and ownership</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Each file is mapped to an inode, and directories link filenames to inodes via B-trees.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <div className="md:float-center md:w-3/4 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0569.jpeg" 
                alt="The search Module" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The Search Module</p>
            </div>
          </section>
          <section className="mb-8">
            <div className="md:float-center md:w-3/4 md:ml-6 mb-4">
              <img 
                src="/portfolio/diagrams/IMG_0570.jpeg" 
                alt="The Retrieval Module" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">The Retrieval Module</p>
            </div>
          </section>
          {/* AI Integration */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">AI-Driven Compression and Future Developments</h2>
            <p className="text-gray-700 mb-4">
              In 2023, Apple acquired WaveOne, a startup developing AI-driven video compression algorithms. WaveOne's technology uses "content-aware" compression, leveraging machine learning to prioritize elements like faces in a video frame to optimize bandwidth usage. This approach can reduce video file sizes by up to 50%, particularly for complex scenes, and is robust to connectivity disruptions.
            </p>
            <p>Machine learning Algorithms such as Decision Trees can be used to make decisions on which Compression techniques will provide better results.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Machine Learning Features for Compression Decisions:</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Data type (text, image, audio)</li>
                <li>Entropy, repetition (e.g., low entropy for "AAAAAABBBBBB...")</li>
                <li>Size, storage (APFS, iCloud), use case (archival, streaming)</li>
                <li>Cloud requirements for higher compression</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Output: Algorithm choice (e.g., LZFSE, ZLIB, HEIF, ALAC)<br />
                Training: Offline, using metrics like compression ratio and speed
              </p>
            </div>
          </section>

          {/* Efficiency Analysis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Efficiency Analysis</h2>
            
            {/* LZFSE Compression */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">LZFSE Compression</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Time Complexity:</strong>
                  <p>Compression and decompression performance:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n)</div>
                  where n is input size, using hash tables for pattern matching
                </li>
                <li><strong>Space Efficiency:</strong>
                  <p>Compression ratio for repetitive data:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">48-64%</div>
                  achieved through bit-level FSE encoding
                </li>
                <li><strong>Memory Usage:</strong>
                  <p>Total memory requirements:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n + w)</div>
                  where w is the sliding window size (8KB)
                </li>
              </ul>
            </div>

            {/* B-tree Directory Structure */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">B-tree Directory Structure</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Search Operations:</strong>
                  <p>Time to locate files:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(log m)</div>
                  where m is the number of directory entries
                </li>
                <li><strong>Storage Efficiency:</strong>
                  <p>Space per node (4KB):</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">~1000 entries</div>
                  optimized for SSD block size
                </li>
                <li><strong>Memory Overhead:</strong>
                  <p>Working memory:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(k + log m)</div>
                  where k is max keys per node
                </li>
              </ul>
            </div>

            {/* Inode Management */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Inode Management</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Access Operations:</strong>
                  <p>Metadata operations speed:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(1)</div>
                  constant time for creation, updates, and retrieval
                </li>
                <li><strong>Storage Size:</strong>
                  <p>Per-file overhead:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">512 bytes</div>
                  includes compression metadata and extent information
                </li>
                <li><strong>Extent Management:</strong>
                  <p>Space for file fragments:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(e)</div>
                  where e is number of extents per file
                </li>
              </ul>
            </div>

            {/* Overall System Performance */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Combined Performance</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Time Efficiency:</strong>
                  <p>Total operation time:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n + log m)</div>
                  compression time + directory lookup
                </li>
                <li><strong>Space Efficiency:</strong>
                  <p>Total storage overhead:</p>
                  <div className="font-mono text-lg bg-gray-100 p-3 rounded mt-2">O(n + e + log m)</div>
                  file data + metadata + directory structure
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                The system is optimized for Apple Silicon through SIMD operations and efficient SSD I/O, with APFS features like copy-on-write and unified buffer cache enhancing real-world performance.
              </p>
            </div>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                The combination of LZFSE compression (O(n) time), B-tree directory structure (O(log m) lookup), and efficient inode management (O(1) operations) shows how modern file systems can balance performance with storage efficiency. The trade-offs between compression ratio and speed are carefully optimized for Apple's ecosystem, demonstrating how theoretical concepts translate into practical performance gains.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>LZFSE provides an optimal balance between compression ratio and speed</li>
                <li>B-tree structure enables efficient directory operations at scale</li>
                <li>Inode management system supports advanced features while maintaining performance</li>
                <li>The overall design shows careful consideration of real-world usage patterns</li>
              </ul>
            </div>
          </section>

          {/* GitHub Link */}
          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/ShreyaPI/portfolio/tree/main/public/codes/file-system"
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