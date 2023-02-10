import Image from "next/image";
import pic from "../public/images/Rakib.png";
import {
  FaAddressCard,
  FaPhone,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Image
        src={pic}
        alt="Picture of Rakib"
        className="mx-auto border rounded-full "
        height={128}
        width={128}
        quality="100"
      />
      <h3 className="my-4 text-4xl font-bold tracking-widest text-center font-jose">
        Rakib Miah
      </h3>
      <p className="px-2 py-1 my-3 flex items-center justify-center rounded-full bg-gray-200 dark:bg-black-500 text-[#59b256] font-jose tracking-wide text-2xl">
        Web Developer
      </p>

      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <Link href="https://github.com/rakify" legacyBehavior>
          <a target="_blank">
            <FaGithubAlt className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/rakib-miah" legacyBehavior>
          <a target="_blank">
            <FaLinkedin className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
        <Link href="mailto:irakibm@gmail.com" legacyBehavior>
          <a target="_blank">
            <MdEmail className="w-8 h-8 cursor-pointer" />
          </a>
        </Link>
      </div>

      {/* Contacts */}
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200">
        <div className="flex items-center justify-evenly">
          <FaAddressCard className="mr-2" /> <span>Dhaka, Bangladesh</span>
        </div>
        <div className="flex items-center justify-evenly">
          <MdEmail className="mr-2" /> irakibm@gmail.com
        </div>
        <div className="flex items-center justify-evenly">
          <FaPhone className="mr-4" /> +8801580841319
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col items-center justify-center">
        <button
          className="w-8/12 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 focus:outline-none"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view"
            )
          }
        >
          Download Resume
        </button>

        <button
          onClick={changeTheme}
          className="w-8/12 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-500 focus:outline-none hover:scale-105 "
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
};
export default Sidebar;
