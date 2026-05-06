import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

const BUSINESS_TYPES = [
  "Manufacturing",
  "Services",
  "Trading",
  "Agriculture",
  "Technology",
  "Other",
];
const REQUIREMENTS = [
  "Government Schemes",
  "Loans & Funding",
  "GST Compliance",
  "Business Registration",
  "GeM Registration",
  "Other",
];

export function LeadCaptureSection() {
  const { actor } = useActor(createActor);
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [requirement, setRequirement] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      return actor.submitLead(
        name,
        businessType || BUSINESS_TYPES[0],
        requirement || REQUIREMENTS[0],
      );
    },
    onSuccess: () => {
      toast.success(
        "Report request received! Our team will contact you shortly.",
      );
      setName("");
      setBusinessType("");
      setRequirement("");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    mutation.mutate();
  }

  return (
    <section
      data-ocid="home.lead_capture.section"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6B00 0%, #e85e00 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Unlock Government Benefits
            <br className="hidden sm:block" /> for Your Business?
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto">
            Join 90+ lakh entrepreneurs already on eMSME. Get your free Scheme
            Discovery Report today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            data-ocid="home.lead_capture.form"
            className="rounded-2xl p-6 sm:p-8 shadow-2xl"
            style={{ background: "rgba(255,255,255,0.97)" }}
          >
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lead-name"
                  className="text-sm font-semibold text-foreground"
                >
                  Your Name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-ocid="home.lead_capture.name_input"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none focus:ring-2 focus:ring-orange-500 transition-smooth placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lead-btype"
                  className="text-sm font-semibold text-foreground"
                >
                  Business Type
                </label>
                <select
                  id="lead-btype"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  data-ocid="home.lead_capture.business_type_select"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
                >
                  <option value="">Select Type</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lead-req"
                  className="text-sm font-semibold text-foreground"
                >
                  Requirement
                </label>
                <select
                  id="lead-req"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  data-ocid="home.lead_capture.requirement_select"
                  className="rounded-lg border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
                >
                  <option value="">Select Need</option>
                  {REQUIREMENTS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              data-ocid="home.lead_capture.submit_button"
              disabled={mutation.isPending}
              className="w-full font-semibold text-base py-3.5 rounded-xl transition-smooth hover:opacity-90 active:scale-95 text-white disabled:opacity-60"
              style={{ background: "#0A2540" }}
            >
              {mutation.isPending ? "Submitting…" : "Get Free Report"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
