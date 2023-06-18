import { NextPage } from "next"
import { motion } from "framer-motion"

import Services from "../components/Services"
import { services } from "../utils/data"
import Head from "next/head"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rakib Miah - Portfolio</title>
        <meta
          name="google-site-verification"
          content="BcYnjNH5zbRhIy9Ti23uSoV7Vpn-6selgYPdiwkvtss"
        />
        <meta
          name="description"
          content="I am Rakib Miah. Passionate about Javascript library and framework. Over 1 year of development experience in HTML, CSS, JS, React and NextJS frameworks and  backend dev. Have an exciting project you need help with? Send me an email or call me directly!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="box flex flex-grow flex-col px-6 pt-1 "
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: "-300px", opacity: 0 }}
      >
        <h6 className="my-3 text-base font-medium">
          Last 3 years I have spent most of my time learning Algorithms, Data
          Structure and doing competitive programming and for a year I have
          spent my time learning JavaScript Framework and Library. I can build
          web apps using MERN stack, Nextjs and mobile apps using React Native.
          I am currently available to collaborate on any web development project
          or react native project.
        </h6>
        <div
          className="mt-5 flex-grow bg-gray-400 p-4 dark:bg-gray"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-5 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <div className="mt-3 grid gap-6 md:grid-cols-2">
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <div
                className="col-span-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-100 md:col-span-1 "
                key={service.title}
              >
                <Services service={service} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default About
