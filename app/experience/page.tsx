import { Underline } from "lucide-react";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <section id="experience" className="page-section">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "60px" }}>
          <span className="sec-tag">EXPERIENCE</span>
          <h2>Where I've worked & led</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
            A snapshot of my journey across product, analytics and leadership roles.
          </p>
        </div>

        <div className="timeline" style={{ maxWidth: "800px" }}>
          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "var(--bg-raised)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/bharat-petroleum--600.png" alt="BPCL Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div className="t-date">Jun 2025 – Aug 2025</div>
              <h3>Digital Solutions &amp; Business Analyst Intern</h3>
              <div className="t-org"><strong>Bharat Petroleum Corporation Ltd · Fortune Global 500</strong></div>
              <ul>
                <li>Consolidated <strong>30+</strong> operational, financial, and safety metrics into the <strong>BPCL Fact Sheet 2025</strong>, now used for executive and stakeholder reporting.</li>
                <li>Delivered the analysis in the <strong>Incident Analysis Report Booklet 2025</strong> by identifying company-wide HSSE trends across 2 years of data.</li>
                <li>Cut in-transit incident reporting effort by 75% by gathering requirements from HSSE stakeholders and building a Python + SQLite dashboard that automates region- and state-wise analysis of 5,000+ safety records using SQL aggregations.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "white", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/Suvidha Logo.jpg" alt="Suvidha Logo" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <div className="t-date">Mar 2025 – May 2025</div>
              <h3>Web Development Intern</h3>
              <div className="t-org"><strong>Suvidha Foundation</strong></div>
              <ul>
                <li>Enabled a pilot of <strong>100+</strong> student profiles and <strong>10+</strong> organization accounts by building and in tegrating <strong>RESTful APIs</strong> in Flask + MySQL.</li>
                <li>Secured <strong>110+</strong> accounts on an internship discovery platform by implementing authentication and role-based access control across 2–3 user roles, with 0 access issues during the pilot.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "white", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/GDG Logo.png" alt="GDG Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div className="t-date">Oct 2024 – Sep 2025</div>
              <h3>Technical Lead</h3>
              <div className="t-org"><strong>Google Developer Groups on Campus, VIT</strong></div>
              <ul>
                <li>Led and mentored a <strong>9-member</strong> Technical Core Team, overseeing roadmaps and end-to-end project execution.</li>
                <li>Coordinated flagship initiatives with the <strong>Flutter Roadshow</strong> team, engaging <strong>1200+ attendees</strong> through expert workshops and mentorship.</li>
                <li>Delivered <strong>SPECTRUM</strong>, a week-long flagship event, with <strong>8 tech events</strong> and <strong>500+ total participants</strong> by planning the schedule and running logistics.</li>
                <li>Led and hosted the Google Summer of Code (GSoC) Guidance Session with <strong>100+ attendees</strong>, managing collaborations with Google Developer Experts and industry professionals to meet project deadlines.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "var(--bg-raised)", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/Events Core Logo.jpeg" alt="Student Council Logo" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <div className="t-date">2023 – 2024</div>
              <h3>Events Core</h3>
              <div className="t-org"><strong>Student Council, VIT</strong></div>
              <ul>
                <li>Organized and managed multiple high-footfall events including <strong>War of DJ</strong> and <strong>Musical Band Competition</strong> featuring inter-band student performances for the institute's flagship cultural fest, <strong>VERVE</strong>.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "white", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/seva.png" alt="Seva Sahayog Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div className="t-date">Jan 2023 – Feb 2023</div>
              <h3>Student Teacher</h3>
              <div className="t-org"><strong>Seva Sahayog Foundation</strong></div>
              <ul>
                <li>Taught <strong>30+</strong> underprivileged students in mathematics and science.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
