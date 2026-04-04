import { FC } from "react"
import { Category } from "../utils/interface"

export const NavItem: FC<{
  value: Category | "All"
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  const isActive = active === value

  return (
    <li
      className={`
        cursor-pointer whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300
        ${
          isActive
            ? "bg-link text-white shadow-md shadow-link/20 dark:shadow-none"
            : "bg-gray/5 text-gray/50 hover:bg-gray/10 dark:bg-dark-700 dark:text-gray-400 dark:hover:bg-dark-700/70"
        }
      `}
      onClick={() => handlerFilterCategory(value)}
    >
      {value}
    </li>
  )
}

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <nav className="flex items-center">
      <ul className="flex list-none gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
        <NavItem value="All" {...props} />
        <NavItem value="React" {...props} />
        <NavItem value="Next" {...props} />
        <NavItem value="Express" {...props} />
        <NavItem value="Nest" {...props} />
        <NavItem value="GraphQL" {...props} />
        <NavItem value="React Native" {...props} />
        <NavItem value="Tasks" {...props} />
        <NavItem value="Template" {...props} />
      </ul>
    </nav>
  )
}

export default ProjectsNavbar
