import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Cpu,
  FileText,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "compliance",
    icon: FileText,
    badge: "Compliance & Legal",
    tagline: "Stay Legal, Stay Focused.",
    title: "Business Compliance & Registration",
    description:
      "Handle every legal requirement with confidence. We manage your compliance end-to-end so you can focus on building your business, not paperwork.",
    benefits: [
      "GST Registration & Monthly/Quarterly Returns",
      "MSME/Udyam Registration Certificate",
      "ROC Filing & Annual Compliance",
      "FSSAI, Trade, and Business Licenses",
      "Labour Law Compliance & EPF/ESIC Registration",
    ],
    steps: [
      {
        num: "01",
        label: "Document Collection",
        desc: "Share required documents via our secure portal — PAN, Aadhaar, business details.",
      },
      {
        num: "02",
        label: "Filing & Verification",
        desc: "Our CA experts review, prepare, and file all documents with the relevant authority.",
      },
      {
        num: "03",
        label: "Certificate Delivery",
        desc: "Receive your certificates digitally within 3–5 working days with zero follow-up needed.",
      },
    ],
    outcomes: [
      "100% legal compliance guarantee",
      "Zero penalty risk with expert CA backing",
      "Dedicated relationship manager",
    ],
    cta: "Get Compliance Help",
    ctaOcid: "services.compliance.cta_button",
    bgAlt: false,
  },
  {
    id: "funding",
    icon: IndianRupee,
    badge: "Funding & Finance",
    tagline: "Right Funding at the Right Time.",
    title: "Business Funding & Finance",
    description:
      "India's MSMEs deserve capital without complexity. We connect you to the right lenders, schemes, and grants — and guide every step of the application.",
    benefits: [
      "Bank Loan Facilitation (up to ₹10 Crore)",
      "CGTMSE Collateral-Free Guarantee Scheme",
      "Pradhan Mantri MUDRA Yojana (PMMY)",
      "Government Subsidy & Grant Applications",
      "DPR & Detailed Project Report Preparation",
    ],
    steps: [
      {
        num: "01",
        label: "Eligibility Assessment",
        desc: "We analyse your business profile, turnover, and credit score to identify best-fit funding options.",
      },
      {
        num: "02",
        label: "Document Preparation",
        desc: "Expertly prepared loan files — balance sheets, projections, collateral docs — to maximise approval chances.",
      },
      {
        num: "03",
        label: "Application & Follow-up",
        desc: "We submit to the right lenders and follow up until disbursement — no more chasing banks yourself.",
      },
    ],
    outcomes: [
      "85%+ loan approval rate across all clients",
      "Faster disbursement — avg. 18 working days",
      "Best-in-market terms negotiated for you",
    ],
    cta: "Check Loan Eligibility",
    ctaOcid: "services.funding.cta_button",
    bgAlt: true,
  },
  {
    id: "growth",
    icon: TrendingUp,
    badge: "Growth & Advisory",
    tagline: "Scale Smart, Grow Faster.",
    title: "Business Growth & Advisory",
    description:
      "Move beyond survival mode. Our growth strategists help you enter new markets, win government contracts, and build a brand that stands apart in a crowded market.",
    benefits: [
      "Market Expansion Strategy & Execution",
      "GeM Portal Registration & Government Tender Bidding",
      "Export Promotion — APEDA, FIEO Handholding",
      "Digital Marketing Setup & Brand Building",
      "Strategic Partnership & Buyer Introductions",
    ],
    steps: [
      {
        num: "01",
        label: "Business Audit",
        desc: "Deep-dive analysis of your strengths, gaps, and market opportunities with a 360° review.",
      },
      {
        num: "02",
        label: "Growth Roadmap",
        desc: "Personalised 90-day action plan with clear milestones, budgets, and measurable targets.",
      },
      {
        num: "03",
        label: "Implementation Support",
        desc: "Hands-on support from our team — from GeM bidding to social media — so you execute with confidence.",
      },
    ],
    outcomes: [
      "3× average revenue growth within 18 months",
      "Access to 500+ government buyers on GeM",
      "Export readiness in 60 days",
    ],
    cta: "Book Growth Consultation",
    ctaOcid: "services.growth.cta_button",
    bgAlt: false,
  },
  {
    id: "tools",
    icon: Cpu,
    badge: "Digital Tools",
    tagline: "Tech-Powered Tools for Modern MSMEs.",
    title: "Digital Tools & Smart Platform",
    description:
      "Stop guessing which schemes you qualify for. Our AI-powered platform instantly matches your business profile to 600+ government schemes, schemes, and compliance deadlines.",
    benefits: [
      "MSME Scheme Discovery Engine (600+ schemes)",
      "Smart Eligibility Calculator — instant results",
      "Secure Document Vault & e-Locker",
      "Compliance Calendar with deadline alerts",
      "GST Invoicing & Business Health Scorecard",
    ],
    steps: [
      {
        num: "01",
        label: "Sign Up Free",
        desc: "Create your eMSME account in under 2 minutes — no credit card required.",
      },
      {
        num: "02",
        label: "Complete Business Profile",
        desc: "Enter your business type, turnover, location, and sector — takes just 5 minutes.",
      },
      {
        num: "03",
        label: "Get Personalized Matches",
        desc: "Instantly see every scheme, loan, and subsidy you qualify for, with step-by-step apply guides.",
      },
    ],
    outcomes: [
      "Save 20+ hours per month on compliance tasks",
      "Never miss a filing deadline again",
      "Discover ₹5–50 lakh in untapped government schemes",
    ],
    cta: "Try Free Tools",
    ctaOcid: "services.tools.cta_button",
    bgAlt: true,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Assessment",
    desc: "We analyse your business health, compliance status, and growth goals.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A personalised action plan tailored to your sector, size, and ambition.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our experts handle filings, applications, and processes end-to-end.",
  },
  {
    num: "04",
    title: "Growth",
    desc: "Ongoing support, monitoring, and advisory to keep your business scaling.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceSectionHero() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="services.hero.section"
      className="gradient-hero py-20 sm:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
          style={{ background: "rgba(255,107,0,0.2)", color: "#FF6B00" }}
        >
          Our Services
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Comprehensive Support for Every Stage of Your MSME Journey
        </h1>
        <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          From day-one registration to multi-crore expansion — eMSME delivers
          end-to-end services, expert advisory, and smart digital tools under
          one roof.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#compliance"
            data-ocid="services.hero.primary_button"
            className="btn-primary inline-flex items-center justify-center gap-2 text-base"
          >
            Explore All Services <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            data-ocid="services.hero.secondary_button"
            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-smooth hover:bg-white/20 text-base"
          >
            Talk to a Service Expert
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const ref = useScrollAnimation<HTMLElement>();
  const isReversed = index % 2 !== 0;

  return (
    <section
      id={service.id}
      ref={ref}
      data-ocid={`services.${service.id}.section`}
      className={`py-16 sm:py-24 ${
        service.bgAlt ? "bg-card" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`flex flex-col ${
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 lg:gap-16 items-start`}
        >
          {/* Left: description & benefits */}
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
            >
              {service.badge}
            </span>
            <p
              className="font-display text-sm font-semibold mb-2"
              style={{ color: "#FF6B00" }}
            >
              {service.tagline}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#FF6B00" }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/contact"
              data-ocid={service.ctaOcid}
              className="btn-primary inline-flex items-center gap-2"
            >
              {service.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: process steps + outcomes card */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Process steps */}
            <div className="rounded-2xl border border-border bg-background p-7">
              <h3 className="font-display text-lg font-bold text-foreground mb-6">
                How It Works
              </h3>
              <div className="space-y-5">
                {service.steps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
                      style={{
                        background: "rgba(255,107,0,0.12)",
                        color: "#FF6B00",
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground mb-1">
                        {step.label}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div
              className="rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.32 0.18 260) 0%, oklch(0.25 0.15 260) 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5" style={{ color: "#FF6B00" }} />
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  Results You Can Expect
                </h3>
              </div>
              <ul className="space-y-3">
                {service.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-center gap-3 text-white/90 text-sm"
                  >
                    <BadgeCheck
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "#FF6B00" }}
                    />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessOverview() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="services.process.section"
      className="py-16 sm:py-24"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.32 0.18 260) 0%, oklch(0.22 0.14 260) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,107,0,0.2)", color: "#FF6B00" }}
          >
            Our Approach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            From First Call to Lasting Growth
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A structured 4-step process ensures every client gets consistent,
            measurable outcomes — no matter the service.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              data-ocid={`services.process.item.${i + 1}`}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-5"
                style={{ background: "rgba(255,107,0,0.2)", color: "#FF6B00" }}
              >
                {step.num}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                {step.desc}
              </p>
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5"
                  style={{ background: "rgba(255,107,0,0.4)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="services.bottom_cta.section"
      className="py-16 sm:py-24 bg-card"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl px-8 py-14 sm:px-14 sm:py-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #FF6B00 0%, oklch(0.55 0.22 30) 100%)",
          }}
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
          >
            Free Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Our MSME experts will listen to your situation and recommend the
            exact services that will move the needle for your business — at zero
            cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              data-ocid="services.bottom_cta.primary_button"
              className="inline-flex items-center justify-center gap-2 bg-white font-semibold px-8 py-4 rounded-xl transition-smooth hover:shadow-xl text-base"
              style={{ color: "#FF6B00" }}
            >
              Talk to a Service Expert Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/schemes"
              data-ocid="services.bottom_cta.secondary_button"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl transition-smooth hover:bg-white/10 text-base"
            >
              Get a Free Consultation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ServicesPage() {
  return (
    <div data-ocid="services.page">
      <ServiceSectionHero />
      {SERVICES.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
      <ProcessOverview />
      <BottomCTA />
    </div>
  );
}
