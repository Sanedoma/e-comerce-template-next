"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
          light_mode
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-surface-container-low transition-colors w-10 h-10 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="material-symbols-outlined text-blue-400">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-slate-600">
          dark_mode
        </span>
      )}
    </button>
  );
}
