import Image from "next/image";

export default function CertificatesPage() {
  return (
    <section id="certificates" className="page-section">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "40px" }}>
          <span className="sec-tag">CREDENTIALS</span>
          <h2>Certificates 🏅</h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
            Explore my certifications — technical & others.
          </p>
        </div>

        <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          
          <div className="cert" style={{ display: "flex", flexDirection: "column", padding: "16px", background: "var(--bg-raised)", borderRadius: "12px", border: "1px solid var(--border-strong)", transition: "transform 0.2s ease" }}>
            <div style={{ width: "100%", height: "200px", background: "white", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", overflow: "hidden", position: "relative" }}>
              <object data="/Aspire-Certificate-2.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%"></object>
            </div>
            <b style={{ marginBottom: "4px", color: "var(--text)", fontSize: "16px" }}>Harvard / Aspire</b>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>Leadership Program</span>
          </div>

          {/*
          <div className="cert" style={{ display: "flex", flexDirection: "column", padding: "16px", background: "var(--bg-raised)", borderRadius: "12px", border: "1px solid var(--border-strong)", transition: "transform 0.2s ease" }}>
            <div style={{ width: "100%", height: "200px", background: "var(--bg-muted)", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
              [Image Placeholder]
            </div>
            <b style={{ marginBottom: "4px", color: "var(--text)", fontSize: "16px" }}>CodeAcademy</b>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>Product Management: Building a Product Strategy</span>
          </div>
          */}

          <div className="cert" style={{ display: "flex", flexDirection: "column", padding: "16px", background: "var(--bg-raised)", borderRadius: "12px", border: "1px solid var(--border-strong)", transition: "transform 0.2s ease" }}>
            <div style={{ width: "100%", height: "200px", background: "white", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", overflow: "hidden" }}>
              <object data="/McKinsey%20Forward%20Program%20Certificate.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%"></object>
            </div>
            <b style={{ marginBottom: "4px", color: "var(--text)", fontSize: "16px" }}>McKinsey &amp; Company</b>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>Forward Program: Management &amp; Problem Solving</span>
          </div>

          <div className="cert" style={{ display: "flex", flexDirection: "column", padding: "16px", background: "var(--bg-raised)", borderRadius: "12px", border: "1px solid var(--border-strong)", transition: "transform 0.2s ease" }}>
            <div style={{ width: "100%", height: "200px", background: "white", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", overflow: "hidden" }}>
              <object data="/Oracle.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="100%"></object>
            </div>
            <b style={{ marginBottom: "4px", color: "var(--text)", fontSize: "16px" }}>Oracle</b>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>OCI AI Foundation Certification</span>
          </div>

          <div className="cert" style={{ display: "flex", flexDirection: "column", padding: "16px", background: "var(--bg-raised)", borderRadius: "12px", border: "1px solid var(--border-strong)", transition: "transform 0.2s ease" }}>
            <div style={{ width: "100%", height: "200px", background: "white", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", overflow: "hidden", position: "relative" }}>
              <Image src="/Google Cloud.png" alt="Google Cloud Certificate" fill style={{ objectFit: "contain", padding: "16px" }} />
            </div>
            <b style={{ marginBottom: "4px", color: "var(--text)", fontSize: "16px" }}>Google</b>
            <span style={{ fontSize: "14px", color: "var(--text-dim)" }}>Level 3, Generative AI Prompt Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
