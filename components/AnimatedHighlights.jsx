"use client";

import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function AnimatedHighlights() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-2/3">
          {/* <h2 className="text-3xl font-bold mb-4">About</h2> */}
          <RoughNotationGroup show={show}>
            <h2 className="text-3xl font-bold mb-4">
              Hi, I’m{" "}
              <RoughNotation type="highlight" color="#eb8dd2">
                Shreya Inamdar,
              </RoughNotation>
            </h2>
            <p>
              {" "}
              a developer based in{" "}
              <RoughNotation type="highlight" color="#fef08a">
                Pune, India
              </RoughNotation>
              . I have beed studying{" "}
              <RoughNotation type="box" color="#86efac">
                Computer Vision
              </RoughNotation>
              ,{" "}
              <RoughNotation type="box" color="#fca5a5">
                Machine Learning
              </RoughNotation>
              , and{" "}
              <RoughNotation type="box" color="#c084fc">
                Deep Learning
              </RoughNotation>
              .
            </p>

            <p className="text-gray-700 text-lg mb-4">
              I’m proficient in programming languages like{" "}
              <RoughNotation type="highlight" color="#93c5fd">
                Python
              </RoughNotation>
              ,{" "}
              <RoughNotation type="highlight" color="#fbbf24">
                JavaScript
              </RoughNotation>
              ,{" "}
              <RoughNotation type="highlight" color="#34d399">
                C
              </RoughNotation>
              , and{" "}
              <RoughNotation type="highlight" color="#e879f9">
                C++
              </RoughNotation>
              . I enjoy building smart, scalable systems that solve real-world
              problems.
            </p>
            <p>
              I have also worked on several projects in the field of{" "}
              <RoughNotation type="underline" color="#fef08a">
                Web Development
              </RoughNotation>{" "}
              and have a good grip on technologies such as{" "}
              <RoughNotation type="underline" color="#34d399">
                SQL, Firebase, Selenium, and CI/CD pipelines.
              </RoughNotation>
              .
            </p>

            <p className="text-gray-700 text-lg mb-4">
              I am also{" "}
              <RoughNotation type="underline" color="#fb923c">
                adaptable
              </RoughNotation>
              , having lived in several states across India. This has helped me
              become proficient in multiple languages like{" "}
              <RoughNotation type="box" color="#fcd34d">
                English
              </RoughNotation>
              ,{" "}
              <RoughNotation type="box" color="#fdba74">
                Hindi
              </RoughNotation>
              ,{" "}
              <RoughNotation type="box" color="#bbf7d0">
                Marathi
              </RoughNotation>
              , and{" "}
              <RoughNotation type="box" color="#c4b5fd">
                Kannada
              </RoughNotation>
              .
            </p>

            <p className="text-gray-700 text-lg mb-4">
              I’ve consistently maintained{" "}
              <RoughNotation type="highlight" color="#fde68a">
                strong academic scores
              </RoughNotation>{" "}
              and strive for excellence in every project I take up.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              I value{" "}
              <RoughNotation type="underline" color="#f472b6">
                curiosity
              </RoughNotation>
              , , and{" "}
              <RoughNotation type="underline" color="#60a5fa">
                collaboration
              </RoughNotation>{" "}
              — soft skills that help me thrive in both solo and team
              environments.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/ShreyaPI"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="/Shreya_Inamdar_CV.pdf"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                download
              >
                Download Resume
              </a>
            </div>
          </RoughNotationGroup>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 w-full flex justify-center">
          <div className="rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <img
              src="portfolio/image/ME.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="object-cover w-[300px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
