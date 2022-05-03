import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="description" value="This is my blog" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default _app;
