import Bar from "@/components/Bar";
import { motion } from "framer-motion";
import { backend, frontend } from "../utils/data";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2 box"
      initial={{ x: "-100px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: "-100px", opacity: 0 }}
    >
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Eastern University (2019-2023)</p>
            <p className="my-3">
              I have obtained BSc in Computer Science and Engineering from
              Eastern University.
            </p>
          </div>
        </div>
      </div>

      {/* Frontend */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Frontend</h5>
          <div className="my-2">
            {frontend.map((f, i) => (
              <Bar value={f} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Backend</h5>
          <div className="my-2">
            {backend.map((b, i) => (
              <Bar value={b} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
