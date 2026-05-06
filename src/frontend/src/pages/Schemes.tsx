import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronDown,
  Factory,
  Globe,
  Leaf,
  Lightbulb,
  Rocket,
  RotateCcw,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type BusinessType =
  | "Manufacturing"
  | "Trading"
  | "Services"
  | "Agriculture-Allied"
  | "Food Processing";

type Turnover =
  | "Below ₹25 Lakh"
  | "₹25L - ₹1 Cr"
  | "₹1 Cr - ₹5 Cr"
  | "₹5 Cr - ₹50 Cr"
  | "Above ₹50 Cr";

type RegistrationStatus =
  | "Udyam Registered"
  | "MSME Registered"
  | "Not Registered"
  | "Startup India";

type BusinessStage =
  | "Pre-Revenue/Idea"
  | "0-1 Year"
  | "1-3 Years"
  | "3-5 Years"
  | "5+ Years";

type State =
  | "Maharashtra"
  | "Gujarat"
  | "Tamil Nadu"
  | "Delhi"
  | "Karnataka"
  | "UP"
  | "Rajasthan"
  | "West Bengal"
  | "All India";

type SchemeCategory =
  | "All"
  | "Funding & Credit"
  | "Subsidies"
  | "Infrastructure"
  | "Technology"
  | "Export"
  | "Women/SC/ST";

interface Scheme {
  id: string;
  name: string;
  description: string;
  category: Exclude<SchemeCategory, "All">;
  eligibleBusinessTypes: BusinessType[];
  eligibleTurnovers: Turnover[];
  eligibleStages: BusinessStage[];
  eligibleRegistrations: RegistrationStatus[];
  eligibleStates: State[];
  tags: string[];
  amount: string;
  icon: React.ElementType;
}

interface Filters {
  businessType: string;
  turnover: string;
  registration: string;
  stage: string;
  state: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ALL_TURNOVERS: Turnover[] = [
  "Below ₹25 Lakh",
  "₹25L - ₹1 Cr",
  "₹1 Cr - ₹5 Cr",
  "₹5 Cr - ₹50 Cr",
  "Above ₹50 Cr",
];
const ALL_STAGES: BusinessStage[] = [
  "Pre-Revenue/Idea",
  "0-1 Year",
  "1-3 Years",
  "3-5 Years",
  "5+ Years",
];
const ALL_REGISTRATIONS: RegistrationStatus[] = [
  "Udyam Registered",
  "MSME Registered",
  "Not Registered",
  "Startup India",
];
const ALL_STATES: State[] = [
  "Maharashtra",
  "Gujarat",
  "Tamil Nadu",
  "Delhi",
  "Karnataka",
  "UP",
  "Rajasthan",
  "West Bengal",
  "All India",
];

const SCHEMES: Scheme[] = [
  {
    id: "cgtmse",
    name: "CGTMSE – Credit Guarantee Fund",
    description:
      "Collateral-free loans up to ₹2 crore with government-backed guarantee. Ideal for micro & small enterprises that lack fixed assets to pledge as security.",
    category: "Funding & Credit",
    eligibleBusinessTypes: ["Manufacturing", "Services", "Trading"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr", "₹1 Cr - ₹5 Cr"],
    eligibleStages: ["0-1 Year", "1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Collateral-Free", "Loan", "Guarantee"],
    amount: "Up to ₹2 Crore",
    icon: Banknote,
  },
  {
    id: "pmegp",
    name: "PMEGP – PM Employment Generation Programme",
    description:
      "Subsidy of 15–35% of project cost for new enterprises in manufacturing and services. Government provides margin money to reduce your loan burden significantly.",
    category: "Subsidies",
    eligibleBusinessTypes: ["Manufacturing", "Services", "Food Processing"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr"],
    eligibleStages: ["Pre-Revenue/Idea", "0-1 Year"],
    eligibleRegistrations: ["Not Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Startup", "Subsidy", "New Enterprise"],
    amount: "Up to ₹50 Lakh subsidy",
    icon: TrendingUp,
  },
  {
    id: "mudra",
    name: "Mudra Yojana (Shishu / Kishor / Tarun)",
    description:
      "Zero-collateral business loans from ₹50,000 to ₹10 lakh under three tiers. Shishu (₹50K), Kishor (₹5L), Tarun (₹10L) — for all business types.",
    category: "Funding & Credit",
    eligibleBusinessTypes: [
      "Manufacturing",
      "Trading",
      "Services",
      "Agriculture-Allied",
      "Food Processing",
    ],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr"],
    eligibleStages: ["Pre-Revenue/Idea", "0-1 Year", "1-3 Years"],
    eligibleRegistrations: [
      "Not Registered",
      "MSME Registered",
      "Udyam Registered",
    ],
    eligibleStates: ["All India"],
    tags: ["Collateral-Free", "Micro Loan", "All Sectors"],
    amount: "₹50K – ₹10 Lakh",
    icon: Banknote,
  },
  {
    id: "pmfme",
    name: "PMFME – PM Formalisation of Micro Food Enterprises",
    description:
      "35% credit-linked capital subsidy for micro food processing units. Supports branding, packaging, quality upgradation, and machinery procurement.",
    category: "Subsidies",
    eligibleBusinessTypes: ["Food Processing"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr"],
    eligibleStages: ["0-1 Year", "1-3 Years", "3-5 Years"],
    eligibleRegistrations: [
      "MSME Registered",
      "Udyam Registered",
      "Not Registered",
    ],
    eligibleStates: ["All India"],
    tags: ["Food", "Capital Subsidy", "Branding"],
    amount: "Up to ₹10 Lakh",
    icon: Leaf,
  },
  {
    id: "zed",
    name: "ZED Scheme – Zero Defect Zero Effect",
    description:
      "Quality certification + subsidy of 50–80% on certification costs. Helps manufacturers adopt quality practices, reduce waste, and access premium markets.",
    category: "Technology",
    eligibleBusinessTypes: ["Manufacturing"],
    eligibleTurnovers: [
      "Below ₹25 Lakh",
      "₹25L - ₹1 Cr",
      "₹1 Cr - ₹5 Cr",
      "₹5 Cr - ₹50 Cr",
    ],
    eligibleStages: ["1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Quality", "Certification", "Manufacturing"],
    amount: "50–80% subsidy",
    icon: Award,
  },
  {
    id: "clcss",
    name: "CLCSS – Credit Linked Capital Subsidy Scheme",
    description:
      "15% upfront capital subsidy on institutional credit for technology upgradation. For manufacturing MSMEs investing in modern plant & machinery.",
    category: "Technology",
    eligibleBusinessTypes: ["Manufacturing"],
    eligibleTurnovers: ["₹25L - ₹1 Cr", "₹1 Cr - ₹5 Cr", "₹5 Cr - ₹50 Cr"],
    eligibleStages: ["1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Capital Subsidy", "Technology", "Machinery"],
    amount: "Max ₹15 Lakh",
    icon: Factory,
  },
  {
    id: "nsic-rma",
    name: "NSIC – Raw Material Assistance",
    description:
      "Collateral-free credit for raw material procurement, helping MSMEs maintain uninterrupted production without upfront capital constraints.",
    category: "Funding & Credit",
    eligibleBusinessTypes: ["Manufacturing"],
    eligibleTurnovers: [
      "Below ₹25 Lakh",
      "₹25L - ₹1 Cr",
      "₹1 Cr - ₹5 Cr",
      "₹5 Cr - ₹50 Cr",
    ],
    eligibleStages: ["1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Raw Material", "Production", "Credit"],
    amount: "As per requirement",
    icon: Building2,
  },
  {
    id: "tufs",
    name: "Technology Upgradation Fund Scheme (TUFS)",
    description:
      "Interest subsidy of 5% per annum on technology upgradation loans. Specially for textile and apparel manufacturers modernising their operations.",
    category: "Technology",
    eligibleBusinessTypes: ["Manufacturing"],
    eligibleTurnovers: ["₹1 Cr - ₹5 Cr", "₹5 Cr - ₹50 Cr", "Above ₹50 Cr"],
    eligibleStages: ["3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["Gujarat", "Tamil Nadu", "Maharashtra", "Karnataka"],
    tags: ["Textile", "Interest Subsidy", "Machinery"],
    amount: "5% interest subsidy",
    icon: Zap,
  },
  {
    id: "standup",
    name: "Stand-Up India Scheme",
    description:
      "Loans of ₹10 lakh to ₹1 crore exclusively for SC/ST and women entrepreneurs setting up greenfield enterprises in manufacturing, services, or trading.",
    category: "Women/SC/ST",
    eligibleBusinessTypes: ["Manufacturing", "Services", "Trading"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr", "₹1 Cr - ₹5 Cr"],
    eligibleStages: ["Pre-Revenue/Idea", "0-1 Year", "1-3 Years"],
    eligibleRegistrations: [
      "Not Registered",
      "MSME Registered",
      "Udyam Registered",
    ],
    eligibleStates: ["All India"],
    tags: ["Women", "SC/ST", "Greenfield"],
    amount: "₹10L – ₹1 Crore",
    icon: Users,
  },
  {
    id: "mda",
    name: "Market Development Assistance (MDA)",
    description:
      "Financial assistance for export promotion: travel reimbursement, trade fair participation, product testing, and international marketing activities.",
    category: "Export",
    eligibleBusinessTypes: ["Manufacturing", "Trading", "Food Processing"],
    eligibleTurnovers: ["₹25L - ₹1 Cr", "₹1 Cr - ₹5 Cr", "₹5 Cr - ₹50 Cr"],
    eligibleStages: ["1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: ["Udyam Registered", "MSME Registered"],
    eligibleStates: ["All India"],
    tags: ["Export", "Trade Fair", "Marketing"],
    amount: "Up to ₹5 Lakh/year",
    icon: Globe,
  },
  {
    id: "sfurti",
    name: "SFURTI – Cluster Development Programme",
    description:
      "Revitalises traditional industries like khadi, village industries, and coir by organising artisans into clusters with shared infrastructure and market support.",
    category: "Infrastructure",
    eligibleBusinessTypes: ["Manufacturing", "Agriculture-Allied"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr"],
    eligibleStages: ["0-1 Year", "1-3 Years", "3-5 Years", "5+ Years"],
    eligibleRegistrations: [
      "Not Registered",
      "MSME Registered",
      "Udyam Registered",
    ],
    eligibleStates: ["All India"],
    tags: ["Cluster", "Khadi", "Village Industries"],
    amount: "Up to ₹5 Crore",
    icon: ShoppingBag,
  },
  {
    id: "startup-seed",
    name: "Startup India Seed Fund Scheme",
    description:
      "Equity-free seed funding up to ₹20 lakh for early-stage startups to prove concept, prototype development, and initial market entry without diluting ownership.",
    category: "Funding & Credit",
    eligibleBusinessTypes: ["Services", "Manufacturing", "Food Processing"],
    eligibleTurnovers: ["Below ₹25 Lakh"],
    eligibleStages: ["Pre-Revenue/Idea", "0-1 Year"],
    eligibleRegistrations: ["Startup India"],
    eligibleStates: ["All India"],
    tags: ["Startup", "Equity-Free", "Seed Funding"],
    amount: "Up to ₹20 Lakh",
    icon: Rocket,
  },
  {
    id: "msme-innovate",
    name: "MSME Innovative Scheme (Incubation)",
    description:
      "Financial and mentorship support for innovative product ideas. Covers prototyping, IP filing, market research, and commercialisation over 18 months.",
    category: "Technology",
    eligibleBusinessTypes: ["Manufacturing", "Services"],
    eligibleTurnovers: ["Below ₹25 Lakh", "₹25L - ₹1 Cr"],
    eligibleStages: ["Pre-Revenue/Idea", "0-1 Year", "1-3 Years"],
    eligibleRegistrations: [
      "Startup India",
      "Not Registered",
      "MSME Registered",
    ],
    eligibleStates: ["All India"],
    tags: ["Innovation", "Incubation", "IP"],
    amount: "Up to ₹15 Lakh",
    icon: Lightbulb,
  },
];

const CATEGORIES: SchemeCategory[] = [
  "All",
  "Funding & Credit",
  "Subsidies",
  "Infrastructure",
  "Technology",
  "Export",
  "Women/SC/ST",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  const id = `select-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-border rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-accent bg-card text-foreground text-sm transition-smooth"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
}

function SchemeBadge({ text }: { text: string }) {
  return (
    <span
      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap"
      style={{ background: "rgba(255,107,0,0.12)", color: "#FF6B00" }}
    >
      {text}
    </span>
  );
}

function SchemeCard({ scheme, index }: { scheme: Scheme; index: number }) {
  const Icon = scheme.icon;
  return (
    <div
      data-ocid={`schemes.card.${index + 1}`}
      className="rounded-2xl border border-border bg-card card-hover p-6 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(10,37,64,0.07)" }}
        >
          <Icon className="w-5 h-5" style={{ color: "#0A2540" }} />
        </div>
        <SchemeBadge text={scheme.category} />
      </div>

      <div>
        <h3 className="font-display text-base font-bold text-foreground leading-snug mb-1.5">
          {scheme.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {scheme.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {scheme.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="flex items-center gap-2 rounded-lg px-3 py-2.5"
        style={{ background: "rgba(10,37,64,0.05)" }}
      >
        <Banknote
          className="w-4 h-4 flex-shrink-0"
          style={{ color: "#0A2540" }}
        />
        <span className="text-sm font-bold text-foreground">
          {scheme.amount}
        </span>
      </div>

      <div className="mt-auto flex gap-2 pt-1">
        <a
          href="/contact"
          data-ocid={`schemes.check_eligibility_button.${index + 1}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-2.5 rounded-lg text-white transition-smooth hover:opacity-90 active:scale-95"
          style={{ background: "#FF6B00" }}
        >
          Check Eligibility
        </a>
        <a
          href="/contact"
          data-ocid={`schemes.learn_more_button.${index + 1}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-2.5 rounded-lg border border-border text-foreground transition-smooth hover:bg-muted/60 active:scale-95"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function SchemesPage() {
  const heroRef = useScrollAnimation<HTMLElement>();
  const toolRef = useScrollAnimation<HTMLElement>();
  const cardsRef = useScrollAnimation<HTMLElement>();
  const ctaRef = useScrollAnimation<HTMLElement>();

  const [filters, setFilters] = useState<Filters>({
    businessType: "",
    turnover: "",
    registration: "",
    stage: "",
    state: "",
  });

  const [activeCategory, setActiveCategory] = useState<SchemeCategory>("All");

  const updateFilter = (key: keyof Filters) => (value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      businessType: "",
      turnover: "",
      registration: "",
      stage: "",
      state: "",
    });
    setActiveCategory("All");
  };

  const hasActiveFilters =
    Object.values(filters).some((v) => v !== "") || activeCategory !== "All";

  const filteredSchemes = useMemo(() => {
    return SCHEMES.filter((scheme) => {
      if (activeCategory !== "All" && scheme.category !== activeCategory)
        return false;

      if (
        filters.businessType &&
        !scheme.eligibleBusinessTypes.includes(
          filters.businessType as BusinessType,
        )
      )
        return false;

      if (
        filters.turnover &&
        !scheme.eligibleTurnovers.includes(filters.turnover as Turnover)
      )
        return false;

      if (
        filters.registration &&
        !scheme.eligibleRegistrations.includes(
          filters.registration as RegistrationStatus,
        )
      )
        return false;

      if (
        filters.stage &&
        !scheme.eligibleStages.includes(filters.stage as BusinessStage)
      )
        return false;

      if (
        filters.state &&
        !scheme.eligibleStates.includes(filters.state as State) &&
        !scheme.eligibleStates.includes("All India")
      )
        return false;

      return true;
    });
  }, [filters, activeCategory]);

  return (
    <div data-ocid="schemes.page">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        data-ocid="schemes.hero.section"
        className="relative py-20 sm:py-28 overflow-hidden"
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
          className="pointer-events-none absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(255,107,0,0.18)", color: "#FF6B00" }}
          >
            600+ Verified Government Schemes
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Find the Government Schemes{" "}
            <span style={{ color: "#FF6B00" }}>You Actually Qualify For</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop guessing — use our free interactive tool to instantly see which
            central &amp; state MSME schemes match your business profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              data-ocid="schemes.hero.check_eligibility_button"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-3.5 rounded-lg text-white transition-smooth hover:opacity-90 active:scale-95"
              style={{ background: "#FF6B00" }}
              onClick={() =>
                document
                  .getElementById("eligibility-tool")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Check My Eligibility Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/contact"
              data-ocid="schemes.hero.apply_button"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg border border-white/30 text-white transition-smooth hover:bg-white/10 active:scale-95"
            >
              Apply for a Scheme Today
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "600+ Schemes Listed",
              "All States Covered",
              "Central + State Schemes",
              "Free to Use",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 text-sm text-white/60"
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#FF6B00" }}
                />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Tool */}
      <section
        id="eligibility-tool"
        ref={toolRef}
        data-ocid="schemes.eligibility_tool.section"
        className="py-14 sm:py-20 bg-card"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "rgba(255,107,0,0.12)", color: "#FF6B00" }}
            >
              Interactive Eligibility Checker
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Which Schemes Are You Eligible For?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill in your details and see matching schemes in real-time — no
              registration required.
            </p>
          </div>

          <div
            className="rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm"
            data-ocid="schemes.filter_panel"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <SelectField
                label="Business Type"
                value={filters.businessType}
                onChange={updateFilter("businessType")}
                options={[
                  "Manufacturing",
                  "Trading",
                  "Services",
                  "Agriculture-Allied",
                  "Food Processing",
                ]}
                placeholder="Select business type"
              />
              <SelectField
                label="Annual Turnover"
                value={filters.turnover}
                onChange={updateFilter("turnover")}
                options={ALL_TURNOVERS}
                placeholder="Select turnover range"
              />
              <SelectField
                label="Registration Status"
                value={filters.registration}
                onChange={updateFilter("registration")}
                options={ALL_REGISTRATIONS}
                placeholder="Select registration"
              />
              <SelectField
                label="Business Stage"
                value={filters.stage}
                onChange={updateFilter("stage")}
                options={ALL_STAGES}
                placeholder="Select business stage"
              />
              <SelectField
                label="Your State"
                value={filters.state}
                onChange={updateFilter("state")}
                options={ALL_STATES}
                placeholder="Select your state"
              />
              <div className="flex flex-col gap-1.5">
                <div
                  className="text-sm font-semibold text-foreground opacity-0 select-none"
                  aria-hidden="true"
                >
                  Actions
                </div>
                <button
                  type="button"
                  data-ocid="schemes.reset_filters_button"
                  onClick={resetFilters}
                  disabled={!hasActiveFilters}
                  className="flex items-center justify-center gap-2 w-full border border-border rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-smooth hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Filters
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{ background: "rgba(10,37,64,0.05)" }}
            >
              <p className="text-sm font-semibold text-foreground">
                <span
                  className="text-2xl font-bold mr-2"
                  style={{ color: "#FF6B00" }}
                >
                  {filteredSchemes.length}
                </span>
                matching scheme{filteredSchemes.length !== 1 ? "s" : ""} found
              </p>
              {hasActiveFilters && (
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,107,0,0.12)",
                    color: "#FF6B00",
                  }}
                >
                  Filters Active
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs + Scheme Cards */}
      <section
        ref={cardsRef}
        data-ocid="schemes.cards.section"
        className="py-14 sm:py-20 section-alt"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="flex flex-wrap gap-2 mb-10"
            data-ocid="schemes.category_tabs"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                data-ocid={`schemes.category_tab.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-smooth ${
                  activeCategory === cat
                    ? "text-white border-transparent"
                    : "bg-card border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "#FF6B00", borderColor: "#FF6B00" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredSchemes.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme, i) => (
                <SchemeCard key={scheme.id} scheme={scheme} index={i} />
              ))}
            </div>
          ) : (
            <div
              data-ocid="schemes.empty_state"
              className="text-center py-20 rounded-2xl border border-border bg-card"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(255,107,0,0.1)" }}
              >
                <Lightbulb className="w-7 h-7" style={{ color: "#FF6B00" }} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                No schemes match your current filters
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                Try adjusting your filters or speak to our experts who can find
                hidden schemes for your specific profile.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  data-ocid="schemes.empty_state.reset_button"
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg border border-border text-foreground transition-smooth hover:bg-muted/60"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Filters
                </button>
                <a
                  href="/contact"
                  data-ocid="schemes.empty_state.contact_button"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg text-white transition-smooth hover:opacity-90"
                  style={{ background: "#FF6B00" }}
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        ref={ctaRef}
        data-ocid="schemes.cta.section"
        className="py-20 sm:py-24 relative overflow-hidden"
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(255,107,0,0.18)", color: "#FF6B00" }}
          >
            Free Expert Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Not Sure Which Schemes You Qualify For?{" "}
            <span style={{ color: "#FF6B00" }}>
              Let Our Experts Do the Work.
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Our scheme specialists review your business profile and identify
            every applicable scheme — saving you weeks of research and
            application errors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              data-ocid="schemes.cta.book_consultation_button"
              className="inline-flex items-center justify-center gap-2 font-semibold text-base px-10 py-4 rounded-xl text-white transition-smooth hover:opacity-90 active:scale-95 shadow-lg"
              style={{ background: "#FF6B00" }}
            >
              Book Free Scheme Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              data-ocid="schemes.cta.generate_report_button"
              className="inline-flex items-center justify-center font-semibold text-base px-10 py-4 rounded-xl border border-white/30 text-white transition-smooth hover:bg-white/10 active:scale-95"
            >
              Generate Scheme Report
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "Response within 24 hours",
              "Verified scheme experts",
              "100% free, no hidden charges",
            ].map((trust) => (
              <span
                key={trust}
                className="flex items-center gap-1.5 text-sm text-white/60"
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#FF6B00" }}
                />
                {trust}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
