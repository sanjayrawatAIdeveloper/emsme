import { CheckCircle2 } from "lucide-react";

const TRUST_BADGES = [
  "Free for MSME Owners",
  "2-Minute Eligibility Check",
  "600+ Schemes",
];

export function HeroSection() {
  return (
    <section
      data-ocid="home.hero.section"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      style={{ background: "#0A2540" }}
    >
      {/* Decorative grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-24 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 border border-white/20 mb-8">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#FF6B00" }}
              />
              Trusted by 90+ Lakh Entrepreneurs Across India
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.12] mb-6">
              600+ Government Schemes.
              <br />
              <span style={{ color: "#FF6B00" }}>One Platform.</span>
              <br />
              Unlimited MSME Growth.
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Get funding, compliance, and expert support — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/contact"
                data-ocid="home.hero.generate_report_button"
                className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg transition-smooth hover:opacity-90 active:scale-95 text-white shadow-lg"
                style={{ background: "#FF6B00" }}
              >
                Generate Scheme Report
              </a>
              <a
                href="/contact"
                data-ocid="home.hero.talk_expert_button"
                className="inline-flex items-center justify-center font-semibold text-base px-8 py-3.5 rounded-lg border border-white/30 text-white transition-smooth hover:bg-white/10 active:scale-95"
              >
                Talk to an Expert
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-white/60"
                >
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[560px]">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,107,0,0.12) 0%, transparent 70%)",
                }}
              />
              <img
                src="/assets/generated/hero-msme-growth.dim_1200x700.png"
                alt="MSME growth platform illustration"
                className="w-full h-auto rounded-2xl relative z-10"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
