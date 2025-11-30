interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  skills: string[];
  socialLinks?: {
    linkedin?: string;
    github?: string;
    website?: string;
    x?: string;
    substack?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Muhammadjon Parpiyev",
    role: "Full-Stack Developer",
    description:
      "Experienced in building scalable web applications with focus on user experience and security.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    socialLinks: {
      github: "https://github.com/muhammadjon1304",
    },
  },
  {
    id: 2,
    name: "Guljamal Baymurzaeva",
    role: "Legal & Psychological Researcher",
    description:
      "Author of 'Uzbekistan's Economic Transition from Central to Market Economy,' mentored by Prof. Jong Kim (Emory University) through Pioneer Academics; received A- and 4 college credits from Oberlin College. Research assistant to Dr. Mirzo Zokirov at TSUE, contributing data analysis for research on the book 'Why Nations Fail.'",
    skills: [
      "Legal Research",
      "Data Analysis",
      "Economic Research",
      "Academic Writing",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/guljamal-baymurzaeva",
    },
  },
  {
    id: 3,
    name: "Muxlisa Abduaxatova",
    role: "Project Manager",
    description:
      "Self-Defense Camp for Women and Girls Alumni, by US Embassy. Trained in Women Empowerment with Phd psychologist Gulnora Bogdalova, and Legal Literacy by Human Rights lawyer Dilfuza Kuralova, supported by US Embassy. Former Consultant and Sales Manager at RIKS Education and EuroLink consulting, with 2 years of experience in managing people. Current Legal Assistant to lawyer Alan Pashovskiy in Acceptus legal firm.",
    skills: [
      "Project Management",
      "Team Leadership",
      "Legal Assistance",
      "Women Empowerment",
      "Legal Literacy",
    ],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/muxlisa-abduaxatova-6ab875360/",
    },
  },
  {
    id: 4,
    name: "Imamatdin Sultaniyazov",
    role: "AI Engineer",
    description:
      "TKS Innovate'25; Activate'26. Student accelerator, got $9k in aid to study and build with top students in the world. FII Nexus AI fellow: worked on 16 AI projects and trained a custom ML model.",
    skills: [
      "Machine Learning",
      "AI Development",
      "Custom ML Models",
      "Python",
      "Deep Learning",
    ],
    socialLinks: {
      x: "https://x.com/Imamatdin_S",
      substack: "https://www.substack.com/@imamatdinsultaniyazov",
      linkedin: "https://www.linkedin.com/in/imamatdin-sultaniyazov",
      website: "https://imamatdin.com",
      github: "https://github.com/Imamatdin",
    },
  },
];

const LinkedinIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1 14h2v-8.5h-2v8.5z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V9h4v3h3l-5 5z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SubstackIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

export function Team() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated group of professionals committed to ending gender-based
            violence through technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="border-l-4 border-red-700 bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header with Social Links */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {member.role}
                  </p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-2 flex-wrap">
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                  {member.socialLinks?.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {member.socialLinks?.website && (
                    <a
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Website"
                    >
                      <GlobeIcon />
                    </a>
                  )}
                  {member.socialLinks?.x && (
                    <a
                      href={member.socialLinks.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <XIcon />
                    </a>
                  )}
                  {member.socialLinks?.substack && (
                    <a
                      href={member.socialLinks.substack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Substack"
                    >
                      <SubstackIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="border-2 border-red-700 rounded-lg p-6 bg-white">
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Note:</span> All team
            members are registered for AI500 through the Telegram Bot. Each
            member brings unique expertise to create a comprehensive solution to
            support survivors of gender-based violence.
          </p>
        </div>
      </div>
    </section>
  );
}
