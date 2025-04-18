"use client";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function EducationSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
  }, [inView]);

  return (
    <section id="education" className="py-5" ref={ref}>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <RoughNotationGroup show={show}>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold">
                Bachelor of Engineering in Computer Science
              </h3>
              <p className="text-gray-700">
                <RoughNotation type="underline" show={show} color="#066b54">
                  KLE Technological University
                </RoughNotation>
                , 2022 - 2026
              </p>
              <p className="text-gray-700">CGPA: 9.66</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">
                Higher Secondary Graduation
              </h3>
              <p className="text-gray-700">
                <RoughNotation type="underline" show={show} color="#066b54">
                  Mount Litera Zee School, Goa
                </RoughNotation>
              </p>
              <p className="text-gray-700">Class Valedictorian</p>
            </li>
            {/* TODO:Add more entries later */}
          </ul>
        </RoughNotationGroup>
      </div>
    </section>
  );
}
