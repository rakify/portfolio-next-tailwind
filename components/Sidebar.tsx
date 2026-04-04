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
        {/* The "Frame" */}
        <div className="shadow-inner absolute top-12 h-28 w-28 rounded-full border-4 border-gray/5 bg-gray/5 dark:border-dark-700 dark:bg-dark-700/50" />

        {/* The Image */}
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
        <p className="font-mono mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-link">
          // Senior Software Engineer
        </p>
      </div>

      {/* 01. Social Icons */}
      <div className="mt-10 w-full px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-gray/20 dark:text-gray-600">
            // 01
          </span>
          <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray/40 dark:text-gray-500">
            Connect
          </h5>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-gray/5 bg-gray/5 p-4 dark:border-dark-700/50 dark:bg-dark-700/30">
          <a
            href="https://github.com/rakify"
            target="_blank"
            rel="noreferrer"
            className="text-gray/40 transition-all hover:text-gray dark:text-gray-100 dark:hover:text-white"
            aria-label="GitHub"
          >
            <FaGithubAlt size={20} />
          </a>
          <a
            href="https://linkedin.com/in/rakib-miah"
            target="_blank"
            rel="noreferrer"
            className="text-gray/40 transition-all hover:text-link dark:text-gray-100 dark:hover:text-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:irakibm@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray/40 transition-all hover:text-danger dark:text-gray-100 dark:hover:text-danger"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
        </div>
      </div>

      {/* 02. Contact Details */}
      <div className="mt-8 w-full px-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-gray/20 dark:text-gray-600">
            // 02
          </span>
          <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray/40 dark:text-gray-500">
            Details
          </h5>
        </div>
        <div className="space-y-3 text-[12.5px] font-medium text-gray/70 dark:text-gray-100">
          <div className="flex items-center gap-3">
            <FaAddressCard className="shrink-0 opacity-30" />
            <span className="whitespace-nowrap">Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="shrink-0 opacity-30" />
            <a
              href="mailto:irakibm@gmail.com"
              className="whitespace-nowrap transition-colors hover:text-link"
            >
              irakibm@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="shrink-0 opacity-30" />
            <a
              href="tel:+8801874557769"
              className="whitespace-nowrap transition-colors hover:text-link"
            >
              01874557769
            </a>
          </div>
        </div>
      </div>

      {/* 03. Actions */}
      <div className="mt-10 w-full px-6 pb-4">
        <div className="mb-4 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-gray/20 dark:text-gray-600">
            // 03
          </span>
          <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray/40 dark:text-gray-500">
            Actions
          </h5>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            className="shadow-lg dark:shadow-none flex w-full items-center justify-center gap-2 rounded-xl bg-gray px-6 py-3 text-[13px] font-bold text-white shadow-gray/20 transition-all hover:bg-gray/90 active:scale-95 dark:bg-white dark:text-dark-200 dark:hover:bg-gray-100"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view"
              )
            }
          >
            <FaDownload size={14} />
            <span>Resume</span>
          </button>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}
export default Sidebar
