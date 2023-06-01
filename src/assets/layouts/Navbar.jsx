import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {" "}
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a to="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white bg-hazel hover:bg-hazell focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbarMenu"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
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
          </div>
          <div
            id="navbarMenu"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/" ? "text-hazel" : "text-black"
                  } hover:text-hazel active:text-hazel`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/aboutus"
                      ? "text-hazel"
                      : "text-black"
                  } hover:text-hazel active:text-hazel`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/services"
                      ? "text-hazel"
                      : "text-black"
                  } hover:text-hazel active:text-hazel`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/contactus"
                      ? "text-hazel"
                      : "text-black"
                  } hover:text-hazel active:text-hazel`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
