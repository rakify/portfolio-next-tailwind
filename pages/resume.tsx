import Head from "next/head"
import { backend, frontend } from "../utils/data"

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

      <div className="px-6 py-2">
        <div className="flex flex-col justify-between gap-2 lg:flex-row">
          {/* Working Experience */}
          <div className="">
            <div>
              <h5 className="my-3 border-b-4 text-lg font-bold xl:text-2xl">
                Experience
              </h5>
              <div className="pb-2">
                <h3 className="text-md my-2 font-bold xl:text-lg">
                  Software Engineer - I
                </h3>
                <p className="font-medium text-[green] dark:text-white">
                  {"- "}
                  <a
                    className="text-link hover:underline dark:text-white"
                    href="https://moveon.com.bd"
                  >
                    MoveOn Technologies Ltd
                  </a>{" "}
                  (08/2023 - Present)
                </p>
              </div>

              <div className="pb-2">
                <h3 className="text-md my-2 font-bold xl:text-lg">
                  Frontend Developer (Internship)
                </h3>
                <p className="font-medium text-[green] dark:text-white">
                  {"- "}
                  <a
                    className="text-link hover:underline dark:text-white"
                    href="https://lemonhive.com"
                  >
                    Lemon Hive
                  </a>{" "}
                  (03/2023 - 06/2023)
                </p>
              </div>
            </div>
          </div>
          {/* Programming Skills */}
          <div className="">
            <div>
              <h5 className="my-3 border-b-4 text-lg font-bold xl:text-2xl">
                Programming Skills
              </h5>
              <h6 className="my-3 text-base font-medium">
                Participated in 140+ online programming competitions and Solved
                More Than 400 Problems.
              </h6>
              <div className="flex flex-row">
                <p className="pr-1 font-semibold">Codeforces: </p>
                <a
                  href="https://codeforces.com/profile/RakibMiah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Codeforces/RakibMiah
                </a>
              </div>
              <div className="flex flex-row">
                <p className="pr-1 font-semibold">Atcoder: </p>
                <a
                  href="https://atcoder.com/users/RakibMiah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Atcoder/RakibMiah
                </a>
              </div>
              <div className="flex flex-row">
                <p className="pr-1 font-semibold">Codechef: </p>
                <a
                  href="https://www.codechef.com/users/rakibmiah"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Codechef/rakibmiah
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="grid gap-9">
          <div>
            <h5 className="my-3 border-b-4 text-2xl font-bold">Tech Skills</h5>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              {/* Frontend */}
              <div className="flex-grow">
                <h6 className="inline border-b-2 text-cyan-700 dark:text-white">
                  Frontend
                </h6>
                <div className="my-2 grid grid-cols-2 gap-[5px] sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  {frontend.map((f, i) => (
                    <p
                      className="rounded-lg bg-cyan-700 pr-1 pl-1 text-center text-white"
                      key={i}
                    >
                      {f.name}
                    </p>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="flex-grow">
                <h6 className="inline border-b-2 text-cyan-700 dark:text-white">
                  Backend
                </h6>
                <div className="my-2 grid grid-cols-2 gap-[5px] sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  {backend.map((f, i) => (
                    <p
                      className="rounded-lg bg-cyan-700 pr-1 pl-1 text-center text-white"
                      key={i}
                    >
                      {f.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="grid gap-6">
          <div>
            <h5 className="my-3 border-b-4 text-2xl font-bold">Education</h5>
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="my-2 text-sm font-bold">
                  BSc in Computer Science & Engineering
                </h5>
                <p className="font-medium text-[green] dark:text-white">
                  - Eastern University (2019-2023)
                </p>
              </div>
              <div className="dark:text-[yellow]">3.73</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <h5 className="my-2 text-sm font-bold">
                  Higher Secondary Certificate
                </h5>
                <p className="font-medium text-[green] dark:text-white">
                  - Narsingdi Science College (2014-2016)
                </p>
              </div>
              <div className="dark:text-[yellow]">5.00</div>
            </div>

            <div className="flex items-center justify-between pb-3">
              <div className="">
                <h5 className="my-2 text-sm font-bold">
                  Secondary School Certificate
                </h5>
                <p className="font-medium text-[green] dark:text-white">
                  - Chaitanya High School (2004-2014)
                </p>
              </div>
              <div className="dark:text-[yellow]">5.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
