'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OpticalFlowTracking() {
  const pathname = usePathname();
  const basePath = pathname.includes("/portfolio") ? "/portfolio" : "";

  return (
    <main style={styles.page}>
      {/* Navbar */}
      <nav style={styles.nav}>
        <Link href={`${basePath}/`} style={styles.navLink}>← Back to Home</Link>
      </nav>

      {/* Title Section */}
      <section style={styles.section}>
        <h1 style={styles.title}>
          Enhanced Optical Flow Tracking with Motion Saliency
        </h1>
        <p style={styles.subtitle}>
          📢 <strong>This research was presented at a conference in NIT Goa and focuses on intelligent vehicle tracking using vision-based methods.</strong>
        </p>
      </section>

      {/* Description */}
      <section style={styles.section}>
        <p>
          This project presents a lightweight, real-time vehicle tracking system using the Lucas-Kanade Optical Flow algorithm
          enhanced with motion saliency. Designed for traffic monitoring and autonomous navigation, the system identifies
          key points in video frames, filters motion-relevant regions using saliency maps, and estimates vehicle speeds
          with high accuracy and efficiency.
        </p>
        <ul style={styles.list}>
          <li>Built using OpenCV and Python for cost-efficient deployment on edge devices.</li>
          <li>Combines Shi-Tomasi corner detection and Lucas-Kanade Optical Flow for tracking motion.</li>
          <li>Incorporates motion saliency to eliminate background noise and focus on dynamic objects.</li>
          <li>Estimates real-world vehicle speeds using displacement and calibration-based scaling.</li>
          <li>Achieves ±10% accuracy in estimated vehicle speeds.</li>
        </ul>
      </section>

      {/* Images */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Visual Demonstrations</h2>
        <center>
        <img
          src={`${basePath}/projects/CV.png`}
          alt="Vehicle Tracking Visualization"
          style={styles.image}
        />
        </center>
      </section>

      {/* PDF Download */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Project Documentation</h2>
        <p>You can download the complete research paper below:</p>
        <a
          href={`${basePath}/Enhanced Optical Flow Tracking with Motion Saliency.pdf`}
          download
          style={styles.downloadButton}
        >
          📄 Download Research Paper (PDF)
        </a>
      </section>
    </main>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff",
    padding: "2rem",
    fontFamily: "sans-serif",
    color: "#222",
  },
  nav: {
    marginBottom: "2rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: "bold",
  },
  section: {
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    padding: "1.5rem",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#444",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  list: {
    paddingLeft: "1.5rem",
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    maxWidth: "700px",
    borderRadius: "8px",
    display: "block",
  },
  downloadButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
  },
};
