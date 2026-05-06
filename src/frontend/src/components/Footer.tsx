import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Schemes", to: "/schemes" },
  { label: "Partners", to: "/partners" },
  { label: "Resources", to: "/resources" },
] as const;

const SERVICES = [
  "GST Filing",
  "CGTMSE Loans",
  "GeM Registration",
  "DPR Reports",
  "Credit Score Improvement",
];

const SOCIAL = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiX, href: "https://twitter.com", label: "Twitter / X" },
  { icon: SiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "emsme.in";

  return (
    <footer
      data-ocid="footer"
      style={{ background: "#0A2540" }}
      className="text-white/80"
    >
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-0.5">
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
            <p className="text-sm leading-relaxed text-white/55">
              Bridging MSMEs with Government Schemes &amp; Growth
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@emsme.in"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  info@emsme.in
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.whatsapp_button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-smooth hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
