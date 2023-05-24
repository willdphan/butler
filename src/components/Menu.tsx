import Link from 'next/link'
import { motion } from 'framer-motion'
import { MotionConfig } from 'framer-motion'
import Scale from 'public/images/scale.png'
import Image from 'next/image'

const Menu = () => {
	return (
		<nav className="bg-[#333333] px-0 sm:px-5 md:px-32">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-md text-white font-Sans">
				<a href="https://flowbite.com/" className="flex items-center">
					<Image src={Scale} alt="Noise" width={100} height={100} />
				</a>
				<div className="flex md:order-2">
					<button
						type="button"
						className="text-white bg-[#333333]  font-normal rounded-lg text-md py-2 text-center mr-3 md:mr-0 "
					>
						Log In
					</button>
					<button
						data-collapse-toggle="navbar-cta"
						type="button"
						className="inline-flex items-center p-2 text-sm rounded-lg md:hidden "
						aria-controls="navbar-cta"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-cta"
				>
					<ul className="flex flex-col font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
						<li>
							<a href="#" className="block py-2 pl-3 pr-4 rounded   md:p-0 " aria-current="page">
								Products
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4  rounded md:p-0   ">
								Government
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4  rounded md:p-0 ">
								Solutions
							</a>
						</li>
						<li>
							<a href="#" className="block py-2 pl-3 pr-4  rounded md:p-0 ">
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Menu
