import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import OurJourney from "@/components/OurJourney";
import OurCommitment from "@/components/OurCommitment";
import PersonaSection from "@/components/PersonaSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsShowcase />
      <OurJourney />
      <OurCommitment />
      <PersonaSection />
      <FinalCTA />
    </main>
  );
};

export default Index;
