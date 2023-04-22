import React, { useEffect, useState } from "react";
import { Swiper, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useLocation } from "react-router-dom";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "./style.scss";

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
      onSwiper={(swiper: any) => setSwiperInstance(swiper)}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
