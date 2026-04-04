import { useState, useEffect, FC } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const NavItem: FC<{
  active: string
  name: string
  route: string
}> = ({ active, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <span className="mx-3 cursor-pointer text-base font-semibold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {name}
      </span>
    </Link>
  ) : null
}

const Navbar = () => {
  const { pathname } = useRouter()
  const [active, setActive] = useState("")

  useEffect(() => {
    if (pathname === "/") setActive("About")
    else if (pathname === "/projects") setActive("Projects")
    else if (pathname === "/resume") setActive("Resume")
    else if (pathname === "/blogs") setActive("Blogs")
  }, [pathname])

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-2">
      <div className="relative">
        <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          {active}
        </span>
        <div className="absolute -bottom-1 left-0 w-8 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
      </div>

      <div className="flex items-center">
        <NavItem active={active} name="About" route="/" />
        <NavItem active={active} name="Resume" route="/resume" />
        <NavItem active={active} name="Projects" route="/projects" />
        <NavItem active={active} name="Blogs" route="/blogs" />
      </div>
    </nav>
  )
}

export default Navbar
