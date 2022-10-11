import React from 'react'
import styles from './BookCard.module.css'
import { HiOutlineDotsVertical } from 'react-icons/hi'

const BookCard = () => {
  return (
    <div className={`${styles.bookCardContainer} flex flex-wrap justify-center`}>
        <img src="https://contentv2.tap-commerce.com/cover/large/9788498388817_1.jpg?id_com=1113" alt="" />
        <div className={styles.infoContainer}>
            <h3>Nombre del libro</h3>
            <HiOutlineDotsVertical className={styles.cardMenuDots}/>
            <p>$3000</p>
        </div>
    </div>
  )
}

export default BookCard