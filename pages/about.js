import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'

const about = () => {
  return (
    <div>
        <Head>
            <title>Nicks Car Detailing</title>
            <meta name="description" content="Full Service Professional Car detailing at a reasonable price. All size vehicles." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
            
            <h1>About</h1>
        
            <div className={styles.textContainer}>
                    <p>
                        Nicks Car Detailing is a new car detailing business in the Ottawa-Gatineau area launched in 2022. 
                    </p>

                    <p>
                        We offer a full service detailing service for all vehicles. We specialize in detailing all types of vehicles,
                        including passenger cars, trucks, vans, and SUVs.
                    </p>

                    <p>
                        We aim to provide exceptional detailing services at a reasonable price. We know everyone says that, so we aim to prove it. 
                    </p>

                    <p>
                        The owner shares a passion for performance and luxury cars with the car enthusiast community, and as such, we offer a separate service for the more luxury vehicles. Each luxury vehicle gets an entire day dedicated to it and we get it done right.
                    </p>

            </div>

        </section>



    </div>
  )
}

export default about