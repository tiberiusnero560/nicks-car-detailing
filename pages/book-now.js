import React from 'react'
import Head from 'next/head'
import styles from '../styles/book-now.module.css'

const booknow = () => {
  return (
    <div>
        <Head>
            <title>Donovans Detailing</title>
            <meta name="description" content="Full Service Professional Car detailing at a reasonable price. All size vehicles." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
            
            <h1>Book Now</h1>
            <div>
                <div className={styles.calendarWrapper}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=1080&wkst=2&bgcolor=%23039BE5&ctz=America%2FToronto&showDate=1&src=bXY2NThvbWtnMWc4dDNvMnJxcG1yazR2ODhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" width="800" height="600" frameborder="0" scrolling="no">
                    </iframe>

                </div>
            </div>
            

        </section>



    </div> 
  )
}

export default booknow