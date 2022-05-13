import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../pages/about.js'
import styles2 from '../components/hero.module.css'

import Hero from '../components/hero.js'



export default function Home() {
  return (
    <div className={styles.homepageWrapper}>
		<Head>
			<title>Nicks Car Detailing</title>
			<meta name="description" content="Full Service Professional Car detailing at a reasonable price. All size vehicles." />
			<link rel="icon" href="/favicon.ico" />

            
		</Head>
		<header>



		</header>

        {/* Hero Image Component  */}
      	<Hero className={styles2.image} />

        {/* Main Content  */}
		<main className={styles.container}>

        {/* About Section  */}
        <section className={styles.aboutSection}>
            <h1>About</h1>
            
            <div className={styles.textContainer}>
                    <p>
						At Nicks Car Detailing, we are about the attention to detail. We are a full service detailing company that specializes in small to large sized passenger vehicles. We offer each vehicle extreme focus and attention to satisfy any customer. 
                
                    </p>

                    <p>
						
                    </p>

            </div>

        </section>
		{/* End of About Section  */} 


        {/* Sales & Deals ? Section  */} 
        <section>
            <h1>Sales & Deals</h1>
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

                        <div>
                            <p className={styles.textBody}>Full Service Detail </p>
                        </div>

                        <div>
                            <strong>Interior Detail </strong>
                            (Steam &amp; Shampoo) + <strong>Exterior Claybar + Exterior Sealant </strong>(Lasts up to 6 months!)
                            <br></br>
                            <strong>Spring Sale!</strong>
                        </div>
                </div>

                {/* Third grid item */}
                <div className={styles.serviceWrapper}>
                        <div className={styles.imageContainer}>
                            <img className={styles.servicesImage} src='car-detailing-med.jpg' alt='change later' /> 
                        </div>

                        <div>
                            <p className={styles.textContainer}>Full Service Detail </p>
                        </div>

                        <div>

                        </div>
                </div>




            </div>

        </section>
		{/* End of Sales & Deals Section  */} 


        {/* Reviews & Testimonials Section  */}
        <section className={styles.reviewSection}>
            <h1 className={styles.titles}>Customer Reviews</h1>

            <div className={styles.reviewGridWrapper}>
				<div className={styles.rowContainer}>
					<div className={styles.imageWrapper}>
						<img className={styles.reviewImage} src='hero-sm.jpg' alt='image of someone waxing a car' />
						<div className={styles.reviewStarsWrapper}>
						
						</div>
					</div>

					<div className={styles.textColumn}>
						<div className={styles.textWrapper}> 
							<div className={styles.textBody}>
								<span><strong>Kyle LeBlanc</strong></span>
								<p> I was very happy with Nicks work. I have been using his service for my Mitsubishi Eclipse and Subaru Forester. I have had my car professionally detail for over a year now and I am very happy with the results. I would recommend Nicks work to anyone looking for a professional detailing service. </p>
							</div>

						</div>
					</div>
				</div>


				<div className={styles.rowContainer}>
					<div className={styles.imageWrapper}>
						<img className={styles.reviewImage} src='hero-sm.jpg' alt='image of someone waxing a car'/>
						<div className={styles.reviewStarsWrapper}>
						
						</div>
					</div>

					<div className={styles.textColumn}>
						<div className={styles.textWrapper}> 
							<div className={styles.textBody}>
								<span><strong>Tracy Eiselt</strong></span>
								<p> I was very happy with Nicks work. I have been using his service for my Mitsubishi Eclipse and Subaru Forester. I have had my car professionally detail for over a year now and I am very happy with the results. I would recommend Nicks work to anyone looking for a professional detailing service. </p>
							</div>

						</div>
					</div>
				</div>


				<div className={styles.rowContainer}>
					<div className={styles.imageWrapper}>
						<img className={styles.reviewImage} src='hero-sm.jpg' alt='image of someone waxing a vehicle' />
						<div className={styles.reviewStarsWrapper}>
						
						</div>
					</div>

					<div className={styles.textColumn}>
						<div className={styles.textWrapper}> 
							<div className={styles.textBody}>
								<span><strong>Kyle LeBlanc</strong></span>
								<p> I was very happy with Nicks work. I have been using his service for my Mitsubishi Eclipse and Subaru Forester. I have had my car professionally detail for over a year now and I am very happy with the results. I would recommend Nicks work to anyone looking for a professional detailing service. </p>
							</div>

						</div>
					</div>
				</div>

            </div>

        </section>
		{/* End of Contact Section  */} 

		</main>
		{/* End of Main content Section Section  */} 












		
    </div>
  )
}
