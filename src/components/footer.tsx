import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LINKS = [
  {
    
    items: [
      { label: "Help Center", link: "help" },
      { label: "Disclaimer", link: "terms" },
      { label: "Blog", link: "media" },  
      {
        label: "About us",
        link: "about",
      },    
    ],
  },
  {
    items: [
      { label: "Legacy", link: "legacy" },
      { label: "Collection", link: "collection" },
      { label: "Media", link: "media" },
      { label: "Contact Us", link: "contact" },
      
    ],
  },
];

const FooterWithSocialLinks = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap w-full pt-10 lg:px-20 xl:px-40 mx-auto border-t-2 border-white">
      <div className="flex flex-1 lg:block flex-col justify-center items-center w-full">
        <img src={logo} width={200} height={200} alt="Flowbite Logo" />
        <div className="flex ms-8 gap-5">
          <Link to="https://www.facebook.com/profile.php?id=61554517292760">
            <i className="fa-brands fa-facebook-f text-white text-lg"></i>
          </Link>

          <Link to={"https://www.linkedin.com/in/aditya-dhawan-7799902a4/"}>
            <i className="fa-brands fa-linkedin text-white text-lg"></i>
          </Link>

          <Link to={"https://in.pinterest.com/diamasbyadityadhawan/"}>
            <i className="fa-brands fa-pinterest text-white text-lg"></i>
          </Link>

          <Link to="https://www.instagram.com/diamasbyadityadhawan/">
            <i className="fa-brands fa-instagram text-white text-lg"></i>
          </Link>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap  justify-center mx-auto lg:mx-0">
        <div className=" flex my-8 lg:grid lg:grid-cols-2  justify-center lg:justify-between gap-16">
          {LINKS.map(({items}, index) => (
            <ul key={index} className="lg:flex-col">
              
              {items.map(({ label, link }) => (
                <Link to={link}>
                  <li key={label}>
                    <p className="py-1.5 font-normal transition-colors text-white hover:text-blue-gray-900">
                      {label}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-9">
          <h1 className="mb-3 text-white font-bold text-lg">Stay up to date</h1>

          <div className="w-72">
            <div className="w-3/3 flex justify-end items-center relative">
              <input
                placeholder="Enter your email"
                type="email"
                className="border bg-gray-500 border-gray-400 rounded-lg text-white p-2 w-full"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute mr-2 w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 className="text-white m-5 text-sm">All rights reserved. Copyright © 2024 Diamas by Aditya Dhawan ( A Kasturi Jewellers Craft )</h3>
    </div>
    
  );
};

export default FooterWithSocialLinks;
