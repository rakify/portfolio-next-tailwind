import Image from "next/image"
import pic from "../public/images/Rakib.jpg"
import { FaAddressCard, FaPhone, FaGithubAlt, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { useTheme } from "next-themes"

import Styles from "./styles.module.scss"
import DarkModeToggle from "./DarkModeToggle"

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between">
      <Image
        src={pic}
        alt="Picture of Rakib"
        className="mx-auto rounded-full border "
        height={128}
        width={128}
        quality="100"
      />
      <h3 className="my-2 text-center font-jose text-4xl font-bold tracking-widest">
        Rakib Miah
      </h3>
      <p className={`${Styles[`job-title`]} dark:bg-gray-100 dark:text-[#ccc]`}>
        Software Engineer
      </p>

      {/* Contacts */}
      <div
        className={`${Styles["job-title"]} my-5 py-4 dark:bg-gray-100 dark:text-[#ccc]`}
      >
        <div className="flex items-center">
          <FaAddressCard className="mr-2" />
          <span>Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center">
          <MdEmail className="mr-2" />
          <span>irakibm@gmail.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-2" />
          <span>+8801580841319</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="text-green mx-auto my-5 flex w-9/12 justify-around lg:w-full ">
        <Link href="https://github.com/rakify" legacyBehavior>
          <a
            target="_blank"
            className={`${Styles[`icon-button`]} ${Styles[`twitter`]}`}
          >
            <i className={`${Styles[`icon-twitter`]}`}>
              <FaGithubAlt />
            </i>
            <span></span>
          </a>
        </Link>
        <Link href="https://linkedin.com/in/rakib-miah" legacyBehavior>
          <a
            target="_blank"
            className={`${Styles[`icon-button`]} ${Styles[`facebook`]}`}
          >
            <i className={`${Styles[`icon-facebook`]}`}>
              <FaLinkedin />
            </i>
            <span></span>
          </a>
        </Link>
        <Link href="mailto:irakibm@gmail.com" legacyBehavior>
          <a
            target="_blank"
            className={`${Styles[`icon-button`]} ${Styles[`google-plus`]}`}
          >
            <i className={`${Styles[`icon-google-plus`]}`}>
              <MdEmail />
            </i>
            <span></span>
          </a>
        </Link>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-between">
        <button
          className={`${
            Styles[`button--inverse`]
          } dark:bg-gray-100 dark:text-[#ccc] dark:hover:bg-gray-300`}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view"
            )
          }
        >
          Download Resume
        </button>

        <DarkModeToggle />
      </div>
    </div>
  )
}
export default Sidebar
