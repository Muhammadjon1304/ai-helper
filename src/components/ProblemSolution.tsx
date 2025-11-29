export function ProblemSolution() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* The Problem */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary rounded-lg p-3">
                <span className="text-white text-2xl">⚠️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              More than 40,000 cases of gender-based violence occur annually in Uzbekistan, with the majority of victims being women and children.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Teenagers and youth face bullying, abuse, stalking, and other crimes at schools, streets, and homes.
            </p>

            <div className="bg-gray-50 border-l-4 border-primary p-6 mb-6 rounded">
              <h3 className="font-bold text-gray-900 mb-4">
                The Reality: Most victims don't report unless it's near-death situations because:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Fear that speaking up won't help</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Intimidation by police officers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Teenagers fear unsupportive parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Lack of knowledge about their rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>High costs of lawyers and psychologists</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-900 font-semibold">
              Women tolerate psychological and physical abuse. Young girls blame themselves when harassed. Teenage boys try to fight bullies alone. <span className="font-bold">They suffer in silence.</span>
            </p>
          </div>

          {/* Our Solution */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary rounded-lg p-3">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed">
              <span className="font-bold text-gray-900">HelpAI</span> is an AI-powered platform that provides instant, free, and anonymous legal advice and psychological support to victims of gender-based violence.
            </p>

            <div className="bg-primary rounded-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg min-w-fit">1.</span>
                  <span>Victim enters the app, website, or Telegram bot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg min-w-fit">2.</span>
                  <span>Describes their problem in their own words</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg min-w-fit">3.</span>
                  <span>Instantly receives personalized psychological support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg min-w-fit">4.</span>
                  <span>Gets legal advice specific to their case</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-lg min-w-fit">5.</span>
                  <span>Learns about their rights and next steps</span>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 border-l-4 border-primary p-6 rounded">
              <h3 className="font-bold text-gray-900 mb-4">AI Knowledge Base:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Complete laws of Uzbekistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Psychological advice from trusted international sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Case-specific personalized responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Available 24/7 in multiple languages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
