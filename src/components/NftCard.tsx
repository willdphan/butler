import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const NftCard = ({ title, id, image, value, last }) => {
	const formatText = text => {
		if (text && text.length > 4) {
			return text.slice(0, 4) + '...'
		}
		return text
	}

	return (
		<section id="learnings" className="w-full px-1 flex">
			<div className="columns-1 my-2 w-full flex items-center justify-center">
				<div className="w-full max-w-[24em] sm:max-w-[30em] bg-white transform transition duration-300 sm:hover:scale-[1.01] sm:hover:bg-[#F8F8F8] text-[#9B9B9B]  mb-2 font-Mono uppercase text-lg py-5">
					<motion.div
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="pl-10 space-y-2 flex space-x-10 uppercase ease-in-out"
					>
						<img width={70} height={70} src={image} alt="" />
						<div className="flex flex-col">
							<h1 className="text-black">{title}</h1>
							<div className="flex space-x-3">
								<p className="text-gray-400">ID:{formatText(id)}</p>
								{value && <p className="text-gray-400">| FL:{Number(value).toFixed(3)}Ξ</p>}
								{last && <p className="text-gray-400">| LS:{Number(last).toFixed(3)}Ξ</p>}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default NftCard
