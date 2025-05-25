'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FewShotObjectDetection() {
  const pathname = usePathname();
  const basePath = pathname.includes("/portfolio") ? "/portfolio" : "";

  return (
    <main style={styles.page}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link href={`${basePath}/`} style={styles.navLink}>← Back to Home</Link>
      </nav>

      {/* Title Box */}
      <section style={styles.section}>
        <h1 style={styles.title}>
          Few-Shot Object Detection using Two-Stage Fine-Tuning and Cutout Augmentation
        </h1>
        <p style={styles.subtitle}>
          📢 <strong>This research was accepted at a national conference in Pune.</strong>
        </p>
      </section>

      {/* Description Box */}
      <section style={styles.section}>
        <p>
          This project proposes a two-stage fine-tuning strategy for Few-Shot Object Detection (FSOD) using
          Detectron2. By leveraging cutout data augmentation during the novel class adaptation phase,
          the model demonstrates improved generalization and robustness under low-data conditions.
        </p>

        <ul style={styles.list}>
          <li>Trained with base classes and fine-tuned on novel classes using 10-shot setting.</li>
          <li>Implemented with Detectron2, ResNet backbone, and FPN for feature extraction.</li>
          <li>Cutout augmentation introduces noise to avoid overfitting on limited data.</li>
          <li>Evaluated on the MS COCO dataset.</li>
          <li>Achieved AP75 of <strong>15.7</strong> for 10-shot, with an improvement of <strong>18.8%</strong> over previous SOTA.</li>
        </ul>
      </section>

      {/* Image Box */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Architecture</h2>
        <center>
        <img
          src={`${basePath}/projects/FSOD architecture.png`}
          alt="FSOD Architecture 1"
          style={styles.image}
        />
        <img
          src={`${basePath}/projects/FSOD results.png`} // Make sure this file exists
          alt="FSOD Results"
          style={{ ...styles.image, marginTop: "1rem" }}
        />
        </center>
      </section>

      {/* PDF Download Box */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Project Documentation</h2>
        <p>You can download the full research paper below:</p>
        <a
          href={`${basePath}/2279.pdf`}
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
