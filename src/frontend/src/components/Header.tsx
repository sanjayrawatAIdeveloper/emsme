import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Schemes", to: "/schemes" },
  { label: "Partners", to: "/partners" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-ocid="header"
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${scrolled ? "shadow-md border-b border-white/10" : ""}`}
      style={{ background: "#0A2540" }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-0.5 select-none"
            data-ocid="header.logo_link"
          >
            <span
              className="font-display text-2xl font-bold"
              style={{ color: "#FF6B00" }}
            >
              e
            </span>
            <span className="font-display text-2xl font-bold text-white">
              MSME
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`header.nav_${link.label.toLowerCase()}`}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors duration-200"
                activeProps={{ className: "text-sm font-medium text-white" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              data-ocid="header.cta_button"
              className="inline-flex items-center font-semibold text-sm px-5 py-2.5 rounded-lg transition-smooth hover:opacity-90 active:scale-95 text-white"
              style={{ background: "#FF6B00" }}
            >
              Get Free Report
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            data-ocid="header.mobile_menu_toggle"
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-white hover:text-white/70 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          data-ocid="header.mobile_menu"
          className="lg:hidden border-t border-white/10 animate-slide-up"
          style={{ background: "#0A2540" }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                activeProps={{
                  className:
                    "py-2.5 px-3 rounded-lg text-sm font-medium text-white bg-white/10",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              data-ocid="header.mobile_cta_button"
              className="mt-3 text-center font-semibold text-sm px-5 py-2.5 rounded-lg transition-smooth hover:opacity-90 text-white"
              style={{ background: "#FF6B00" }}
            >
              Get Free Report
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
