import React from 'react'
import styles from '../styles/services.module.css'
import Head from 'next/head'

const services = () => {
  return (
	<div className={styles.section}>
        <Head>
            <title>Donovans Detailing</title>
            <meta name="description" content="An overview of the different car detailing packages at Donovans Car Detailing in Ottawa, Ontario" />
        </Head>


        <section className={styles.about}>
            {/* div container for ALL services */}
            <div className={styles.titleContainer}>
                <div>
                    <h1>Services</h1>
                    <div className={styles.titleBody}>
                        <p>
                            We offer a <strong>full range</strong> of services to meet your needs.
                        </p>
                    </div>
                </div>

            </div>

                <h1>Sales & Deals</h1>
            <div className={styles.servicesWrapper}>
            {/* Sales & Deals ? Section  */} 
            
                <div className={styles.servicesContainer}>
                    {/* First grid item */}  
                    <div className={styles.serviceWrapper}>
                            {/* Services Image */}
                            <div className={styles.servicesImage}>
                                <img className={styles.servicesImage} src='car-detailing-med.jpg'  alt='change later'/> 
                            </div>

                            {/* Services Title */}
                            <div className={styles.servicesTitle}>
                                <h2>Services</h2>
                                <p className={styles.servicesText}>
                                    We offer a <strong>full range</strong> of services to meet your needs.
                                </p>

                            </div>

                            {/* Services Text */}
                            <div className={styles.servicesText}>
                                <p><strong>Interior Detail</strong> + Exterior Claybar + Exterior Sealant</p>
                            </div>
                    </div>

                    {/* Second- grid item */}
                    <div className={styles.serviceWrapper}>
                            <div className={styles.imageContainer}>
                                <img className={styles.servicesImage} src='car-detailing-med.jpg'  alt='change later'/> 
                            </div>

                            {/* Services Title */}
                            <div className={styles.servicesTitle}>
                                <h2>Services</h2>
                                <p className={styles.servicesText}>
                                    We offer a <strong>full range</strong> of services to meet your needs.
                                </p>

                            </div>

                            {/* Services Text */}
                            <div className={styles.servicesText}>
                                <p><strong>Interior Detail</strong> + Exterior Claybar + Exterior Sealant</p>
                            </div> 
                    </div>

                    {/* Third grid item */}
                    <div className={styles.serviceWrapper}>
                            <div className={styles.imageContainer}>
                                <img className={styles.servicesImage} src='car-detailing-med.jpg' alt='change later' /> 
                            </div>

                        {/* Services Title */}
                            <div className={styles.servicesTitle}>
                                <h2>Services</h2>
                                <p className={styles.servicesText}>
                                    We offer a <strong>full range</strong> of services to meet your needs.
                                </p>

                            </div>

                            {/* Services Text */}
                            <div className={styles.servicesText}>
                                <p><strong>Interior Detail</strong> + Exterior Claybar + Exterior Sealant</p>
                            </div>
                    </div>




                </div>

            {/* End of Sales & Deals Section  */}         
            </div>



        </section>


	</div>
  )
}

export default services