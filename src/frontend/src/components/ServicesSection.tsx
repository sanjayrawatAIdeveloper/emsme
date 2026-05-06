import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Cpu, FileText, TrendingUp, Wallet } from "lucide-react";

const SERVICES = [
  {
    icon: FileText,
    title: "Compliance & Filings",
    bullets: [
      "GST Registration & Filing",
      "Income Tax Returns",
      "Business Registration",
      "MCA Filings",
    ],
    href: "/services",
  },
  {
    icon: Wallet,
    title: "Funding & Finance",
    bullets: [
      "CGTMSE Collateral-Free Loans",
      "DPR & Project Reports",
      "Credit Score Improvement",
      "Working Capital Finance",
    ],
    href: "/services",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    bullets: [
      "GeM Portal Registration",
      "Tender Services & Bidding",
      "HR & Payroll Support",
      "Marketing & Branding",
    ],
    href: "/services",
  },
  {
    icon: Cpu,
    title: "Digital Tools",
    bullets: [
      "MSME Compliance Calendar",
      "Smart GST Invoicing",
      "Business Health Analyzer",
      "Scheme Discovery Report",
    ],
    href: "/services",
  },
];

export function ServicesSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.services.section"
      className="py-16 sm:py-24 bg-card"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From compliance to funding — we cover every aspect of MSME growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              data-ocid="home.services.card"
              className="group rounded-2xl border border-border p-7 bg-background card-hover flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: "rgba(255,107,0,0.1)" }}
              >
                <service.icon
                  className="w-6 h-6"
                  style={{ color: "#FF6B00" }}
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2 mb-6 flex-1">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#FF6B00" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                data-ocid="home.services.explore_link"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-smooth hover:gap-3"
                style={{ color: "#FF6B00" }}
              >
                Explore Service <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
