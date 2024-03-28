import { useEffect, useRef, useState } from "react";
import one from "../assets/media/10.png";
import two from "../assets/media/2.png";
import three from "../assets/media/3.png";
import four from "../assets/media/4.png";

import gal1 from "../assets/media/gallery/1.png";
import gal2 from "../assets/media/gallery/2.png";
import gal3 from "../assets/media/gallery/3.png";
import gal4 from "../assets/media/gallery/4.png";

import feed1 from "../assets/media/feeds/1.png";
import feed2 from "../assets/media/feeds/2.png";
import feed3 from "../assets/media/feeds/3.png";

import blog2 from "../assets/media/blogs/blog1.png";
import blog3 from "../assets/media/blogs/blog2.png";
import Scrollbar from "../components/scrollbar";
import NavbarOnScroll from "../components/headerOnScroll";
import { Helmet } from "react-helmet";

function Media() {
  const [active, setActive] = useState("Events");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  

  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxury Diamonds Jewelry by Diamas | Event | Gallery | Blogs</title>
        <meta name="description" content=" Immerse yourself in the world of luxury with Diamas' diamond jewelry collection. Explore stunning designs through captivating event coverage, inspiring Gallery, and insightful blogs." />
      </Helmet>
      {showNavbar && <NavbarOnScroll />}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full mb-20">
          <div className="w-full h-[300px] lg:h-[720px] flex items-center justify-center relative">
            
            <img src={one} className="z-0 object-cover w-full h-full" alt="" />
            <h1
              className="absolute mt-40 sm:mt-0 text-5xl lg:text-8xl bacalisties my-3 text-white text-center lg:-ms-[50%] z-10 "
              style={{
                letterSpacing: 5,
                lineHeight: 1.4,
              }}
            >
              Media
            </h1>
          </div>
        </div>

        <div className="flex w-full justify-between">
          {showButtons && <Scrollbar />}
        </div>

        <div className="flex mt-0 items-center w-full flex-row gap-4 lg:gap-0 lg:mt-8">
          <div className="w-96 h-[1px] bg-white"></div>
          <div
            className="text-white lg:text-2xl lg:ms-12 cursor-pointer"
            style={{
              textDecorationLine: active === "Events" ? "underline" : "none",
              textDecorationThickness: 2,
              textUnderlineOffset: 5,
            }}
            onClick={() => {
              setActive("Events");
            }}
          >
            Events
          </div>
          <div
            className="text-white lg:text-2xl lg:mx-12 cursor-pointer"
            style={{
              textDecorationLine: active === "Gallery" ? "underline" : "none",
              textDecorationThickness: 2,
              textUnderlineOffset: 5,
            }}
            onClick={() => {
              setActive("Gallery");
              scrollToSection("section1");
            }}
          >
            Gallery
          </div>
          <div
            className="text-white lg:text-2xl lg:mr-12 cursor-pointer"
            style={{
              textDecorationLine: active === "Social" ? "underline" : "none",
              textDecorationThickness: 2,
              textUnderlineOffset: 5,
            }}
            onClick={() => {
              setActive("Social");
              scrollToSection("section3");
            }}
          >
            Social
          </div>
          <div
            className="text-white lg:text-2xl  lg:mr-12 cursor-pointer"
            style={{
              textDecorationLine: active === "Blogs" ? "underline" : "none",
              textDecorationThickness: 2,
              textUnderlineOffset: 5,
            }}
            onClick={() => {
              setActive("Blogs");
              scrollToSection("section2");
            }}
          >
            Blogs
          </div>
          <div className="w-full h-[1px] bg-white"></div>
        </div>

        <h1 className="mt-8 text-white font-[Bulter] font-semibold w-full ms-20 lg:text-3xl">
          Top Trending News
        </h1>

        <h3 className="text-gray-500 font-[Bulter] w-full ms-20 mt-4">
          The most popular news you should know to keep up with the latest news
        </h3>

        <div className="flex flex-col items-center justify-center w-full font-[Bulter] lg:flex-row mt-8 gap-8 p-8">
          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={two} alt="" />
            <h3 className="text-white">17 February 2022</h3>
            <h3 className="text-white lg:text-2xl">
              Apple Officially Announces The Release Schedule...
            </h3>
            <h3 className="text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque...
            </h3>
          </div>

          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={three} alt="" />
            <h3 className="text-white">26 February 2022</h3>
            <h3 className="text-white lg:text-2xl">
              The Annual Festival That Is Held Is Very Lively...
            </h3>
            <h3 className="text-gray-500">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit accusantium...
            </h3>
          </div>

          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={four} alt="" />
            <h3 className="text-white">20 February 2022</h3>
            <h3 className="text-white lg:text-2xl">
              Reduced Efficiency In The Process Of Shipping...
            </h3>
            <h3 className="text-gray-500">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was...
            </h3>
          </div>
        </div>

        <h1
          ref={sectionRefs.section1}
          id="section1"
          className="text-3xl lg:text-7xl mt-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          GALLERY
        </h1>

        <div className="flex flex-col items-center justify-center w-full lg:flex-row mt-8 gap-8 pb-16 px-16">
          <div className="flex flex-col lg:w-2/3 w-full gap-8">
            <div className="flex flex-col gap-8 lg:gap-4 lg:flex-row w-full justify-between">
              <img src={gal1} className="w-full" alt="" />
              <img src={gal2} className="w-full" alt="" />
            </div>
            <img src={gal3} alt="" />
          </div>
          <div className="flex flex-col lg:w-1/3 w-full">
            <img src={gal4} alt="" />
          </div>
        </div>

        <a className="text-white text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
          <h6 className="text-sm text-blue-300 font-sans">See More</h6>
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


        <h1
          ref={sectionRefs.section3}
          id="section3"
          className="text-3xl lg:text-7xl my-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          Social
        </h1>

        <div className="flex flex-col items-center justify-center w-full font-[Bulter] lg:flex-row gap-8 p-8">
          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={feed1} alt="" />
            {/* <h3 className="text-white">17 February 2022</h3> */}
            {/* <h3 className="text-white lg:text-2xl">
            A pristine pearl is cradled gently within an open diamond...
            </h3> */}
          </div>

          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={feed2} alt="" />
            {/* <h3 className="text-white">26 February 2022</h3> */}
            {/* <h3 className="text-white lg:text-2xl">
            A strand of lustrous pearls indelibly fused with diamond ...
            </h3> */}
            
          </div>

          <div className="flex flex-col lg:w-1/3 gap-3">
            <img src={feed3} alt="" />
            {/* <h3 className="text-white">20 February 2022</h3> */}
            {/* <h3 className="text-white lg:text-2xl">
            Luminescent pearl droplets fused seamlessly within...
            </h3> */}
            
          </div>
        </div>

        <a 
          target="blank"
          href="https://www.instagram.com/diamasbyadityadhawan/" 
          className="text-white text-sm inline-flex items-center space-x-1 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer">
          <h6 className="text-sm text-blue-300 font-sans">See More</h6>
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

        <h1
          ref={sectionRefs.section2}
          id="section2"
          className="text-3xl lg:text-7xl my-3 font-[Bulter] font-bold text-white text-center lg:text-start z-10 uppercase"
          style={{
            letterSpacing: 5,
            lineHeight: 1.4,
          }}
        >
          BLOGS
        </h1>

        <div className="flex flex-col lg:flex-row w-full px-10 gap-3">
          <div className="flex flex-col lg:w-1/2 w-full p-5 pt-0 ">
            <div className="block lg:flex lg:flex-col w-full items-start">
              <h3 className="text-white mx-auto h-full  text-justify text-lg leading-tight tracking-wider my-5 sm:w-full ">
                From a young age, I was always captivated by the allure of
                diamonds and the art of jewellery design. I spent many childhood
                afternoons wandering my family's jewellery shop, Kasturi
                Jewellers, fascinated by my father and grandfather's creative
                mastery. Their talents sparked a passion for jewellery crafting
                that runs through my veins. After earning my certification from
                the International Gemological Institute, I formally joined the
                family business, excited to earn my own name in our legacy. My
                father taught me that success stems not from profits but from
                conducting business with integrity and passion.
              </h3>
              <a
                target="blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7152542125350342656/"
                className="text-white text-sm inline-flex items-center space-x-1 mb-10 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
              >
                <h6 className="text-sm text-blue-300 font-sans">Read More</h6>
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
            <img src={blog3} alt="" />
          </div>

          <div className="block lg:flex flex-col lg:w-1/2 w-full gap-3 p-5">
            <img src={blog2} alt="" />
            <div className="block lg:flex lg:flex-col w-full items-start">
              <h3 className="text-white mx-auto h-full  text-justify text-lg leading-tight tracking-wider my-5 sm:w-full ">
                Why Diamonds Capture Hearts and Minds? As a third-generation
                jewellery designer, I’ve had a front-row view of the industry's
                ever-shifting trends and consumer preferences over the decades.
                One change that stands out lately is the rising popularity of
                diamond jewellery. So what is driving more consumers towards
                diamonds these days? As an insider, I’d like to share my
                perspective. Enduring Beauty and Versatility Diamond pieces
                effortlessly add understated elegance to both everyday looks and
                special occasions. The minimalist diamond earrings, pendants,
                and bracelets we handcraft at Diamas resonate with modern
                aesthetics.
              </h3>
              <a
                target="blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7157691996017414144/"
                className="text-white text-sm inline-flex items-center space-x-1 mb-10 rounded-lg border-blue-300 border p-1 px-2 hover:bg-slate-500 hover:cursor-pointer"
              >
                <h6 className="text-sm text-blue-300 font-sans">Read More</h6>
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
        </div>
      </div>
    </>
  );
}

export default Media;
