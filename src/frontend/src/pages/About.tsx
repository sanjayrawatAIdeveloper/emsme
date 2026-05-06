import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Award,
  Building2,
  CheckCircle2,
  Globe2,
  Heart,
  MapPin,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

// --- Data ---

const TRUST_FACTORS = [
  {
    icon: Users,
    value: "10,000+",
    label: "MSMEs Served",
    desc: "Businesses across India have benefited from our services.",
  },
  {
    icon: Award,
    value: "600+",
    label: "Schemes Database",
    desc: "Comprehensive library of central and state government schemes.",
  },
  {
    icon: Shield,
    value: "291+",
    label: "Expert Partners",
    desc: "CAs, CSs, banks, and MSME consultants in our network.",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
    desc: "Of our clients successfully access at least one scheme or subsidy.",
  },
  {
    icon: Globe2,
    value: "28+",
    label: "States Covered",
    desc: "Pan-India reach covering metro, tier-2, and tier-3 cities.",
  },
  {
    icon: Heart,
    value: "\u20b90",
    label: "Zero Upfront Fees",
    desc: "No registration or consultation fee to get started on eMSME.",
  },
];

const TEAM = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "15+ years in MSME financing and government policy. Former SIDBI advisor and recipient of the India MSME Excellence Award 2022. Passionate about making government support truly accessible to every small business owner.",
    initials: "RK",
    color: "#FF6B00",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    bio: "Chartered Accountant with a decade of experience helping MSMEs with compliance, GST, and regulatory filings. Oversees eMSME's end-to-end client delivery and partner coordination.",
    initials: "PS",
    color: "#0A2540",
  },
  {
    name: "Arun Nair",
    role: "Chief Scheme Advisor",
    bio: "Former Ministry of MSME consultant with deep expertise in CGTMSE, PMEGP, and state-level subsidy programs. Leads scheme research, eligibility assessment, and policy updates.",
    initials: "AN",
    color: "#1a6b3c",
  },
];

const TIMELINE = [
  {
    year: "2018",
    title: "eMSME Founded",
    desc: "Launched with a mission to bridge the information gap between MSMEs and government support systems.",
  },
  {
    year: "2019",
    title: "First 1,000 MSMEs",
    desc: "Reached our first 1,000 registered businesses; introduced our scheme discovery tool.",
  },
  {
    year: "2020",
    title: "COVID Relief Drive",
    desc: "Helped 5,000+ businesses access emergency funding, ECLGS loans, and relief schemes during the pandemic.",
  },
  {
    year: "2021",
    title: "50K Users Milestone",
    desc: "Crossed 50,000 active users. Launched the Business Health Score for quick MSME diagnostics.",
  },
  {
    year: "2022",
    title: "291+ Partner Network",
    desc: "Built India's largest MSME support network \u2014 banks, CAs, CSs, and government nodal agencies.",
  },
  {
    year: "2023",
    title: "Pan-India Expansion",
    desc: "Went live in all 28 states, introducing regional-language support and state-specific scheme libraries.",
  },
  {
    year: "2024",
    title: "AI-Powered Matching",
    desc: "Launched our AI-driven scheme matching engine \u2014 delivering personalized scheme reports in under 2 minutes.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Target,
    title: "Expert Guidance",
    desc: "Dedicated scheme advisors who understand your business category, turnover, and goals \u2014 not generic chatbots.",
  },
  {
    icon: Zap,
    title: "Digital-First Platform",
    desc: "Everything online \u2014 scheme discovery, document checklists, application status tracking, and expert chat.",
  },
  {
    icon: MapPin,
    title: "Pan-India Reach",
    desc: "Serving MSMEs in metro cities, tier-2 towns, and rural districts across all 28 states and UTs.",
  },
];

// --- Sections ---

function HeroBanner() {
  return (
    <section
      data-ocid="about.hero.section"
      className="relative py-20 sm:py-28 flex items-center overflow-hidden"
      style={{ background: "#0A2540" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/70 border border-white/20 mb-6">
          <Building2 className="w-3.5 h-3.5" style={{ color: "#FF6B00" }} />
          About eMSME
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
          We\u2019re On a Mission to Make Every{" "}
          <span style={{ color: "#FF6B00" }}>MSME Unstoppable</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          eMSME is India\u2019s leading digital platform connecting small
          businesses to 600+ government schemes, funding, compliance, and expert
          support \u2014 all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            data-ocid="about.hero.consult_button"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg transition-smooth hover:opacity-90 active:scale-95 text-white shadow-lg"
            style={{ background: "#FF6B00" }}
          >
            Book Free Expert Consultation
          </a>
          <a
            href="/services"
            data-ocid="about.hero.services_button"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg border border-white/30 text-white transition-smooth hover:bg-white/10 active:scale-95"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

function OrganizationOverview() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="about.overview.section"
      className="bg-card py-16 sm:py-24 border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span
              className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
              style={{
                background: "rgba(255,107,0,0.1)",
                color: "#FF6B00",
              }}
            >
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5 leading-tight">
              Built by MSME Experts,{" "}
              <span style={{ color: "#FF6B00" }}>For MSME Owners</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5">
              eMSME was founded after a simple but painful realization: India
              has over 600 government schemes for small businesses, yet 95% of
              MSME owners don\u2019t even know they exist. Banks, bureaucracy,
              and complex eligibility criteria create invisible walls that block
              access to crores of rupees in free funding, subsidies, and credit.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              We built eMSME to tear down those walls \u2014 giving every
              business owner, farmer, artisan, and startup founder equal access
              to the support they deserve.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DIFFERENTIATORS.map((d) => (
                <div
                  key={d.title}
                  className="flex flex-col items-start p-4 rounded-xl border border-border bg-background"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(255,107,0,0.1)" }}
                  >
                    <d.icon className="w-5 h-5" style={{ color: "#FF6B00" }} />
                  </div>
                  <p className="font-display font-semibold text-sm text-foreground mb-1">
                    {d.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "rgba(255,107,0,0.08)" }}
              />
              <div
                className="relative rounded-2xl p-8 text-white"
                style={{ background: "#0A2540" }}
              >
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { val: "10K+", lbl: "MSMEs Served" },
                    { val: "600+", lbl: "Schemes" },
                    { val: "291+", lbl: "Partners" },
                    { val: "98%", lbl: "Success Rate" },
                  ].map((s) => (
                    <div
                      key={s.lbl}
                      className="text-center p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      <p
                        className="font-display text-3xl font-bold mb-1"
                        style={{ color: "#FF6B00" }}
                      >
                        {s.val}
                      </p>
                      <p className="text-white/60 text-xs font-medium">
                        {s.lbl}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 p-4 rounded-xl flex items-start gap-3"
                  style={{ background: "rgba(255,107,0,0.15)" }}
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  <p className="text-white/80 text-sm leading-relaxed">
                    India\u2019s most trusted MSME growth platform \u2014 from
                    registration to expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="about.mission.section"
      className="section-alt py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Purpose & Direction
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Drives Us Every Day
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="rounded-2xl border border-border bg-card card-hover p-8 relative overflow-hidden"
            data-ocid="about.mission.card"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2"
              style={{ background: "rgba(255,107,0,0.07)" }}
              aria-hidden="true"
            />
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "rgba(255,107,0,0.1)" }}
            >
              <Target className="w-7 h-7" style={{ color: "#FF6B00" }} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              To democratize access to government support for every MSME in
              India \u2014 regardless of their size, location, or technical
              know-how \u2014 by making the process simple, digital, and free.
            </p>
          </div>
          <div
            className="rounded-2xl border border-border card-hover p-8 relative overflow-hidden text-white"
            style={{ background: "#0A2540" }}
            data-ocid="about.vision.card"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2"
              style={{ background: "rgba(255,107,0,0.12)" }}
              aria-hidden="true"
            />
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
              style={{ background: "rgba(255,107,0,0.2)" }}
            >
              <Star className="w-7 h-7" style={{ color: "#FF6B00" }} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-white/70 leading-relaxed text-base">
              To become India\u2019s most trusted MSME growth platform by 2030
              \u2014 empowering 1 crore businesses to thrive through technology,
              expert guidance, and seamless access to government resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustFactors() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="about.trust.section"
      className="bg-card py-16 sm:py-24 border-y border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Why Choose eMSME
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Over 10,000 businesses have grown faster with eMSME. Here\u2019s why
            they chose us and stayed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_FACTORS.map((factor, i) => (
            <div
              key={factor.label}
              data-ocid={`about.trust.card.${i + 1}`}
              className="flex flex-col items-start p-6 sm:p-8 rounded-2xl border border-border bg-background card-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,107,0,0.1)" }}
              >
                <factor.icon className="w-6 h-6" style={{ color: "#FF6B00" }} />
              </div>
              <p
                className="font-display text-3xl font-bold mb-1"
                style={{ color: "#FF6B00" }}
              >
                {factor.value}
              </p>
              <p className="font-display font-semibold text-foreground text-base mb-2">
                {factor.label}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {factor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="about.leadership.section"
      className="section-alt py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The People Behind eMSME
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Seasoned experts in MSME finance, government policy, and digital
            business transformation \u2014 united by a single purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              data-ocid={`about.team.card.${i + 1}`}
              className="rounded-2xl border border-border bg-card card-hover p-8 flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-display text-2xl font-bold mb-5 shadow-lg"
                style={{ background: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p
                className="text-sm font-semibold mb-4 px-3 py-1 rounded-full"
                style={{
                  color: "#FF6B00",
                  background: "rgba(255,107,0,0.1)",
                }}
              >
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyTimeline() {
  const ref = useScrollAnimation<HTMLElement>();
  return (
    <section
      ref={ref}
      data-ocid="about.timeline.section"
      className="bg-card py-16 sm:py-24 border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Our Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            6 Years of Empowering MSMEs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From a one-room startup to India\u2019s most comprehensive MSME
            support platform \u2014 here\u2019s how we got here.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ background: "rgba(10,37,64,0.12)" }}
              aria-hidden="true"
            />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  data-ocid={`about.timeline.item.${i + 1}`}
                  className="relative flex items-start gap-6"
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shadow-md"
                    style={{
                      background:
                        i === TIMELINE.length - 1 ? "#FF6B00" : "#0A2540",
                    }}
                  >
                    {item.year}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-background p-5 card-hover">
                    <h3 className="font-display font-bold text-foreground text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      data-ocid="about.cta.section"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "#0A2540" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.05) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.5) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6 text-white/70 border border-white/20">
          Take the Next Step
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl mx-auto">
          Ready to Unlock Your MSME\u2019s{" "}
          <span style={{ color: "#FF6B00" }}>Full Potential?</span>
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join 10,000+ businesses already growing with eMSME. Start with a free
          scheme discovery report \u2014 no registration required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            data-ocid="about.cta.consult_button"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg transition-smooth hover:opacity-90 active:scale-95 text-white shadow-lg"
            style={{ background: "#FF6B00" }}
          >
            Book Free Expert Consultation
          </a>
          <a
            href="/schemes"
            data-ocid="about.cta.report_button"
            className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg border border-white/30 text-white transition-smooth hover:bg-white/10 active:scale-95"
          >
            Generate Scheme Report
          </a>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div data-ocid="about.page">
      <HeroBanner />
      <OrganizationOverview />
      <MissionVision />
      <TrustFactors />
      <LeadershipSection />
      <JourneyTimeline />
      <CTASection />
    </div>
  );
}
