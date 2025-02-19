import React from "react";
import Logo from "../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  const location = useLocation();

  return (
    <>
      <aside
        className={
          sidebar
            ? "z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 md:block"
            : "fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
        }
        x-show="isSideMenuOpen"
        x-transition:enter="transition ease-in-out duration-150"
        x-transition:enter-start="opacity-0 transform -translate-x-20"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in-out duration-150"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0 transform -translate-x-20"
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <NavLink className="" to="/">
            <img src={Logo} className="ml-6 w-[40%]" alt="" />
          </NavLink>

          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  location.pathname === "/" ? "bg-purple-600" : ""
                }`}
              ></span>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    : "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                }
                to="/"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span className="ml-4">Card View</span>
              </NavLink>
            </li>

            <li className="relative px-6 py-3">
              <span
                className={`absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg ${
                  location.pathname === "/list" ? "bg-purple-600" : ""
                }`}
              ></span>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                    : "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                }
                to="/list"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                <span className="ml-4">Table View</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
