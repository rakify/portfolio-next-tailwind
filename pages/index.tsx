import { NextPage } from "next";
import { motion } from "framer-motion";

import Services from "../components/Services";
import { services } from "../utils/data";

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1 box "
      initial={{ x: "-300px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: "-300px", opacity: 0 }}
    >
      <h6 className="my-3 text-base font-medium">
        Last 3 years I have spent most of my time learning Algorithms, Data
        Structure and doing competitive programming and for a year I have spent
        my time learning JavaScript Framework and Library. I can build web apps
        using MERN stack, Nextjs and mobile apps using React Native. I am
        currently available to collaborate on any web development project or
        react native project.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-5 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <div className="grid gap-6 mt-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <Services service={service} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default About;
