import React, { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

const Dropdown = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen((prevState) => !prevState)
	}

	return (
		<li className="relative z-50">
			<button
				onClick={toggleDropdown}
				className="flex items-center space-x-1 text-black cursor-pointer"
			>
				<span>{title}</span>
				{isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
			</button>
			{isOpen && <ul className="absolute top-full left-0 mt-2 bg-white border shadow-lg">{children}</ul>}
		</li>
	)
}

export default Dropdown
