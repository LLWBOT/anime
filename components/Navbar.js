import { FiSettings } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("animepfp_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("animepfp_user");
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-darkcard shadow-md">
      <h1
        onClick={() => router.push("/")}
        className="text-2xl font-bold text-accent cursor-pointer"
      >
        AnimePFP.ai
      </h1>

      <div className="flex items-center gap-5">
        {user && (
          <>
            <button><FaSearch className="text-xl hover:text-accent transition" /></button>
            <button><FiSettings className="text-xl hover:text-accent transition" /></button>
            <button
              onClick={handleLogout}
              className="text-sm bg-accent text-black px-3 py-1 rounded-lg font-semibold hover:scale-105 transition"
            >
              Logout
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-accent"
            />
          </>
        )}
      </div>
    </nav>
  );
}
