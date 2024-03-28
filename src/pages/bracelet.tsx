import { useEffect, useState } from "react";
import Scrollbar from "../components/scrollbar";

import bracelets from "../assets/collection/bracelets.png";


import lines1 from "../assets/collection/lines1.png";
import lines2 from "../assets/collection/lines2.png";
import NavbarOnScroll from "../components/headerOnScroll";

function Bracelet() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight / 2);

      setShowNavbar(currentPosition > window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {showNavbar && <NavbarOnScroll />}
      <div className="flex flex-col justify-center items-center ">
        

        <div className="flex w-full justify-between">
          {showButtons && <Scrollbar />}
        </div>

        <div className="relative">
          <div className="">
            <h1
              className="text-white bacalisties dancing-script text-center mt-36"
              style={{
                fontSize: "5rem",
              }}
            >
              Bracelet
            </h1>

            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap sm:w-full lg:w-full justify-center items-center  mt-10 lg:mt-10 mx-5  gap-10 lg:absolute z-10 ">
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
              <div className="h-full md:w-[40%] lg:w-[28%] bg-black">
                <img src={bracelets} className="w-full" alt="" />
              </div>
            </div>

            <p className="mb-3 text-white font-light  text-justify my-12 lg:mx-24 lg:text-2xl mx-[30px] lg:mt-[60%] ">
              Diamas necklaces embrace the extraordinary in the ordinary.
              Delicate drops become bold when layered, while sculptural
              centrepieces command attention. Our pieces accentuate and amplify,
              designed to empower confidence, flair and fearless femininity.
            </p>
          </div>

          

          <img
            src={lines1}
            alt="lines"
            className="absolute w-[60%] -top-36 left-0 z-0 hidden lg:block"
          />
          <img
            src={lines2}
            alt="lines"
            className="absolute w-[80%] -bottom-[60%] right-0 z-0 hidden lg:block"
          />
        </div>

        
      </div>
    </>
  );
}

export default Bracelet;
