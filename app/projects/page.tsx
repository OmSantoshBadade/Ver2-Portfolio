"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "PM" | "Analytics" | "Tech" | "Others";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filterBtns: Category[] = ["All", "PM", "Analytics", "Tech", "Others"];

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
          <article className="proj-card" style={{ padding: "20px" }}>
            <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
              <Image
                src="/cibilize-hero.png"
                alt="CIBILIZE workflow dashboard screenshot"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="proj-num">01</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>CIBILIZE</h3>
            <p style={{ fontSize: "14px" }}>
              A full-stack financial assistant that reads a user&apos;s raw bank statement and turns it into a
              credit-card recommendation, spending breakdown, and eligibility checks.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">PM</span>
              <span className="proj-tag">Tech</span>
            </div>
            <div className="proj-links">
              <a href="https://cibilize.vercel.app/app/credit-cards" target="_blank" rel="noreferrer">Live project →</a>
            </div>
          </article>

          <article className="proj-card" style={{ padding: "20px" }}>
            <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
              <Image
                src="/in-transit-dashboard.png"
                alt="In-Transit Incident Analysis dashboard showing historic accident trends"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="proj-num">02</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>In-Transit Incident Analysis Model</h3>
            <p style={{ fontSize: "14px" }}>
              Built a Python + Streamlit workflow that replaced slow manual incident reporting with automated analysis,
              region-wise insight generation, and executive reporting support.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">Analytics</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/OmSantoshBadade/In-Transit-Incident-Analysis-Model" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
          </article>

          <article className="proj-card" style={{ padding: "20px" }}>
            <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
              <Image
                src="/Smart%20Manufacturing%20Production%20Optimizer.png"
                alt="Smart Manufacturing Production Optimizer dashboard"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="proj-num">03</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Smart Manufacturing Production Optimizer</h3>
            <p style={{ fontSize: "14px" }}>
              An AI-powered production optimization system that uses machine learning to predict equipment failures,
              optimize maintenance schedules, and improve overall equipment effectiveness (OEE) in manufacturing plants.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">Tech</span>
              <span className="proj-tag">Analytics</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/OmSantoshBadade/Smart-Manufacturing-Production-Optimizer" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
          </article>

          <article className="proj-card proj-card--compact" style={{ padding: "20px" }}>
            <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
              <Image
                src="/brain%20tumor%20detection.png"
                alt="Brain tumor detection project image"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="proj-num">04</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Brain Tumor Detection</h3>
            <p style={{ fontSize: "14px" }}>
              Created an image-processing based detection flow using Python and OpenCV to highlight abnormalities in MRI scans.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">Tech</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/OmSantoshBadade/Brain-Tumor-Detection" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
          </article>

          <article className="proj-card" style={{ padding: "20px" }}>
            <div className="proj-image" style={{ height: "180px", marginBottom: "16px" }}>
              <Image
                src="/heart%20strock%20detection%20model%20.png"
                alt="Heart stroke detection project image"
                fill
                sizes="(max-width: 760px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div className="proj-num">05</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Heart Stroke Detection</h3>
            <p style={{ fontSize: "14px" }}>
              Applied ensemble ML and predictive modeling to assess stroke risk using patient health records and imbalanced dataset handling.
            </p>
            <div className="proj-tags">
              <span className="proj-tag">Analytics</span>
            </div>
            <div className="proj-links">
              <a href="https://github.com/OmSantoshBadade/Heart-Stroke-Detection" target="_blank" rel="noreferrer">GitHub repo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
