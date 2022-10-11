import React from 'react'
import BookCarousel from './BookCarousel'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
    <h2 className='text-3xl mt-4 font-semibold mx-auto max-w-7xl'>Ofertas</h2>
    <section className={styles.carouselContainer}>
    <BookCarousel/>
    </section>
    </>
  )
}

export default Hero