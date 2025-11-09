import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("animepfp_user");
    if (storedUser) router.push("/dashboard");
  }, []);

  return (
    <div>
      <Navbar />
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-accent mb-4">
          Create Stunning Anime Profile Pictures
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join AnimePFP.ai and generate beautiful anime-style profile pictures effortlessly.
          Choose your style, describe your character, and let our AI do the magic ✨
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-accent text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="border border-accent px-6 py-2 rounded-lg hover:bg-accent hover:text-black transition"
          >
            Sign Up
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
          alt="anime"
          className="mt-10 mx-auto rounded-xl shadow-lg w-full max-w-3xl"
        />
      </section>
    </div>
  );
}
