import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head'

const about = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Nicks Car Detailing</title>
            <meta name="description" content="Full Service Professional Car detailing at a reasonable price. All size vehicles." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <section>
        <h1>About</h1>
        
        <div className={styles.textContainer}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
                nisi nisl aliquam eros, eget tincidunt nisl nunc eu
                lectus. Nulla facilisi. Nulla facilisi.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
                nisi nisl aliquam eros, eget tincidunt nunc eu
                lectus. Nulla facilisi. Nulla facilisi.
                </p>

                 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
                nisi nisl aliquam eros, eget tincidunt nisl nunc eu
                lectus. Nulla facilisi. Nulla facilisi.
                </p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur,
                nisi nisl aliquam eros, eget tincidunt nunc eu
                lectus. Nulla facilisi. Nulla facilisi.
                </p>

        </div>

      </section>



    </div>
  )
}

export default about