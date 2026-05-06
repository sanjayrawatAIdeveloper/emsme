import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BookOpen,
  Calendar,
  CheckSquare,
  ChevronDown,
  Clock,
  Download,
  FileEdit,
  FileText,
  Globe,
  IndianRupee,
  MessageCircle,
  Search,
} from "lucide-react";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

type TabKey = "all" | "articles" | "faqs" | "downloads" | "videos";

const TABS: { key: TabKey; label: string }[] = [
  { key: "all", label: "All Resources" },
  { key: "articles", label: "Articles & Guides" },
  { key: "faqs", label: "FAQs" },
  { key: "downloads", label: "Downloads" },
  { key: "videos", label: "Videos" },
];

const ARTICLES = [
  {
    id: 1,
    category: "Funding",
    title: "Top 10 MSME Loan Schemes You Didn't Know About in 2024",
    excerpt:
      "Discover lesser-known government loan schemes that can provide up to ₹10 Crore in collateral-free funding for your MSME — no complex paperwork needed.",
    readTime: "8 min read",
    date: "Apr 22, 2024",
  },
  {
    id: 2,
    category: "Compliance",
    title: "Complete Guide to Udyam Registration: Step-by-Step Process",
    excerpt:
      "Everything you need to know about Udyam Registration — eligibility, documents required, and how to complete the process in under 30 minutes for free.",
    readTime: "6 min read",
    date: "Apr 15, 2024",
  },
  {
    id: 3,
    category: "Schemes",
    title: "CGTMSE Explained: How to Get a Collateral-Free Business Loan",
    excerpt:
      "CGTMSE has helped 40+ lakh MSMEs get credit without security. Learn how the guarantee works, which banks participate, and how to apply successfully.",
    readTime: "10 min read",
    date: "Apr 10, 2024",
  },
  {
    id: 4,
    category: "Growth",
    title: "How to Export from India: MSME Export Promotion Schemes",
    excerpt:
      "India's export schemes — MAI, MDA, APEDA grants — can fund your market entry costs. This guide explains every scheme with real application examples.",
    readTime: "12 min read",
    date: "Apr 5, 2024",
  },
  {
    id: 5,
    category: "Compliance",
    title: "GST for MSMEs: Common Mistakes and How to Avoid Them",
    excerpt:
      "From wrong HSN codes to missed Input Tax Credit claims — here are the 12 most costly GST mistakes MSMEs make and how to stay compliant without a CA.",
    readTime: "7 min read",
    date: "Mar 28, 2024",
  },
  {
    id: 6,
    category: "Funding",
    title: "Mudra Loan: Everything You Need to Know Before Applying",
    excerpt:
      "Mudra loans offer up to ₹10 Lakh with zero collateral. Learn the Shishu, Kishor, and Tarun tiers, which bank to approach, and how to improve approval odds.",
    readTime: "5 min read",
    date: "Mar 20, 2024",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Funding: "bg-accent text-accent-foreground",
  Compliance: "bg-primary text-primary-foreground",
  Schemes: "bg-[oklch(0.52_0.18_155)] text-white",
  Growth: "bg-[oklch(0.52_0.18_255)] text-white",
};

type FaqCategory =
  | "Registration & Compliance"
  | "Funding & Loans"
  | "Schemes & Subsidies"
  | "eMSME Services"
  | "Digital & Export";

interface FaqItem {
  id: number;
  category: FaqCategory;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    category: "Registration & Compliance",
    question: "What is Udyam Registration and is it mandatory?",
    answer:
      "Yes, Udyam Registration is the official MSME registration on udyamregistration.gov.in. It replaced the old Udyog Aadhaar system and is mandatory to avail most government benefits, subsidies, and priority lending.",
  },
  {
    id: 2,
    category: "Registration & Compliance",
    question: "What documents are needed for GST registration?",
    answer:
      "PAN card, Aadhaar card, business address proof, bank account details, photos of promoters, and constitution proof (Partnership deed/MOA).",
  },
  {
    id: 3,
    category: "Registration & Compliance",
    question: "How long does MSME registration take?",
    answer:
      "Udyam Registration is instant and free — you can complete it online at udyamregistration.gov.in in under 30 minutes with just Aadhaar and PAN.",
  },
  {
    id: 4,
    category: "Registration & Compliance",
    question: "Can a sole proprietor register as MSME?",
    answer:
      "Yes, any business entity — sole proprietorship, partnership, LLP, private limited — can register as an MSME if it meets the turnover and investment criteria.",
  },
  {
    id: 5,
    category: "Funding & Loans",
    question: "What is CGTMSE and how does it help?",
    answer:
      "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) provides collateral-free credit guarantee to banks, enabling them to lend to MSMEs without security requirements.",
  },
  {
    id: 6,
    category: "Funding & Loans",
    question: "What is the Mudra Loan limit?",
    answer:
      "Mudra loans are offered in three tiers: Shishu (up to ₹50,000), Kishor (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹10 Lakh). No collateral required.",
  },
  {
    id: 7,
    category: "Funding & Loans",
    question: "Can a new business apply for MSME loans?",
    answer:
      "Yes! PMEGP scheme and Startup India Seed Fund are designed for new businesses. CGTMSE also covers new enterprises if you have a solid business plan.",
  },
  {
    id: 8,
    category: "Funding & Loans",
    question: "What is the interest rate for MSME loans?",
    answer:
      "Interest rates vary from 7–12% depending on the scheme and bank. CGTMSE-backed loans typically get preferential rates. Priority sector lending norms ensure competitive rates.",
  },
  {
    id: 9,
    category: "Schemes & Subsidies",
    question: "How many government schemes exist for MSMEs?",
    answer:
      "There are 600+ central and state government schemes for MSMEs covering funding, subsidies, technology, market access, and export promotion.",
  },
  {
    id: 10,
    category: "Schemes & Subsidies",
    question: "What is PMFME scheme for food businesses?",
    answer:
      "PM Formalisation of Micro Food Processing Enterprises provides 35% credit-linked capital subsidy for food processing units, with individual and cluster-based support.",
  },
  {
    id: 11,
    category: "Schemes & Subsidies",
    question: "Are there special schemes for women entrepreneurs?",
    answer:
      "Yes! Stand-Up India offers loans from ₹10 Lakh to ₹1 Crore for women entrepreneurs. Many states also have dedicated women MSME schemes.",
  },
  {
    id: 12,
    category: "Schemes & Subsidies",
    question: "How to check scheme eligibility?",
    answer:
      "Use eMSME's free Eligibility Tool on the Schemes page — input your business type, turnover, and location to see matching schemes instantly.",
  },
  {
    id: 13,
    category: "eMSME Services",
    question: "Is eMSME's service free?",
    answer:
      "eMSME offers free scheme discovery, eligibility check, and initial consultation. Paid services include documentation support, loan facilitation, and ongoing compliance management.",
  },
  {
    id: 14,
    category: "eMSME Services",
    question: "How quickly can eMSME process a loan application?",
    answer:
      "Depending on the scheme and documentation readiness, eMSME typically processes loan applications in 7–21 working days.",
  },
  {
    id: 15,
    category: "eMSME Services",
    question: "Does eMSME work in all states?",
    answer:
      "Yes, eMSME operates Pan-India with a 291+ partner network across all major states. Remote consultations are available via video call.",
  },
  {
    id: 16,
    category: "eMSME Services",
    question: "What happens after I submit the lead form?",
    answer:
      "Our team contacts you within 2 business hours to schedule a free consultation call and assess your eligibility.",
  },
  {
    id: 17,
    category: "Digital & Export",
    question: "What is GEM Portal and should my MSME register?",
    answer:
      "Government e-Marketplace (gem.gov.in) is the official online platform for government procurement. MSME registration on GEM gives you direct access to government buyers — a major revenue opportunity.",
  },
  {
    id: 18,
    category: "Digital & Export",
    question: "How to start exporting from India as an MSME?",
    answer:
      "Get IEC (Import Export Code), register on DGFT portal, explore APEDA/FIEO for sector-specific support, and leverage Market Development Assistance (MDA) scheme for export promotion.",
  },
  {
    id: 19,
    category: "Digital & Export",
    question: "What is ZED certification and its benefits?",
    answer:
      "Zero Defect Zero Effect (ZED) is a quality certification scheme with 50–80% subsidy on certification costs. ZED-certified MSMEs get priority in government procurement and export markets.",
  },
  {
    id: 20,
    category: "Digital & Export",
    question: "How does Digital India benefit MSMEs?",
    answer:
      "Digital India programs include MSME e-marketplace access (GEM), DigiLocker for document management, UDYAM portal for registration, and Jan Samarth portal aggregating 14 credit-linked schemes.",
  },
];

const FAQ_CATEGORIES: FaqCategory[] = [
  "Registration & Compliance",
  "Funding & Loans",
  "Schemes & Subsidies",
  "eMSME Services",
  "Digital & Export",
];

const DOWNLOADS = [
  {
    id: 1,
    title: "MSME Scheme Discovery Checklist 2024",
    pages: 24,
    type: "PDF",
    Icon: Search,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: 2,
    title: "Udyam Registration Step-by-Step Guide",
    pages: 8,
    type: "PDF",
    Icon: FileText,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 3,
    title: "CGTMSE Loan Application Checklist",
    pages: 6,
    type: "PDF",
    Icon: CheckSquare,
    color: "text-[oklch(0.52_0.18_155)]",
    bg: "bg-[oklch(0.52_0.18_155)]/10",
  },
  {
    id: 4,
    title: "GST Compliance Calendar for MSMEs",
    pages: 4,
    type: "PDF",
    Icon: Calendar,
    color: "text-[oklch(0.5_0.22_290)]",
    bg: "bg-[oklch(0.5_0.22_290)]/10",
  },
  {
    id: 5,
    title: "MSME Export Starter Pack",
    pages: 16,
    type: "PDF",
    Icon: Globe,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 6,
    title: "Business Plan Template for MSME Loans",
    pages: 12,
    type: "DOCX",
    Icon: FileEdit,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    id: 7,
    title: "Mudra Loan Application Guide",
    pages: 10,
    type: "PDF",
    Icon: IndianRupee,
    color: "text-[oklch(0.52_0.18_155)]",
    bg: "bg-[oklch(0.52_0.18_155)]/10",
  },
  {
    id: 8,
    title: "Top 50 MSME Schemes Summary Sheet",
    pages: 2,
    type: "PDF",
    Icon: BookOpen,
    color: "text-[oklch(0.55_0.22_25)]",
    bg: "bg-[oklch(0.55_0.22_25)]/10",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ArticleCard({
  article,
  index,
}: {
  article: (typeof ARTICLES)[0];
  index: number;
}) {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="opacity-0 card-hover bg-card rounded-2xl p-6 border border-border flex flex-col gap-4 transition-smooth"
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`resources.article.item.${index + 1}`}
    >
      <span
        className={`inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 w-fit ${
          CATEGORY_COLORS[article.category] ?? "bg-muted text-muted-foreground"
        }`}
      >
        {article.category}
      </span>
      <h3 className="font-display text-base font-semibold text-foreground leading-snug">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {article.readTime}
        </span>
        <span className="text-xs text-muted-foreground">{article.date}</span>
      </div>
      <button
        type="button"
        className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1 w-fit"
        data-ocid={`resources.article.read_button.${index + 1}`}
      >
        Read Article →
      </button>
    </div>
  );
}

function AccordionFaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="bg-card rounded-2xl border border-border overflow-hidden transition-smooth"
      data-ocid={`resources.faq.item.${faq.id}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-muted/40 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        data-ocid={`resources.faq.toggle.${faq.id}`}
      >
        <span className="font-display text-sm font-semibold text-foreground">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function DownloadCard({
  item,
  index,
}: {
  item: (typeof DOWNLOADS)[0];
  index: number;
}) {
  const ref = useScrollAnimation<HTMLDivElement>();
  const handleDownload = () => {
    alert("Coming Soon — Contact us to get this resource");
  };
  return (
    <div
      ref={ref}
      className="opacity-0 card-hover bg-card rounded-2xl p-6 border border-border flex flex-col gap-4 transition-smooth"
      style={{ transitionDelay: `${index * 60}ms` }}
      data-ocid={`resources.download.item.${index + 1}`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}
      >
        <item.Icon className={`w-6 h-6 ${item.color}`} />
      </div>
      <h3 className="font-display text-sm font-semibold text-foreground leading-snug flex-1">
        {item.title}
      </h3>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">
          {item.pages} pages
        </span>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-2 py-0.5 bg-muted text-muted-foreground">
          {item.type}
        </span>
      </div>
      <button
        type="button"
        onClick={handleDownload}
        className="flex items-center gap-2 text-sm font-semibold text-accent border border-accent rounded-lg px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-smooth w-full justify-center"
        data-ocid={`resources.download.button.${index + 1}`}
      >
        <Download className="w-4 h-4" />
        Download Free
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [activeFaqCat, setActiveFaqCat] = useState<FaqCategory | "All">("All");

  const heroRef = useScrollAnimation<HTMLDivElement>();
  const articlesRef = useScrollAnimation<HTMLDivElement>();
  const faqRef = useScrollAnimation<HTMLDivElement>();
  const downloadsRef = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();

  const showArticles = activeTab === "all" || activeTab === "articles";
  const showFaqs = activeTab === "all" || activeTab === "faqs";
  const showDownloads = activeTab === "all" || activeTab === "downloads";
  const showVideos = activeTab === "videos";

  const filteredFaqs =
    activeFaqCat === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === activeFaqCat);

  return (
    <div data-ocid="resources.page">
      {/* ── Hero ── */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            ref={heroRef}
            className="opacity-0 max-w-3xl mx-auto text-center"
          >
            <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 bg-accent text-accent-foreground mb-4">
              Free Knowledge Hub
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Free Knowledge to Help Your MSME{" "}
              <span className="text-accent">Grow Smarter, Faster</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Articles, FAQs, downloadable guides, and expert insights —
              everything you need to navigate India&apos;s MSME ecosystem
              without the jargon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="btn-primary"
                data-ocid="resources.hero.download_button"
              >
                Download Free Guide
              </button>
              <button
                type="button"
                className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-smooth"
                data-ocid="resources.hero.explore_button"
              >
                Explore All Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Tab Bar ── */}
      <section className="bg-card border-b border-border sticky top-[72px] z-10 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="flex items-center gap-2 overflow-x-auto py-4"
            role="tablist"
            aria-label="Resource categories"
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 rounded-full text-sm font-semibold px-5 py-2 transition-smooth ${
                  activeTab === tab.key
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "border border-border text-muted-foreground hover:border-accent hover:text-accent bg-card"
                }`}
                data-ocid={`resources.tab.${tab.key}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles & Guides ── */}
      {showArticles && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div ref={articlesRef} className="opacity-0 mb-10">
              <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary mb-3">
                Articles & Guides
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Latest Articles & Guides
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Practical, India-focused guides written by MSME experts to help
                you make smarter business decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <button
                type="button"
                className="btn-secondary"
                data-ocid="resources.articles.view_all_button"
              >
                View All Articles →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {showFaqs && (
        <section className="py-16 md:py-20 section-alt">
          <div className="container mx-auto px-4 sm:px-6">
            <div ref={faqRef} className="opacity-0 mb-10">
              <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent mb-3">
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Got questions? We&apos;ve got clear, jargon-free answers —
                covering registration, funding, schemes, and everything in
                between.
              </p>
            </div>

            {/* FAQ Category Filter */}
            <div
              className="flex flex-wrap gap-2 mb-8"
              aria-label="FAQ categories"
            >
              {(["All", ...FAQ_CATEGORIES] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFaqCat(cat)}
                  className={`rounded-full text-xs font-semibold px-4 py-1.5 transition-smooth ${
                    activeFaqCat === cat
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary bg-card"
                  }`}
                  data-ocid={`resources.faq.category.${cat
                    .toLowerCase()
                    .replace(/[\s&]+/g, "_")}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {filteredFaqs.map((faq) => (
                <AccordionFaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() =>
                    setOpenFaqId(openFaqId === faq.id ? null : faq.id)
                  }
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Downloads ── */}
      {showDownloads && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div ref={downloadsRef} className="opacity-0 mb-10">
              <span className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary mb-3">
                Free Downloads
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Free Downloads & Templates
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Ready-to-use checklists, templates, and guides — created by
                experts to save you time and avoid costly mistakes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOWNLOADS.map((item, i) => (
                <DownloadCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Videos placeholder ── */}
      {showVideos && (
        <section className="py-16 md:py-20 section-alt">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Videos Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We&apos;re producing expert video guides on MSME schemes,
                compliance, and funding. Subscribe to be notified.
              </p>
              <button
                type="button"
                className="btn-primary"
                data-ocid="resources.videos.notify_button"
              >
                Notify Me When Live
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <div ref={ctaRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our Experts Are Here to Help. Whether it&apos;s a scheme question,
              compliance doubt, or funding query — talk to an eMSME advisor for
              free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                className="btn-primary"
                data-ocid="resources.cta.ask_expert_button"
              >
                Ask an Expert
              </button>
              <button
                type="button"
                className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-smooth"
                data-ocid="resources.cta.download_guide_button"
              >
                Download Free MSME Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
