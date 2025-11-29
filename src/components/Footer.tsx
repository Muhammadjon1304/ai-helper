const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MessageIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-red-800 text-white">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShieldIcon />
                <h3 className="text-3xl font-bold">HelpAI</h3>
              </div>
              <p className="text-white text-sm leading-relaxed max-w-xs">
                Using artificial intelligence to provide free legal and
                psychological support to victims of gender-based violence in
                Uzbekistan.
              </p>
              <p className="text-white text-sm mt-4">
                AI500! Hackathon 2024 - Stage 1 Submission
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MailIcon />
                  <a
                    href="mailto:helpai.uz@gmail.com"
                    className="text-white hover:text-red-200 transition-colors"
                  >
                    helpai.uz@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon />
                  <a
                    href="tel:+998"
                    className="text-white hover:text-red-200 transition-colors"
                  >
                    +998 XX XXX XX XX
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MessageIcon />
                  <a
                    href="https://t.me/HelpAI_Bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-200 transition-colors"
                  >
                    @HelpAI_Bot (Telegram)
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6">Emergency Resources</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">Police Emergency: 102</p>
                </div>
                <div>
                  <p className="font-semibold">Women's Committee: 1146</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Psychological Help: +998 71 244 71 71
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-red-700">
                  <p className="text-red-200 text-xs leading-relaxed">
                    If you are in immediate danger, please call emergency
                    services
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-red-700 my-8"></div>

          {/* Bottom Section */}
          <div className="space-y-4 text-center">
            <p className="text-white">
              This is a demo website created for the AI500! Hackathon Stage 1
              submission.
            </p>
            <p className="text-white">
              © 2024 HelpAI. Building a safer Uzbekistan through technology.
            </p>
            <div className="pt-4 border-t border-red-700">
              <p className="text-red-200 text-sm leading-relaxed">
                <span className="font-semibold">Important:</span> HelpAI is
                currently in development. For immediate help, please contact
                official emergency services and support organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
