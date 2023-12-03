import { useState, useEffect } from "react";
import Head from "next/head";
import QueryService from "../../services/queryService";

import { Connection, query} from "stardog";

export default function Queries() {

  const [queryResults1, setQueryResults1] = useState<any>();

  const connection = new Connection({
    username: 'SERAdmin',
    password: 'admin@ser531',
    endpoint: 'https://sd-90a47ad8.stardog.cloud:5820/'
  });

  useEffect(() => {
    getQueryResults();
  }, []);

  const getQueryResults = () => {
    query.execute(
      connection,
      'healthcare',
      QueryService.query1,
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        setQueryResults1(body.results.bindings);
      }
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

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get a list of first 50 patients</h2>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Patient ID, Name, DOB, SSN</p>
                {
                  queryResults1 != null ? (

                    queryResults1.map(result => {
                      return (
                        <p className="text-sm text-left text-black mt-1">{result.id.value}, {result.name.value}, {result.dob.value}, {result.ssn.value}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

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
