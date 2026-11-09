"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "PM" | "Analytics" | "Tech" | "Others";

interface Project {
  id: string;
  num: string;
  title: string;
  description: string;
  categories: Category[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  linkText: string;
  linkHref: string;
  isCompact?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "cibilize",
    num: "01",
    title: "CIBILIZE",
    description: "A full-stack financial assistant that reads a user's raw bank statement and turns it into a credit-card recommendation, spending breakdown, and eligibility checks.",
    categories: ["PM", "Tech"],
    image: "/cibilize-hero.png",
    imageAlt: "CIBILIZE workflow dashboard screenshot",
    imagePosition: "center top",
    linkText: "Live project →",
    linkHref: "https://cibilize.vercel.app/app/credit-cards",
  },
  {
    id: "in-transit",
    num: "02",
    title: "In-Transit Incident Analysis Model",
    description: "Built a Python + Streamlit workflow that replaced slow manual incident reporting with automated analysis, region-wise insight generation, and executive reporting support.",
    categories: ["Analytics"],
    image: "/in-transit-dashboard.png",
    imageAlt: "In-Transit Incident Analysis dashboard showing historic accident trends",
    imagePosition: "center top",
    linkText: "GitHub repo",
    linkHref: "https://github.com/OmSantoshBadade/In-Transit-Incident-Analysis-Model",
  },
  {
    id: "smart-manufacturing",
    num: "03",
    title: "Smart Manufacturing Production Optimizer",
    description: "An AI-powered production optimization system that uses machine learning to predict equipment failures, optimize maintenance schedules, and improve overall equipment effectiveness (OEE) in manufacturing plants.",
    categories: ["Tech", "Analytics"],
    image: "/Smart%20Manufacturing%20Production%20Optimizer.png",
    imageAlt: "Smart Manufacturing Production Optimizer dashboard",
    imagePosition: "center top",
    linkText: "GitHub repo",
    linkHref: "https://github.com/OmSantoshBadade/Smart-Manufacturing-Production-Optimizer",
  },
  {
    id: "brain-tumor",
    num: "04",
    title: "Brain Tumor Detection",
    description: "Created an image-processing based detection flow using Python and OpenCV to highlight abnormalities in MRI scans.",
    categories: ["Tech"],
    image: "/brain%20tumor%20detection.png",
    imageAlt: "Brain tumor detection project image",
    imagePosition: "center top",
    linkText: "GitHub repo",
    linkHref: "https://github.com/OmSantoshBadade/Brain-Tumor-Detection",
    isCompact: true,
  },
  {
    id: "heart-stroke",
    num: "05",
    title: "Heart Stroke Detection",
    description: "Applied ensemble ML and predictive modeling to assess stroke risk using patient health records and imbalanced dataset handling.",
    categories: ["Analytics"],
    image: "/heart%20strock%20detection%20model%20.png",
    imageAlt: "Heart stroke detection project image",
    imagePosition: "center top",
    linkText: "GitHub repo",
    linkHref: "https://github.com/OmSantoshBadade/Heart-Stroke-Detection",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filterBtns: Category[] = ["All", "PM", "Analytics", "Tech", "Others"];

  const filteredProjects = PROJECTS.filter(
    (proj) => activeCategory === "All" || proj.categories.includes(activeCategory)
  );

  return (
    <section id="projects" className="page-section">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "40px" }}>
          <span className="sec-tag">FEATURED WORK</span>
          <h2>🚀 Projects</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
            A collection of my major works — blending research, AI innovation, and real-world business impact.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
          {filterBtns.map((cat) => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? "btn-primary" : "btn-ghost"}`}
              style={{ borderRadius: "20px", padding: "8px 16px", fontSize: "14px" }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/*
  Case Study Placeholder
        <div style={{ padding: "40px", marginBottom: "60px", border: "1px dashed var(--border-strong)", borderRadius: "16px" }}>
             <h3 style={{ color: "var(--text-muted)" }}>Case Studies & Project Teardowns</h3>
             <p style={{ color: "var(--text-dim)", maxWidth: "500px", margin: "10px 0 0" }}>
               Detailed case studies and project teardowns will be added here soon.
             </p>
        </div>
*/}
{/** TODO: Case Study Placeholder commented out until real case studies are ready */}

        <div className="proj-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {filteredProjects.length === 0 ? (
            <p style={{ color: "var(--text-dim)", gridColumn: "1 / -1", padding: "40px 0", textAlign: "center" }}>
              No projects found in this category.
            </p>
          ) : (
            filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className={`proj-card ${proj.isCompact ? "proj-card--compact" : ""}`}
                style={{ padding: "20px" }}
              >
                <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
                  <Image
                    src={proj.image}
                    alt={proj.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, 500px"
                    style={{ objectFit: "cover", objectPosition: proj.imagePosition || "center top" }}
                  />
                </div>
                <div className="proj-num">{proj.num}</div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{proj.title}</h3>
                <p style={{ fontSize: "14px" }}>
                  {proj.description}
                </p>
                <div className="proj-tags">
                  {proj.categories.map((c) => (
                    <span key={c} className="proj-tag">{c}</span>
                  ))}
                </div>
                <div className="proj-links">
                  <a href={proj.linkHref} target="_blank" rel="noreferrer">{proj.linkText}</a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
