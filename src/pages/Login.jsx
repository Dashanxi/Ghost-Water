import { useState } from "react";
import WaterRipple from "../components/WaterRipple";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        onLogin();
      } else {
        setError(data.msg || "Invalid credentials");
      }
    } catch {
      setError("Server not reachable");
    }

    setLoading(false);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-indigo-900 z-0" />

      <WaterRipple />

      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 flex h-full">

        <div className="w-1/2 text-white flex flex-col justify-center px-20">

          <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
            AquaMind
          </h1>

          <p className="text-xl text-blue-200 mb-8 leading-relaxed">
            AI-powered smart water distribution system for detecting leaks,
            illegal usage, and pressure anomalies in real-time.
          </p>

          <div className="space-y-4 text-sm text-blue-300">
            <p>✔ Real-time anomaly detection</p>
            <p>✔ AI classification engine</p>
            <p>✔ 50m pipeline localization</p>
            <p>✔ WhatsApp-based field dispatch</p>
          </div>

          <div className="mt-10 text-xs text-blue-400">
            Built for Smart Cities • Scalable • Real-time
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-[420px] text-white">

            <h2 className="text-3xl font-bold mb-2 text-center">
              Welcome Back
            </h2>

            <p className="text-center text-gray-300 text-sm mb-6">
              Login to your dashboard
            </p>

            {error && (
              <div className="bg-red-500/20 text-red-300 text-sm p-2 rounded mb-4 text-center">
                {error}
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-xs text-center text-gray-400 mt-6">
              Secure Authentication • Role-based Access
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}