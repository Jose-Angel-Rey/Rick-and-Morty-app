import styles from "./Slider.module.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination as SwiperPagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([SwiperPagination, Autoplay]);

type SliderProps = {
  children: React.ReactNode[];
};

export default function Slider({ children }: SliderProps) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {children.length > 0 &&
        children.map((child: any) => (
          <SwiperSlide className={styles.slide} key={child.id}>
            {child}
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
