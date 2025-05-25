'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BoardOfStudies() {
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
          Board of Studies – University Course Management System
        </h1>
        <p style={styles.subtitle}>
          🎓 <strong>A role-based curriculum management platform for universities with editable syllabi, semester control, and Selenium test coverage.</strong>
        </p>
      </section>

      {/* Description */}
      <section style={styles.section}>
        <p>
          This platform manages university semesters, courses, and syllabi with fine-grained access control. Role-based privileges allow faculty, coordinators, and reviewers to edit, approve, and audit course structures. After every approved change, a downloadable summary of modifications is generated. Comprehensive Selenium test scripts ensure system integrity.
        </p>
        <ul style={styles.list}>
          <li>Supports creation/editing of semesters, courses, and syllabi.</li>
          <li>Role-based access control for editing and approval.</li>
          <li>Change logs are auto-generated and downloadable as PDFs.</li>
          <li>Selenium automation used for end-to-end testing of critical workflows.</li>
        </ul>
      </section>

      {/* Images in 2x2 Grid */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Application Snapshots</h2>
        <div style={styles.grid}>
          <div style={styles.gridItem}>
            <img
              src={`${basePath}/projects/DB.png`}
              alt="Database Schema"
              style={styles.image}
            />
            <p style={styles.caption}>📊 Database schema designed to support course-semester-role mappings.</p>
          </div>
          <div style={styles.gridItem}>
            <img
              src={`${basePath}/projects/login.png`}
              alt="Login Page"
              style={styles.image}
            />
            <p style={styles.caption}>🔐 Secure login portal with role-based redirection.</p>
          </div>
          <div style={styles.gridItem}>
            <img
              src={`${basePath}/projects/dashboard.png`}
              alt="Dashboard"
              style={styles.image}
            />
            <p style={styles.caption}>📋 Dashboard with quick access to semesters, courses, and user roles.</p>
          </div>
          <div style={styles.gridItem}>
            <img
              src={`${basePath}/projects/syllabus.png`}
              alt="Syllabus Page"
              style={styles.image}
            />
            <p style={styles.caption}>📘 Editable syllabus interface with role-based versioning and approval.</p>
          </div>
        </div>
      </section>

      {/* GitHub Link */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Source Code</h2>
        <p>You can explore the complete codebase and setup instructions here:</p>
        <a
          href="https://github.com/duosimply/board-of-studies-csproj" // Replace with your repo URL
          target="_blank"
          rel="noopener noreferrer"
          style={styles.githubButton}
        >
          🔗 View on GitHub
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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "8px",
  },
  caption: {
    marginTop: "0.5rem",
    fontSize: "0.95rem",
    color: "#555",
    textAlign: "center",
  },
  githubButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#24292e",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
