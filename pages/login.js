import { useRouter } from "next/router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-3xl font-bold text-accent mb-4">Welcome Back!</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-64 p-2 rounded-lg bg-darkcard border border-accent text-sm focus:outline-none text-white mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-64 p-2 rounded-lg bg-darkcard border border-accent text-sm focus:outline-none text-white mb-2"
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
