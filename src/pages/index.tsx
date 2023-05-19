import { FC } from 'react'
import Menu from 'src/components/Menu'
import Profile from 'src/components/Profile'
import Learnings from 'src/components/Learnings'
import Projects from '@/components/Experiments'
import Crafts from 'src/components/Crafts'
import Bio from 'src/components/Bio'

const Home: FC = () => {
	return (
		<div className="flex flex-col items-center  bg-white w-full min-h-screen">
	<div className='max-h-[55vh] flex flex-col pl-10 lg:pl-0 lg:flex-row pt-28 w-full justify-center ' >
		
			<h3 className='lg:block text-black uppercase font-IBM  xl:mr-44 pt-2 text-lg'>William Phan</h3>
			<div>
				<h1 className='mb-64 lg:pl-10 justify-center text-3xl lg:text-5xl text-gray-300 bg-blue font-IBM uppercase max-w-[17em]  mr-24 leading-relaxed'> 
				Choose the most suitable blockchain for your needs. Just connect wallet for creation.<a className='text-black hover:bg-black hover:text-white transition-all'>Enter Here.</a> </h1>
				{/* <div className='space-x-10'>
				<input className="mb-64 mt-10 bg-gray-200 py-5 pl-4 pr-28 placeholder:font-IBM" type="text" placeholder="ENTER ADDRESS..." />
				<button className='bg-black py-4 px-10 text-lg uppercase'>
					Enter
				</button>
				</div> */}
				</div>
				</div>


				<div className='flex flex-col lg:flex-row w-full lg:min-h-[45vh] text-black text-4xl font-IBM uppercase max-w-[100vw]'>
					
					<div className='flex flex-row min-h-[22.5vh] w-full'>
				<div className="w-1/2 flex flex-col group ">
  <h1 className="pl-14 h-[90%] flex items-center group-hover:bg-black text-3xl  transition-all rounded-tr-3xl mx-1">Hi</h1>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-14 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all">Hello</p>
</div>
<div className="w-1/2  flex flex-col group ">
<h1 className="pl-14 h-[90%] flex items-center group-hover:bg-black text-3xl  transition-all rounded-tr-3xl mx-1">Bird App</h1>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-14 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all">Twitter</p>
</div>
</div>
					<div className='flex flex-row min-h-[22.5vh] w-full'>
				<div className="w-1/2  flex flex-col group ">
				<h1 className="pl-14 h-[90%] flex items-center group-hover:bg-black text-3xl  transition-all rounded-tr-3xl mx-1">Connect</h1>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-14 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all">Email</p>
</div>
<div className="w-1/2 flex flex-col group ">
<h1 className="pl-14 h-[90%] flex items-center group-hover:bg-black text-3xl  transition-all rounded-tr-3xl mx-1">Code</h1>
  <p className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-14 group-hover:bg-black group-hover:text-white items-center pt-1 mx-1 mb-1 transition-all">Github</p>
</div>
</div>

			
					
				</div>
			</div>
			
	)
}

export default Home
