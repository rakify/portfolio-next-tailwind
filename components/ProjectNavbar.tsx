import { FC } from "react";
import { Category } from "../utils/interface";

export const NavItem: FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-[#59b256]";
  if (active === value) className += " text-[#59b256]";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FC<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="next" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="firebase" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
