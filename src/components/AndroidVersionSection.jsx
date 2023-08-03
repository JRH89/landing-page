import React from 'react'
import Image from 'next/image'

const AndroidVersionSection = () => {
	return (
		<section id="android-version" className="py-12 text-center flex justify-center flex-col px-4 bg-gradient-to-l from-gray-800 via-gray-700 to-gray-900 text-white border-b border-white">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-4">My Card for Android</h2>
				<div className="grid gap-8 grid-cols-1">
					<div className='gap-2 flex flex-col'>
						<h3 className="text-xl font-semibold mb-2 underline">3 Home Screen Widgets</h3>
						<div className="w-full max-w-md mx-auto">
							{/* Placeholder for Weather/Time/Date widget image */}
							<Image
								alt="Weather/Time/Date Widget"
								src="/Img8.png"
								width={600}
								height={400}
							/>
						</div>
						<p>
							The Android version of My Card features 3 home screen widgets: Time/Date/Weather, ToDo List, and QR Code for easy contact sharing.
						</p>
					</div>
					<div className='gap-2 flex flex-col'>
						<h3 className="text-xl font-semibold mb-2 underline">Responsive Design</h3>
						<div className="w-full max-w-md mx-auto">
							{/* Placeholder for Todo List widget image */}
							<Image
								alt="Todo List Widget"
								src="/x.png"
								width={600}
								height={400}
							/>
						</div>
						<p>
							Our sleek and modern layouts respond to all screen sizes and orientations.
						</p>
					</div>
					<div className='gap-2 flex flex-col'>
						<h3 className="text-xl font-semibold mb-2 underline">Intuitive UI</h3>
						<div className="w-full max-w-md mx-auto">
							{/* Placeholder for QR Code widget image */}
							<Image
								alt="QR Code Widget"
								src="/y.png"
								width={600}
								height={400}
							/>
						</div>
						<p>
							Our intuitive UI will help you become a My Card pro in no time.
						</p>
					</div>
					<a className='text-green-400 hover:underline text-xl' href='https://play.google.com/store/apps/details?id=mycard.mycard'>Download from the Google Play store</a>
				</div>
			</div>
		</section>
	)
}

export default AndroidVersionSection
