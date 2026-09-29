export default function ContactPage() {
  return (
    <section id="contact-page" className="page-section">
      <div className="wrap" style={{ minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
        <div className="sec-head" style={{ marginBottom: "50px" }}>
          <span className="sec-tag">CONNECT</span>
          <h2 style={{ fontSize: "3.5rem", margin: "10px 0", background: "linear-gradient(135deg, var(--accent), var(--accent-3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Let's Talk</h2>
          <p style={{ color: "var(--text-dim)", maxWidth: "600px", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Great things are built together. Whether you want to discuss product strategy, analytics, or a new opportunity, my inbox is always open.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", width: "100%", maxWidth: "800px" }}>
          <a href="tel:+919136049280" className="fact-card hover-lift" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", transition: "transform 0.2s" }}>
            <span style={{ fontSize: "2rem", marginBottom: "10px" }}>📞</span>
            <span style={{ fontWeight: "600", color: "var(--text)", marginBottom: "4px" }}>Phone</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>+91 91360 49280</span>
          </a>

          <a href="mailto:om.badade@gmail.com" className="fact-card hover-lift" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", transition: "transform 0.2s" }}>
            <img src="/Mail Logo.png" alt="Email" style={{ width: 24, height: 24, marginBottom: "10px" }} />
            <span style={{ fontWeight: "600", color: "var(--text)", marginBottom: "4px" }}>Email</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>om.badade@gmail.com</span>
          </a>

          <a href="https://linkedin.com/in/ombadade234" target="_blank" rel="noopener noreferrer" className="fact-card hover-lift" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", transition: "transform 0.2s" }}>
            <img src="/linkedin logo.png" alt="LinkedIn" style={{ width: 24, height: 24, marginBottom: "10px" }} />
            <span style={{ fontWeight: "600", color: "var(--text)", marginBottom: "4px" }}>LinkedIn</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Let's connect</span>
          </a>

          <a href="https://github.com/OmSantoshBadade" target="_blank" rel="noopener noreferrer" className="fact-card hover-lift" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px", transition: "transform 0.2s" }}>
            <img src="/Github logo.png" alt="GitHub" style={{ width: 24, height: 24, marginBottom: "10px" }} />
            <span style={{ fontWeight: "600", color: "var(--text)", marginBottom: "4px" }}>GitHub</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>View my code</span>
          </a>
        </div>
      </div>
    </section>
  );
}