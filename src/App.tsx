import "./index.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSolution } from "./components/ProblemSolution";
import { DemoPreview } from "./components/DemoPreview";
import { Team } from "./components/Team";
import { WhyOurTeam } from "./components/WhyOurTeam";
import { TeamMotivation } from "./components/TeamMotivation";
import { Roadmap } from "./components/Roadmap";
import { MilestonesMetrics } from "./components/MilestonesMetrics";
import { TechnicalImplementation } from "./components/TechnicalImplementation";
import { HowAIPowersHelpAI } from "./components/HowAIPowersHelpAI";
import { DevelopmentApproach } from "./components/DevelopmentApproach";
import { InnovationStrategy } from "./components/InnovationStrategy";
import { Footer } from "./components/Footer";

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