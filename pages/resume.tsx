import { motion } from "framer-motion";
import Head from "next/head";
import { backend, frontend } from "../utils/data";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Rakib Miah - Resume</title>
        <meta
          name="description"
          content="My complete resume is here. Hi! I am Rakib Miah. Passionate about Javascript library and framework. Over 1 year of development experience in HTML, CSS, JS, React and NextJS frameworks and  backend dev. Have an exciting project you need help with? Send me an email or call me directly!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className="px-6 py-2 box"
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: "-100px", opacity: 0 }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold border-b-4">
              Programming Skills
            </h5>
            <h6 className="my-3 text-base font-medium">
              Participated in 140+ online programming competitions and Solved
              More Than 400 Problems.
            </h6>
            <div className="flex flex-row">
              <p className="font-semibold pr-1">Codeforces: </p>
              <a
                href="https://codeforces.com/profile/RakibMiah"
                target="_blank"
                rel="noreferrer"
              >
                Codeforces/RakibMiah
              </a>
            </div>
            <div className="flex flex-row">
              <p className="font-semibold pr-1">Atcoder: </p>
              <a
                href="https://atcoder.com/users/RakibMiah"
                target="_blank"
                rel="noreferrer"
              >
                Atcoder/RakibMiah
              </a>
            </div>{" "}
            <div className="flex flex-row">
              <p className="font-semibold pr-1">Codechef: </p>
              <a
                href="https://www.codechef.com/users/rakibmiah"
                target="_blank"
                rel="noreferrer"
              >
                Codechef/rakibmiah
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="grid gap-9">
          <div>
            <h5 className="my-3 text-2xl font-bold border-b-4">Tech Skills</h5>
            <div className="my-2 flex flex-row flex-wrap gap-[10px] justify-between">
              {frontend.map((f, i) => (
                <p
                  className="bg-[#36454f] text-white pr-1 pl-1 text-center"
                  key={i}
                >
                  {f.name}
                </p>
              ))}
              {backend.map((f, i) => (
                <p
                  className="bg-[#36454f] text-white pr-1 pl-1 text-center"
                  key={i}
                >
                  {f.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* //! Education */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold border-b-4">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                BSc in Computer Science Engineering
              </h5>
              <p className="font-medium">- Eastern University (2019-2023)</p>
            </div>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Higher Secondary Certificate
              </h5>
              <p className="font-medium">
                - Narsingdi Science College (2014-2016)
              </p>
            </div>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Secondary School Certificate
              </h5>
              <p className="font-medium">- Chaitanya High School (2004-2014)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
