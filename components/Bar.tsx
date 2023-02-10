import { FC } from "react";

import { Skill } from "../utils/interface";

const Bar: FC<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;