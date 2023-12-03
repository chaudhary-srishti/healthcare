import { useState, useEffect } from "react";
import Head from "next/head";
import QueryService from "../../services/queryService";

export default function Queries() {

  useEffect(() => {
    // getQueryResults();
  }, []);

  const getQueryResults = () => {
    QueryService.getQueryResults()
    .then((result: any) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <>
      <Head>
        <title>Healthcare | Queries</title>
        <meta name="description" content="SER 531 Project Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="pt-20 pb-20">
          <div className="flex flex-col container mx-auto px-4 justify-center items-center">

            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get all hospitals in a location.</h2>

              <div className="flex flex-col mt-6 w-1/3">
                <div className="flex flex-col items-start">
                  <label htmlFor="location" className="text-lg font-medium text-gray-900">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    className="mt-1 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 text-sm"
                    defaultValue="Canada"
                    onChange={(value) => {
                      
                    }}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="w-full mt-1 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">
                
              </div>

            </div>

          </div>
        </div>

      </main>
    </>
  );
}
