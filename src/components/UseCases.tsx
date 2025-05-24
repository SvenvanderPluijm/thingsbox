import React from 'react';

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Use Cases</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Real-world applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our technology is versatile and can be applied across various industries.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Automotive Testbench
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Our own fossil vehicle testbench demonstrates how playback of CAN-traces can be combined with AI analysis and simulation tools.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                The hardware solution contains a CAN-HAT to simulate CAN messages on the CAN-bus, which connects to a TCU device that interprets the data and sends it to the datalake/connected vehicle portal.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                This data can be analyzed and used for automated testing of ECU/TCU devices attached to the testbench, saving valuable time for teams validating new software or hardware.
              </p>
            </div>
            <div className="mt-12 relative text-base lg:mt-0 lg:col-span-7">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <div className="flex items-center">
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                      Beyond Automotive
                    </h3>
                  </div>
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    <span className="text-blue-600">Versatile</span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500">
                    While our testbench showcases automotive applications, the ThingsBox technology is applicable to any industry:
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <strong>Smart Industry / Industry 4.0</strong> - Monitor and optimize manufacturing processes
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <strong>Energy Sector</strong> - Analyze and optimize energy consumption patterns
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <strong>Agriculture</strong> - Monitor and optimize farming operations
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        <strong>Transportation</strong> - Analyze fleet data and optimize logistics
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
