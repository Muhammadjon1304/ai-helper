interface AIStrategy {
  id: number;
  label: string;
}

const aiStrategies: AIStrategy[] = [
  { id: 1, label: "Generative AI" },
  { id: 2, label: "Natural Language Processing" },
  { id: 3, label: "Semantic Search" },
  { id: 4, label: "Sentiment Analysis" },
  { id: 5, label: "RAG Architecture" },
  { id: 6, label: "Multilingual AI" },
];

export function InnovationStrategy() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Container */}
        <div className="border-2 border-red-700 rounded-3xl p-12 bg-red-50">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8">
            Innovation & AI Strategy
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
            HelpAI leverages cutting-edge AI technology to democratize access to
            legal and psychological support. Our approach combines
            retrieval-augmented generation (RAG) for accuracy, fine-tuned
            language models for empathy, and multi-modal analysis for
            comprehensive understanding. The system continuously learns from
            expert feedback while maintaining complete user privacy through
            local processing and encrypted communications.
          </p>

          {/* Strategy Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {aiStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className="px-6 py-3 border-2 border-red-700 rounded-full text-red-700 font-semibold text-center hover:bg-red-700 hover:text-white transition-colors"
              >
                {strategy.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
