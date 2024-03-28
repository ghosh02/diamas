import { useEffect, useState } from "react";
import one from "../assets/about/1.png";
import two from "../assets/about/2.png";
import three from "../assets/about/3.png";
import four from "../assets/about/4.png";
import lines from "../assets/about/lines.png";
import Scrollbar from "../components/scrollbar";
import NavbarOnScroll from "../components/headerOnScroll";
import VideoPlayer from "../components/VideoPlayer";
import { Helmet } from 'react-helmet';

import video from "../assets/about/about-video.mp4";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleVideoPlay = () => {
    setShowContent(false); // Hide the content when video starts playing
  };

  const handleVideoEnd = () => {
    setShowContent(true); // Show the content when video ends
  };

  const handleVideoPause = () => {
    setShowContent(true); // Show the content when video is paused
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

  //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])

  return (
    <>
      <Helmet>
      <title>Diamas: Aditya Dhawan's Vision Unveiled in Exquisite Diamond Jewelry</title>
      <meta name="description" content=" Discover the artistry of Aditya Dhawan at Diamas, where diamonds transcend stones, embodying enduring beauty. Infused with nature's inspiration, each design is a testament to craftsmanship and a passion for the eternal allure of diamonds." />
      </Helmet>
      {showNavbar && <NavbarOnScroll />}
      <div
        style={{ backgroundImage: `url(${one})` }}
        className="bg-contain flex flex-col justify-center items-center bg-[image:var(--image-url)] lg:bg-cover   bg-no-repeat w-full  p-10 lg:p-0  "
      >
        <div className="mt-[95%]  lg:mt-[35%] lg:ml-24 text-center">
          <h1 className="text-start text-[40px]  sm:m-auto  lg:text-7xl lg:ml-[400px] lg:w-[400px] font-[Butler] text-white leading-10 border-2 border-white p-8 py-2">
            ADITYA <br /> DHAWAN
          </h1>
          <h3 className="text-white m-auto  text-justify text-lg leading-tight tracking-wider mt-5 lg:w-96 lg:ml-[400px] sm:w-full ">
            At the heart of Diamas, beats the vision of Aditya Dhawan; where
            diamonds are not just stones but enduring symbols of beauty. Growing
            up amidst the artistry of Kasturi showrooms, Aditya brings fresh
            perspectives to jewellery, weaving nature's inspirations into every
            design. Every creation reflects not just craftsmanship but a
            deep-rooted passion for the eternal allure of diamonds.
          </h3>
        </div>

        <div className="w-full">{showButtons && <Scrollbar />}</div>

        <div className="relative flex flex-col justify-center items-center lg:w-[80%] bg-opacity-90 bg-[#090D29] lg:mt-[35%] rounded-[35px] border border-transparent">
          <div className="absolute top-0 left-0">
            <img src={lines} alt="lines" />
          </div>

          <div className="flex flex-col gap-5 items-center lg:mb-20 my-8 ">
            <h1 className="lg:text-8xl font-[Butler] text-white  ">DIAMAS</h1>
            <div className="flex w-56 mb-5 ">
              <div className="h-1 bg-blue-600 w-1/3 rounded-full"></div>
              <div className="h-1 bg-white w-1/3"></div>
              <div className="h-1 bg-blue-600 w-1/3 rounded-full"></div>
            </div>
          </div>

          <div className=" lg:flex w-full justify-between items-center gap-20 lg:gap-16 lg:pl-20 lg:pr-10 tracking-widest sm:block ">
            <img src={two} alt="" className="lg:w-[50%] py-10" />
            <div className="flex flex-col gap-5 justify-center w-[90%] ">
              <h3 className="text-white  text-justify text-lg leading-tight tracking-wider mt-5 lg:w-96 sm:w-full ">
                Every piece of jewellery should tell a story and our quality
                diamonds tell ours. We utilise 45 years of industry experience
                to make bespoke pieces with the purest diamonds. Meant to honour
                the uniqueness of one who wears it, Diamas isn't just a brand;
                it's an art form, where designs are born from passion and
                crafted to perfection.
              </h3>
              <div className="h-1 w-20 bg-white rounded" />
            </div>
          </div>

          <div className="flex relative h-full mt-28 flex-col cursor-pointer bg-no-repeat z-10">
            <VideoPlayer
              videoUrl={video}
              thumbnailUrl={three}
              onPlay={handleVideoPlay}
              onEnd={handleVideoEnd}
              onPause={handleVideoPause}
            />
            {showContent && (
              <div className="bg-[#384173] flex flex-col gap-2 w-full pt-20 top-10 left-5 lg:w-[40%] lg:h-[75%] sm:w-2/3 lg:absolute">
                <h1 className="text-white bacalisties relative z-10 text-4xl lg:ml-8 lg:text-8xl">
                  Craftsmanship
                </h1>
                <h3 className="text-white mx-auto pt-5 p-3 text-justify text-lg leading-tight tracking-wider mt-5 lg:w-96 sm:w-full">
                  Beyond technical mastery, our artisans employ generations of
                  experience, honing jewellery excellence. Guided by Aditya
                  Dhawan’s pioneering vision, each piece is sculpted with
                  precision to capture the elegance and essence of the
                  individual wearing it. Meticulous eyes hand-pick high-quality
                  diamonds and align each gem with attention to detail,
                  upholding their natural radiance and timeless beauty –
                  symbolic of moments that live beyond legacies.
                </h3>
              </div>
            )}
          </div>

          <div className="lg:pl-28 mt-20 mb-5">
            <h1 className="text-white bacalisties text-center text-[2rem] lg:-mb-12 lg:ms-96 lg:text-7xl mt-8">
              Diamond Quality
            </h1>
          </div>

          <div className="lg:flex w-full justify-between items-center mt-8 lg:p-10 md:p-5">
            <div className="w-full lg:w-1/2 relative">
              {/* <div className="absolute inset-0 opacity-0 bg-blue-950 z-10"></div> */}
              <img src={four} className="w-full z-0 brightness-125" alt="" />
            </div>
            <div className="w-full lg:w-1/2 space-y-5 lg:ms-16 ">
              {/* <div>
              <h1 className="text-white bacalisties text-center text-[2rem]  lg:ms-96 lg:text-7xl mt-8">
                Diamond Quality
              </h1>
            </div> */}

              <h3 className="text-white mx-auto pt-5  text-justify text-lg leading-tight tracking-wider mt-5 p-2 sm:w-full ">
                At Diamas, we hold a simple yet profound philosophy: the value
                of a diamond is not just appreciated; it inherently grows.
              </h3>
              <h3 className="text-white mx-auto pt-5  text-justify text-lg leading-tight tracking-wider mt-5 p-2 sm:w-full ">
                Our commitment to this principle is reflected in our exclusive
                selection of high-quality diamonds, sourced individually from
                international sources and meeting standards set by the
                International Gemological Institute (IGI), a global authority in
                diamond and jewellery certification since 1975.
              </h3>
              <h3 className="text-white mx-auto pt-5  text-justify text-lg leading-tight tracking-wider mt-5 p-2 sm:w-full ">
                Building on the foundation of his father's applied knowledge and
                his own IGI certification, Aditya envisions a unique mission,
                aspiring to introduce exceptional diamonds to India, crafting
                exquisite high-end jewellery for those who appreciate diamonds
                from the heart.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
