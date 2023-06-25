import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="my-14 grid grid-cols-12 gap-6 px-2 sm:px-40 md:mb-8 md:px-40 lg:mb-0 lg:px-14 xl:px-20 ">
        <div className="col-span-12 h-full items-center rounded-2xl bg-white p-4 text-center text-base shadow-custom-light dark:bg-gray-100 dark:shadow-custom-dark lg:col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-light dark:bg-gray-100 dark:shadow-custom-dark lg:col-span-8">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
