import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="icon" href="img/favicon.ico" />
        <meta name="description" content="personal portfolio react template" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
