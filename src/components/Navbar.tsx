import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              HelpAI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("technical")}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Technical
            </button>
            <a
              href="https://t.me/helpai_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Try Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("problem")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection("technical")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Technical
            </button>
            <a
              href="https://t.me/helpai_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Try Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};