"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Coffee, Workflow, Brain, BarChart3, FileSpreadsheet, LineChart } from "lucide-react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiMysql,
  SiSqlite,
  SiFlask,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiNotion,
  SiClickup,
} from "react-icons/si";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="wrap hero-grid">
          <aside className="hero-visual reveal d1" aria-label="Profile image">
            <Image
              src="/ProfilePic.png"
              alt="Om Badade portrait"
              fill
              sizes="(max-width: 820px) 220px, 360px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              priority
            />
          </aside>

          <div className="hero-copy">
            <div className="kicker reveal d1">PRODUCT MANAGEMENT · BUSINESS SYSTEMS</div>
            <p className="hero-greet reveal d2">Hi, I&apos;m</p>
            <h1 className="hero-name reveal d2">Om Badade</h1>
            <div className="hero-role-line reveal d3">
              <span>based in</span>
              <span className="city-highlight">Mumbai, India</span>
            </div>
            <p className="hero-lede reveal d3">
              A builder at the intersection of product thinking, business analysis, and execution, I turn
              ambiguity into product decisions that move the business. I work on problems where strategy, data,
              and delivery need to come together, from internal tooling and process redesign to digital products
              with real business impact.
            </p>
            <div className="hero-cta reveal d4">
              <div className="hero-action-row">
                <Link className="btn btn-primary" href="/projects">See my work →</Link>
                <a className="btn btn-ghost" href="/Om%20Badade's%20JOB%20Resume%20Ver2.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </div>
              <div className="hero-social-links">
                <a href="mailto:om.badade@gmail.com" className="btn btn-ghost">
                  <img src="/Mail Logo.png" alt="" style={{ width: 16, height: 16 }} /> Email
                </a>
                <a href="https://linkedin.com/in/ombadade234" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <img src="/linkedin logo.png" alt="" style={{ width: 16, height: 16 }} /> LinkedIn
                </a>
                <a href="https://github.com/OmSantoshBadade" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <img src="/Github logo.png" alt="" style={{ width: 16, height: 16 }} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="stat-strip reveal d4">
            <div className="stat">
              <div className="num">75%</div>
              <div className="label">drop in manual effort for BPCL&apos;s incident reporting workflow</div>
            </div>
            <div className="stat">
              <div className="num">1,200+</div>
              <div className="label">attendees reached through campus tech events and workshops</div>
            </div>
            <div className="stat">
              <div className="num">10</div>
              <div className="label">people led across a technical team and event execution roadmap</div>
            </div>
            <div className="stat">
              <div className="num">F-500</div>
              <div className="label">experience working inside a Fortune 500 environment</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="page-section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-tag">01 · ABOUT ME</span>
            <h2>From building systems to shaping decisions</h2>
          </div>
          <div className="about-grid reveal">
            <div>
              <p>
                I&apos;m a graduate student with a B.E. in Electronics &amp; Computer Science at Vidyalankar Institute of Technology, Mumbai,
                with a path that&apos;s become increasingly product-focused. I started with code, moved into
                analytics and business problem-solving, and began asking not just “can this be built?” but “why does it matter, and who does it help?”

              </p>
              <p>
                That mindset shapes my work—from streamlining incident reporting at a large energy company,
                to building a fintech product from scratch, to leading technical operations for campus tech events.
              </p>
              <p>
                I enjoy working at the intersection of business, technology,
                and execution: understanding user needs, simplifying processes, supporting better decisions,
                and turning ambiguity into products people can actually use.
              </p>
              <p>
                The common thread is simple: <b>figure out what matters, prioritize what comes next, and make it real.</b>
              </p>
            </div>

            <div className="fact-card">
              <div className="fact-row"><span className="k">Based in</span><span className="v">Mumbai, IN</span></div>
              <div className="fact-row"><span className="k">Studying</span><span className="v">B.E. ECS, VIT</span></div>
              <div className="fact-row"><span className="k">Graduating</span><span className="v">Jun 2026</span></div>
              <div className="fact-row"><span className="k">Recent role</span><span className="v">BA Intern, BPCL</span></div>
              <div className="fact-row"><span className="k">Core strengths</span><span className="v">Analysis · Product · Tech</span></div>
              <div className="fact-row"><span className="k">Built with</span><span className="v">Python · React · SQL</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="case-study" className="page-section">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-tag">02 · FEATURED CASE STUDY</span>
            <h2>Case Study Placeholder</h2>
          </div>

          <div className="spec-block reveal" style={{ padding: "60px", textAlign: "center", border: "1px dashed var(--border-strong)", borderRadius: "16px" }}>
            <h3 style={{ color: "var(--text-muted)" }}>Coming Soon</h3>
            <p style={{ color: "var(--text-dim)", maxWidth: "500px", margin: "10px auto 0" }}>
              The featured case study and project teardowns will be added here soon.
            </p>
          </div>
        </div>
      </section> */}
      {/** TODO: Case Study Placeholder commented out until real case studies are ready */}

      <section id="projects-preview" className="page-section">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: "20px" }}>
            <span className="sec-tag">03 · FEATURED WORK</span>
            <h2>Projects</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
              A collection of my major works — blending research, AI innovation, and real-world business impact.
            </p>
          </div>

          {/* We will show CIBILIZE and one other project here on the homepage */}
          <div className="proj-grid reveal" style={{ textAlign: "left", marginTop: "40px" }}>
            <article className="proj-card">
              <div className="proj-image">
                <Image
                  src="/cibilize-hero.png"
                  alt="CIBILIZE workflow dashboard screenshot"
                  fill
                  sizes="(max-width: 760px) 100vw, 500px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="proj-num">01</div>
              <h3>CIBILIZE</h3>
              <p>
                A full-stack financial assistant that reads a user&apos;s raw bank statement and turns it into a
                credit-card recommendation, spending breakdown, and eligibility checks.
              </p>
              <div className="proj-tags">
                <span className="proj-tag">React</span>
                <span className="proj-tag">Node.js</span>
                <span className="proj-tag">MySQL</span>
                <span className="proj-tag">Gemini API</span>
              </div>
              <div className="proj-links">
                <a href="https://cibilize.vercel.app/app/credit-cards" target="_blank" rel="noreferrer">Live project →</a>
              </div>
            </article>

            <article className="proj-card">
              <div className="proj-image">
                <Image
                  src="/in-transit-dashboard.png"
                  alt="In-Transit Incident Analysis dashboard showing historic accident trends"
                  fill
                  sizes="(max-width: 760px) 100vw, 500px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div className="proj-num">02</div>
              <h3>In-Transit Incident Analysis Model</h3>
              <p>
                Built a Python + Streamlit workflow that replaced slow manual incident reporting with automated analysis,
                region-wise insight generation, and executive reporting support.
              </p>
              <div className="proj-tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">Streamlit</span>
                <span className="proj-tag">SQLite</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/OmSantoshBadade/In-Transit-Incident-Analysis-Model" target="_blank" rel="noreferrer">GitHub repo</a>
              </div>
            </article>
          </div>

          <div className="reveal" style={{ marginTop: "30px" }}>
            <Link href="/projects" className="btn btn-ghost" style={{ borderRadius: "20px" }}>See all projects →</Link>
          </div>
        </div>
      </section>

      <section id="skills-preview" className="page-section">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: "40px" }}>
            <span className="sec-tag">04 · TECH STACK</span>
            <h2>Skills & Tools</h2>
          </div>
          <div className="skill-grid reveal" style={{ display: "flex", justifyContent: "center" }}>
            <div className="skill-col" style={{ width: "100%", maxWidth: "800px" }}>
              <div className="chip-list" style={{ justifyContent: "center", gap: "16px" }}>
                <span className="chip"><SiPython className="chip-icon" /> Python</span>
                <span className="chip"><SiMysql className="chip-icon" /> MySQL</span>
                <span className="chip"><BarChart3 className="chip-icon" /> Power BI</span>
                <span className="chip"><SiReact className="chip-icon" /> React</span>
                <span className="chip">Product Strategy</span>
                <span className="chip">Business Analysis</span>
                <span className="chip"><SiGit className="chip-icon" /> Git</span>
                <span className="chip"><LineChart className="chip-icon" /> Data Viz</span>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: "30px" }}>
            <Link href="/skills" className="btn btn-ghost" style={{ borderRadius: "20px" }}>Explore all skills →</Link>
          </div>
        </div>
      </section>

      <section id="experience-preview" className="page-section">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: "20px" }}>
            <span className="sec-tag">05 · EXPERIENCE</span>
            <h2>Where I&apos;ve worked &amp; led</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
              A snapshot of my journey across product, analytics and leadership roles.
            </p>
          </div>
          <div className="timeline reveal" style={{ marginTop: "40px" }}>
            <div className="t-item">
              <div className="t-date">Jun 2025 – Aug 2025</div>
              <h3>Digital Solutions &amp; Business Analyst Intern</h3>
              <div className="t-org">Bharat Petroleum Corporation Ltd · Fortune Global 500</div>
            </div>
            <div className="t-item">
              <div className="t-date">Mar 2025 – May 2025</div>
              <h3>Web Development Intern</h3>
              <div className="t-org">Suvidha Foundation</div>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: "30px" }}>
            <Link href="/experience" className="btn btn-ghost" style={{ borderRadius: "20px" }}>View full experience →</Link>
          </div>
        </div>
      </section>

    </>
  );
}
