"use client";

import CaseStudyTemplate from "../../../../components/CaseStudyTemplate";
import ReferencesSection from "../../../../components/ReferencesSection";
import { useState } from 'react';

const references = [
  // Apple Documentation and Resources
  'Apple Developer (2024). "Core ML: Official documentation on Apple\'s machine learning framework." Retrieved from https://developer.apple.com/documentation/coreml',
  'Apple Inc. (2024). "Apple Silicon Overview: A-series and M-series chips." Retrieved from https://apple.com/apple-silicon/',
  'Apple Developer (2020-2024). "WWDC Sessions on System Architecture and Machine Learning." Retrieved from https://developer.apple.com/videos/',
  'Apple Developer (2024). "Model Compression in Core ML: Guide on pruning and quantization." Retrieved from https://developer.apple.com/documentation/coreml/model_compression',
  
  // Fundamental Algorithms
  'Cooley, J. W., & Tukey, J. W. (1965). "The Fast Fourier Transform." Mathematics of Computation, 19(90). Retrieved from https://ams.org/journals/mcom/1965-19-090/S0025-5718-1965-0178586-1/',
  'Strassen, V. (1969). "Gaussian Elimination is Not Optimal." Numerische Mathematik, 13(4). Retrieved from https://link.springer.com/article/10.1007/BF02165411',
  'Lavin, A., & Gray, S. (2016). "Fast Algorithms for Convolutional Neural Networks." arXiv preprint. Retrieved from https://arxiv.org/abs/1509.09308',
  'Karatsuba, A., & Ofman, Y. (1962). "Multiplication of Multidigit Numbers." Soviet Physics Doklady. Retrieved from https://link.springer.com/article/10.1023/A:1015176410032',
  
  // Neural Network Optimization
  'Han, S., Pool, J., Tran, J., & Dally, W. (2015). "Learning Both Weights and Connections for Efficient Neural Networks." arXiv preprint. Retrieved from https://arxiv.org/abs/1506.02626'
];

export default function OnDeviceAI() {
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  return (
    <CaseStudyTemplate
      title="On-Device AI and Hardware Acceleration"
      description="An in-depth exploration of Apple's on-device AI capabilities, including hardware optimizations, mathematical foundations, and software algorithms that power features like Siri, Face ID, and Neural Engine."
      
      content={
        <div className="space-y-8">
          <section>
          <section className="mb-8">
            <div className="md:float-right md:w-1/1 md:ml-6 mb-4">
              <img 
                src="/portfolio/image/Apple-A16-Bionic.jpg" 
                alt="A16 Bionic " 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">src:Apple WWDC 2024</p>
            </div>
            
          </section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Importance of On-Device AI</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On-device AI enables features like Siri, Face ID, and Apple Intelligence (e.g., Writing Tools and Image Playground)
              with minimal latency and maximal privacy, as sensitive data remains on the device. By leveraging specialized hardware
              and optimized software, Apple ensures that complex ML models, such as the ~3 billion parameter AFM-on-device
              language model, run efficiently on resource-constrained devices. The mathematical underpinnings, including efficient
              matrix operations and signal processing, are critical to achieving high performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardware Advancements for On-Device AI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Apple's custom silicon, including the A-series (e.g., A17 Pro) and M-series (e.g., M4) chips, is engineered to accelerate
              AI workloads. The cornerstone is the Neural Engine, a dedicated neural processing unit (NPU), complemented by
              architectural innovations.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Neural Engine Evolution</h3>
                <p className="text-gray-700 mb-4">
                  Introduced in 2017 with the A11 Bionic chip, the Neural Engine featured two cores,
                  delivering 600 billion operations per second (TOPS). By 2024, the A17 Pro and M4 chips incorporate 16-core
                  Neural Engines capable of 38 TOPS, a 60x performance increase. This is driven by increased core counts and
                  optimized instruction sets for matrix operations.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Mathematical Relevance:</h4>
                  <p className="text-gray-700 mb-2">Neural networks rely on matrix-vector multiplications, expressed as:</p>
                  <div className="font-mono text-center my-4 text-lg">
                    y = Wx + b
                  </div>
                  <p className="text-gray-700">
                    where W ∈ ℝ<sup>m×n</sup>, x ∈ ℝ<sup>n</sup>, and b ∈ ℝ<sup>m</sup>. The Neural Engine accelerates these operations using 
                    parallelized hardware, achieving high throughput for large-scale computations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Unified Memory Architecture (UMA)</h3>
                <p className="text-gray-700 mb-4">
                  Apple's chips employ a UMA, where the CPU, GPU, and Neural Engine share a single memory pool, minimizing 
                  data transfer overhead. The M4 Pro supports memory bandwidth up to 273 GB/s, a 75% improvement over the M3 Pro.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Mathematical Relevance:</h4>
                  <p className="text-gray-700">
                    UMA reduces latency for memory-bound operations, such as fetching W for matrix multiplications, ensuring 
                    that computations like Σ<sub>i=1</sub><sup>n</sup> w<sub>ij</sub>x<sub>i</sub> are not bottlenecked.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Low-Precision Arithmetic</h3>
                <p className="text-gray-700 mb-4">
                  The Neural Engine supports INT8 and INT4 formats, alongside FP16. These reduce the bit-width of weights and 
                  activations, lowering memory usage and accelerating computations. INT8 operations use 8-bit integers, 
                  reducing memory by 4x compared to FP32.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Mathematical Relevance:</h4>
                  <p className="text-gray-700">
                    Quantization approximates weights w<sub>ij</sub> with reduced precision, e.g., 
                    q = round(w/s), where s is a scaling factor. For a matrix W ∈ ℝ<sup>m×n</sup>, quantization to INT8 reduces storage from 
                    32mn bits to 8mn bits, speeding up dot products like Wx.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Advanced Manufacturing Processes</h3>
                <p className="text-gray-700 mb-4">
                  Apple's 3nm fabrication technology (e.g., A17 Pro, M4) increases transistor density, improving power efficiency 
                  and allowing more cores. The M4's second-generation 3nm process supports its 38 TOPS capability.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Mathematical Relevance:</h4>
                  <p className="text-gray-700">
                    Smaller transistors reduce power consumption for operations like matrix multiplications, which scale as 
                    O(n<sup>3</sup>) in standard implementations, making high TOPS essential for large n.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Developer Support via Core ML</h3>
                <p className="text-gray-700 mb-4">
                  The Core ML framework enables developers to leverage the Neural Engine, CPU, and GPU. It supports model 
                  quantization and compression, ensuring efficient execution on varied hardware.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-lg font-medium text-gray-700 mb-2">Mathematical Relevance:</h4>
                  <p className="text-gray-700">
                    Core ML optimizes computation graphs, reducing redundant operations in expressions like 
                    σ(Wx + b), where σ is an activation function.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-700">
                These advancements enable Apple devices to handle complex models, such as convolutional neural networks (CNNs)
                and transformer-based models, on-device.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Software Optimizations and Mathematical Algorithms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Apple's software stack, including Core ML and the AXLearn framework, complements its hardware by optimizing
              neural network computations. Key algorithms and their mathematical foundations include:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
              <section className="mb-8">
            <div className="md:float-right md:w-2/6 md:ml-6 mb-4">
              <img 
                src="/portfolio/image/fft.jpg" 
                alt="Intution of Fast Fourier Transform" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Digramatic representation of FFT<br/>src:https://www.nti-audio.com/en/support/know-how/fast-fourier-transform-fft</p>
            </div>
            
          </section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Fast Fourier Transform (FFT)</h3>
                
                <p className="text-gray-700">
                  FFT accelerates convolutions in CNNs, critical for image recognition and computational photography. 
                  A convolution, defined as (f ∗ g)[n] = Σ<sub>m</sub> f[m]g[n - m], has complexity O(n<sup>2</sup>) for
                  an n × n input. FFT transforms the input and kernel into the frequency domain, where convolution becomes
                  element-wise multiplication: F{'{'}f ∗ g{'}'} = F{'{'}f{'}'} · F{'{'}g{'}'}. The inverse FFT yields the result, reducing complexity
                  to O(n log n). Apple likely employs FFT for tasks like Smart HDR.
                </p>
                
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
              <section className="mb-8">
            <div className="md:float-right md:w-2/5 md:ml-6 mb-4">
              <img 
                src="/portfolio/image/strassen.png" 
                alt="Strassen calculations" 
                className="w-full rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-gray-600 text-center">Strassen's calculation technique<br/>src:https://www.geeksforgeeks.org/strassens-matrix-multiplication</p>
            </div>
            
          </section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Strassen's Algorithm</h3>
                <p className="text-gray-700">
                  Strassen's optimizes matrix multiplication, e.g., Wx. Standard multiplication for n × n matrices requires O(n<sup>3</sup>) 
                  operations. Strassen's divides matrices into four n/2 × n/2 submatrices and uses seven multiplications, reducing 
                  complexity to O(n<sup>log<sub>2</sub>7</sup>) ≈ O(n<sup>2.807</sup>). For matrices A = [a<sub>11</sub> a<sub>12</sub>; a<sub>21</sub> a<sub>22</sub>]
                  and B = [b<sub>11</sub> b<sub>12</sub>; b<sub>21</sub> b<sub>22</sub>], it computes seven products (e.g., p<sub>1</sub> = a<sub>11</sub>(b<sub>12</sub> - b<sub>22</sub>)) 
                  and combines them. Apple likely uses this for transformer model inference.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Winograd's Convolution Algorithm</h3>
                <p className="text-gray-700">
                  Winograd's optimizes convolutions for small kernels (e.g., 3 × 3). For a 2×2 output tile and a 3×3 kernel (F(2,3)), 
                  it reduces multiplications from 36 to 16 using transformation matrices: Y = A<sup>T</sup>[(GgG<sup>T</sup>) ⊙ (B<sup>T</sup>dB)]A, 
                  where g is the kernel, d is the input, and ⊙ denotes element-wise multiplication. Apple employs this for video denoising.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Karatsuba Multiplication</h3>
                <p className="text-gray-700">
                  Karatsuba's accelerates multiplication of large numbers or polynomials. For numbers x = a · 10<sup>m</sup> + b and 
                  y = c · 10<sup>m</sup> + d, it uses three multiplications, reducing complexity from O(n<sup>2</sup>) to O(n<sup>log<sub>2</sub>3</sup>) ≈ O(n<sup>1.585</sup>). 
                  This is useful for high-precision arithmetic in specific ML tasks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Quantization and Low-Bit Palletization</h3>
                <p className="text-gray-700">
                  Quantization reduces weight precision (e.g., from FP32 to INT8), shrinking model size. For a weight w ∈ ℝ, 
                  quantization maps to q = round(w/s). Low-bit palletization compresses weights into palettes, reducing memory 
                  to O(n) for sparse tensors. Apple uses these in Core ML, achieving a time-to-first-token latency of 0.6 ms per prompt token.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Speculative Decoding and Context Pruning</h3>
                <p className="text-gray-700">
                  Speculative decoding predicts multiple tokens in parallel, reducing sequential operations in autoregressive models. 
                  Context pruning discards irrelevant tokens, minimizing the sequence length n in attention mechanisms (O(n<sup>2</sup>)). 
                  These enable Apple's language models to generate 30 tokens per second.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Pruning and Sparsity-Aware Computations</h3>
                <p className="text-gray-700">
                  Pruning removes small weights, creating sparse matrices where non-zero elements (nz) dominate. Sparse matrix 
                  multiplication reduces complexity from O(n<sup>2</sup>) to O(nz). Apple's Core ML leverages sparsity to compress models.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration of Hardware and Software</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
               The Neural Engine's high TOPS and UMA
              accelerate matrix operations, while Core ML optimizes computation graphs. For example, a transformer's self-attention
              mechanism, Attention(Q, K, V) = softmax(QK<sup>T</sup>/√d)V, benefits from sparse operations and low-precision arithmetic.
              FFT and Winograd's speed up CNNs, while speculative decoding enhances language model inference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Directions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Speculation suggests Apple is developing a "NeuralCore" segment for the A19 Pro chip, targeting 4-bit quantized
              models and power consumption below 1.5W. The AXLearn framework and research into sparsity and quantization
              indicate continued advancements.
            </p>
          </section>

          {/* Inference Section */}
          <section className="mt-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Inference</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Apple's approach to on-device AI, utilizing hardware acceleration (Neural Engine) and algorithmic optimizations (FFT, Strassen's algorithm), shows how theoretical computer science concepts can be practically applied to achieve both performance and privacy in mobile computing. The combination of hardware-specific optimizations with classical algorithms demonstrates the importance of holistic system design.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                <li>Hardware acceleration enables complex AI operations on mobile devices</li>
                <li>Classical algorithms (FFT, Strassen's) provide foundational optimizations</li>
                <li>Privacy is maintained through on-device processing</li>
                <li>The system achieves practical performance through multiple optimization layers</li>
              </ul>
            </div>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-end">
              <a
                href="https://github.com/yourusername/on-device-ai"
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