interface Phase {
  id: number;
  title: string;
  description: string;
  items: string[];
  status: "current" | "completed" | "upcoming";
}

interface Milestone {
  id: number;
  label: string;
  percentage: number;
}

const milestones: Milestone[] = [
  { id: 1, label: "AI Model Training", percentage: 60 },
  { id: 2, label: "Platform Development", percentage: 45 },
  { id: 3, label: "Legal Database", percentage: 70 },
];

const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Foundation",
    description: "Completed",
    status: "completed",
    items: [
      "Problem research and validation",
      "Team formation and role assignment",
      "Technology stack selection",
      "Initial prototype design",
    ],
  },
  {
    id: 2,
    title: "Phase 2: MVP Development",
    description: "Current - December 2025",
    status: "current",
    items: [
      "Legal knowledge base creation (Uzbekistan laws)",
      "AI model training with legal and psychological data",
      "Web application development",
      "Telegram bot integration",
      "Basic security and encryption implementation",
    ],
  },
  {
    id: 3,
    title: "Phase 3: Testing & Refinement",
    description: "January 2025",
    status: "upcoming",
    items: [
      "User testing with focus groups",
      "Consultation with legal experts and psychologists",
      "AI model fine-tuning based on feedback",
      "Multi-language support enhancement",
      "Security audit and improvements",
    ],
  },
  {
    id: 4,
    title: "Phase 4: Launch & Expansion",
    description: "February - March 2025",
    status: "upcoming",
    items: [
      "Public launch of web and Telegram platforms",
      "Partnership with women's organizations and NGOs",
      "Mobile app development (iOS & Android)",
      "Scaling infrastructure for high traffic",
      "Community outreach and education campaigns",
    ],
  },
  {
    id: 5,
    title: "Phase 5: Growth & Impact",
    description: "Q2 2025 and beyond",
    status: "upcoming",
    items: [
      "Expand to cover additional legal areas",
      "Integration with emergency services",
      "Develop crisis intervention features",
      "Regional expansion beyond Uzbekistan",
      "Continuous AI improvement with real usage data",
    ],
  },
];

const ClockIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export function Roadmap() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Roadmap & Development Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our strategic path from concept to impact
          </p>
        </div>

        {/* Current Stage Section */}
        <div className="mb-16 border-l-4 border-red-700 bg-gray-50 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-red-700 mt-1">
              <ClockIcon />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Current Stage: MVP Development
              </h3>
              <p className="text-gray-600 mt-1">
                Building the core AI system and user interfaces
              </p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.id}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">
                    {milestone.label}
                  </span>
                  <span className="text-red-700 font-bold text-lg">
                    {milestone.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-700 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${milestone.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phases Section */}
        <div className="space-y-8">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`border-l-4 rounded-lg p-8 ${
                phase.status === "completed"
                  ? "border-green-500 bg-green-50"
                  : phase.status === "current"
                  ? "border-red-700 bg-gray-50"
                  : "border-gray-300 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  {phase.status === "completed" ? (
                    <div className="text-green-600 mt-1">
                      <CheckCircleIcon />
                    </div>
                  ) : phase.status === "current" ? (
                    <div className="text-red-700 mt-1">
                      <ClockIcon />
                    </div>
                  ) : (
                    <div className="text-gray-400 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {phase.title}
                    </h3>
                    {phase.description && (
                      <p className="text-gray-600 mt-1">{phase.description}</p>
                    )}
                  </div>
                </div>
                {phase.status === "current" && (
                  <div className="bg-red-700 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                    In Progress
                  </div>
                )}
              </div>

              {/* Phase Items */}
              {phase.items.length > 0 && (
                <ul className="space-y-2 mt-4 ml-10">
                  {phase.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
