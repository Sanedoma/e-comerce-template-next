"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
        <span className="material-symbols-outlined text-on-surface-variant">
          light_mode
        </span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-surface-container-low transition-colors w-10 h-10 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <span className="material-symbols-outlined text-blue-400">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-on-surface-variant">
          dark_mode
        </span>
      )}
    </button>
  );
}
