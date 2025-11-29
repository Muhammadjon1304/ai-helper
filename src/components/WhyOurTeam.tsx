interface TeamStrength {
  id: number;
  title: string;
  icon: "target" | "zap";
  points: string[];
}

const strengths: TeamStrength[] = [
  {
    id: 1,
    title: "Deep Understanding of the Problem",
    icon: "target",
    points: [
      "Extensive research into gender-based violence in Uzbekistan",
      "Consultations with victims, psychologists, and legal experts",
      "Understanding of cultural barriers preventing reporting",
      "Analysis of existing support systems and their limitations",
    ],
  },
  {
    id: 2,
    title: "Technical Expertise",
    icon: "zap",
    points: [
      "Experience in AI/ML and natural language processing",
      "Full-stack development for web and mobile platforms",
      "Security and privacy-first architecture design",
      "Previous successful projects in social impact tech",
    ],
  },
];

const TargetIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="white"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="1" fill="white" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 10V3L4 14h7v7l9-11h-7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function WhyOurTeam() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Our Team Can Solve This
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise, deep understanding of the problem,
            and unwavering commitment to social impact
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((strength) => (
            <div
              key={strength.id}
              className="bg-red-800 rounded-2xl p-10 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="mb-6">
                {strength.icon === "target" ? <TargetIcon /> : <ZapIcon />}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6">{strength.title}</h3>

              {/* Points */}
              <ul className="space-y-3">
                {strength.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-white text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
