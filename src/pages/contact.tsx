import { Link } from "react-router-dom";
import contactBg from "../assets/contact/contact_bg.png";
import two from "../assets/contact/2.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavbarOnScroll from "../components/headerOnScroll";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  //const [open, setOpen] = React.useState(1);

  //const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      setShowNavbar(currentPosition > window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const accordions = [
    {
      key: 1,
      title: "Do you have physical stores or sell only online?",
      data: "Diamas is proud to have elegant showrooms in [list locations] for you to visit and view our collections in person. We do not currently sell online, as we believe jewellery is best viewed and chosen in person. Please schedule an appointment or visit one of our stores to discover our pieces.",
      isOpen: true,
    },
    {
      key: 2,
      title: "What makes Diamas diamonds special?",
      data: "At Diamas, we select and procure diamonds adhering to the highest quality standards, certified by the International Gemological Institute (IGI). With generations of jewellery expertise, our master artisans handcraft the diamonds into pieces reflecting our passion for creating timeless beauty.",
      isOpen: false,
    },
    {
      key: 3,
      title: "How can I customize or personalize Diamas jewellery?",
      data: "Our personalized design consultations allow you to tailor Diamas pieces to your unique needs and style. Share your vision with our designers and gemologists to create one-of-a-kind diamond jewellery carrying personal significance. Contact or visit a Diamas boutique today to begin designing your meaningful heirloom.",
      isOpen: false,
    },
    {
      key: 4,
      title: "What payment options do you offer in-store?",
      data: "Diamas accepts all major credit cards, debit cards, checks, and wire transfers. We also offer customized payment plans, corporate accounts, and specialist financing options to ease the purchase process. Please ask an associate at any location about flexible payment solutions that suit your needs.",
      isOpen: false,
    },
    {
      key: 5,
      title: "Do you buy back Diamas jewellery pieces?",
      data: "Yes, Diamas offers competitive buy-back and exchange options for pieces purchased from our stores. This allows you to trade existing Diamas jewellery toward a new design or receive monetary value. Bring in your Diamas pieces to get a free valuation. Our gemology experts will assess them on parameters like quality, craftsmanship and current value.",
      isOpen: false,
    },
    {
      key: 6,
      title: "How do I care for my Diamas jewellery?",
      data: "Diamas recommends following jewellery care best practices to keep your precious pieces safely sparkling. Store them properly in soft cloth pouches inside jewellery boxes to avoid surface scratches. Clean diamonds, gold and platinum pieces by giving them a light polish with a clean microfiber cloth. Do not expose them to water, household chemicals or abrasives. We advise bringing Diamas jewellery into our boutiques every 2-3 years for professional steam or ultrasonic cleaning and servicing by our certified gemologists who will handle them with the utmost care. Our stores also provide inspections, light repairs, rhodium plating and more maintenance to retain the timeless luxe finish. Please consult our jewellery experts for advice about protecting your precious investment. ",
      isOpen: false,
    },
    {
      key: 7,
      title: "What is your jewellery return policy?",
      data: "At Diamas boutiques, we allow returns or exchanges within 30 days of original purchase when accompanied by the sales receipt. Please ensure the jewellery is in original condition when bringing it in. Custom orders are made especially for you so cannot be returned or exchanged. Please examine pieces carefully before finalizing any purchase.",
      isOpen: false,
    },
  ];


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
      <title> Contact Diamas: Reach Out for Exceptional Service and Support</title>
      <meta name="description" content="Need assistance or have inquiries about our luxury diamond jewelry? Contact Diamas and experience unparalleled service and support from our dedicated team of experts." />
    </Helmet>
    {showNavbar && <NavbarOnScroll />}
    <div className="flex flex-col justify-center w-full items-center bg-[#090D29]">
      
      <div className="w-full relative">
        <img src={contactBg} className="mt-20 w-full " alt="" />
      </div>

      <h1
        className="text-3xl my-8 text-center font-bold lg:text-7xl mb-3 text-white sm:text-center lg:text-start"
        style={{
          letterSpacing: 5,
          lineHeight: 1.4,
          fontFamily: "Butler",
        }}
      >
        CONTACT US
      </h1>

      <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center mt-8 relative">
        <div className="w-full lg:w-1/3 flex flex-col  justify-center items-center space-y-5 relative ">
          <div className="h-[140%] -right-[5%] top-0 w-[1px] bg-white absolute hidden lg:block" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <h3 className="text-white text-xl">Visit Us</h3>
          <p className="mb-3 text-white text-center tracking-wider my-12 mx-[30px]">
            Diamas by Aditya Dhawan <br/> (A Kasturi Jewellers Craft) <br/>5B-16, Second
            Floor, Tilak Nagar, <br/>Delhi, Pin - 110018
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center space-y-5 relative ">
          <div className="h-[140%] -right-[5%] top-0 w-[2px] bg-white absolute hidden lg:block" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <h3 className="text-white text-xl">Call Us</h3>
          <p className="mb-3 text-white text-justify my-12 mx-[30px]">
          <a href="callto:01128544163">011 2854 4163</a>
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center space-y-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <h3 className="text-white text-xl">Contact Us</h3>
          <p className="mb-3 text-white text-justify my-12 mx-[30px]">
          <a href="mailto:info@diamas.in"> info@diamas.in</a>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-10 space-x-5 my-20">
        <Link to="https://www.facebook.com/profile.php?id=61554517292760">
          {" "}
          <i className="fa-brands fa-facebook-f text-white text-2xl"></i>
        </Link>

        <Link to={"https://www.linkedin.com/in/aditya-dhawan-7799902a4/"}>
          <i className="fa-brands fa-linkedin text-white text-2xl"></i>
        </Link>

        <Link to={"https://in.pinterest.com/diamasbyadityadhawan/"}>
          <i className="fa-brands fa-pinterest text-white text-2xl"></i>
        </Link>

        <Link to="https://www.instagram.com/diamasbyadityadhawan/">
          <i className="fa-brands fa-instagram text-white text-2xl"></i>
        </Link>
      </div>

      <div className="h-full p-4 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6419987499503!2d77.10195357503396!3d28.6404898837201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d032645f91d23%3A0xb02e3c9fecb16042!2sKasturi%20Jewellers%20Tilak%20Nagar!5e0!3m2!1sen!2sin!4v1708813695083!5m2!1sen!2sin"
          style={{ borderRadius: 10 }}
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
          className="w-full h-[400px]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-8">
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center items-center mt-8">
          <img src={two} alt="" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col px-10   mt-8">
          <h3 className="text-white font-bold text-2xl mb-8">
            Frequently Asked Questions
          </h3>
          <div className="w-full h-[2px] bg-white mb-2" />
          <div className="flex flex-col lg:mr-16 gap-5  w-full">
            {accordions.map(({ data, isOpen, key, title }) => (
              <Accordion
                defaultExpanded={isOpen}
                className="bg-black border-b-2 border-white "
                disableGutters
                key={key}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  //aria-controls="panel1-content"
                  //id="panel1-header"
                  key={key}
                  color="black"
                  className="text-sm"
                  sx={{
                    backgroundColor: "#090D29",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "flex-center",
                  }}
                >
                  {title}
                </AccordionSummary>
                <AccordionDetails className="bg-[#090D29] text-white text-sm">
                  {data}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      
    </div>
    </>
    
  );
}

export default Contact;
