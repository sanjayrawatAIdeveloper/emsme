import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Search, UserPlus } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: UserPlus,
    title: "Share Your Details",
    description:
      "Tell us about your business — type, size, location, and goals.",
    accent: "#FF6B00",
  },
  {
    number: "2",
    icon: Search,
    title: "Get Scheme Matches",
    description: "Our system matches you to 600+ schemes you're eligible for.",
    accent: "#0A2540",
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Apply & Grow",
    description: "Our experts guide you through applications and approvals.",
    accent: "#FF6B00",
  },
];

export function HowItWorksSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.how_it_works.section"
      className="py-16 sm:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Get Started in 3 Simple Steps
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
            style={{ borderTop: "2px dashed rgba(255,107,0,0.3)" }}
          />

          <div className="grid sm:grid-cols-3 gap-10 lg:gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                data-ocid={`home.how_it_works.step.${i + 1}`}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 font-display text-xl font-bold text-white shadow-lg relative z-10"
                  style={{ background: step.accent }}
                >
                  {step.number}
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${step.accent}18` }}
                >
                  <step.icon
                    className="w-8 h-8"
                    style={{ color: step.accent }}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
