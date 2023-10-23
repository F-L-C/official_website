import React from 'react'
import Image from 'next/image'
import Logo from '../assets/512x512_without_title.png'

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full bg-flc-green text-black">
			<div className="container mx-auto flex justify-between items-center p-2">
				<div>
					<a href="/">
						<Image
							src={Logo}
							alt="Your Logo"
							width={100} // Set the width of your logo
							height={40} // Set the height of your logo
						/>
					</a>
				</div>
				<ul className="flex space-x-7 font-extrabold text-xl">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
