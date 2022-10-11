import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./HeaderCarousel.module.css";

const HeaderCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 652 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 652, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      showDots={true}
      itemClass={styles.imageStyle}
    >
        <img 
          src="https://cdn.pixabay.com/photo/2022/09/21/02/35/white-faced-heron-7469269_960_720.jpg"
          alt=""
        />

        <img
          src="https://cdn.pixabay.com/photo/2019/06/05/08/37/dog-4253238_960_720.jpg"
          alt=""
        />

        <img
          src="https://cdn.pixabay.com/photo/2022/09/26/15/02/mountains-7480902_960_720.jpg"
          alt=""
        />
    </Carousel>
  );
};

export default HeaderCarousel;
