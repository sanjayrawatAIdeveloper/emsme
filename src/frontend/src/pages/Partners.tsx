import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BookOpen,
  Building2,
  CheckCircle2,
  IndianRupee,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "291+", label: "Total Partners" },
  { value: "47+", label: "Bank Tie-ups" },
  { value: "180+", label: "CA/CS Professionals" },
  { value: "15+", label: "State Govt Links" },
];

const bankingPartners = [
  {
    initials: "SBI",
    name: "State Bank of India",
    color: "#1a3c6e",
    textColor: "#ffffff",
  },
  {
    initials: "BOB",
    name: "Bank of Baroda",
    color: "#e65c00",
    textColor: "#ffffff",
  },
  {
    initials: "PNB",
    name: "Punjab National Bank",
    color: "#c0392b",
    textColor: "#ffffff",
  },
  {
    initials: "HDFC",
    name: "HDFC Bank",
    color: "#8b1a2c",
    textColor: "#ffffff",
  },
  {
    initials: "ICICI",
    name: "ICICI Bank",
    color: "#e67e22",
    textColor: "#ffffff",
  },
  {
    initials: "UBI",
    name: "Union Bank of India",
    color: "#6c3483",
    textColor: "#ffffff",
  },
  {
    initials: "CNB",
    name: "Canara Bank",
    color: "#1e6b3c",
    textColor: "#ffffff",
  },
  { initials: "SIDBI", name: "SIDBI", color: "#0a2540", textColor: "#ffffff" },
  {
    initials: "NABARD",
    name: "NABARD",
    color: "#27643f",
    textColor: "#ffffff",
  },
  {
    initials: "AXIS",
    name: "Axis Bank",
    color: "#6d1421",
    textColor: "#ffffff",
  },
];

const govtBodies = [
  {
    initials: "MoMSME",
    name: "Ministry of MSME",
    color: "#1a2f5e",
    textColor: "#ffffff",
  },
  { initials: "NSIC", name: "NSIC", color: "#e65c00", textColor: "#ffffff" },
  { initials: "KVIC", name: "KVIC", color: "#1b4d2e", textColor: "#ffffff" },
  { initials: "APEDA", name: "APEDA", color: "#2e7d32", textColor: "#ffffff" },
  { initials: "FIEO", name: "FIEO", color: "#1565c0", textColor: "#ffffff" },
  { initials: "CII", name: "CII", color: "#1a2f5e", textColor: "#ffffff" },
  { initials: "FICCI", name: "FICCI", color: "#0d47a1", textColor: "#ffffff" },
  { initials: "ACH", name: "ASSOCHAM", color: "#b71c1c", textColor: "#ffffff" },
  {
    initials: "MSME-DI",
    name: "MSME Dev. Institutes",
    color: "#e65c00",
    textColor: "#ffffff",
  },
  {
    initials: "GeM",
    name: "GEM Portal",
    color: "#00695c",
    textColor: "#ffffff",
  },
];

const professionalTypes = [
  {
    icon: IndianRupee,
    count: "120+",
    title: "Chartered Accountants",
    desc: "GST, taxation, audit, startup compliance",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: BookOpen,
    count: "45+",
    title: "Company Secretaries",
    desc: "Incorporation, ROC filings, legal compliance",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    count: "85+",
    title: "Financial Advisors",
    desc: "Loan structuring, subsidy claims, fundraising",
    accent: "text-[oklch(0.55_0.18_140)]",
    bg: "bg-[oklch(0.55_0.18_140)]/10",
  },
];

const professionals = [
  {
    initials: "RS",
    name: "Ravi Sharma",
    city: "Delhi",
    spec: "GST & Startup Compliance",
    exp: "14 yrs",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    city: "Mumbai",
    spec: "MSME Loan Structuring",
    exp: "11 yrs",
  },
  {
    initials: "AK",
    name: "Arjun Kumar",
    city: "Bengaluru",
    spec: "Company Incorporation",
    exp: "9 yrs",
  },
  {
    initials: "SV",
    name: "Sunita Verma",
    city: "Pune",
    spec: "Subsidy Claims & CGTMSE",
    exp: "12 yrs",
  },
  {
    initials: "MR",
    name: "Manish Rao",
    city: "Hyderabad",
    spec: "Export Finance & APEDA",
    exp: "16 yrs",
  },
  {
    initials: "DT",
    name: "Deepa Thomas",
    city: "Chennai",
    spec: "ROC Filings & MCA21",
    exp: "8 yrs",
  },
];

const techPartners = [
  {
    initials: "DL",
    name: "DigiLocker",
    color: "#1565c0",
    desc: "Digital document vault",
  },
  {
    initials: "MCA",
    name: "MCA21 Portal",
    color: "#0a2540",
    desc: "Company registration",
  },
  {
    initials: "GST",
    name: "GST Portal",
    color: "#1b5e20",
    desc: "Tax filing & compliance",
  },
  {
    initials: "UDY",
    name: "UDYAM Portal",
    color: "#e65c00",
    desc: "MSME registration",
  },
  {
    initials: "SVN",
    name: "PM SVANidhi",
    color: "#6a1b9a",
    desc: "Street vendor micro-credit",
  },
  {
    initials: "JS",
    name: "Jan Samarth Portal",
    color: "#00695c",
    desc: "Credit-linked govt schemes",
  },
];

const benefits = [
  {
    icon: IndianRupee,
    title: "Revenue Share",
    desc: "Earn 15–25% commission on every successfully closed case. Transparent, timely payouts.",
  },
  {
    icon: Users,
    title: "Client Access",
    desc: "Tap into our database of 90+ lakh registered MSMEs and receive warm referrals.",
  },
  {
    icon: Star,
    title: "Co-Branding",
    desc: "Joint webinars, co-branded marketing materials, and presence in our partner directory.",
  },
  {
    icon: BookOpen,
    title: "Training Support",
    desc: "Free quarterly training on latest MSME schemes, budget updates, and compliance changes.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function LogoCard({
  initials,
  name,
  color,
  textColor,
}: { initials: string; name: string; color: string; textColor: string }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 flex flex-col items-center gap-3 card-hover cursor-default">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-xs leading-tight text-center"
        style={{ backgroundColor: color, color: textColor }}
      >
        {initials}
      </div>
      <p className="text-xs font-medium text-foreground text-center leading-snug">
        {name}
      </p>
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent mb-4">
      {children}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function PartnersPage() {
  const heroRef = useScrollAnimation<HTMLDivElement>();
  const statsRef = useScrollAnimation<HTMLDivElement>(0.1);
  const bankRef = useScrollAnimation<HTMLDivElement>();
  const govtRef = useScrollAnimation<HTMLDivElement>();
  const prosRef = useScrollAnimation<HTMLDivElement>();
  const techRef = useScrollAnimation<HTMLDivElement>();
  const benefitsRef = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div data-ocid="partners.page">
      {/* ── Hero ── */}
      <section className="gradient-hero py-20 md:py-28">
        <div
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <SectionBadge>Our Partners</SectionBadge>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Backed by India's Most Trusted
            <br />
            <span className="text-accent">
              Financial &amp; Government Institutions
            </span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            291+ partners across banking, government, CA/CS network, and
            technology — working together to power India's MSME growth story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join-us"
              className="btn-primary text-center rounded-xl inline-block"
              data-ocid="partners.become_partner_button"
            >
              Become a Partner
            </a>
            <a
              href="#join-us"
              className="btn-secondary text-center rounded-xl inline-block border border-primary-foreground/30"
              data-ocid="partners.explore_button"
            >
              Explore Partnership Opportunities
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-card border-b border-border">
        <div
          ref={statsRef}
          className="container mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 translate-y-4 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          data-ocid="partners.stats_section"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Banking Partners ── */}
      <section className="py-16 md:py-24 bg-background" id="banking">
        <div
          ref={bankRef}
          className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-12">
            <SectionBadge>Banking &amp; Finance</SectionBadge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Our Banking &amp; Financial Partners
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Collaborating with India's leading public, private, and
              development finance institutions to unlock credit for MSMEs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bankingPartners.map((b, i) => (
              <div key={b.initials} data-ocid={`partners.bank.item.${i + 1}`}>
                <LogoCard {...b} />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            + 37 more regional cooperative &amp; urban banks across India
          </p>
        </div>
      </section>

      {/* ── Government Bodies ── */}
      <section className="py-16 md:py-24 section-alt" id="government">
        <div
          ref={govtRef}
          className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-12">
            <SectionBadge>Government &amp; Associations</SectionBadge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Government Bodies &amp; Industry Associations
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Direct tie-ups with ministries, national corporations, and apex
              industry bodies to bring you schemes straight from the source.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {govtBodies.map((g, i) => (
              <div key={g.initials} data-ocid={`partners.govt.item.${i + 1}`}>
                <LogoCard {...g} />
              </div>
            ))}
          </div>
          <div className="mt-10 bg-card border border-border rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
            <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              eMSME is a registered facilitator with the Ministry of MSME, Govt.
              of India, and an empanelled partner under the MSME Champions
              portal. All schemes listed are verified and updated quarterly.
            </p>
          </div>
        </div>
      </section>

      {/* ── CA/CS Professional Network ── */}
      <section className="py-16 md:py-24 bg-background" id="professionals">
        <div
          ref={prosRef}
          className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-12">
            <SectionBadge>Expert Network</SectionBadge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Our Expert Professional Network
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Every MSME client is matched with a vetted professional who
              understands their industry, location, and growth stage.
            </p>
          </div>

          {/* Professional Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {professionalTypes.map((pt) => (
              <div
                key={pt.title}
                className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${pt.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <pt.icon className={`w-7 h-7 ${pt.accent}`} />
                </div>
                <p className="font-display text-3xl font-bold text-primary mb-1">
                  {pt.count}
                </p>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Profile Cards */}
          <h3 className="font-display text-xl font-semibold text-primary text-center mb-6">
            Meet Some of Our Experts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {professionals.map((p, i) => (
              <div
                key={p.name}
                className="bg-card rounded-2xl border border-border p-5 flex items-start gap-4 card-hover"
                data-ocid={`partners.expert.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-display font-bold text-sm text-primary-foreground shrink-0">
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground truncate">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.city}</p>
                  <p className="text-sm text-foreground/80 mt-1 leading-snug">
                    {p.spec}
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold rounded-full bg-accent/10 text-accent px-2.5 py-0.5">
                    {p.exp} experience
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Partners ── */}
      <section className="py-16 md:py-24 section-alt" id="technology">
        <div
          ref={techRef}
          className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-12">
            <SectionBadge>Technology</SectionBadge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Technology &amp; Platform Partners
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Directly integrated with India's critical digital infrastructure
              so your applications move at the speed of government.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techPartners.map((t, i) => (
              <div key={t.name} data-ocid={`partners.tech.item.${i + 1}`}>
                <div className="bg-card rounded-2xl border border-border p-5 flex flex-col items-center gap-3 card-hover cursor-default">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-xs text-white leading-tight text-center"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <p className="text-xs font-semibold text-foreground text-center">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground text-center leading-snug">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner Benefits ── */}
      <section className="py-16 md:py-24 bg-background" id="join-us">
        <div
          ref={benefitsRef}
          className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
        >
          <div className="text-center mb-12">
            <SectionBadge>Partnership Benefits</SectionBadge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Why Partner with eMSME?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Build a thriving practice serving India's 6.3 crore MSMEs. We
              bring the clients, schemes, and support — you bring the expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
                data-ocid={`partners.benefit.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#partner-cta"
              className="btn-primary rounded-xl inline-block text-base px-8 py-4"
              data-ocid="partners.apply_button"
            >
              Apply to Become a Partner
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="py-20 md:py-28"
        id="partner-cta"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 30) 0%, oklch(0.45 0.2 30) 100%)",
        }}
      >
        <div
          ref={ctaRef}
          className="container mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-6 transition-all duration-700 [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          data-ocid="partners.cta_section"
        >
          <Building2 className="w-12 h-12 text-white/70 mx-auto mb-5" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Join the eMSME Partner Ecosystem.
            <br />
            <span className="text-white/80">Grow Together.</span>
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Whether you're a CA, bank, NGO, or fintech — there's a place for you
            in India's most connected MSME network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-accent font-bold px-8 py-4 rounded-xl transition-smooth hover:bg-white/90 active:scale-95"
              data-ocid="partners.cta_become_partner_button"
            >
              Become a Partner
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-xl transition-smooth hover:bg-white/10 active:scale-95"
              data-ocid="partners.cta_schedule_call_button"
            >
              Schedule a Partnership Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
