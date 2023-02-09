import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-48 my-14 lg:px-7">
      <div className="col-span-12 lg:col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
