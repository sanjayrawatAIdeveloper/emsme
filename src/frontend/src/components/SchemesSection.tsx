import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Banknote, Briefcase, Star } from "lucide-react";

const SCHEMES = [
  {
    icon: Banknote,
    title: "CGTMSE Loan Guarantee",
    description:
      "Collateral-free loans up to ₹2 crore with government guarantee for MSMEs.",
    badge: "Up to ₹2 Crore",
  },
  {
    icon: Briefcase,
    title: "PMEGP Employment Scheme",
    description:
      "Subsidy of 15–35% for new manufacturing and service enterprises.",
    badge: "Up to 35% Subsidy",
  },
  {
    icon: Star,
    title: "State & Central Subsidies",
    description:
      "Capital, technology, and export subsidies for eligible MSMEs across India.",
    badge: "200+ Available",
  },
];

export function SchemesSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.schemes.section"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "#0A2540" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "rgba(255,107,0,0.15)", color: "#FF6B00" }}
          >
            Government Schemes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Access{" "}
            <span style={{ color: "#FF6B00" }}>600+ Government Schemes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover schemes you qualify for — CGTMSE loans, PMEGP grants,
            subsidies, and more
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {SCHEMES.map((scheme) => (
            <div
              key={scheme.title}
              data-ocid="home.schemes.card"
              className="rounded-2xl p-7 border card-hover flex flex-col"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(255,107,0,0.15)" }}
              >
                <scheme.icon className="w-6 h-6" style={{ color: "#FF6B00" }} />
              </div>
              <span
                className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 self-start"
                style={{ background: "rgba(255,107,0,0.2)", color: "#FF6B00" }}
              >
                {scheme.badge}
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-3">
                {scheme.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {scheme.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/schemes"
            data-ocid="home.schemes.cta_button"
            className="inline-flex items-center justify-center font-semibold text-base px-10 py-4 rounded-xl transition-smooth hover:opacity-90 active:scale-95 text-white shadow-lg"
            style={{ background: "#FF6B00" }}
          >
            Check Eligible Schemes in 2 Minutes
          </a>
        </div>
      </div>
    </section>
  );
}
