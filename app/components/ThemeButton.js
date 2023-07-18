"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounnted] = useState(false);

  useEffect(() => {
    setMounnted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Theme Button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-800"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeButton;
