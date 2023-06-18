import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="my-14 grid grid-cols-12 gap-6 px-5 sm:px-20 md:mb-16 md:px-32 lg:mb-0 lg:px-36 xl:px-48 ">
        <div className="col-span-12 h-full items-center rounded-2xl bg-white p-4 text-center text-base shadow-custom-light dark:bg-gray-100 dark:shadow-custom-dark lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-custom-light dark:bg-gray-100 dark:shadow-custom-dark lg:col-span-9">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
