import { useTheme } from "./ThemeContext";



function ModeBtn() {
    const { theme, setTheme } = useTheme();

    return ( 
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          id="theme-toggle"
          className="p-2 rounded-full bg-amber-100 dark:bg-gray-700 hover:bg-amber-300 hover:shadow shadow-amber-700"
        >
          <span className="text-xl">
            {theme === "dark" ? "☀️" : "🌑"}
          </span>
        </button>
     );
}

export default ModeBtn;