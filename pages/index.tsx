import { NextPage } from "next"
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
      <div className="box flex flex-grow flex-col px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium">
          Dedicated the past three years to honing my skills in competitive
          programming while gaining practical experience with JavaScript
          frameworks and libraries. Eager to leverage my expertise in a
          professional setting, I am actively seeking a job that provides
          opportunities for growth, engaging real-world projects, and the
          ability to measure my performance.
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
      </div>
    </>
  )
}
export default About
