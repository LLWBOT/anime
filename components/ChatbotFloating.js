// components/ChatbotFloating.js
import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function ChatbotFloating() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-sky-400 text-black p-4 rounded-full shadow-lg hover:bg-sky-500 transition flex items-center justify-center"
        >
          {open ? <FaTimes size={20} /> : <FaRobot size={20} />}
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-900 rounded-lg shadow-xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-sky-400 p-3 flex justify-between items-center">
            <h2 className="text-black font-bold">ENIME.ai Chatbot</h2>
            <button onClick={toggleChat} className="text-black">
              <FaTimes />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto text-white text-sm">
            <p>
              Hi! I’m your ENIME.ai assistant 🤖. I can help you create awesome
              anime PFPs. Just type your ideas and I’ll guide you!
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>
        </div>
      )}
    </>
  );
}
