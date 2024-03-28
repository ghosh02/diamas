import { useEffect, useState } from "react";
import main from "../assets/legacy/bg.png";
import bg from "../assets/legacy/screen-bg.png";
import rotateBg from "../assets/legacy/screen-bg-rotate.png";

import Scrollbar from "../components/scrollbar";
import NavbarOnScroll from "../components/headerOnScroll";
import dotImage from "../assets/legacy/icon.png";
import { Helmet } from "react-helmet";

const timelineElements = [
  {
    id: 1,
    title: "1978",
    content:
      "he roots of Diamas trace back to 1978 in the colourful bazaars of Amritsar, where Kasturi Lal founded a small yet ambitious jewellery shop. His craftsmanship and eye for stunning designs earned him a loyal clientele over the decades.",
  },
  {
    id: 2,
    title: "1990",
    content:
      "In 1990, his son Surinder Kumar Dhawan brought the family's jewellery legacy to the capital, opening the first Kasturi Jewellers showroom in Vikaspuri, Delhi. Excellence and innovation became the brand's hallmarks, leading to rapid expansion across 4 showrooms in Delhi within years.",
  },
  {
    id: 3,

    content:
      "Though Kasturi Jewellers grew to become a household name for fine traditional gold jewellery, Surinder envisioned reaching customers who valued modernity as much as timeless quality. ",
  },
  {
    id: 4,
    title: "2023",
    content:
      "In 2023, his son Aditya Dhawan founded Diamas - a youthful, premium diamond jewellery brand celebrating fearless individuality.",
  },
  {
    id: 5,
    content:
      "Inspired by the changing preferences of the new generation, Aditya dared to break norms by fusing precious diamonds with other materials like pearls, polki and gold. The result - breathtaking contemporary pieces for the free-spirited.",
  },
  {
    id: 6,
    content:
      "From a small shop in Amritsar to an avante-garde diamond jewellery brand in Delhi spanning three generations, Diamas honours its legacy while looking ahead to a dazzling future.",
  },
  {
    id: 7,
    content: `Our designs highlight that "You are Priceless" - much like the rare diamonds gracing our collections.`,
  },
];

function Legacy() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Show buttons if scrolled more than half the screen
      setShowButtons(currentPosition > window.innerHeight / 2);

      setShowNavbar(currentPosition > 40);
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

  useEffect(() => {
    const handleHighlight = () => {
      const contentElements = document.querySelectorAll(".content");
      contentElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <= window.innerHeight &&
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          setHighlightedIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleHighlight);

    return () => {
      window.removeEventListener("scroll", handleHighlight);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>The Enduring Legacy of Diamas: A Story of Strength and Honor</title>
        <meta name="description" content="From humble beginnings to global recognition, the story of Diamas is one of strength and honor. Delve into the enduring legacy of this iconic diamond jewelry brand." />
      </Helmet>
      {showNavbar && <NavbarOnScroll />}
      <div className="flex flex-col justify-center items-center ">
        <div className="relative flex items-center justify-start">
          <h1
            className="absolute text-3xl lg:text-8xl mt-20 ml-20 font-[Bulter] font-semibold text-white text-center lg:text-start z-10 uppercase"
            style={{
              letterSpacing: 5,
              lineHeight: 1.4,
            }}
          >
            LEGACY
          </h1>
          <img src={main} alt="main" className="w-full object-cover" />
          {showButtons && <Scrollbar />}
        </div>

        <div className=" lg:px-40 text-white text-xl relative">
          <img
            src={bg}
            className="hidden lg:block absolute -left-[22%] bottom-60 opacity-40"
          />
          <img
            src={rotateBg}
            className="hidden lg:block absolute -right-[25%] -bottom-10 opacity-40"
          />

          {timelineElements.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 lg:gap-10 lg:m-12 mx-5 my-12 ${
                index === highlightedIndex ? "" : "text-gray-400"
              }`}
            >
              <div className="relative">
                {item.title ? (
                  <div className="bg-white w-2 h-[133.5%] translate-x-6 -translate-y-12 absolute z-5 " />
                ) : (
                  <div className="bg-white w-2 h-[230%] translate-x-6 -translate-y-16 absolute z-5 " />
                )}
                <div className="w-14"></div>
                <div className="absolute ">
                  <img src={dotImage} className=" z-20" />
                </div>
              </div>

              <div className="w-[90%]">
                <div className="flex flex-col gap-2 lg:gap-8">
                  {item.title && (
                    <h1 className="font-['Butler']  text-2xl lg:text-4xl">
                      {item.title}
                    </h1>
                  )}
                  <p className="text-justify text-lg  lg:text-xl content">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Legacy;
