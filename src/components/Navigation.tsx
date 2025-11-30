import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              HelpAI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Roadmap
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("problem")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded transition-colors"
              >
                Roadmap
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
