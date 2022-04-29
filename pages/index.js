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
			<div className={styles.headerContainer}>
				<div className={styles.navContainer}>
					<div className={styles.headerLogoContainer}>
						<a href="/">
							<img className={styles.headerLogo} src="/nicks-logo.jpg" alt="Nicks Car Detailing Logo" width={50} height={50} />
						</a>
					</div>
					<ul className={styles.navList}>
						<li className={styles.navLi}>
							<a href="/about">About</a>
						</li>
						<li className={styles.navLi}>
							<a href="/services">Services</a>
						</li>
						<li className={styles.navLi}>
							<a href="/contact">Contact</a>
						</li>
					</ul>

				</div>
				
			</div>




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

			{/* First grid item */}  
            <div className={styles.textContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.shadowImage} src='car-detailing-med.jpg'  alt='change later'/> 
                    </div>

					<div>
						<p className={styles.textContainer}>Full Service Detail </p>
                    </div>

                    <div>

                    </div>
            </div>

			{/* Second- grid item */}
            <div className={styles.textContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.shadowImage} src='car-detailing-med.jpg'  alt='change later'/> 
                    </div>

					<div>
						<p className={styles.textBody}>Full Service Detail </p>
                    </div>

                    <div>

                    </div>
            </div>

			{/* Third grid item */}
            <div className={styles.textContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.shadowImage} src='car-detailing-med.jpg' alt='change later' /> 
                    </div>

					<div>
						<p className={styles.textContainer}>Full Service Detail </p>
                    </div>

                    <div>

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












		<footer className={styles.footer}>
			2022 Nicks Car Detailing <br></br>
			Built by Leblanc Software Solutions
		</footer>
    </div>
  )
}
