interface Advantage {
  id: number;
  text: string;
}

const motivations = [
  "Commitment to women's rights and child protection",
  "Belief that technology can save lives",
  "Vision of an Uzbekistan free from violence",
  "Long-term dedication beyond this hackathon",
];

const advantages: Advantage[] = [
  { id: 1, text: "Localized for Uzbekistan - laws, culture, language" },
  { id: 2, text: "Multi-disciplinary team (tech, legal, psychology)" },
  { id: 3, text: "Focus on accessibility and zero-cost access" },
  { id: 4, text: "Trauma-informed design principles" },
];

const HeartIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PeopleIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-red-700 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function TeamMotivation() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Passion & Motivation Card */}
          <div className="border-l-4 border-red-700 bg-gray-50 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-red-700">
                <HeartIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Passion & Motivation
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              This project is personal for us. We've witnessed the devastating
              effects of gender-based violence in our communities. We're driven
              by:
            </p>
            <ul className="space-y-3">
              {motivations.map((motivation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{motivation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Unique Advantages Card */}
          <div className="border-l-4 border-red-700 bg-gray-50 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-red-700">
                <PeopleIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Unique Advantages
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              What sets us apart from other solutions:
            </p>
            <ul className="space-y-3">
              {advantages.map((advantage) => (
                <li key={advantage.id} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{advantage.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Previous Experience Section */}
        <div className="bg-red-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Previous Experience</h3>
          <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
            Our team has worked on similar social impact projects, including
            community safety applications, educational platforms for underserved
            populations, and AI-powered legal tech solutions. We understand the
            unique challenges of building technology for vulnerable users and
            have the experience to create solutions that are both powerful and
            accessible.
          </p>
          <p className="text-xl font-semibold italic">
            We're not just building an app — we're building a lifeline.
          </p>
        </div>
      </div>
    </section>
  );
}
