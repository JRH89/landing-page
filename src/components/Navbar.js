import React from 'react'
import { Link } from 'react-scroll'
import Dropdown from './Dropdown'

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
			<div className="container flex justify-center items-center text-center mx-auto py-4">
				<ul className="flex text-black flex-row items-center space-x-6">
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="hero" smooth={true} duration={700}>
							Home
						</Link>
					</li>
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="about" smooth={true} offset={-40} duration={700}>
							About
						</Link>
					</li>
					<Dropdown title="Sections" className="p-4 text-center items-center text-black">
						<ul className='px-4 text-black py-2'>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="cards" smooth={true} offset={-40} duration={700}>
									Cards
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="weather" offset={-40} smooth={true} duration={700}>
									Weather
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="todo" offset={-40} smooth={true} duration={700}>
									Todo
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="android-version" smooth={true} offset={-40} duration={700}>
									Android
								</Link>
							</li>
						</ul>
						{/* Add other sections in the dropdown as needed */}
					</Dropdown>

					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="contact" smooth={true} offset={-40} duration={700}>
							Contact
						</Link>
					</li>
					{/* Add more links for other sections */}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
