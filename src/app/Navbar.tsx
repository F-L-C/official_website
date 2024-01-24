import Image from 'next/image'
import Logo from '../../public/assets/512x512_without_title.png'

const Navbar = () => {
	return (
		<nav className="relative top-0 left-0 w-full px-40 text-white z-20">
			<div className="container mx-auto flex justify-between items-center p-2 text-2xl">
				<div className='container flex items-center'>
					<a href="/">
						<Image
							src={Logo}
							alt="Your Logo"
							width={100} // Set the width of your logo
							height={40} // Set the height of your logo
						/>
					</a>
					<h1 className='ml-10 text-2xl'>
						<b>Foreign Language Club</b>
					</h1>
				</div>
				<div className="flex mx-auto">
					
				</div>
				<ul className="flex space-x-7 ">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#events">Events</a></li>
					<li><a href="#services">Team</a></li>
					<li><a href="#blog">Blog</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
