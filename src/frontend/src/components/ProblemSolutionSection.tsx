import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const PROBLEMS = [
  "Unaware of eligible schemes",
  "Complex application processes",
  "Rejected loan applications",
  "Compliance confusion and penalties",
  "No expert guidance when needed",
];

const SOLUTIONS = [
  "600+ schemes matched to your business",
  "Expert-guided application support",
  "CGTMSE & collateral-free loan access",
  "End-to-end GST & compliance handling",
  "Dedicated relationship manager",
];

export function ProblemSolutionSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.problem_solution.section"
      className="py-16 sm:py-24 section-alt"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Why eMSME
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            We Solve the Biggest MSME Challenges
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-start">
          {/* Problems */}
          <div className="rounded-2xl border border-red-200 overflow-hidden">
            <div
              className="px-6 py-4"
              style={{ background: "rgba(220,38,38,0.07)" }}
            >
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="font-display font-bold text-red-600 text-lg">
                  Without eMSME
                </h3>
              </div>
            </div>
            <div className="p-6 bg-card space-y-4">
              {PROBLEMS.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex flex-col items-center justify-center self-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "#FF6B00" }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Solutions */}
          <div className="rounded-2xl border border-green-200 overflow-hidden">
            <div
              className="px-6 py-4"
              style={{ background: "rgba(22,163,74,0.07)" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <h3 className="font-display font-bold text-green-700 text-lg">
                  With eMSME
                </h3>
              </div>
            </div>
            <div className="p-6 bg-card space-y-4">
              {SOLUTIONS.map((solution) => (
                <div key={solution} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed font-medium">
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
