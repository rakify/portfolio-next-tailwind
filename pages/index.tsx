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
      <div className="flex flex-grow flex-col px-10 pb-10 pt-8">
        {/* 01. Introduction */}
        <section className="mb-16">
          <div className="mb-8 flex items-baseline gap-3">
            <span className="font-mono text-xs font-bold text-link opacity-50">
              {"// 01"}
            </span>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray dark:text-white">
              Brief
            </h5>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="text-[17px] leading-relaxed text-gray/80 dark:text-gray-300">
              With over{" "}
              <span className="font-black text-gray dark:text-white">
                3 years
              </span>{" "}
              of professional software development experience and a strong
              competitive programming background, I specialize in building
              high-performance web applications using modern JavaScript
              frameworks.
            </p>
            <p className="text-[17px] leading-relaxed text-gray/80 dark:text-gray-300">
              I currently work as a{" "}
              <span className="font-black text-gray underline decoration-link/30 underline-offset-8 dark:text-white">
                Senior Software Engineer
              </span>{" "}
              at{" "}
              <a
                href="https://career.moveon.com.bd"
                target="_blank"
                rel="noreferrer"
                className="font-black text-link hover:underline"
              >
                MoveOn Technologies Ltd
              </a>
              , where I design and ship scalable products across frontend and
              backend systems.
            </p>
          </div>
        </section>

        {/* 02. Expertise */}
        <section className="flex-grow">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-mono text-xs font-bold text-link opacity-50">
              {"// 02"}
            </span>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray dark:text-white">
              Expertise
            </h5>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                className="shadow-sm hover:shadow-md group col-span-1 rounded-3xl border border-gray/5 bg-white p-7 transition-all hover:border-link/20 dark:border-dark-700/50 dark:bg-dark-700/30 dark:hover:border-link/50"
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
