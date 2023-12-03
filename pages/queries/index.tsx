import { useState, useEffect } from "react";
import Head from "next/head";
import QueryService from "../../services/queryService";

import { Connection, query} from "stardog";

export default function Queries() {

  const [queryResults1, setQueryResults1] = useState<any>();
  const [queryResults2, setQueryResults2] = useState<any>();
  const [queryResults3, setQueryResults3] = useState<any>();
  const [queryResults4, setQueryResults4] = useState<any>();
  const [queryResults5, setQueryResults5] = useState<any>();
  const [queryResults6, setQueryResults6] = useState<any>();

  const [textValue1, setTextValue1] = useState<string>('Patient2');
  const [textValue2, setTextValue2] = useState<string>('2011');

  const connection = new Connection({
    username: 'SERAdmin',
    password: 'admin@ser531',
    endpoint: 'https://sd-90a47ad8.stardog.cloud:5820/'
  });

  useEffect(() => {
    getQueryResults1();
    getQueryResults2('Patient2');
    getQueryResults3('2011');
    getQueryResults4();
    getQueryResults5();
    getQueryResults6();
  }, []);

  const getQueryResults1 = () => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery1(),
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

  const getQueryResults2 = (patient_id: string) => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery2(patient_id),
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        setQueryResults2(body.results.bindings);
      }
    });
  }

  const getQueryResults3 = (year: string) => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery3(year),
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        setQueryResults3(body.results.bindings);
      }
    });
  }

  const getQueryResults4 = () => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery4(),
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        setQueryResults4(body.results.bindings);
      }
    });
  }

  const getQueryResults5 = () => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery5(),
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        var list: any[] = [];
        for (var item in body.results.bindings) {
          if (body.results.bindings[item].name) {
            list.push(body.results.bindings[item].name.value);
          }
        }
        setQueryResults5(list);
      }
    });
  }

  const getQueryResults6 = () => {
    query.execute(
      connection,
      'healthcare',
      QueryService.getQuery6(),
      'application/sparql-results+json',
      {
        limit: 50,
        resoning: true
      }
    ).then(({ body }) => {
      if (body.results.bindings) {
        var list: any[] = [];
        for (var item in body.results.bindings) {
          if (body.results.bindings[item].id) {
            list.push(body.results.bindings[item].id.value);
          }
        }
        setQueryResults6(list);
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

            {/* Query 1 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get a list of first 50 patients</h2>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Patient ID, Name, DOB, SSN</p>
                {
                  queryResults1 != null ? (

                    queryResults1.map(result => {
                      return (
                        <p id={result.id.value} className="text-sm text-left text-black mt-1">{result.id.value}, {result.name.value}, {result.dob.value}, {result.ssn.value}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

            {/* Query 2 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Retrieve medications and their cost for a specific patient.</h2>

              <div className="flex flex-col mt-6 w-1/3">
                <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Patient ID
                    </label>
                    <div className="flex flex-row mt-2">
                      <input
                        type="email"
                        name="patient"
                        id="patient"
                        value={textValue1}
                        onChange={(value) => {
                          setTextValue1(value.target.value);
                        }}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Patient2"
                      />
                      <button
                        onClick={() => {
                          setQueryResults2(null);
                          getQueryResults2(textValue1);
                        }}
                        type="button"
                        className="ml-2 rounded-md whitespace-nowrap bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Fetch Results
                      </button>
                    </div>
                </div>
              </div>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Patient ID, Medication, Cost</p>
                {
                  queryResults2 != null ? (

                    queryResults2.map(result => {
                      return (
                        <p id={result.id.value} className="text-sm text-left text-black mt-1">{result.id.value}, {result.desc.value}, {result.cost.value}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

            {/* Query 3 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Retrieve total procedures performed on patients in a specific year.</h2>

              <div className="flex flex-col mt-6 w-1/3">
                <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Year
                    </label>
                    <div className="flex flex-row mt-2">
                      <input
                        type="email"
                        name="year"
                        id="year"
                        value={textValue2}
                        onChange={(value) => {
                          setTextValue2(value.target.value);
                        }}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Patient2"
                      />
                      <button
                        onClick={() => {
                          setQueryResults3(null);
                          getQueryResults3(textValue2);
                        }}
                        type="button"
                        className="ml-2 rounded-md whitespace-nowrap bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Fetch Results
                      </button>
                    </div>
                </div>
              </div>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Patient ID, Year, Procedure</p>
                {
                  queryResults3 != null ? (

                    queryResults3.map(result => {
                      return (
                        <p id={result.id.value} className="text-sm text-left text-black mt-1">{result.id.value}, {result.year.value}, {result.desc.value}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

            {/* Query 4 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get a list of patients grouped by encounter category</h2>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Category, Count</p>
                {
                  queryResults4 != null ? (

                    queryResults4.map(result => {
                      return (
                        <p id={result.category.value} className="text-sm text-left text-black mt-1">{result.category.value}, {result.count.value}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

            {/* Query 5 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get a list of general medical and surgical hospitals</h2>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Hospital Name</p>
                {
                  queryResults5 != null ? (

                    queryResults5.map(result => {
                      return (
                        <p id={result} className="text-sm text-left text-black mt-1">{result}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

            {/* Query 6 */}
            <div className="w-full mt-4 rounded-md bg-gray-50 py-10 px-6 text-center ring-1 ring-inset ring-gray-200">

              <h2 className="text-xl mb-0 font-bold text-left text-black">Get a list of patients who had covid of severity level 1 or 2 and passed away</h2>

              <h2 className="mt-6 text-lg mb-0 font-medium text-left text-black leading-1">Results</h2>
              <div className="h-96 overflow-y-scroll w-full mt-1 rounded-md bg-gray-50 py-6 px-6 text-center ring-1 ring-inset ring-gray-200">
                <p className="text-md text-left text-black mt-1 mb-2">Patient ID</p>
                {
                  queryResults6 != null ? (

                    queryResults6.map(result => {
                      return (
                        <p id={result} className="text-sm text-left text-black mt-1">{result}</p>
                      )
                    })

                  ) : (
                    <div>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )
                }
              </div>

            </div>

          </div>
        </div>

      </main>
    </>
  );
}
