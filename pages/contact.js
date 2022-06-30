import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'


const contact = () => {
  return (
    <div className={styles.wrapper}>
        <Head>
            <title>Donovans Detailing</title>
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
                        <form action='mailto:kyle.leblanc88@gmail.com'
                            method='post'
                            enctype='text/plain'
                            name='contact'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' />
                            Message: <br /> 
                            <textarea name='message' rows='10' cols='30'></textarea>
                            <input type='submit' value='Send' />
                            


                            
                        </form>
                    </div>

                   

            </div>

        </section>




    </div>  
  )
}

export default contact