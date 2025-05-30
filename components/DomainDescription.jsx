"use client";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function DomainDescription() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);
  return (
    <section id="domain" className="py-20 bg-gray-50 px-6 md:px-12" ref={ref}>
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Domain Description
        </h2>
        <RoughNotationGroup show={show}>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <p className="text-gray-600 mb-6">
              <RoughNotation type="underline" show={show} color="#c084fc">
                Apple Inc.
              </RoughNotation>
              , a titan in consumer electronics, software, and services, is
              renowned for its innovation in hardware and software, with a
              particular focus on emerging technologies like{" "}
              <RoughNotation type="underline" show={show} color="#c084fc">
                computer vision
              </RoughNotation>
              . With an annual research and development (R&D) budget of
              approximately $30 billion as of 2024, Apple is well-positioned to
              lead in this field.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Advancing Hardware Innovation
            </h3>
            <p className="text-gray-600 mb-4">
              Computer engineers contribute significantly to Apple’s custom
              silicon, such as the{" "}
              <RoughNotation type="underline" show={show} color="#f472b6">
                M chip series, which feature dedicated Neural Engines optimized
                for computer vision tasks
              </RoughNotation>
              . These chips power real-time image processing and machine
              learning (ML) workloads with remarkable efficiency. Engineers also
              design and integrate advanced sensors, like LiDAR and
              high-resolution cameras, into devices such as the iPhone, iPad,
              and Vision Pro mixed-reality headset. By ensuring tight
              hardware-software integration, they enable features like augmented
              reality (AR) and facial recognition, delivering unparalleled
              performance to users.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Driving Software and Algorithm Excellence
            </h3>
            <p className="text-gray-600 mb-4">
              In software, computer engineers develop sophisticated computer
              vision algorithms for applications like object detection, image
              recognition, and 3D scene reconstruction. These algorithms power
              iconic features such as{" "}
              <RoughNotation type="underline" show={show} color="#066b54">
                Face ID and ARKit
              </RoughNotation>
              . Engineers also enhance Apple’s Core ML framework, making it
              easier for developers to integrate vision models into third-party
              apps. Their work ensures that software and hardware work in
              harmony, optimizing performance across Apple’s ecosystem, from
              macOS to iOS.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Pioneering Computer Vision Applications
            </h3>
            <p className="text-gray-600 mb-4">
              Apple’s foray into AR and virtual reality (VR) relies heavily on
              computer engineers.{" "}
              <RoughNotation type="underline" show={show} color="#d11ba7">
                The Vision Pro headset, launched in 2024, showcases their
                ability to combine computer vision with AI for spatial
                computing, enabling hand tracking, eye tracking, and immersive
                experiences.
              </RoughNotation>{" "}
              Engineers also contribute to health and accessibility features,
              such as gesture recognition, which helps users with disabilities
              interact with devices. Additionally, their work on vision systems
              supports potential future applications, such as advanced
              driver-assistance systems (ADAS), despite Apple scaling back its
              autonomous vehicle project.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Accelerating AI Development
            </h3>
            <p className="text-gray-600 mb-4">
              Competitors like Google (with Gemini) and Microsoft (with Copilot)
              lead in generative AI. Apple must integrate more advanced AI into
              Siri and creative apps like Photos and iMovie to match these
              offerings. Its focus on on-device AI, powered by the Neural
              Engine, is a key differentiator, but scaling this technology to
              handle complex models rivaling cloud-based solutions is critical.
            </p>

            <p className="text-gray-600 mb-4">
              To compete with Meta’s LLaMA and Google’s Vision Transformer,
              Apple needs computer engineers skilled in deep learning,
              transformer models, and vision-language integration. Its
              substantial R&D budget can support exploratory projects in
              multimodal AI, combining vision, audio, and text to create richer
              user experiences. Recruiting top talent in these areas will be
              essential to closing the gap with competitors.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Previous Research Outcomes and Consumer Impact
            </h2>
            <p className="text-gray-600 mb-4">
              Apple’s research in computer vision and AI has yielded
              transformative features that have been seamlessly integrated into
              its products, reaching millions of users worldwide.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Face ID Authentication
            </h3>
            <p className="text-gray-600 mb-4">
              Apple’s 3D facial recognition technology, powered by the TrueDepth
              camera and Neural Engine, set a new standard for biometric
              security. Introduced with the iPhone X in 2017, Face ID is now a
              staple across iPhones and iPads. Its real-time facial mapping
              enables secure authentication and playful features like Animoji
              and Memoji, adopted by millions of users.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              ARKit and Vision Pro
            </h3>
            <p className="text-gray-600 mb-4">
              Apple’s ARKit, built on advanced simultaneous localization and
              mapping (SLAM) and LiDAR-based depth sensing, powers AR
              experiences in apps like IKEA Place and Pokémon GO. The Vision Pro
              headset, launched in 2024, takes this further, using computer
              vision for hand and eye tracking to deliver immersive
              mixed-reality experiences. These technologies have made AR
              accessible to both consumers and developers.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Computational Photography
            </h3>
            <p className="text-gray-600 mb-4">
              Apple’s computational photography research, leveraging deep
              learning for image enhancement, has{" "}
              <RoughNotation type="underline" show={show} color="#fde68a">
                transformed iPhone photography
              </RoughNotation>
              . Features like Night Mode, Deep Fusion, and Photographic Styles,
              introduced since the iPhone 11 in 2019, use computer vision to
              optimize images in real time.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
              Apple Intelligence
            </h3>
            <p className="text-gray-600 mb-4">
              Launched in 2024, Apple Intelligence integrates computer vision
              with natural language processing, offering{" "}
              <RoughNotation type="underline" show={show} color="#066b54">
                features like Visual Intelligence for object recognition and
                scene description in Photos and Messages
              </RoughNotation>
              . Available on iPhone 16 and M-series Macs, these capabilities
              leverage on-device processing to prioritize privacy while
              delivering AI-driven experiences to a broad audience.
            </p>
          </div>
        </RoughNotationGroup>
      </div>
    </section>
  );
}
