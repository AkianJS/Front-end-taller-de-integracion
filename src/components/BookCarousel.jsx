import React from 'react'
import BookCard from './BookCard';
import Carousel from 'react-multi-carousel';
import styles from './BookCarousel.module.css'
import 'react-multi-carousel/lib/styles.css';

const BookCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1600 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1600, min: 1024 },
          items: 4,
        },
        tablet: {
          breakpoint: { max: 1024, min: 652 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 652, min: 0 },
          items: 4,
        },
      };

      return (
        <Carousel
          responsive={responsive}
          infinite={true}
          containerClass={styles.container}
          itemClass={styles.CarouselItem}
        //   itemClass={styles.imageStyle}
        >
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </Carousel>
      );
    };

export default BookCarousel