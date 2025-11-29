interface TechCategory {
  id: number;
  title: string;
  icon: "ai" | "database" | "code" | "chat" | "shield" | "globe";
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icon: "ai",
    items: [
      "Large Language Models (GPT-4, Claude)",
      "Fine-tuning on legal documents",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain for context management",
      "Sentiment analysis for crisis detection",
    ],
  },
  {
    id: 2,
    title: "Knowledge Base",
    icon: "database",
    items: [
      "Uzbekistan Criminal Code",
      "Family Code and Administrative Code",
      "WHO psychological guidelines",
      "Trauma-informed care protocols",
      "Vector database for semantic search",
    ],
  },
  {
    id: 3,
    title: "Frontend Development",
    icon: "code",
    items: [
      "React.js with TypeScript",
      "Next.js for server-side rendering",
      "Tailwind CSS for styling",
      "Progressive Web App (PWA)",
      "Accessibility (WCAG 2.1 AA)",
    ],
  },
  {
    id: 4,
    title: "Platform Integration",
    icon: "chat",
    items: [
      "Telegram Bot API",
      "WhatsApp Business API (future)",
      "Mobile apps (React Native)",
      "Multi-language support (i18n)",
      "Offline mode capability",
    ],
  },
  {
    id: 5,
    title: "Security & Privacy",
    icon: "shield",
    items: [
      "End-to-end encryption",
      "No user data storage",
      "Anonymous sessions",
      "GDPR & data protection compliance",
      "Regular security audits",
    ],
  },
  {
    id: 6,
    title: "Backend & Infrastructure",
    icon: "globe",
    items: [
      "Node.js with Express",
      "PostgreSQL database",
      "Redis for caching",
      "AWS/Azure cloud hosting",
      "Docker containerization",
    ],
  },
];

const AIIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
    <path d="M9 15c1 1 3 1 3 1s2 0 3-1" strokeLinecap="round" />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7l-4 4 4 4M16 7l4 4-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "ai":
      return <AIIcon />;
    case "database":
      return <DatabaseIcon />;
    case "code":
      return <CodeIcon />;
    case "chat":
      return <ChatIcon />;
    case "shield":
      return <ShieldIcon />;
    case "globe":
      return <GlobeIcon />;
    default:
      return null;
  }
};

export function TechnicalImplementation() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Implementation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to building a secure, scalable, and
            intelligent support platform
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 rounded-2xl p-8 border-t-4 border-red-700 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="text-red-700 mb-4">{getIcon(category.icon)}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-red-700 rounded-full mt-2 flex-shrink-0" />
                    {item}
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
