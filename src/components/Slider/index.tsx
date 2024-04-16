import { useEffect, useState } from "react";
import { Swiper, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLocation } from "react-router-dom";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.scss";
import { Swiper as SwiperClass } from "swiper/types";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Slider = ({ children }: Props) => {
  const swiper = useSwiper();
  const location = useLocation();
  const [swiperInstance, setSwiperInstance] = useState(swiper);

  useEffect(() => {
    swiperInstance?.slideTo(0);
  }, [location]);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper: SwiperClass) => setSwiperInstance(swiper)}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
