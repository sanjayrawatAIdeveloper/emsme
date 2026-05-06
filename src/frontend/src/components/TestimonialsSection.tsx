import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "RK",
    quote:
      "eMSME helped us secure a ₹50 lakh CGTMSE loan with zero collateral. Our bakery business has tripled in size.",
    name: "Ramesh Kumar",
    business: "Bakery Owner, Pune",
    stars: 5,
  },
  {
    initials: "PS",
    quote:
      "The scheme discovery tool found 12 schemes we were eligible for. Got GeM registered and landed our first government contract!",
    name: "Priya Sharma",
    business: "Tech Startup, Bengaluru",
    stars: 5,
  },
  {
    initials: "AK",
    quote:
      "GST compliance was a nightmare. eMSME handles everything — from filing to notices. I can focus on my business now.",
    name: "Arjun Khanna",
    business: "Manufacturing MSME, Delhi",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <Star
          key={n}
          className="w-4 h-4 fill-current"
          style={{ color: "#FF6B00" }}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      data-ocid="home.testimonials.section"
      className="py-16 sm:py-24 section-alt"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(255,107,0,0.1)", color: "#FF6B00" }}
          >
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by 90+ Lakh Entrepreneurs
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`home.testimonials.card.${i + 1}`}
              className="bg-card rounded-2xl p-7 border border-border card-hover flex flex-col gap-5"
            >
              <div
                className="font-display text-6xl leading-none -mb-2 font-bold"
                style={{ color: "rgba(255,107,0,0.2)" }}
                aria-hidden="true"
              >
                “
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm text-white flex-shrink-0"
                  style={{ background: "#0A2540" }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {t.business}
                  </div>
                </div>
              </div>
              <StarRating count={t.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
