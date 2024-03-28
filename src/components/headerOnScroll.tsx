import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export default function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("home");
  const location = useLocation();

  const handleClick = (data: any) => {
    setCurrentRoute(data);
    // setOpenNav(false)
    if (window.innerWidth <= 640) {
      if (openNav == true) {
        setOpenNav(false);
      } else {
        setOpenNav(true);
      }
    } else {
      setOpenNav(true);
    }
  };

  const openFun = () => {
    // openNav === false ? setOpenNav(true) : setOpenNav(false);
    //window.innerWidth <= 640 ? setOpenNav(false) : setOpenNav(true);
    if (window.innerWidth <= 640) {
      if (openNav == true) {
        setOpenNav(false);
      } else {
        setOpenNav(true);
      }
    } else {
      setOpenNav(true);
    }
  };

  const handleWindowResize = () =>
    // window.innerWidth >= 640 && setOpenNav(false);
    window.innerWidth <= 767 ? setOpenNav(false) : setOpenNav(true);
  console.log("windpw resize" + window.innerWidth);

  useEffect(() => {
    window.innerWidth <= 767 ? setOpenNav(false) : setOpenNav(true);
    window.addEventListener("resize", handleWindowResize);
    // console.log( "windows with"+window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    // Update currentRoute when location changes
    setCurrentRoute(location.pathname.split('/').pop() || "home"); // Provide a default value if pathname doesn't have segments
  }, [location]);

  return (
    <div
        className="flex gap-10 justify-center items-center  
         fixed z-50  w-full
        lg:p-4 lg:pb-10 text-white bg-[#090D29]"
      >
    <nav className="bg-transparent border-gray-200 px-4 lg:absolute z-20 w-full font-[Butler] font-normal">
      <div className="flex flex-wrap justify-between lg:justify-end mx-auto">
        <img
          src={logo}
          className="sm:h-[100px] w-[100px] lg:hidden "
          alt="Flowbite Logo"
        />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 mt-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => openFun()}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto bg-transparent mt-8 mr-8"
          id="navbar-default"
          style={
            openNav === false
              ? {
                  display: "none",
                }
              : {
                  display: "block",
                }
          }
        >
          <ul className="font-medium text-white flex flex-col md:p-0 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <Link
                to="/"
                style={
                  currentRoute === "home"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("home")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={
                  currentRoute === "about"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("about")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/legacy"
                style={
                  currentRoute === "legacy"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("legacy")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Legacy
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                style={
                  currentRoute === "collection"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("collection")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                style={
                  currentRoute === "media"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("media")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={
                  currentRoute === "contact"
                    ? {
                        textDecorationLine: "underline",
                        textDecorationThickness: 2,
                        textUnderlineOffset: 6,
                      }
                    : {}
                }
                onClick={() => handleClick("contact")}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
