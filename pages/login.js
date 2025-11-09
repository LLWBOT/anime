import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "") {
      localStorage.setItem("animepfp_user", JSON.stringify({ name: username }));
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-3xl font-bold text-accent mb-4">Welcome Back!</h1>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="w-64 p-2 rounded-lg bg-darkcard border border-accent text-sm focus:outline-none text-white"
      />
      <button
        onClick={handleLogin}
        className="mt-4 bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
      >
        Login
      </button>
      <p
        onClick={() => router.push("/signup")}
        className="text-gray-400 text-sm mt-4 cursor-pointer hover:text-accent"
      >
        Don’t have an account? Sign up
      </p>
    </div>
  );
}
