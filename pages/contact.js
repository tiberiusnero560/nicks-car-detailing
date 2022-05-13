import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'


const contact = () => {
  return (
    <div className={styles.wrapper}>
        <Head>
            <title>Nicks Car Detailing</title>
            <meta name="description" content="Full Service Professional Car detailing at a reasonable price. All size vehicles." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
        <h1>Contact Us</h1>
        
            <div className={styles.textContainer}>
                    <p>
                        Nicks Car Detailing is a new car detailing business in the Ottawa-Gatineau area launched in 2022. 
                    </p>


                    <div className={styles.formContainer}>
                        <form>
                            <label>Name</label>
                                <input type="text" />
                            <label>Email</label>
                                <input type="text" />
                            <label>Message</label>
                                <textarea></textarea>
                            <button>Submit</button>
                            
                        </form>
                    </div>

                   

            </div>

        </section>




    </div>  
  )
}

export default contact