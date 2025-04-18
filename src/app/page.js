"use client"; // If using app router

import Image from "next/image";
import { useEffect } from "react";
import EducationSection from "../../components/EducationSection";
import ProjectsSection from "../../components/Project";
import DomainDescription from "../../components/DomainDescription";
import AnimatedHighlights from "../../components/AnimatedHighlights";

export default function Home() {
  // Smooth scroll for in-page links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-500">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#DomainDesc" className="hover:text-blue-500">
                Domain Description
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="pt-5 container mx-auto px-4">
        {/* About Section */}
        <section
          id="about"
          className="flex flex-col md:flex-row items-center justify-between py-20"
        >
          <AnimatedHighlights />
        </section>

        {/* Education Section */}
        <section id="education" className="py-1">
          <EducationSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-1">
          <ProjectsSection />
        </section>

        <section id="DomainDesc" className="py-1">
          <DomainDescription />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-xl p-12 transition hover:shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question, want to collaborate, or just want to say hello—my inbox
              is open.
            </p>
            <p className="text-lg text-gray-700">
              Feel free to reach out via email:{" "}
              <a
                href="mailto:shreyai1724@gmail.com"
                className="text-blue-600 font-semibold underline hover:text-blue-800 transition duration-200"
              >
                shreyai1724@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
