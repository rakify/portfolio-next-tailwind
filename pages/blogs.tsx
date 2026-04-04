import Head from "next/head"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Rakib Miah - Blogs</title>
        <meta name="description" content="Technical blog posts by Rakib Miah." />
      </Head>

      <div className="flex flex-col items-center justify-center flex-grow py-20 px-8 text-center">
        <div className="p-10 rounded-3xl border border-gray/5 bg-gray/5 dark:border-dark-700/50 dark:bg-dark-700/30">
          <h2 className="text-3xl font-bold tracking-tight text-gray dark:text-white mb-4">
            Writing in progress...
          </h2>
          <p className="text-gray/60 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            I&apos;m currently drafting some deep dives into React, Next.js, and backend architecture.
            Stay tuned for technical articles and engineering insights.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-1 bg-link/20 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-link animate-[shimmer_2s_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
