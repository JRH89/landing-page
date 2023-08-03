import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Dropdown from './Dropdown'

const Navbar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen((prevState) => !prevState)
	}

	useEffect(() => {
		const updateScrollPercentage = () => {
			const totalHeight = document.body.scrollHeight - window.innerHeight
			const currentScrollPosition = window.scrollY

			const newScrollPercentage = Math.min((currentScrollPosition / totalHeight) * 100, 100)
			setScrollPercentage(newScrollPercentage)
		}

		window.addEventListener('scroll', updateScrollPercentage)

		return () => {
			window.removeEventListener('scroll', updateScrollPercentage)
		}
	}, [])

	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
			{/* Add the fixed scrollbar container with gradient background */}
			<div className="container flex justify-center items-center text-center mx-auto pb-2 pt-1">
				<ul className="flex text-black flex-row items-center space-x-6">
					<li className="hover:scale-95 cursor-pointer duration-200">
						<Link to="hero" smooth={true} duration={700}>
							Home
						</Link>
					</li>
					<li className="hover:scale-95 cursor-pointer duration-200">
						<Link to="about" smooth={true} offset={-25} duration={700}>
							About
						</Link>
					</li>
					<Dropdown
						title="Sections"
						className={`p-4 z-50 text-center items-center bg-neutral-950 text-black ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
							} transition-opacity duration-700 ease-in-out transition-transform`}
					>
						<ul className="px-4  text-black w-full py-2 text-3xl space-y-2">
							<li className="hover:scale-95 cursor-pointer duration-200 w-auto">
								<Link title="Digital Cards" to="cards" smooth={true} offset={-25} duration={700}>
									<i className="fa-regular fa-address-card text-blue-400"></i>
								</Link>
							</li>
							<li className="hover:scale-95 cursor-pointer duration-200">
								<Link title="QR Code Generator" to="qr-code-generator" smooth={true} offset={-25} duration={700}>
									<i className="fa-solid fa-qrcode text-green-400"></i>
								</Link>
							</li>
							<li className="hover:scale-95 cursor-pointer duration-200">
								<Link title="Todo List" to="todo" offset={-25} smooth={true} duration={700}>
									<i className="fa-solid fa-list-ol text-red-400"></i>
								</Link>
							</li>
							<li className="hover:scale-95 cursor-pointer duration-200">
								<Link title="Weather" to="weather" offset={-25} smooth={true} duration={700}>
									<i className="fa-solid fa-sun text-yellow-400"></i>
								</Link>
							</li>
							<li className="hover:scale-95 cursor-pointer duration-200">
								<Link title="My Card for Android" to="android-version" smooth={true} offset={-25} duration={700}>
									<i className="fa-brands fa-android text-neutral-950"></i>
								</Link>
							</li>
						</ul>
						{/* Add other sections in the dropdown as needed */}
					</Dropdown>
					<li className="hover:scale-95 cursor-pointer duration-200">
						<Link to="contact" smooth={true} offset={-25} duration={700}>
							Contact
						</Link>
					</li>
					<li className="hover:scale-95 cursor-pointer duration-200">
						<a href="https://have-mycard.vercel.app/LoginPage?isLoggingIn=false" smooth={true} offset={-25} duration={700}>
							Sign-Up
						</a>
					</li>
					{/* Add more links for other sections */}
				</ul>

			</div>
			<div className='flex justify-center mb-1'>
				<div className="w-full relative border-2 shadow-inner shadow-black bg-red-500 border-neutral-950 max-w-[300px] h-3 flex rounded-lg">
					<div
						className="bg-green-400 shadow-md shadow-green-400 h-full rounded-lg"
						style={{ width: `${scrollPercentage}%` }}
					/>
				</div></div>
		</nav>
	)
}

export default Navbar
