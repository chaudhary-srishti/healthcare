import { useState, useEffect } from "react";
import Head from "next/head";

export default function Ontology() {

  useEffect(() => {
  }, []);

  return (
    <>
      <Head>
        <title>Healthcare | Ontology</title>
        <meta name="description" content="SER 531 Project Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="pt-20 pb-20">
          <div className="flex flex-col container mx-auto px-4 justify-center items-center">
              <div className="flex flex-col w-full">
                <h2 className="text-4xl mb-0 font-bold text-left tracking-tight text-black">Ontology</h2>
              </div>
              <div className="w-full mt-4 rounded-md bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-200">
                  <img src="assets/HealthcareOntology1.svg" />
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
