import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "./layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Healthcare</title>
        <meta name="description" content="SER 531 Project Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
