"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectsSection = () => {
  const basePath = usePathname().includes("/portfolio") ? "/portfolio" : "";

  const projects = [
    {
      title: "Physics-backed Underwater Image Restoration",
      image: `${basePath}/projects/CEVI.jpg`,
      description:
        "Worked as a research intern at CEVI to work on the relationship between wavelength-dependent attenuation coefficients and underwater visibility conditions.",
      link: `${basePath}/CEVI`,
    },
    {
      title: "Few-Shot Object Detection",
      image: `${basePath}/projects/FSOD architecture.png`,
      description:
        "Implemented the FSOD model using Detectron2 and ResNet by implementing a 2 stage fine-tuning approach and cut-out augmentation, achieving 18.8% improvement over prior state-of-the-art methods.",
      link: `${basePath}/FSOD`,
    },
    {
      title: "Board of Studies - University Course Management System",
      image: `${basePath}/projects/BoardOfStudies.png`,
      description:
        "Developed a Next.js web application integrated with Supabase for managing university courses and syllabi, with a role based access.",
      link: `${basePath}/BoardOfStudies`,
    },
    {
      title: "Optical Flow - based Vehicle Tracking System using Motion Saliency",
      image: `${basePath}/projects/CV.png`,
      description:
        "Integrated the Lucas-Kanade algorithm with motion saliency detection, achieving ±10% accuracy in vehicle speed estimation.",
      link: `${basePath}/OpticalFlow`,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
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
              <p className="text-sm text-center">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
