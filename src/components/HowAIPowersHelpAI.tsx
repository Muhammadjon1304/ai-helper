interface AIFeature {
  id: number;
  number: string;
  title: string;
  description: string;
  example?: {
    label: string;
    text: string;
  };
  result?: {
    label: string;
    text: string;
  };
  output?: {
    label: string;
    text: string;
  };
  action?: {
    label: string;
    text: string;
  };
}

const aiFeatures: AIFeature[] = [
  {
    id: 1,
    number: "1.",
    title: "Natural Language Understanding",
    description:
      "Advanced NLP models understand the user's situation, identifying key legal issues, emotional state, and urgency level from conversational text.",
    example: {
      label: "Example:",
      text: '"My husband hits me and won\'t let me leave the house" → AI identifies domestic violence, physical abuse, and unlawful detention',
    },
  },
  {
    id: 2,
    number: "2.",
    title: "Legal Document Retrieval",
    description:
      "Vector embeddings and semantic search quickly find relevant laws, precedents, and legal procedures from the Uzbekistan legal code.",
    result: {
      label: "Result:",
      text: "Cites specific articles (e.g., Criminal Code Article 110) with penalties and reporting procedures",
    },
  },
  {
    id: 3,
    number: "3.",
    title: "Personalized Response Generation",
    description:
      "AI synthesizes legal knowledge and psychological support into clear, actionable advice tailored to the user's specific situation and context.",
    output: {
      label: "Output:",
      text: "Step-by-step guidance, safety planning, contact information, and empathetic emotional support",
    },
  },
  {
    id: 4,
    number: "4.",
    title: "Crisis Detection & Escalation",
    description:
      "Sentiment analysis and pattern recognition identify immediate danger situations, triggering emergency protocols and direct assistance offers.",
    action: {
      label: "Action:",
      text: "If imminent threat detected → provides emergency hotline, nearest shelter, and immediate safety tips",
    },
  },
];

export function HowAIPowersHelpAI() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="bg-red-800 rounded-3xl p-12 text-white">
          {/* Header */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            How AI Powers HelpAI
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFeatures.map((feature) => (
              <div key={feature.id} className="space-y-4">
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.number} {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-white">
                  {feature.description}
                </p>

                {/* Example/Result/Output/Action Box */}
                {(feature.example ||
                  feature.result ||
                  feature.output ||
                  feature.action) && (
                  <div className="bg-red-700 rounded-lg p-4 mt-4">
                    {feature.example && (
                      <div>
                        <span className="font-bold text-white">
                          {feature.example.label}
                        </span>
                        <p className="text-white mt-1">
                          {feature.example.text}
                        </p>
                      </div>
                    )}
                    {feature.result && (
                      <div>
                        <span className="font-bold text-white">
                          {feature.result.label}
                        </span>
                        <p className="text-white mt-1">{feature.result.text}</p>
                      </div>
                    )}
                    {feature.output && (
                      <div>
                        <span className="font-bold text-white">
                          {feature.output.label}
                        </span>
                        <p className="text-white mt-1">{feature.output.text}</p>
                      </div>
                    )}
                    {feature.action && (
                      <div>
                        <span className="font-bold text-white">
                          {feature.action.label}
                        </span>
                        <p className="text-white mt-1">{feature.action.text}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
