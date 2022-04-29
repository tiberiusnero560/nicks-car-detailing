import React from 'react'
import styles from '../styles/gallery.module.css'

const gallery = () => {
  return (
    <div className={styles.wrapper}>
        <h1>Gallery</h1>

        <div className={styles.gridWrapper}>
            <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
            </div>

            <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
                
            </div>

             <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
            </div>

            <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
                
            </div>

             <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
            </div>

            <div className={styles.gridItem}>
                <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' />
                
            </div>
        </div>


    </div>
  )
}

export default gallery