"use client";

import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
export const themeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemThemePreference = window.matchMedia(
      "(prefers-color-scheme:dark)",
    );
    // setting theme based on saved theme or system preference
    setTheme(
      savedTheme
        ? savedTheme
        : systemThemePreference.matches
          ? "dark"
          : "light",
    );
    // listen for system theme change
    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    };
    systemThemePreference.addEventListener("change", handleThemeChange);
    // cleanup callback to stop memory leak
    return () =>
      systemThemePreference.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
