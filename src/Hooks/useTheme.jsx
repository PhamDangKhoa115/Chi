import { useState, useEffect } from "react";

export default function useTheme(initialTheme = "light") {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return { theme, toggleTheme };
}
