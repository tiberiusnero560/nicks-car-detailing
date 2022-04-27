import React from 'react'
import styles from '../components/hero.module.css'

const hero = () => {
  return (
    <div>

        <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTextBody}>
                Nicks Car Detailing
            </h1>
            <div>
                <p className={styles.heroTextSub}>
                    We are a car detailing company that specializes in detailing cars and trucks.
                </p>

            </div>
        </div>

        <picture>
            <source media="(min-width:650px)" srcSet="hero-lg.jpg" />
            <source media="(min-width:465px)" srcSet="hero-med.jpg" />
            <img className={styles.image} src="hero-mobile.jpg" alt="Flowers" />
        </picture>
        
        

    </div>
  )
}


export default hero