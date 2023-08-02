import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'


const CardSection = () => {


	const images = [
		{ title: 'Classic', src: '/Classic.png', width: 411, height: 590 },
		{ title: 'Dynamic', src: '/Dynamic.png', width: 411, height: 590 },
		{ title: 'Primary', src: '/Primary.png', width: 411, height: 590 },
	]

	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const showNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	const showPreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
	}

	const currentImage = images[currentImageIndex]
	return (
		<section id="cards" className="py-12 text-center px-4 bg-gradient-to-r from-gray-800 mx-auto my-auto via-gray-700 to-gray-900 text-white border-b border-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-4">Create Stunning Cards</h2>
				<div className="grid gap-8 grid-cols-1 justify-center w-full items-center content-center">
					<div className="flex w-full  self-center grid-cols-2">
						<div className="p-5 place-self-center w-full">
							<h3 className="text-xl font-semibold mb-2 underline">Showcase Your Professional Identity</h3>
							<p>
								With our digital business card, you can display essential contact information such as
								your name, phone number, email, and job title. Impress your contacts with a sleek and
								modern design that reflects your professional identity.
							</p>
						</div>

						<div className="flex w-full   grid-cols-2">
							<div className="p-5  w-full">
								<h3 className="text-xl font-semibold mb-2 underline">Customize Your Online Presence</h3>
								<p>
									Add 1-4 links to your social media profiles, online portfolios, or personal website.
									Showcase your work and connect with others through your digital business card.
								</p>
							</div></div>
					</div>
					<div className='flex flex-col text-center gap-10  justify-center'>
						<h3 className="text-xl font-semibold mb-2 underline">Choose from Three Modern Themes</h3>
						<div className='flex w-full sm:justify-center justify-center gap-2 '>
							<div className="flex items-center justify-center">
								<button
									onClick={showPreviousImage}
									className="bg-white text-blue-500 px-4 py-2 rounded-l-full"
								>
									&lt;
								</button>
								<div className="relative w-60 md:w-80 max-w-sm">
									<Image
										className="border"
										title={currentImage.title}
										src={currentImage.src}
										width={currentImage.width}
										height={currentImage.height}
										alt={currentImage.title}
									/>
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

									</div>
									<h3 className="text-white text-xl font-semibold text-center">
										{currentImage.title}
									</h3>
								</div>
								<button
									onClick={showNextImage}
									className="bg-white w-auto text-blue-500 px-4 py-2 rounded-r-full"
								>
									&gt;
								</button>
							</div>
						</div>
						<p>
							Our app offers three stunning themes for your digital business card. Whether you prefer
							a minimalistic look or a bold design, you&apos;ll find the perfect theme to represent your
							brand and style.
						</p>
					</div>
					<div className='flex flex-col text-center'>
						<h3 className="text-xl font-semibold mb-5 underline">Share with Ease</h3>

						<div className='flex flex-col gap-2 justify-center'>
							<Image
								className='self-center'
								width={256}
								height={256}
								src={"/sampleqr.png"}
							/>
							<a className='text-green-600 text-center mb-4' href='https://next-mycard.vercel.app/api/0DRdJxPS'>https://next-mycard.vercel.app/api/0DRdJxPS</a>
						</div>

						<p>
							Each digital business card comes with a built-in QR code and URL. Sharing your contact
							information has never been easier. Simply share your QR code or URL, and others can
							quickly save your details to their contact list.
						</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<Link to="weather" smooth={true} duration={500}>
						<button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
							Learn More
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default CardSection;

