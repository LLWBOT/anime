// pages/dashboard.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import ChatbotFloating from "@/components/ChatbotFloating";

// Simple Generator Card Component
const GeneratorCard = ({ generator }) => (
  <div className="bg-gray-900 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
    <img
      src={generator.exampleImg}
      alt={generator.name}
      className="rounded-md mb-2 w-full h-40 object-cover"
    />
    <h3 className="text-white font-semibold text-lg">{generator.name}</h3>
    <p className="text-gray-400 text-sm">Created by {generator.creator}</p>
  </div>
);

// Simple Recent Generation Card Component
const RecentGenerationCard = ({ generation }) => (
  <div className="bg-gray-900 rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
    <img
      src={generation.img}
      alt={generation.name}
      className="rounded-md mb-2 w-full h-40 object-cover"
    />
    <h3 className="text-white font-semibold text-lg">{generation.name}</h3>
    <p className="text-gray-400 text-sm">From {generation.generator}</p>
  </div>
);

// Navbar Component
const Navbar = ({ user }) => {
  const router = useRouter();

  return (
    <nav className="bg-black py-4 px-6 flex justify-between items-center shadow-md">
      <h1
        className="text-2xl font-bold text-sky-400 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        ENIME.ai
      </h1>
      <div className="flex items-center gap-4">
        <p className="text-gray-300">{user.email}</p>
        <button
          onClick={() => signOut(auth)}
          className="bg-sky-400 text-black px-4 py-1 rounded hover:bg-sky-500 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

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
        <p className="text-xl">Loading ENIME.ai dashboard...</p>
      </div>
    );

  // Example Generators
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
    {
      id: 3,
      name: "Cyberpunk PFP Generator",
      exampleImg: "https://source.unsplash.com/200x200/?anime,cyberpunk",
      creator: "ENIME.ai",
    },
  ];

  // Example Recent Generations
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
      img: "https://source.unsplash.com/200x200/?anime,chibi",
      generator: "Chibi Style Generator",
    },
    {
      id: 3,
      name: "Cyber Avatar",
      img: "https://source.unsplash.com/200x200/?anime,cyberpunk",
      generator: "Cyberpunk PFP Generator",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar user={user} />

      <main className="p-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
            Welcome back, {user.email} 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Explore and create amazing AI anime profile pictures on ENIME.ai
          </p>
        </section>

        {/* Generators Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4">
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
          <h2 className="text-2xl font-semibold text-sky-400 mb-4">
            Recent Generations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recentGenerations.map((gen) => (
              <RecentGenerationCard key={gen.id} generation={gen} />
            ))}
          </div>
        </section>
      </main>

      {/* Floating Chatbot */}
      <ChatbotFloating />
    </div>
  );
}
