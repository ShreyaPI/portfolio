'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UnderwaterRestoration() {
  const pathname = usePathname();
  const basePath = pathname.includes("/portfolio") ? "/portfolio" : "";

  return (
    <main style={styles.page}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <Link href={`${basePath}/`} style={styles.navLink}>← Back to Home</Link>
      </nav>

      {/* Title Section */}
      <section style={styles.section}>
        <h1 style={styles.title}>
          Learning-Based Estimation of Attenuation Coefficients for Underwater Image Restoration
        </h1>
        <p style={styles.subtitle}>
          📢 <strong>This project was developed as an intern at CEVI.</strong>
        </p>
      </section>

      {/* Description Section */}
      <section style={styles.section}>
        <p>
          This project proposes a deep learning-based framework to estimate attenuation coefficients (βR, βG, βB) from degraded underwater images. 
          These coefficients are essential for modeling underwater light absorption and are used to restore visibility and color fidelity. 
          The system integrates EfficientNet-B3 for feature extraction and a custom ANN for coefficient prediction. The predictions are validated through white patch rendering.
        </p>
        <ul style={styles.list}>
          <li>Estimates attenuation coefficients using a deep learning encoder-ANN pipeline.</li>
          <li>Employs synthetic underwater datasets with Jerlov water types and varying depths.</li>
          <li>Outputs atmospheric light patches using Beer-Lambert simulation.</li>
          <li>Achieves high visual fidelity using predicted β-values.</li>
          <li><strong>The reserch is still ongoing with efforts on restoration of the images.</strong></li>
        </ul>
      </section>

      {/* Results Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Results and Visualizations</h2>
        <center>
        <img
          src={`${basePath}/projects/CEVIresults2.png`}
          alt="Comparison between predicted and actual rendered patches"
          style={styles.image}
        />
        <p style={styles.caption}>
          <strong>Figure 1:</strong> A side-by-side comparison of white patches rendered using predicted and actual β-values. 
          The close visual similarity validates the accuracy of the model.
        </p>

        <img
          src={`${basePath}/projects/CEVIresults.png`}
          alt="The predicts vs actual physical parameter values"
          style={{ ...styles.image, marginTop: "1rem" }}
        />
        <p style={styles.caption}>
          <strong>Figure 2:</strong> Visualization including images across various depths and Jerlov types with their predicted attenuation coefficients.
        </p>
        </center>
      </section>

      {/* PDF Download Section */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Project Documentation</h2>
        <p>You can download the full report for technical details and experimental results:</p>
        <a
          href={`${basePath}/Mini_Project_Report.pdf`}
          download
          style={styles.downloadButton}
        >
          📄 Download Project Report (PDF)
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
  caption: {
    marginTop: "0.5rem",
    fontSize: "0.95rem",
    color: "#555",
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
