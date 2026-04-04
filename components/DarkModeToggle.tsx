import { useTheme } from "next-themes"

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div
      className="relative flex h-6 w-11 cursor-pointer items-center justify-between rounded-full border border-gray/10 bg-gray/5 p-1 transition-colors dark:border-dark-700 dark:bg-dark-700/50"
      onClick={toggleTheme}
    >
      <div className="text-[10px]">🌙</div>
      <div className="text-[10px]">🔆</div>
      <div
        className={`absolute h-4 w-4 rounded-full bg-link shadow-sm transition-all duration-300 ease-in-out ${
          theme === "light" ? "left-1" : "left-6"
        }`}
      />
    </div>
  )
}

export default DarkModeToggle
