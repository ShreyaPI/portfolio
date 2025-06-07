"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectsSection = () => {
  const basePath = usePathname().includes("/portfolio") ? "/portfolio" : "";

  const projects = [
    {
      title: "Physics-backed Underwater Image Restoration",
      image: `${basePath}/portfolio/projects/CEVI.jpg`,
      description:
        "Worked as a research intern at CEVI to work on the relationship between wavelength-dependent attenuation coefficients and underwater visibility conditions.",
      paperLink: `${basePath}/portfolio/Mini_Project_Report.pdf`
          },
    {
      title: "Few-Shot Object Detection",
      image: `${basePath}/portfolio/projects/FSOD architecture.png`,
      description:
        "Implemented the FSOD model using Detectron2 and ResNet by implementing a 2 stage fine-tuning approach and cut-out augmentation, achieving 18.8% improvement over prior state-of-the-art methods.",
      paperLink: `${basePath}/portfolio/2279.pdf`
    },
    {
      title: "Board of Studies - University Course Management System",
      image: `${basePath}/portfolio/projects/BoardOfStudies.png`,
      description:
        "Developed a Next.js web application integrated with Supabase for managing university courses and syllabi, with a role based access.",
      repoLink: "https://github.com/duosimply/board-of-studies-csproj"
    },
    {
      title: "Optical Flow - based Vehicle Tracking System using Motion Saliency",
      image: `${basePath}/portfolio/projects/CV.png`,
      description:
        "Integrated the Lucas-Kanade algorithm with motion saliency detection, achieving ±10% accuracy in vehicle speed estimation.",
      paperLink: `${basePath}/portfolio/Enhanced Optical Flow Tracking with Motion Saliency.pdf`,
      repoLink: "https://github.com/ShreyaPI/Lucas-Kanade-with-Motion-Saliency"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-center mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.paperLink && (
                  <a
                    href={project.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-800 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    View Paper
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
