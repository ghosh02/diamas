import { useEffect, useState } from "react";
import one from "../assets/collection/10.png";

import neclace from "../assets/collection/neclace.png";
import earring from "../assets/collection/earrings.png";
// import pendant from "../assets/collection/pendants.png";
import bracelet from "../assets/collection/bracelets.png";
import ring from "../assets/collection/rings1.png";
import pendant1 from "../assets/collection/pendants/pendant1.png";

import screenBg from "../assets/collection/screen-bg.png";
import screenBgR from "../assets/collection/screen-bg-rotate.png";

import NavbarOnScroll from "../components/headerOnScroll";
import Scrollbar from "../components/scrollbar";
import { Helmet } from "react-helmet";

const collectionData = [
  {
    id: 1,
    name: "Necklace",
    desc: "Diamas necklaces embrace the extraordinary in the ordinary. Delicate drops become bold when layered, while sculptural centre pieces command attention. Our pieces accentuate and amplify, designed to empower confidence, flair and fearless femininity.",
    image: neclace,
    goto: "/necklace",
  },
  {
    id: 2,
    name: "Earrings",
    desc: "Diamas earrings redefine everyday luxury whether accenting an occasion ensemble or adding intrigue to casual wear. Delicate dazzlers one day and statement pieces the next – our versatile designs celebrate the many facets of your ever-evolving spirit.",
    image: earring,
    goto: "/earring",
  },
  {
    id: 3,
    name: "Pendants",
    desc: "Suspended on delicate chains, Diamas pendants preserve precious memories. Exquisite motifs layer sentimental value within elegant frames. An engraved initial pays tribute to a loved one; an inspired emblem celebrates a meaningful journey. Hold your most cherished moments forever - close to the heart.",
    image: pendant1,
    goto: "/pendant",
  },
  {
    id: 4,
    name: "Bracelets",
    desc: "Stackable, movable artistry granting wrists a novelist’s touch - Diamas bracelets and bangles become the distinguishing signature of a woman and her story. Dainty chains one day and bold cuffs the next – these treasured keepsakes empower you to curate looks as unique as each new chapter.",
    image: bracelet,
    goto: "/bracelet",
  },
  {
    id: 5,
    name: "Rings",
    desc: "A symbol of commitment or a meaningful self-gift – Diamas rings commemorate relationships and milestones close to the heart. An heirloom passed down honouring family ties; an anniversary band etching promises in gold; an exquisite gem declaring self-love. Each ring tells a story as unique as yours.",
    image: ring,
    goto: "/ring",
  },
];

function Collection() {
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
    <div className="w-full relative">
      <Helmet>
        <title>Exquisite Luxury Diamond Jewelry Collection: Necklaces, Earrings, Pendants, Bracelets, and Rings for Timeless Elegance | Diamas</title>
        <meta name="description" content="Diamas presents an unparalleled collection of luxury diamond jewelry, featuring exquisitely designed necklaces, earrings, pendants, bracelets, and rings that epitomize timeless elegance and sophistication." />
      </Helmet>
      {showNavbar && <NavbarOnScroll />}

      <div className="flex flex-col justify-center items-center ">
        <div
          style={{
            backgroundImage: `url(${one})`,
          }}
          className="bg-[image:var(--image-url)] bg-cover 
         bg-center w-full h-[300px] md:h-[500px] lg:h-[879px] object-cover 
         justify-start px-[15%] items-center flex  gayscale relative z-10
         "
        >
          <h1
            className="text-5xl mt-40 sm:mt-0 lg:text-8xl my-3 bacalisties text-white text-center lg:text-start lg:-ms-10 z-10"
            style={{
              letterSpacing: 5,
              lineHeight: 1.4,
              
            }}
          >
            Collections
          </h1>
        </div>

        <div className="flex w-full justify-between">
          {showButtons && <Scrollbar />}
        </div>

        <img src={screenBg} alt="diamond" className="hidden lg:block absolute opacity-40 z-0 -left-40 top-[28%]" />
        <img src={screenBgR} alt="diamond" className="hidden lg:block absolute opacity-40 z-0 -right-72 top-[53%]" />
        <img src={screenBg} alt="diamond" className="hidden lg:block absolute opacity-40 z-0 -left-40 bottom-0" />

        <div className="relative z-20">
          
          {collectionData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`flex ${
                  index % 2 ? "flex-row-reverse-lg" : "flex-row-lg"
                } ${
                  index % 2 ? "flex-col-sm" : "flex-col-sm"
                } sm:w-full lg:w-auto justify-center items-center`}
              >
                <div className="h-full p-4 lg:w-1/2 ">
                  <img src={item.image} className="z-20" alt="" />
                </div>
                <div className="h-full p-10 lg:w-1/2 ">
                  <h1
                    className="text-white bacalisties "
                    style={{
                      fontSize: "5rem",
                    }}
                  >
                    {item.name}
                  </h1>
                  {/* <p className="text-white  text-justify text-lg leading-tight tracking-wider lg:w-96 sm:w-full ">
                    {item.desc}
                  </p> */}
                  <a
                    href={item.goto}
                    className=" text-white h-8 w-28 mt-3 text-sm inline-flex items-center justify-center space-x-1 rounded-3xl border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
                  >
                    <h6 className="text-sm text-blue-300 font-sans">
                      View More
                    </h6>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
