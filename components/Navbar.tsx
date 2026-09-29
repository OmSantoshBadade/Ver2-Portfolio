"use client";

import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const resolved: "light" | "dark" =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    setTheme(resolved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="Om Badade home">
          <span className="brand-mark">OB</span>
          <span>
            <span className="brand-name">Om Badade</span>
            <br />
            <span className="brand-sub">Product | Systems</span>
          </span>
        </Link>

        <nav className="links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle light and dark theme"
          title="Toggle theme"
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        >
          {theme === "light" ? (
            <Sun key="sun" size={20} strokeWidth={1.8} className="theme-icon" />
          ) : (
            <Moon key="moon" size={20} strokeWidth={1.8} className="theme-icon" />
          )}
        </button>
      </div>
    </header>
  );
}
