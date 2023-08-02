import React from 'react'
import { Link } from 'react-scroll'

const HeroSection = () => {
	return (
		<section id="hero" className="min-h-screen border-b border-white flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white">
			<div className="text-center flex flex-col gap-3">
				<h1 className="text-4xl font-bold text-white">Welcome to My Card!</h1>
				<p className="text-white">Create and share personalized digital business cards with ease.</p>
				<Link to="about" smooth={true} offset={-25} duration={500} className="bg-white mx-auto text-gray-900 px-6 py-2 rounded-full hover:scale-95 duration-200 cursor-pointer">
					Learn More
				</Link>
			</div>
		</section>
	)
}

export default HeroSection
