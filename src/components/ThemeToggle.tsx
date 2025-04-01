import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (!isDark) {
      htmlElement.classList.add("dark"); // Apply dark mode
    } else {
      htmlElement.classList.remove("dark"); // Remove dark mode
    }
    setIsDark(!isDark); // Update state
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
