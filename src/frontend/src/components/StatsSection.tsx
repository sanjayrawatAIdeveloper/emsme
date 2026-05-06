import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, LayoutGrid, Users } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "90+ Lakh",
    label: "Entrepreneurs Supported",
  },
  {
    icon: LayoutGrid,
    value: "600+",
    label: "Government Schemes",
  },
  {
    icon: Award,
    value: "291+",
    label: "Trusted Partners",
  },
];

export function StatsSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.stats.section"
      className="bg-card py-14 sm:py-20 border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-ocid="home.stats.card"
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-border card-hover"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(255,107,0,0.1)" }}
              >
                <stat.icon className="w-7 h-7" style={{ color: "#FF6B00" }} />
              </div>
              <span
                className="font-display text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: "#FF6B00" }}
              >
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
