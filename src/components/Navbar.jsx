import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          {/* logo & brand name  */}
          <a href="" class="flex items-center">
            <img
              src="/src/assets/navbar samyak img.png"
              class="mr-3 h-6 sm:h-9"
              alt="Samyak Img"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              Samyak Khatua
            </span>
          </a>

          {/* mobile menu button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div class="w-full md:flex md:w-auto">
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>

            <button class="text-white bg-blue-700 h-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center mr-3 md:mr-0 mt-3">
              Get started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
