import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "$ whoami",
  "Kavita Bande",
  "",
  "$ role",
  "Software Developer",
  "",
  "$ tech-stack",
  "React • Node.js • Java • MongoDB",
  "",
  "$ currently",
  "Building AI-powered applications...",
  "",
  "$ status",
  "Available for Internship 🚀",
];

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  useEffect(() => {
  const interval = setInterval(() => {
    setVisibleLines((prev) => {
      if (prev.length >= lines.length) {
        clearInterval(interval);
        return prev;
      }
      return [...prev, lines[prev.length]];
    });
  }, 350);

  return () => clearInterval(interval);
}, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[340px] rounded-2xl overflow-hidden bg-[#0d1117] border border-green-500/30 shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

        <span className="text-xs text-gray-400 ml-3">terminal</span>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-sm min-h-[220px]">
        {visibleLines.map((line, i) => (
          <p
            key={i}
            className={
              line?.startsWith("$")
                ? "text-green-400"
                : "text-gray-300"
            }
          >
            {line}
          </p>
        ))}

        <span className="text-green-400 animate-pulse">█</span>
      </div>
    </motion.div>
  );
};

export default Terminal;