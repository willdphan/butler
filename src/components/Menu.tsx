import MenuItem from 'src/components/MenuItem'

const Menu = () => {
	return (
		<div className="flex flex-col justify-center lg:flex-row w-full lg:min-h-[45vh] text-black text-4xl font-Mono uppercase  max-w-screen-2xl	">
			<div className="flex flex-row min-h-[22.5vh] w-full ">
				<MenuItem />
				<MenuItem />
			</div>
			<div className="flex flex-row min-h-[22.5vh] w-full">
				<MenuItem />
				<MenuItem />
			</div>
		</div>
	)
}

export default Menu
