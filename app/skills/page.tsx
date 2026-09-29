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

export default function SkillsPage() {
  return (
    <section id="skills" className="page-section">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "40px" }}>
          <span className="sec-tag">TECH STACK & MORE</span>
          <h2>Skills & Tools</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
            The core toolkit I use to analyze data, build dashboards and ship insights.
          </p>
        </div>
        <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          
          <div className="skill-col">
            <h4>Product &amp; Business</h4>
            <div className="chip-list">
              <span className="chip">Product strategy</span>
              <span className="chip">Roadmapping</span>
              <span className="chip">Prioritization</span>
              <span className="chip">Requirements</span>
              <span className="chip">Stakeholder alignment</span>
              <span className="chip">Business analysis</span>
              <span className="chip">Product Lifecycle Management</span>
            </div>
          </div>
          
          <div className="skill-col">
            <h4>Technical</h4>
            <div className="chip-list">
              <span className="chip"><SiPython className="chip-icon" /> Python</span>
              <span className="chip"><Coffee className="chip-icon" /> Java</span>
              <span className="chip"><SiJavascript className="chip-icon" /> JavaScript</span>
              <span className="chip"><SiReact className="chip-icon" /> React</span>
              <span className="chip"><SiMysql className="chip-icon" /> MySQL</span>
              <span className="chip"><SiSqlite className="chip-icon" /> SQLite</span>
              <span className="chip"><SiFlask className="chip-icon" /> Flask</span>
              <span className="chip"><Workflow className="chip-icon" /> REST APIs</span>
              <span className="chip"><SiNodedotjs className="chip-icon" /> Node.js</span>
            </div>
          </div>

          <div className="skill-col">
            <h4>Tools</h4>
            <div className="chip-list">
              <span className="chip"><BarChart3 className="chip-icon" /> Power BI</span>
              <span className="chip"><SiGit className="chip-icon" /> Git</span>
              <span className="chip"><SiGithub className="chip-icon" /> GitHub</span>
              <span className="chip"><SiNotion className="chip-icon" /> Notion</span>
              <span className="chip"><SiClickup className="chip-icon" /> ClickUp</span>
              <span className="chip"><FileSpreadsheet className="chip-icon" /> MS Office</span>
              <span className="chip"><LineChart className="chip-icon" /> Data visualization</span>
            </div>
          </div>

          <div className="skill-col">
            <h4>AI Tools &amp; Technology</h4>
            <div className="chip-list">
              <span className="chip">Gemini API</span>
              <span className="chip">OpenAI API</span>
              <span className="chip">Prompt Engineering</span>
              <span className="chip"><Brain className="chip-icon" /> Machine learning</span>
              <span className="chip">Predictive Modeling</span>
              <span className="chip">NLP</span>
            </div>
          </div>

          <div className="skill-col">
            <h4>Soft Skills</h4>
            <div className="chip-list">
              <span className="chip">Leadership</span>
              <span className="chip">Problem Solving</span>
              <span className="chip">Communication</span>
              <span className="chip">Public Speaking</span>
              <span className="chip">Event Management</span>
              <span className="chip">Mentorship</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
