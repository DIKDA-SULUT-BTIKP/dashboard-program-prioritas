import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/ic_logo.png";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <NavLink
          to="/"
          className="flex items-center"
          activeClassName="text-red-600"
        >
          <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold text-red-600 md:text-2xl whitespace-nowrap">
            Dashboard Program Prioritas
          </span>
        </NavLink>

        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>

        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {location.pathname !== "/" && (
              <li onClick={toggleMobileMenu}>
                <NavLink
                  to="/raport"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ${
                    location.pathname === "/raport" ? "text-red-600" : ""
                  }`}
                >
                  Raport Pendidikan
                </NavLink>
              </li>
            )}
            {location.pathname !== "/" && (
              <li onClick={toggleMobileMenu}>
                <NavLink
                  to="/school"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent ${
                    location.pathname === "/school" ? "text-red-600" : ""
                  }`}
                >
                  Progress Akun Belajar.id
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
