import { useEffect } from "react";


export const Terms = () => {
    //scroll to top on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
    <div className="min-h-screen pt-20 w-full flex flex-col justify-center items-center text-white">
      <div className="flex flex-col items-center justify-between my-16">
        <h3 className="text-white text-2xl font-semibold">Disclaimer</h3>

        <p className="text-white font-light text-[16px] lg:mx-32 mx-[30px] mt-8 text-justify">
          Diamas by Aditya Dhawan and the Diamas logo are registered trademarks of
          Diamas (A Kasturi Jewellers Craft). All content and designs on this
          website are copyrighted and owned by Diamas (A Kasturi Jewellers Craft).
          Use of our trademarks or content without explicit written permission is
          prohibited. Legal action will be taken against infringement or misuse of
          our intellectual property. The website contains material which is owned
          by or licensed to us. This material includes, but is not limited to, the
          content, design, product design, layout, appearance, look and graphics
          of the website. Any reproduction of the website's material is prohibited
          without prior consent. For any queries or concern please email at 
          <a href="mailto:info@diamas.in"> info@diamas.in</a>
        </p>
      </div>
      
    </div>
  )
}
