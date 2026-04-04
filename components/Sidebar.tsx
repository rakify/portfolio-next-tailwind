import Image from "next/image"
import pic from "../public/images/Rakib.png"
import {
  FaAddressCard,
  FaPhone,
  FaGithubAlt,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import DarkModeToggle from "./DarkModeToggle"

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center py-2">
      {/* Profile Section */}
      <div className="group relative flex w-full flex-col items-center pt-6">
        {/* The "Frame" - shifted slightly down */}
        <div className="shadow-inner absolute top-12 h-28 w-28 rounded-full border-4 border-gray/5 bg-gray/5 dark:border-dark-700 dark:bg-dark-700/50" />

        {/* The Image - larger and getting out of the frame */}
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={pic}
            alt="Rakib Miah"
            className="shadow-2xl rounded-full object-cover"
            height={140}
            width={140}
            quality="100"
            priority
          />
        </div>

        <h3 className="mt-4 font-jose text-3xl font-bold tracking-tight text-gray dark:text-white">
          Rakib Miah
        </h3>
        <p className="mt-1 rounded-full bg-gray/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray/60 dark:bg-dark-700 dark:text-gray-100">
          Senior Software Engineer
        </p>
      </div>

      {/* Social Icons */}
      <div className="my-4 flex w-full items-center justify-center gap-x-6 border-y border-gray/5 py-4 dark:border-dark-700/50">
        <a
          href="https://github.com/rakify"
          target="_blank"
          rel="noreferrer"
          className="transform text-gray/40 transition-all hover:-translate-y-1 hover:text-gray dark:text-gray-100 dark:hover:text-white"
          aria-label="GitHub"
        >
          <FaGithubAlt size={22} />
        </a>
        <a
          href="https://linkedin.com/in/rakib-miah"
          target="_blank"
          rel="noreferrer"
          className="transform text-gray/40 transition-all hover:-translate-y-1 hover:text-link dark:text-gray-100 dark:hover:text-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:irakibm@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="transform text-gray/40 transition-all hover:-translate-y-1 hover:text-danger dark:text-gray-100 dark:hover:text-danger"
          aria-label="Email"
        >
          <MdEmail size={22} />
        </a>
      </div>

      {/* Contact Details */}
      <div className="mx-auto w-fit space-y-2.5 px-2 pb-5 text-[13.5px] font-medium text-gray/70 dark:text-gray-100">
        <div className="flex items-center gap-3">
          <FaAddressCard className="shrink-0 opacity-50" />
          <span className="whitespace-nowrap">Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center gap-3">
          <MdEmail className="shrink-0 opacity-50" />
          <a
            href="mailto:irakibm@gmail.com"
            className="whitespace-nowrap transition-colors hover:text-link"
          >
            irakibm@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="shrink-0 opacity-50" />
          <a
            href="tel:+8801874557769"
            className="whitespace-nowrap transition-colors hover:text-link"
          >
            01874557769
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaAddressCard className="shrink-0 opacity-50" />
          <a
            href="https://devrakib.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap transition-colors hover:text-link"
          >
            devrakib.vercel.app
          </a>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex w-full flex-col items-center gap-4 border-t border-gray/5 pt-5 dark:border-dark-700/50">
        <button
          className="shadow-lg dark:shadow-none flex w-full items-center justify-center gap-2 rounded-xl bg-gray px-6 py-3 text-sm font-bold text-white shadow-gray/20 transition-all hover:bg-gray/90 active:scale-95 dark:bg-white dark:text-dark-200 dark:hover:bg-gray-100"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view"
            )
          }
        >
          <FaDownload />
          <span>Download Resume</span>
        </button>
        <DarkModeToggle />
      </div>
    </div>
  )
}
export default Sidebar
