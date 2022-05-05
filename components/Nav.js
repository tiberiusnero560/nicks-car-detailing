import Hamburger from "./Hamburger";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav(){

	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () =>{
		setHamburgerOpen(!hamburgerOpen)
	}

	return(
		<div>
			<div className="navigation">
				<div className="logo">
					<Link href='/'>
						<Image 
						src="/logos/NewLogo.svg" alt="Nicks Car Detailing Logo" 
						width={100} height={50} />
						
					</Link>
					<div className="hamburger" onClick={toggleHamburger}>
						<Hamburger isOpen={hamburgerOpen}/>
					</div>
				</div>


				<ul>
					<Link href='/'><li>Home</li></Link>
					<Link href='/about'><li>About</li></Link>
					<Link href='/check-availability'><li>Availability</li></Link>
                    <Link href='/book-now'><li>Book Now</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>


				 

					
				</ul>
			</div>


			<style jsx>{`
				.navigation{
					width: 100%;
					height: 50px; 
					
					
				}
				
			  
				
				.navigation ul{
					display:flex;
					flex-wrap: wrap;
					float: right;
					margin: 0px;
					padding: 0px;
					overflow: hidden;
				}
				.navigation ul li{
					list-style-type: none;
					padding: 2% 0%
				}
				.hamburger{
					display: none;
					z-index: 6;
				} 
				@media (max-width: 767px){
				  
					.hamburger{
						display: block;
						margin-left: 10px;
						margin-top: 10px;
						float: right;
						margin-right: 20px;
					}
				
				   
					.navigation ul{
						display: ${hamburgerOpen ? 'inline' : 'none'};
						background-color: #84ceeb;
						height: 100vh;
						width: 50vw;
						position: fixed;
						z-index: 50;
						padding: 4% 5%;
						text-align: center;
						
					}
				}
				
			   
				
			`}</style>
		</div>
	)

}