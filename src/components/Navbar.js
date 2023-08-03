import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Dropdown from './Dropdown'


const Navbar = () => {

	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen((prevState) => !prevState)
	}
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
						<Link to="about" smooth={true} offset={-25} duration={700}>
							About
						</Link>
					</li>
					<Dropdown
						title="Sections"
						className={`p-4 text-center items-center text-black ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
							} transition-opacity duration-700 ease-in-out transition-transform`}
					>
						<ul className='px-4 text-black w-full py-2 text-3xl space-y-2'>
							<li className='hover:scale-95 cursor-pointer duration-200 w-auto'>
								<Link title='Digital Cards' to="cards" smooth={true} offset={-25} duration={700}>
									<i className='fa-regular fa-address-card'></i>
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link title='QR Code Generator' to="qr-code-generator" smooth={true} offset={-25} duration={700}>
									<i className='fa-solid fa-qrcode'></i>
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link title='Todo List' to="todo" offset={-25} smooth={true} duration={700}>
									<i className="fa-solid fa-list-ol"></i>
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link title='Weather' to="weather" offset={-25} smooth={true} duration={700}>
									<i className="fa-solid fa-sun"></i>
								</Link>
							</li>
							<li className='hover:scale-95 cursor-pointer duration-200'>
								<Link title='My Card for Android' to="android-version" smooth={true} offset={-25} duration={700}>
									<i className="fa-brands fa-android"></i>
								</Link>
							</li>
						</ul>
						{/* Add other sections in the dropdown as needed */}
					</Dropdown>
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<Link to="contact" smooth={true} offset={-25} duration={700}>
							Contact
						</Link>
					</li>
					<li className='hover:scale-95 cursor-pointer duration-200'>
						<a href="https://have-mycard.vercel.app/LoginPage?isLoggingIn=false" smooth={true} offset={-25} duration={700}>
							Sign-Up
						</a>
					</li>
					{/* Add more links for other sections */}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
