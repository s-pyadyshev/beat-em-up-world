import * as React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "./style.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Slider = ({ children }: Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true,
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
