import Link from 'next/link'

const Enter = () => {
	return (
		<div className="max-h-[55vh] absolute flex flex-col lg:flex-row w-full justify-center ">
			<h3 className="w-8/12 md:w-5/12  bg-[#A9BCBF] lg:block text-black uppercase font-Mono xl:mr-36   py-1 pr-5 flex items-center justify-center text-sm lg:text-lg text-end hover:bg-black hover:text-white">
				<Link href={'/search'}>
					<span>Enter</span>
				</Link>
			</h3>
			<div className="w-4/12 md:w-7/12"></div>
		</div>
	)
}

export default Enter
