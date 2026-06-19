import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const LOGO_IMG =
  "https://customer-assets.emergentagent.com/job_glc-premium-redesign/artifacts/fmsli88s_High-quality%20updated%20logo.png";

export const Eyebrow = ({ children, light = false }) => (
  <p
    className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
      light ? "text-[#d6bf8e]" : "text-[#b08850]"
    }`}
  >
    <span
      className={`inline-block w-[42px] h-px align-middle mr-3 opacity-60 ${
        light ? "bg-[#d6bf8e]" : "bg-[#b08850]"
      }`}
    />
    {children}
  </p>
);

export function SiteHeader({ tone = "light" }) {
  const { pathname } = useLocation();
  const isDark = tone === "dark";

  const linkClass = (active) =>
    `glc-nav-link relative ${active ? "text-[#13231a] font-semibold" : ""}`;

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-40 ${
        isDark ? "text-[#faf7f1]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-7 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#dde8de] overflow-hidden shadow-sm">
            <img src={LOGO_IMG} alt="GLC Great Lawn Cuts logo" className="h-10 w-10 object-contain" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="glc-serif text-xl text-[#1c3320]">GLC</span>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#3a4044]">
              Great Lawn Cuts
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          <Link to="/" className={linkClass(pathname === "/")} data-testid="nav-home">Home</Link>
          <Link to="/services" className={linkClass(pathname === "/services")} data-testid="nav-services">Services</Link>
          <Link to="/work" className={linkClass(pathname === "/work")} data-testid="nav-work">My Work</Link>
          <Link to="/#contact" className="glc-nav-link" data-testid="nav-contact">Contact</Link>
        </nav>

        <a
          href="tel:720-434-0934"
          className="hidden md:inline-flex glc-btn-ghost"
          data-testid="nav-cta"
        >
          (720) 434-0934
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#13231a] text-[#f3ecdc]/85 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 overflow-hidden">
            <img src={LOGO_IMG} alt="GLC Great Lawn Cuts logo" className="h-9 w-9 object-contain" />
          </span>
          <div className="leading-tight">
            <p className="glc-serif text-lg text-[#faf7f1]">GLC Great Lawn Cuts</p>
            <p className="text-xs tracking-[0.22em] uppercase text-[#f3ecdc]/60">
              Central Park · Commerce City
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="glc-footer-link" data-testid="footer-home">Home</Link>
          <Link to="/services" className="glc-footer-link" data-testid="footer-services">Services</Link>
          <Link to="/work" className="glc-footer-link" data-testid="footer-work">My Work</Link>
        </div>
        <p className="text-sm text-[#f3ecdc]/70" data-testid="footer-copyright">
          © 2026 GLC Lawn Care. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:720-434-0934" className="glc-footer-link text-sm" data-testid="footer-phone">
            (720) 434-0934
          </a>
          <a
            href="mailto:glcgreatlawncuts@gmail.com"
            className="glc-footer-link text-sm"
            data-testid="footer-email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export function CallCTA({ children = "Text or call me", className = "" }) {
  return (
    <a
      href="tel:720-434-0934"
      className={`glc-btn-primary ${className}`}
      data-testid="cta-call"
    >
      {children}
      <ArrowRight className="glc-arrow" size={18} aria-hidden="true" />
    </a>
  );
}
