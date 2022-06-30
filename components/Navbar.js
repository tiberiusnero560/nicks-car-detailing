import React from 'react'
import  styles from '../styles/header.module.css'
import Link from 'next/link'
import Logo from '../public/logos/NewLogo.svg'
import Image from 'next/image'
import Sidebar from './Sidebar'

const Navbar = () => {
	const [sidebarIsOpen, setsidebarIsOpen] = React.useState(false);


	
	// Toggle the sidebar on and off
	const toggleSidebar = () => {
		setsidebarIsOpen(!sidebarIsOpen);
		console.log('is clicked')
		

	}

	const MenuItems = [
		{
			href: '/about',
			title: 'About',
			icon: 'info'
		},
		{
			href: '/services',
			title: 'Services',
			icon: 'tools'
		},
		{
			href: '/book-now',
			title: 'Book Now',
			icon: 'book'
		},
		{
			href: '/contact',
			title: 'Contact',
			icon: 'phone'
		}

	]

  return (
	// Entire nav container
	<div className={styles.navContainer}>
		{/* Logo container */}
		<div className={styles.logoContainer}>
			<Link href="/" >
				<a >
					<Image src={Logo} />
				</a>
			</Link>
		</div>

	   {/* Hamburger menu */}
		<a onClick={toggleSidebar}>
				<div className={styles.hamburger} >
					<div className={styles.hamburger__line}></div>
					<div className={styles.hamburger__line}></div>
					<div className={styles.hamburger__line}></div>
				</div>
		</a>

		{/* Nav Links map through the array of MenuItems */}
		<div className={styles.navLinks}>
			{MenuItems.map((item, index) => {
				return (
					<div key={index} className={styles.navItems}>
						<Link href={item.href} key={index}>
                            <div className={styles.linkContainer}>
                                <li className={styles.li}>
                                    <a key={index} className={styles.link}>
                                        {/* <i className={`fas fa-${item.icon}`}></i> */}
                                        <h4>{item.title}</h4>
                                    </a>
                                </li>

                            </div>
						</Link>

					</div>
				)
			}
			)}
		</div>

		


		{/* Sidebar conditional to be rendered only if sidebarIsOpen == true */}
		{sidebarIsOpen && <Sidebar />}
		

		



	
		


	</div>


  )
}

export default Navbar