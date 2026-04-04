import { NextPage } from "next"
import Services from "../components/Services"
import { services } from "../utils/data"
import Head from "next/head"

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rakib Miah | Senior Software Engineer</title>
        <meta
          name="google-site-verification"
          content="BcYnjNH5zbRhIy9Ti23uSoV7Vpn-6selgYPdiwkvtss"
        />
        <meta
          name="description"
          content="Rakib Miah is a Senior Software Engineer with 3+ years of professional experience building high-performance web applications with React, Next.js, Node.js, NestJS, Laravel, and PostgreSQL."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-grow flex-col px-8 pt-6">
        <section className="mb-10">
          <p className="text-[17px] leading-relaxed text-gray/80 dark:text-gray-300">
            With over{" "}
            <span className="font-bold text-gray dark:text-white">3 years</span>{" "}
            of professional software development experience and a strong
            competitive programming background, I specialize in building
            high-performance web applications using modern JavaScript
            frameworks.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-gray/80 dark:text-gray-300">
            I currently work as a{" "}
            <span className="font-bold text-gray dark:text-white">
              Senior Software Engineer
            </span>{" "}
            at{" "}
            <a
              href="https://career.moveon.com.bd/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-link hover:underline"
            >
              MoveOn Technologies Ltd
            </a>
            , where I design and ship scalable products across frontend and
            backend systems.
          </p>
        </section>

        <section className="flex-grow pb-8">
          <h4 className="mb-8 inline-block border-b-2 border-gray/5 pb-2 text-xl font-bold tracking-tight text-gray dark:border-dark-700 dark:text-gray-100">
            What I build
          </h4>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                className="shadow-sm hover:shadow-md col-span-1 rounded-2xl border border-gray/5 bg-white p-5 transition-all hover:border-link/30 dark:border-dark-700/50 dark:bg-dark-700/30 dark:hover:border-link/50"
                key={service.title}
              >
                <Services service={service} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
export default About
