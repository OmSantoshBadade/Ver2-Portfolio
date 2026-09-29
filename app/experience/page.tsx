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
              <Image src="/bharat-petroleum--600.png" alt="BPCL Logo" fill style={{ objectFit: "contain", padding: "8px" }} />
            </div>
            <div>
              <div className="t-date">Jun 2025 – Aug 2025</div>
              <h3>Digital Solutions &amp; Business Analyst Intern</h3>
              <div className="t-org">Bharat Petroleum Corporation Ltd · Fortune Global 500</div>
              <ul>
                <li>Consolidated 30+ operational, financial, and safety metrics into the BPCL Fact Sheet 2025, now used for executive and stakeholder reporting.</li>
                <li>Delivered the analysis in the Incident Analysis Report Booklet 2025 by identifying company-wide HSSE trends across 2 years of data.</li>
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
              <div className="t-org">Suvidha Foundation</div>
              <ul>
                <li>Enabled a pilot of 100+ student profiles and 10+ organization accounts by building and integrating RESTful APIs in Flask + MySQL.</li>
                <li>Secured 110+ accounts on an internship discovery platform by implementing authentication and role-based access control across 2–3 user roles, with 0 access issues during the pilot.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "white", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/GDG Logo.png" alt="GDG Logo" fill style={{ objectFit: "contain", padding: "8px" }} />
            </div>
            <div>
              <div className="t-date">Oct 2024 – Sep 2025</div>
              <h3>Technical Lead</h3>
              <div className="t-org">Google Developer Groups on Campus, VIT</div>
              <ul>
                <li>Led and mentored a 9-member Technical Core Team, overseeing roadmaps and end-to-end project execution.</li>
                <li>Coordinated flagship initiatives with the Flutter Roadshow team, engaging 1200+ attendees through expert workshops and mentorship.</li>
                <li>Delivered SPECTRUM, a week-long flagship event, with 8 tech events and 500+ total participants by planning the schedule and running logistics.</li>
                <li>Led and hosted the Google Summer of Code (GSoC) Guidance Session with 100+ attendees, managing collaborations with Google Developer Experts and industry professionals to meet project deadlines.</li>
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
              <div className="t-org">Student Council, VIT</div>
              <ul>
                <li>Organized and Managed multiple high-footfall events including War of DJ and Musical Band Competition featuring inter-band student performances for the institute's flagship cultural fest, VERVE.</li>
              </ul>
            </div>
          </div>

          <div className="t-item" style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "12px", background: "white", border: "1px solid var(--border-strong)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
              <Image src="/seva.png" alt="Seva Sahayog Logo" fill style={{ objectFit: "contain", padding: "8px" }} />
            </div>
            <div>
              <div className="t-date">Jan 2023 – Feb 2023</div>
              <h3>Student Teacher</h3>
              <div className="t-org">Seva Sahayog Foundation</div>
              <ul>
                <li>Mentored underprivileged children in mathematics and science.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
