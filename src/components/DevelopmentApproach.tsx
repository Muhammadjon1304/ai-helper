interface DevelopmentStep {
  id: number;
  title: string;
  description: string;
}

interface TechStackCategory {
  id: number;
  title: string;
  color: "red" | "gray";
  items: string;
}

const developmentSteps: DevelopmentStep[] = [
  {
    id: 1,
    title: "Data Collection",
    description:
      "Compile complete Uzbekistan legal code + psychological resources",
  },
  {
    id: 2,
    title: "Data Processing",
    description: "Clean, structure, and chunk documents for AI training",
  },
  {
    id: 3,
    title: "Model Training",
    description: "Fine-tune LLM on legal+psychological dataset",
  },
  {
    id: 4,
    title: "RAG Implementation",
    description: "Build retrieval system for accurate citations",
  },
  {
    id: 5,
    title: "Interface Development",
    description: "Create web, mobile, and bot interfaces",
  },
  {
    id: 6,
    title: "Testing & Iteration",
    description: "Expert review and user testing for accuracy",
  },
];

const techStack: TechStackCategory[] = [
  {
    id: 1,
    title: "AI/ML Layer",
    color: "red",
    items:
      "Python, TensorFlow, PyTorch, LangChain, OpenAI API, Hugging Face Transformers",
  },
  {
    id: 2,
    title: "Backend",
    color: "gray",
    items: "Node.js, Express, Python FastAPI, PostgreSQL, Redis, WebSockets",
  },
  {
    id: 3,
    title: "Frontend",
    color: "red",
    items: "React, Next.js, TypeScript, Tailwind CSS, React Native",
  },
  {
    id: 4,
    title: "Integration",
    color: "gray",
    items: "Telegram Bot API, Twilio, Firebase Cloud Messaging",
  },
  {
    id: 5,
    title: "Infrastructure",
    color: "red",
    items: "AWS EC2, S3, CloudFront, Docker, Kubernetes, GitHub Actions",
  },
];

export function DevelopmentApproach() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Development Approach Card */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Development Approach
            </h3>

            <ol className="space-y-6">
              {developmentSteps.map((step) => (
                <li key={step.id} className="flex gap-4">
                  <span className="font-bold text-red-700 flex-shrink-0">
                    {step.id}.
                  </span>
                  <div className="flex-1">
                    <span className="font-bold text-gray-900">
                      {step.title}:
                    </span>
                    <span className="text-gray-600 ml-2">
                      {step.description}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Technology Stack Summary Card */}
          <div className="border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technology Stack Summary
            </h3>

            <div className="space-y-6">
              {techStack.map((category) => (
                <div key={category.id}>
                  <h4
                    className={`font-bold mb-2 ${
                      category.color === "red"
                        ? "text-red-700"
                        : "text-gray-900"
                    }`}
                  >
                    {category.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
