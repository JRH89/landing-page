import React from 'react'

const ContactSection = () => {

	const emailAddress = 'mycarddigitalbusinesscards@gmail.com'
	return (
		<section id='contact' className="py-12 px-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
				<div className="grid gap-8 grid-cols-1 ">
					<div>
						<h3 className="text-xl font-semibold mb-2">Contact Information</h3>
						<p>
							If you have any questions, suggestions, or need assistance with our app, feel free to contact us.
							We value your feedback and are here to help.
						</p>
						<p className="mt-4">Support Email: <a className='text-green-400 hover:underline' href='mailto:mycarddigitalbusinesscards@gmail.com'>mycarddigitalbusinesscards@gmail.com</a></p>
						<p className="mt-4">Developer Email: <a className='text-green-400 hover:underline' href='mailto:hookerhillstudios@gmail.com'>hookerhillstudios@gmail.com</a></p>
					</div>

				</div>
			</div>
		</section>
	)
}

export default ContactSection
