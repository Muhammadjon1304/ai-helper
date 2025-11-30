export function HeroSection() {
  return (
    <section className="w-full py-20 px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border-3 border-white rounded-2xl flex items-center justify-center">
            <span className="text-4xl">🛡</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">HelpAI</h1>

        <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-16 leading-relaxed">
          AI-Powered Legal &amp; Psychological Support for Victims of
          Gender-Based Violence in Uzbekistan
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="bg-primary-dark bg-opacity-60 rounded-3xl p-8 text-white text-center hover:bg-opacity-75 transition-all duration-300">
            <div className="flex justify-center mb-6 text-5xl">⚖️</div>
            <h3 className="text-4xl font-bold mb-4">24/7</h3>
            <h4 className="text-xl font-semibold mb-2">Always Available</h4>
            <p className="text-lg leading-relaxed">
              Free, instant legal advice and psychological support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
