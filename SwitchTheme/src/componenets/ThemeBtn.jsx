import { useTheme } from "../context/ThemeContext";

const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md active:scale-95 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"
    >
      {/* Toggle Track */}
      <div className="relative flex h-7 w-14 items-center rounded-full bg-gray-200 p-1 transition-colors duration-300 dark:bg-gray-700">
        {/* Sliding Thumb */}
        <div
          className={`absolute top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 ${
            isDark ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {isDark ? (
            <svg
              className="h-3.5 w-3.5 text-indigo-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.742 15.71A9.7 9.7 0 0 1 8.29 3.258a9.7 9.7 0 1 0 12.452 12.451Z" />
            </svg>
          ) : (
            <svg
              className="h-3.5 w-3.5 text-amber-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M6.34 6.34 4.93 4.93m14.14 14.14-1.41-1.41M17.66 6.34l1.41-1.41M4.93 19.07l1.41-1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
            </svg>
          )}
        </div>
      </div>

      {/* Text */}
      <span className="w-8 text-left text-sm font-medium text-gray-700 transition-colors dark:text-gray-200">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
};

export default ThemeBtn;
