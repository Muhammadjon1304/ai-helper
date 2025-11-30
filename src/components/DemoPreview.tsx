import { useState } from "react";

export function DemoPreview() {
  const [messages, setMessages] = useState<
    { type: "ai" | "user"; text: string }[]
  >([
    {
      type: "ai",
      text: "Hello, I am HelpAI. I'm here to provide you with legal advice and psychological support. Your conversation is completely anonymous and confidential. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "ai",
            text: "Thank you for sharing. I understand this is difficult. Based on what you've told me, I can provide guidance on your rights and next steps. Would you like to know more about the legal options available to you?",
          },
        ]);
      }, 500);
      setInput("");
    }
  };

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Interactive Demo
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Experience how HelpAI provides personalized legal and psychological
          support. Try the AI assistant below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-4 border-primary overflow-hidden flex flex-col h-96">
              {/* Header */}
              <div className="bg-primary text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg">HelpAI Assistant</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                        msg.type === "user"
                          ? "bg-primary text-white"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="bg-white border-t border-gray-200 p-4 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message here... (Try: 'I need help with domestic vio...'"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                />
                <button
                  onClick={handleSend}
                  className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors"
                >
                  <span className="text-xl">✈️</span>
                </button>
              </div>
            </div>
          </div>

          {/* Features & Capabilities */}
          <div className="space-y-6">
            {/* AI Capabilities */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                AI Capabilities
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary text-lg mb-2">
                    Legal Knowledge
                  </h4>
                  <p className="text-sm text-gray-600">
                    Trained on the complete Criminal Code, Family Code, and
                    Administrative Code of Uzbekistan
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary text-lg mb-2">
                    Psychological Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    Evidence-based trauma-informed care techniques from WHO and
                    international psychology organizations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
