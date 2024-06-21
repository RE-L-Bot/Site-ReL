import "@/public/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RE=L Bot</title>
        <meta name="description" content="RE=L Bot discord " />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Access-Control-Allow-Origin" content="*" />
        <meta name="Access-Control-Allow-Methods" content="GET, POST, PUT, DELETE, OPTIONS" />
        <meta name="Access-Control-Allow-Headers" content="Content-Type, Authorization-" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
