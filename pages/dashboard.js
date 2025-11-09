import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ChatbotFloating from "@/components/ChatbotFloating";
import GeneratorCard from "@/components/GeneratorCard";
import RecentGenerationCard from "@/components/RecentGenerationCard";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("animepfp_user");
    if (!storedUser) router.push("/");
    else setUser(JSON.parse(storedUser));
  }, []);

  const generators = [
    {
      title: "Cool Cyberpunk Samurai",
      image: "https://images.unsplash.com/photo-1623059073135-1c0c8c1b0e74?auto=format&fit=crop&w=800&q=80",
      desc: "Neon-lit samurai with futuristic armor and glowing eyes.",
    },
    {
      title: "Soft Girl Vibes",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b8b1f9b2?auto=format&fit=crop&w=800&q=80",
      desc: "Cute and cozy anime aesthetic with pastel tones.",
    },
    {
      title: "Dark Fantasy Knight",
      image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80",
      desc: "Mysterious armored warrior surrounded by shadows.",
    },
  ];

  const recents = [
    {
      image: "https://images.unsplash.com/photo-1603791452906-9cd9d3ca82c2?auto=format&fit=crop&w=300&q=80",
      prompt: "Cool samurai with cyberpunk eyes",
    },
    {
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72f?auto=format&fit=crop&w=300&q=80",
      prompt: "Pastel girl with floating stars",
    },
  ];

  const randomIdeas = [
    "🔥 Mecha Girl With Wings",
    "🌸 Soft Glow School Uniform",
    "🧙‍♂️ Magical Knight with Spellbook",
    "🦊 Fox Spirit With Neon Eyes",
    "👹 Demon Boy With Chains"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-accent mb-4">
          Welcome back, {user?.name || "User"} 👋
        </h2>

        {/* CREATE BUTTON */}
        <div className="flex justify-end mb-4">
          <button className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            + Create AI Generator
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generators.map((gen, i) => (
            <GeneratorCard key={i} {...gen} />
          ))}
        </div>

        {/* RECENT GENERATIONS */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-accent">Your Recent Generations</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {recents.map((r, i) => (
            <RecentGenerationCard key={i} {...r} />
          ))}
        </div>

        {/* RANDOM IDEAS */}
        <h3 className="text-xl font-semibold mt-10 mb-3 text-accent">Random AI Ideas 💡</h3>
        <div className="bg-darkcard p-4 rounded-xl shadow-md text-gray-300">
          <ul className="list-disc ml-6 space-y-1">
            {randomIdeas.map((idea, i) => (
              <li key={i}>{idea}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* FLOATING CHATBOT */}
      <ChatbotFloating />
    </div>
  );
}
