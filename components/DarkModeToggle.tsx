import Styles from "./styles.module.scss"
import { useTheme } from "next-themes"

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className={Styles.container} onClick={changeTheme}>
      <div className={Styles.icon}>🌙</div>
      <div className={Styles.icon}>🔆</div>
      <div
        className={Styles.ball}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  )
}

export default DarkModeToggle
