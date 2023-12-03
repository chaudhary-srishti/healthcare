import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Healthcare</title>
        <meta name="description" content="SER 531 Project Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-white">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Semantic Web Technology for Healthcare Data</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Application for running SPARQL Queries</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/queries" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Run Queries</a>
                  <a href="/ontology" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ontology</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
