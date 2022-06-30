import React from 'react'
import styles from '../styles/hero.module.css'

const hero = () => {
  return (
    <div>
        <picture>
            <source media="(min-width:1920px)" srcSet="/images/HeroXLarge.jpg" />
            <source media="(min-width:650px)" srcSet="/images/HeroLarge.jpg" />
            <source media="(min-width:416px)" srcSet="/images/HeroMed.jpg" />
            <img className={styles.image} src="/images/Detailing.jpg" alt="Flowers" />
        </picture>
        
        

    </div>
  )
}


export default hero