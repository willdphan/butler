import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LoadingNFTS = () => {
	return (
		<section id="learnings" className="w-full px-1 flex items-center justify-center flex">
			<div className="columns-1 my-2 flex items-center min-w-[30em] sm:max-w-[30em] justify-between  border-[1px] py-8 px-10">
				<div className="animate-pulse">
					<div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-200 w-24 mb-2.5"></div>
					<div className="w-64 h-2.5 bg-gray-100 rounded-full dark:bg-gray-200"></div>
				</div>
				<div className="h-2.5 bg-gray-100 rounded-full dark:bg-gray-200 w-12"></div>
			</div>
		</section>
	)
}

export default LoadingNFTS
