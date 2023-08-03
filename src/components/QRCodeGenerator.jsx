import React from 'react'
import Image from 'next/image'
const QRCodeGeneratorSection = () => {
	return (
		<section id="qr-code-generator" className="py-12 px-6 border-b border-white text-center bg-gradient-to-l from-gray-800 via-gray-700 to-gray-900">
			<div className="container mx-auto">
				<h1 className='text-3xl'><i className="fa-solid fa-qrcode rounded-lg"></i></h1>
				<h2 className="text-3xl font-bold mb-4">QR Code Generator</h2>
				<p className="mb-4">
					Create custom QR codes with our QR Code Generator. Simply enter the desired text or link and choose your
					preferred foreground and background colors.
				</p>
				<div className='flex flex-col items-center mb-4'>
					<Image
						className=' max-w-sm border border-white'
						width={528}
						height={341}
						src={"/Img9.png"}
						alt='Img9'
					/></div>
				<p className="mb-4">
					QR codes are an efficient way to share information, URLs, contact details, and more. Customize your QR code to
					match your brand or personal style.
				</p>
				<div className="grid mx-5 sm:mx-0 gap-4 grid-cols-1 sm:grid-cols-2">
					<div className='bg-gray-800 rounded-lg p-6'>
						<h3 className="text-xl font-semibold mb-2">Custom Foreground Color</h3>
						<p>
							Stand out with a unique QR code by selecting a custom foreground color. Personalize the QR code to match
							your brand&apos;s color scheme or to add a touch of creativity.
						</p>
					</div>
					<div className='bg-gray-800 rounded-lg p-6'>
						<h3 className="text-xl font-semibold mb-2">Custom Background Color</h3>
						<p>
							Choose a background color that complements your QR code design. Make it visually appealing and easily
							scannable by selecting a color that enhances the QR code&apos;s visibility.
						</p>
					</div>
				</div>
				<p className="mt-4">
					Whether you want to share contact details, website links, product information, or any other data, our QR Code
					Generator makes it simple and fun to create your customized QR codes.
				</p>
			</div>
		</section>
	)
}

export default QRCodeGeneratorSection
