import React from 'react'
import Image from 'next/image'
const AboutSection = () => {
	return (
		<section id="about" className="py-12 px-4 text-center border-b my-auto mx-auto border-white bg-gradient-to-l min-h-screen from-gray-800 via-gray-700 to-gray-900 text-white">
			<div className="container gap-8 flex flex-col  mx-auto">
				<h2 className="text-3xl font-bold">About The App</h2>
				<p className='sm:text-xl text-center'>
					My Card allows you to create beautiful, modern business cards that showcase your
					contact information, social media profiles, and more.
				</p>
				<p>
					The app aims to reduce waste and eliminate waiting for the processing and shipping of physical cards.
				</p>
				<div className='w-full flex flex-row gap-2 justify-evenly p-6'>
					<Image
						className='w-1/2 max-w-sm border border-white'
						width={1920}
						height={1080}
						src={"/Img4.png"}
					/>
					<Image
						className='w-1/2 max-w-sm border border-white'
						width={1920}
						height={1080}
						src={"/Img2.png"}
					/>
				</div>
				<p className='sm:text-xl'>
					The responsive design looks great on any screen, in any orientation.
				</p>
			</div>
		</section>
	)
}

export default AboutSection
