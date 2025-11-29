interface Milestone {
  id: number;
  title: string;
  date: string;
}

interface SuccessMetric {
  id: number;
  text: string;
}

const milestones: Milestone[] = [
  { id: 1, title: "AI Model v1.0", date: "Dec 2024" },
  { id: 2, title: "Beta Testing Launch", date: "Jan 2025" },
  { id: 3, title: "Public Release", date: "Feb 2025" },
  { id: 4, title: "10,000 Users", date: "Q2 2025" },
];

const successMetrics: SuccessMetric[] = [
  { id: 1, text: "Number of users receiving help" },
  { id: 2, text: "Cases reported to authorities" },
  { id: 3, text: "User satisfaction and trust ratings" },
  { id: 4, text: "AI accuracy in legal advice" },
  { id: 5, text: "Partnership agreements with NGOs" },
];

const CheckCircleIcon = () => (
  <svg
    className="w-6 h-6 text-red-700"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

export function MilestonesMetrics() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Milestones Card */}
          <div className="bg-white rounded-2xl p-8 border-t-4 border-red-700 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Key Milestones
            </h3>

            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between pb-6 border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <span className="text-gray-700 font-medium">
                    {milestone.title}
                  </span>
                  <span className="text-red-700 font-semibold text-sm">
                    {milestone.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics Card */}
          <div className="bg-white rounded-2xl p-8 border-t-4 border-red-700 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Success Metrics
            </h3>

            <div className="space-y-4">
              {successMetrics.map((metric) => (
                <div key={metric.id} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-gray-700">{metric.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
