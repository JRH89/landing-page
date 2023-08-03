import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
	return (
		<section id="about" className="py-12 px-4 text-center border-b mx-auto border-white bg-gradient-to-l h-screen from-gray-800 via-gray-700 to-gray-900 text-white flex justify-center items-center">
			<div className="container gap-10 flex flex-col items-center mx-auto">
				<h2 className="text-3xl font-bold">About The App</h2>
				<p className="text-center mx-5 md:mx-20">
					My Card allows you to create beautiful, modern business cards that showcase your contact information, social
					media profiles, and more. The app aims to reduce waste and eliminate waiting for the processing and shipping
					of physical cards.
				</p>
				<div className="w-full flex flex-row gap-2 justify-evenly">
					<Image
						className="w-1/2 max-w-sm border border-white"
						width={1920}
						height={1080}
						src={"/Img7.png"}
					/>
					<Image
						className="w-1/2 max-w-sm border border-white"
						width={1920}
						height={1080}
						src={"/Img2.png"}
					/>
				</div>
				<p className="mx-5 md:mx-20">
					Our website&apos;s design adapts beautifully to various screen sizes and orientations, providing an exceptional
					user experience across all devices. Whether you&apos;re using a desktop, tablet, or mobile phone, our responsive
					layout ensures seamless navigation and readability.
				</p>
			</div>
		</section>
	)
}

export default AboutSection
