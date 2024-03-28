import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";



import slide1 from "../assets/home/slider1.png";
import slide2 from "../assets/home/slider2.png";
import slide5 from "../assets/home/slider5.png";
import slide3 from "../assets/home/slider3.png";
import slide4 from "../assets/home/slider4.png";
import slide6 from "../assets/home/slider6.png";
import slide7 from "../assets/home/slider7.png";
import slide8 from "../assets/home/slider8.png";


const CollectionSwiper = () => {
  return (
    <div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 3500,
          modifier: 1,
          scale: 3
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide8} alt="slide_image" />
        </SwiperSlide>
        
        

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIosNewIcon/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIosIcon/>
          </div>
        </div> */}

        
      </Swiper>
    </div>
  )
}

export default CollectionSwiper