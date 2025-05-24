import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">ThingsBox</h3>
            <p className="mt-4 text-base text-gray-400">
              AI-enabled datalogging, analysis & simulation — built for industry.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Things out-of-the Box
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Data Logging
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  AI Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Synthetic Data
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Prompt-Based Interaction
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Markets</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#markets" className="text-base text-gray-400 hover:text-white">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#markets" className="text-base text-gray-400 hover:text-white">
                  Smart Industry
                </a>
              </li>
              <li>
                <a href="#markets" className="text-base text-gray-400 hover:text-white">
                  Energy
                </a>
              </li>
              <li>
                <a href="#markets" className="text-base text-gray-400 hover:text-white">
                  Agriculture
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-base text-gray-400 hover:text-white">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#business-model" className="text-base text-gray-400 hover:text-white">
                  Business Model
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 ThingsBox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
