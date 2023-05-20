import React from 'react'
import Image from 'next/image'
import test from 'public/images/iphone-se-2020-2560x1440-dark-8k-22550.jpg'
import test1 from 'public/images/wallpaper.jpg'
import test2 from 'public/images/apple-macbook-pro-2021-2560x1440-abstract-colorful-apple-october-2021-23772.jpg'
import Link from 'next/link'
import logo from 'public/logo.png'

const Learnings = ({sub, title, description,  link}) => {
	const learnings = [
		{
			title: 'Library',
			sub: 'Good Reads',
			description:
				"Books that I've read, want to read, and am currently reading. Feel free to follow me on Goodreads!",
			link: 'https://www.goodreads.com/user/show/164155100-william-phan',
		},
	]

	return (
		<section id="learnings" className='w-full px-1 flex '>
			<div className=" columns-1 my-2 w-full flex items-center justify-center">
			
					<div
						className="w-full max-w-[24em]  sm:max-w-[30em] bg-white transform transition duration-300 sm:hover:scale-[1.01] sm:hover:bg-[#F8F8F8] text-[#9B9B9B] hover:text-white mb-2 font-Mono uppercase text-lg py-5"
					>
						<div className="pl-10  space-y-2 flex space-x-10">
                          <Image width={70} height={70} src={logo} alt={''}/>
						<div >
							<h1 className="text-black">{title}</h1>
							<p className="text-gray-400">{description}</p>
							</div>
						</div>
					</div>
			
			</div>
		</section>
	)
}

export default Learnings