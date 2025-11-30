import "./index.css";
import { Navbar } from "./src/components/Navbar";
import { HeroSection } from "./src/components/HeroSection";
import { ProblemSolution } from "./src/components/ProblemSolution";
import { DemoPreview } from "./src/components/DemoPreview";
import { Team } from "./src/components/Team";
import { WhyOurTeam } from "./src/components/WhyOurTeam";
import { TeamMotivation } from "./src/components/TeamMotivation";
import { Roadmap } from "./src/components/Roadmap";
import { MilestonesMetrics } from "./src/components/MilestonesMetrics";
import { TechnicalImplementation } from "./src/components/TechnicalImplementation";
import { HowAIPowersHelpAI } from "./src/components/HowAIPowersHelpAI";
import { DevelopmentApproach } from "./src/components/DevelopmentApproach";
import { InnovationStrategy } from "./src/components/InnovationStrategy";
import { Footer } from "./src/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-16">
        <HeroSection />
        <div id="problem">
          <ProblemSolution />
        </div>
        <div id="solution">
          <DemoPreview />
        </div>
        <div id="team">
          <Team />
          <WhyOurTeam />
          <TeamMotivation />
        </div>
        <div id="roadmap">
          <Roadmap />
          <MilestonesMetrics />
        </div>
        <div id="technical">
          <TechnicalImplementation />
          <HowAIPowersHelpAI />
          <DevelopmentApproach />
          <InnovationStrategy />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
