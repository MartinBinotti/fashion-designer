import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = "sebas_portfolio_theme_v1";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return savedTheme === "dark" ? "dark" : "light";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isLightTheme = theme === "light";
    const isDarkTheme = theme === "dark";
    document.documentElement.classList.toggle("theme-light", isLightTheme);
    document.documentElement.classList.toggle("theme-dark", isDarkTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      theme,
      isDarkTheme: theme === "dark",
      toggleTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
