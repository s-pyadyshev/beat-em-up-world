import * as React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./style.scss";

export const Slider = (props: any) => {
  const { children } = props;
  const params = {
    rebuildOnUpdate: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };

  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
