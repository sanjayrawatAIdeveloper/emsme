import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { SchemesSection } from "@/components/SchemesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export function HomePage() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <SchemesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <LeadCaptureSection />
    </div>
  );
}
