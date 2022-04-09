import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from 'solid-app-router';

import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);


  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg class="w-10 h-10 text-white p-2 bg-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <span class="ml-3 text-xl">react2solid</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <Link href="/about" class="mr-5 hover:text-gray-900">About</Link>
          </nav>
          <a href="https://github.com/rrjanbiah/react2solid" target="_blank" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </a>
          <Link href="/reactjs-to-solidjs-converter" class="inline-flex items-center bg-gray-100 border-0 ml-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Convert
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>

      <main>
        <Route />
      </main>

      <footer class="text-gray-600 body-font">
        <div class="border-t border-gray-200">
          <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg class="w-10 h-10 text-white p-2 bg-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span class="ml-3 text-xl">react2solid</span>
            </Link>
            <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">Email:
              <span class="text-indigo-500">rrjanbiah-at-Y!com</span>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://twitter.com/rrjanbiah" class="ml-3 text-gray-500 hover:text-indigo-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2022 —
              <a href="https://twitter.com/rrjanbiah" class="text-gray-600 ml-1" target="_blank">@rrjanbiah</a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Humbly
              made in a village in 🇮🇳</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
