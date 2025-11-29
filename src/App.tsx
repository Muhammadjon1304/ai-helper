import "./index.css";
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
    <main className="w-full min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <DemoPreview />
      <Team />
      <WhyOurTeam />
      <TeamMotivation />
      <Roadmap />
      <MilestonesMetrics />
      <TechnicalImplementation />
      <HowAIPowersHelpAI />
      <DevelopmentApproach />
      <InnovationStrategy />
      <Footer />
    </main>
  );
}

export default App;
