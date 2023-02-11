import Bar from "@/components/Bar";
import { motion } from "framer-motion";
import Image from "next/image";
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
              BSc in Computer Science Engineering
            </h5>
            <p className="font-thin">- Eastern University (2019-2023)</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Higher Secondary Certificate
            </h5>
            <p className="font-thin">- Narsingdi Science College (2014-2016)</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Secondary School Certificate
            </h5>
            <p className="font-thin">- Chaitanya High School (2004-2014)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Programming Skills</h5>
          <p className="font-thin">
            Participated in 140+ online programming competitions and Solved More
            Than 400 Problems.
          </p>
          <div className="flex flex-row">
            <p className="font-semibold pr-1">Codeforces: </p>
            <a
              href="https://codeforces.com/profile/RakibMiah"
              target="_blank"
              rel="noreferrer"
            >
              https://codeforces.com/profile/RakibMiah
            </a>
          </div>
          <div className="flex flex-row">
            <p className="font-semibold pr-1">Atcoder: </p>
            <a
              href="https://atcoder.com/users/RakibMiah"
              target="_blank"
              rel="noreferrer"
            >
              https://atcoder.com/users/RakibMiah
            </a>
          </div>{" "}
          <div className="flex flex-row">
            <p className="font-semibold pr-1">Codechef: </p>
            <a
              href="https://www.codechef.com/users/rakibmiah"
              target="_blank"
              rel="noreferrer"
            >
              https://www.codechef.com/users/rakibmiah
            </a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Tech Skills</h5>
          <div className="my-2 flex flex-row gap-[10px] justify-between">
            {frontend.map((f, i) => (
              <p className="bg-[#36454f] text-white pr-1 pl-1" key={i}>
                {f.name}
              </p>
            ))}
            {backend.map((f, i) => (
              <p className="bg-[#36454f] text-white" key={i}>
                {f.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
