import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
	return (
		<section id="about" className="py-12 px-4 text-center border-b mx-auto border-white bg-gradient-to-l min-h-screen from-gray-800 via-gray-700 to-gray-900 text-white flex justify-center items-center">
			<div className="container gap-10 flex flex-col items-center mx-auto max-w-[1000px]">
				<h2 className="text-3xl font-bold">
					About The App
				</h2>
				<p>
					My Card allows you to create beautiful, modern business cards that showcase your contact information, social
					media profiles, and more. The app aims to reduce waste and eliminate waiting for the processing and shipping
					of physical cards.
				</p>
				<div className="w-full flex flex-row gap-2 justify-center">
					<Image
						alt='Img7'
						className="w-1/2 max-w-xs border border-white"
						width={1920}
						height={1080}
						src={"/Img7.png"}
					/>
					<Image
						alt='Img2'
						className="w-1/2 max-w-xs border border-white"
						width={1920}
						height={1080}
						src={"/Img2.png"}
					/>
				</div>
				<p>
					Our website&apos;s design adapts beautifully to various screen sizes and orientations, providing an exceptional
					user experience across all devices. Whether you&apos;re using a desktop, tablet, or mobile phone, our responsive
					layout ensures seamless navigation and readability.
				</p>
				<a className='text-green-400 hover:underline text-xl' href='https://have-mycard.vercel.app/LoginPage?isLoggingIn=false'>
					Go to My Card for the Web
				</a>
			</div>
		</section>
	)
}

export default AboutSection
