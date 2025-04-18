const projects = [
  {
    title: "Physics-backed Underwater Image Restoration",
    image: "/projects/CEVI.jpg", // put this image inside /public/projects/
    description:
      "Worked as a research intern at CEVI to work on the relationship between wavelength-dependent attenuation coefficients and underwater visibility conditions.",
    link: "/projects/project1",
  },
  {
    title: "Few-Shot Object Detection",
    image: "/projects/FSOD architecture.png", // also put in /public/projects/
    description:
      "Implemented the FSOD model using Detectron2 and ResNet by implementing a 2 stage fine-tuning approach and cut-out augmentation, achieving 18.8% improvement over prior state-of-the-art methods.",
    link: "/projects/project2",
  },
  {
    title: "Board of Studies - University Course Management System",
    image: "/projects/BoardOfStudies.png", // also put in /public/projects/
    description:
      "Developed a Next.js web application integrated with Supabase for managing university courses and syllabi, with a role based access.",
    link: "/projects/project4",
  },
  {
    title: "Optical Flow - based Vehicle Tracking System using Motion Saliency",
    image: "/projects/CV.png", // also put in /public/projects/
    description:
      "Integrated the Lucas-Kanade algorithm with motion saliency detection, achieving ±10% accuracy in vehicle speed estimation.",
    link: "/projects/project3",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
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
          </a>
        ))}
      </div>
    </section>
  );
}
