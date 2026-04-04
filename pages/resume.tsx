import Head from "next/head"
import { backend, frontend, experience, education } from "../utils/data"

const Resume = () => {
  return (
    <>
      <Head>
        <title>Rakib Miah - Resume</title>
        <meta
          name="description"
          content="Resume of Rakib Miah, Senior Software Engineer with 3+ years of professional experience in React, Next.js, Node.js, NestJS, Laravel, and full-stack product development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-10 py-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* 01. Experience */}
          <section>
            <div className="mb-8 flex items-baseline gap-3">
              <span className="font-jose text-sm font-bold text-link opacity-50">01</span>
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray dark:text-white">
                Experience
              </h5>
            </div>
            
            <div className="space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx} className="group relative">
                  <h3 className="text-lg font-extrabold tracking-tight text-gray dark:text-gray-100 group-hover:text-link transition-colors">
                    {exp.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-[13px]">
                    <a
                      href={exp.link}
                      className="font-bold text-link hover:underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {exp.company}
                    </a>
                    <span className="text-gray/30 dark:text-gray-500 font-mono text-[11px]">
                      // {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 border-l-2 border-gray/5 pl-5 dark:border-dark-700">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx} className="text-[13.5px] leading-relaxed text-gray/70 dark:text-gray-400">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-16">
            {/* 02. Programming Skills */}
            <section>
              <div className="mb-8 flex items-baseline gap-3">
                <span className="font-jose text-sm font-bold text-link opacity-50">02</span>
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray dark:text-white">
                  Programming Skills
                </h5>
              </div>
              
              <div className="rounded-2xl border border-gray/5 bg-gray/5 p-6 dark:border-dark-700/50 dark:bg-dark-700/30">
                <h6 className="mb-4 text-sm font-medium leading-relaxed text-gray/70 dark:text-gray-300">
                  Participated in{" "}
                  <span className="font-bold text-gray dark:text-white">140+</span>{" "}
                  online competitions and solved more than{" "}
                  <span className="font-bold text-gray dark:text-white">400</span>{" "}
                  problems.
                </h6>
                <div className="space-y-2.5 text-[13.5px]">
                  {[
                    { label: "Codeforces", user: "RakibMiah", url: "https://codeforces.com/profile/RakibMiah" },
                    { label: "Atcoder", user: "RakibMiah", url: "https://atcoder.com/users/RakibMiah" },
                    { label: "Codechef", user: "rakibmiah", url: "https://www.codechef.com/users/rakibmiah" },
                  ].map((platform, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-24 font-bold text-gray dark:text-gray-200">
                        {platform.label}:
                      </span>
                      <a href={platform.url} target="_blank" rel="noreferrer" className="text-link hover:underline">
                        {platform.user}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 03. Education */}
            <section>
              <div className="mb-8 flex items-baseline gap-3">
                <span className="font-jose text-sm font-bold text-link opacity-50">03</span>
                <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray dark:text-white">
                  Education
                </h5>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h5 className="text-[15px] font-extrabold text-gray dark:text-gray-100">{edu.title}</h5>
                      <p className="mt-1 text-sm text-gray/50 dark:text-gray-400">
                        - {edu.school} <span className="ml-1 font-mono text-[10px] opacity-60">// {edu.period}</span>
                      </p>
                    </div>
                    <div className="rounded-md border border-gray/10 bg-gray/5 px-2 py-0.5 text-[10px] font-black tracking-wider text-gray/40 dark:border-dark-700/50 dark:bg-dark-700 dark:text-gray-500 uppercase">
                      GPA {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* 04. Tech Skills */}
        <section className="mt-20">
          <div className="mb-10 flex items-baseline gap-3">
            <span className="font-jose text-sm font-bold text-link opacity-50">04</span>
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-gray dark:text-white">
              Technical Stack
            </h5>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              { label: "Frontend", data: frontend },
              { label: "Backend", data: backend },
            ].map((skillGroup, idx) => (
              <div key={idx}>
                <h6 className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray/30 dark:text-gray-600">
                  {skillGroup.label}
                </h6>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.data.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="cursor-default rounded-xl border border-gray/5 bg-white px-4 py-2 text-[12px] font-bold text-gray/70 shadow-sm transition-all hover:border-link hover:text-link dark:border-dark-700 dark:bg-dark-700/50 dark:text-gray-300 dark:hover:border-link dark:hover:text-link"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Resume
