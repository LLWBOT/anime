import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function ChatbotFloating() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-accent text-black p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaRobot size={24} />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 bg-darkcard border border-accent rounded-2xl shadow-2xl w-80 p-4">
          <h3 className="text-accent text-lg font-semibold mb-2">AnimePFP Helper</h3>
          <div className="h-40 overflow-y-auto text-sm text-gray-300 bg-[#1a1a24] p-2 rounded-lg">
            <p>👋 Hey there! Need help creating your anime PFP?</p>
            <p className="mt-2">Try prompts like <span className="text-accent">“Cool cyberpunk samurai”</span> or <span className="text-accent">“Soft girl with neon eyes”</span>.</p>
          </div>
          <input
            placeholder="Type your question..."
            className="mt-3 w-full p-2 rounded-lg bg-[#1a1a24] border border-accent text-sm focus:outline-none"
          />
        </div>
      )}
    </>
  );
}
