// pages/dashboard.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "@/components/Navbar";
import ChatbotFloating from "@/components/ChatbotFloating";
import GeneratorCard from "@/components/GeneratorCard";
import RecentGenerationCard from "@/components/RecentGenerationCard";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      else setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <p className="text-xl">Loading your ENIME.ai dashboard...</p>
      </div>
    );

  // Placeholder data for demo
  const exampleGenerators = [
    {
      id: 1,
      name: "Cool Anime Generator",
      exampleImg: "https://source.unsplash.com/200x200/?anime,character",
      creator: "ENIME.ai",
    },
    {
      id: 2,
      name: "Chibi Style Generator",
      exampleImg: "https://source.unsplash.com/200x200/?anime,chibi",
      creator: "ENIME.ai",
    },
  ];

  const recentGenerations = [
    {
      id: 1,
      name: "My First PFP",
      img: "https://source.unsplash.com/200x200/?anime,avatar",
      generator: "Cool Anime Generator",
    },
    {
      id: 2,
      name: "Chibi Fun",
      img: "https://source.unsplash.com/200x200/?anime,character",
      generator: "Chibi Style Generator",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      <main className="p-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">
            Welcome back, {user.email} 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Explore and create AI anime PFPs on ENIME.ai
          </p>
        </section>

        {/* Generators Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-4">
            Your Generators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {exampleGenerators.map((gen) => (
              <GeneratorCard key={gen.id} generator={gen} />
            ))}
          </div>
        </section>

        {/* Recent Generations Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-4">
            Recent Generations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentGenerations.map((gen) => (
              <RecentGenerationCard key={gen.id} generation={gen} />
            ))}
          </div>
        </section>

        {/* Random AI Ideas Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-4">
            Random AI Ideas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-darkcard p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-white font-semibold mb-2">
                Magical Girl PFP
              </h3>
              <p className="text-gray-400 text-sm">
                Generate a magical girl anime avatar instantly!
              </p>
            </div>
            <div className="bg-darkcard p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-white font-semibold mb-2">Cyberpunk PFP</h3>
              <p className="text-gray-400 text-sm">
                Futuristic cyberpunk anime avatar generator.
              </p>
            </div>
            <div className="bg-darkcard p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-white font-semibold mb-2">Chibi Fun</h3>
              <p className="text-gray-400 text-sm">
                Cute chibi anime avatars for your profile.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Chatbot */}
      <ChatbotFloating />
    </div>
  );
}
