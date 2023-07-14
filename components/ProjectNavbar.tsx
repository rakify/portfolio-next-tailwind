import { FC } from "react"
import { Category } from "../utils/interface"

export const NavItem: FC<{
  value: Category | "All"
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "cursor-pointer hover:text-[#59b256]"
  if (active === value) className += " text-[#59b256] underline"

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className="flex list-none space-x-3 overflow-x-auto px-3 py-2">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Next" {...props} />
      <NavItem value="Mongo" {...props} />
      <NavItem value="MySQL" {...props} />
      <NavItem value="Firebase" {...props} />
      <NavItem value="Nest" {...props} />
      <NavItem value="Rest API" {...props} />
      <NavItem value="GraphQL" {...props} />
      <NavItem value="React Native" {...props} />
      <NavItem value="Tasks" {...props} />
      <NavItem value="Template" {...props} />
    </div>
  )
}

export default ProjectsNavbar
