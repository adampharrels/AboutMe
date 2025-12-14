import React, { createContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  light: boolean;
  setLight: (v: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  light: false,
  setLight: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [light, setLight] = useState(false);

  // Initialize from localStorage (client-side) or prefers-color-scheme
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("theme-light");
    if (raw !== null) {
      setLight(raw === "true");
    } else {
      const prefersLight =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      setLight(Boolean(prefersLight));
    }
  }, []);

  // Persist preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("theme-light", String(light));
    } catch (e) {
      // ignore
    }
  }, [light]);

  return <ThemeContext.Provider value={{ light, setLight }}>{children}</ThemeContext.Provider>;
}
