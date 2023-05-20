import Link from 'next/link'
import { FC } from 'react'
import Menu from 'src/components/Menu'

const Home: FC = () => {
	return (
		<div className="flex flex-col items-center  bg-white w-full min-h-screen ">
	<div className='max-h-[55vh] flex flex-col lg:flex-row pt-28 w-full justify-center ' >
		
			<h3 className='hidden lg:block text-black uppercase font-Mono xl:mr-36 pt-2 text-lg'>William Phan</h3>
			<div>
				<h1 className='mb-64 mt-28 ml-0 lg:mt-0 pl-6 lg:pl-10 justify-center text-2xl lg:text-5xl text-gray-400 bg-blue font-Mono uppercase max-w-[22em] lg:max-w-[17em] mr-5 leading-relaxed sm:leading-loose transition-all' > 
				Choose the most suitable blockchain for your needs. Just connect wallet for creation.<Link href="/search" className='text-black hover:bg-black hover:text-white'><span className='lg:hidden'><br /></span>Enter Here.</Link> </h1>
				{/* <div className='space-x-10'>
				<input className="mb-64 mt-10 bg-gray-200 py-5 pl-4 pr-28 placeholder:font-IBM" type="text" placeholder="ENTER ADDRESS..." />
				<button className='bg-black py-4 px-10 text-lg uppercase'>
					Enter
				</button>
				</div> */}
				</div>
				</div>
					{/* Use props below */}
				<Menu/>				
				</div>
			
	)
}

export default Home
