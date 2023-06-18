import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-400 bg-[url(/images/Texture.png)] bg-repeat dark:bg-gray dark:text-[#CCCCCC]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
