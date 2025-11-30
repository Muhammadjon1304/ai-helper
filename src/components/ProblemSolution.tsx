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
              In 2024, the number of crimes reported in Uzbekistan were 132,298,
              and more than 40.000 of them were gender based violence.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Women, children and youth face bullying, abuse, stalking and other
              crimes at schools, streets, and homes. Or normal people face
              problems where they don't know their rights and what to do.
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
              <span className="font-bold text-gray-900">HelpAI</span> is an
              AI-powered platform that provides instant, free, and personalized
              legal advice and psychological support to victims of violence and
              different problems.
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
                  <span>
                    Instantly receives personalized psychological support
                  </span>
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
              <h3 className="font-bold text-gray-900 mb-4">
                AI Knowledge Base:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Complete laws of Uzbekistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    Psychological advice from trusted international sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Case-specific personalized responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>
                    Available 24/7 in Uzbek, Russian, and English languages
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
