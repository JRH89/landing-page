import React from 'react'
import { Link } from 'react-scroll'
import Dropdown from './Dropdown'

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
			<div className="container mx-auto py-4">
				<ul className="flex text-black flex-row items-center space-x-6">
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="hero" smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="about" smooth={true} offset={-56} duration={500}>
							About
						</Link>
					</li>
					<Dropdown title="Sections" className="p-4 text-center items-center">
						<ul className='px-4 py-2'>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="cards" smooth={true} offset={-56} duration={500}>
									Cards
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="weather" smooth={true} duration={500}>
									Weather
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="todo" smooth={true} duration={500}>
									Todo
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link to="android-version" smooth={true} duration={500}>
									Android
								</Link>
							</li>
						</ul>
						{/* Add other sections in the dropdown as needed */}
					</Dropdown>
					{/* Add more links for other sections */}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
