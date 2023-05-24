import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import LogoMenu from 'src/components/LogoMenu'
import Image from 'next/image'
import Coin from 'public/images/coin.gif'
import { motion } from 'framer-motion'
import Noise from 'public/images/noise.gif'
import Menu from 'src/components/Menu'

const Home: FC = () => {
	const Services = ['Government AI', 'Automotive AI', 'Generative AI']
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentText, setCurrentText] = useState('')

	useEffect(() => {
		const text = Services[currentIndex]
		let i = 0
		const typingEffect = setInterval(() => {
			if (i < text.length) {
				setCurrentText(prevText => prevText + text.charAt(i))
				i++
			} else {
				clearInterval(typingEffect)
				setTimeout(() => {
					setCurrentIndex(prevIndex => {
						const nextIndex = (prevIndex + 1) % Services.length
						setCurrentText(Services[nextIndex].charAt(0)) // start the new service with the first character
						return nextIndex
					})
				}, 2000) // wait for 2 seconds before typing next service
			}
		}, 100) // adjust the speed of typing here
		return () => clearInterval(typingEffect)
	}, [currentIndex])

	return (
		<>
			<div className="absolute z-10 w-full">
				<Menu />
			</div>
			<div className="min-h-screen bg-[#333333] flex items-center justify-center">
				<div className="flex flex-col w-full items-start md:px-24 justify-center max-w-screen-2xl min-h-screen lg:relative overflow-hidden">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="relative bg-[rgba(51, 51, 51, 0.5)] flex flex-col items-start justify-center inset-0 z-10 space-y-10 px-5 sm:px-10 md:px-14 mt-24 sm:mt-36"
					>
						<h1 className="text-6xl w-full lg:text-8xl max-w-[8em] leading-tight max-w-[10em] font-Sans">
							Power <br />
							<span className="typing ">{currentText}</span> <br />
							With Your Data
						</h1>

						<h3 className="text-md   md:text-lg max-w-[40em] leading-[1.75em] font-Sans">
							Make the best models with the best data. Scale Data Engine leverages your enterprise data,
							and with Scale Generative AI Platform, safely unlocks the value of AI.
						</h3>
						<div className="flex space-x-5 ">
							<div className=" flex flex-row border-[1px] rounded-lg items-center justify-center p-2 font-Sans space-x-1 hover:space-x-3 hover:bg-[#ffa500] hover:border-[#ffa500]">
								<button className="rounded-lg ">Book a Demo </button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path
										d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
										fill="rgba(254,254,254,1)"
									></path>
								</svg>
							</div>
							<div className=" flex flex-row  items-center justify-center p-2 space-x-1 hover:space-x-3">
								<button className="rounded-lg">Build AI</button>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
									<path
										d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
										fill="rgba(254,254,254,1)"
									></path>
								</svg>
							</div>
						</div>
						<div className="pt-10 sm:pt-20 text-[#A3A3A3]">
							Scale works with Generative AI Companies, U.S. Government Agencies, Enterprises & Startups
						</div>
					</motion.div>

					<div className="hidden lg:block absolute ml-[35em] mt-10 flex flex-col  w-[50em] bg-[#333333] overflow-hidden	">
						<Image src={Noise} alt="Noise" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
