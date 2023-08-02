import React from 'react'
import Image from 'next/image'

const WeatherSection = () => {
	return (
		<section id="weather" className="py-12 px-4 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900 text-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-4">Check the Weather</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2">
					<div>
						<h3 className="text-xl font-semibold mb-2">Favorite City Weather</h3>

						<Image
							width={1920}
							height={1080}
							src={"/Img5.png"}
						/>
						<p>
							In our app&apos;s weather page, you can set a favorite city to always display the current
							weather. Simply choose your preferred city, and the app will remember your selection
							for easy access to weather updates.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">Detailed Weather Forecasts</h3>
						<p>
							Stay informed with both short-term and long-term forecasts. The weather page provides
							both 3-hour and 5-day forecasts, giving you a comprehensive overview of the expected
							weather conditions.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">Metric and Imperial Units</h3>
						<p>
							Whether you prefer metric or imperial units, we&apos;ve got you covered. Our weather page
							lets you toggle between Celsius and Fahrenheit, ensuring you get the weather
							information in the units you are most comfortable with.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">Weather Widget for User Dashboard</h3>
						<Image
							width={213}
							height={66}
							src={"/Img3.png"}
						/>
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
