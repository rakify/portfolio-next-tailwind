import Image from 'next/image';
import pic from '../public/images/Rakib.jpg';
import {
  FaAddressCard,
  FaPhone,
  FaGithubAlt,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import Styles from './styles.module.scss';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
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

      {/* Social Icons */}
      <div className="text-green mx-auto my-5 flex w-9/12 justify-around md:w-full ">
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

      {/* Contacts */}
      <div
        className={`${
          Styles[`job-title`]
        } my-5 py-4 dark:bg-gray-100 dark:text-[#ccc]`}
      >
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
      <div className="flex flex-col items-center justify-between">
        <button
          className={`${
            Styles[`button--inverse`]
          } dark:bg-gray-100 dark:text-[#ccc] dark:hover:bg-gray-300`}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1CuuvKfLShvz64mWvqpheIcaSAsQ8LP-T/view'
            )
          }
        >
          Download Resume
        </button>

        <label className={`${Styles[`switch`]}`}>
          <input
            type="checkbox"
            checked={theme === 'light'}
            id="checkbox"
            onClick={changeTheme}
          />
          <span className={`${Styles[`slider`]}`}></span>
        </label>
      </div>
    </>
  );
};
export default Sidebar;
