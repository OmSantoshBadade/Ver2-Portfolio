import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <h2><i>&ldquo;Great things are built together.&rdquo;</i><br />Let&apos;s connect !</h2>
          <div className="footer-links">
            <a className="footer-icon-link" href="mailto:om.badade@gmail.com" aria-label="Email Om Badade" title="Email">
              <img src="/Mail Logo.png" alt="" width={30} height={30} />
            </a>
            <a className="footer-icon-link" href="tel:+919136049280" aria-label="Call +91 91360 49280" title="Call +91 91360 49280">
              <Phone size={28} aria-hidden="true" />
            </a>
            <a className="footer-icon-link" href="https://linkedin.com/in/ombadade234" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
              <img src="/linkedin logo.png" alt="" width={30} height={30} />
            </a>
            <a className="footer-icon-link" href="https://github.com/OmSantoshBadade" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub">
              <img src="/Github logo.png" alt="" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className="foot-note">
          <span>Om Badade · Mumbai, India</span>
          <span>Product-minded builder and operator</span>
        </div>
      </div>
    </footer >
  );
}
