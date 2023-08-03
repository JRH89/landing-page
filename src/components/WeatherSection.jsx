import React from 'react'
import Image from 'next/image'

const WeatherSection = () => {
	return (
		<section id="weather" className="py-12 text-center flex justify-center flex-col px-4 bg-gradient-to-l from-gray-800 via-gray-700 to-gray-900 text-white border-b border-white">
			<div className="container max-w-[1000px] mx-auto">
				<h1 className='text-3xl'><i className="fa-solid fa-sun rounded-lg text-yellow-400"></i></h1>
				<h2 className="text-3xl font-bold mb-4">Check the Weather</h2>
				<div className="grid justify-center gap-8 md:gap-4 grid-cols-1">
					<div className="flex flex-col items-center">
						<h3 className="text-xl font-semibold mb-2 underline">Favorite City Weather</h3>
						<div className="self-center">
							<Image
								alt='Img5'
								className="max-w-sm self-center border border-white"
								width={1920}
								height={1080}
								src={"/Img5.png"}
							/>
						</div>
						<p className="p-5">
							In our app&apos;s weather page, you can set a favorite city to always display the current
							weather. Simply choose your preferred city, and the app will remember your selection
							for easy access to weather updates.
						</p>
					</div>

					<div className="grid mx-5 mb-4 sm:mx-0 gap-4 grid-cols-1 sm:grid-cols-2">
						<div className="bg-gray-800 rounded-lg p-6 ">
							<h3 className="text-xl font-semibold mb-2 underline">Detailed Weather Forecasts</h3>
							<p>
								Stay informed with both short-term and long-term forecasts. The weather page provides
								both 3-hour and 5-day forecasts, giving you a comprehensive overview of the expected
								weather conditions.
							</p>
						</div>
						<div className="bg-gray-800 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-2 underline">Metric and Imperial Units</h3>
							<p>
								Whether you prefer metric or imperial units, we&apos;ve got you covered. Our weather page
								lets you toggle between Celsius and Fahrenheit, ensuring you get the weather
								information in the units you are most comfortable with.
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<h3 className="text-xl font-semibold mb-2 underline">Weather Widget for User Dashboard</h3>
						<div className="self-center">
							<Image
								className='border border-white mb-4'
								alt='Img3'
								width={213}
								height={66}
								src={"/Img3.png"}
							/>
						</div>
						<p>
							We&apos;ve made accessing the current weather even more convenient for you. The app&apos;s
							weather widget lets you see the current weather and weather description right on your
							user dashboard. Stay updated on the go without having to navigate to the weather page.
						</p>
					</div>
				</div>
				{/* Add more content and styling as needed */}
			</div>
		</section>
	)
}

export default WeatherSection
