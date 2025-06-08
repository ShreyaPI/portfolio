"use client"; // If using app router

import Image from "next/image";
import { useEffect } from "react";
import EducationSection from "../../components/EducationSection";
import ProjectsSection from "../../components/Project";
import DomainDescription from "../../components/DomainDescription";
import AnimatedHighlights from "../../components/AnimatedHighlights";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.replace('/#', '/');
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    // Add click handlers to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleLinkClick);
    });

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="pt-20 container mx-auto px-4">
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

        {/* Domain Description Section */}
        {/* <section id="DomainDesc" className="py-1"> */}
          {/* <DomainDescription /> */}
        {/* </section> */}

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

      <Footer />
    </div>
  );
}
