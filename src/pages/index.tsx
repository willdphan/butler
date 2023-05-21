import Link from 'next/link'
import { FC } from 'react'
import Menu from 'src/components/Menu'
import Enter from 'src/components/Enter'

const Home: FC = () => {
	return (
		<div className="flex flex-col items-center  bg-white w-full min-h-screen ">
			<Enter />
			<div className="max-h-[55vh] flex flex-col lg:flex-row pt-36 w-full justify-center ">
				<h3 className="hidden lg:block text-black uppercase font-Mono xl:mr-36 pt-2 text-lg">William Phan</h3>
				<div>
					<h1
						className="mb-64 mt-28 mx-5 lg:mt-0  pl-6 lg:pl-10 justify-center text-2xl md:text-4xl lg:text-[2.8rem] text-gray-400 bg-blue font-Mono uppercase max-w-[22em] lg:max-w-[17em] mr-5  transition-all"
						style={{ lineHeight: '1.3' }}
					>
						Uncover your NFT assets and their stories. Type in your wallet. Start exploring now.
					</h1>
				</div>
			</div>
			{/* Use props below */}
			<Menu />
		</div>
	)
}

export default Home
