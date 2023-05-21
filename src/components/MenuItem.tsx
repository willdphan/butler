import Link from 'next/link'

type MenuItemProps = {
	title: any
	image: JSX.Element
	subtitle: string
	link: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, image, subtitle, link }) => {
	return (
		<div className="w-1/2 flex flex-col group">
			<div className="pl-10 pt-5 h-[90%] flex items-center group-hover:bg-black group-hover:hidden text-3xl md:text-4xl lg:text-[2.8rem] rounded-tr-3xl mx-1 font-light">
				<Link href={link}>
					<p>{title}</p>
				</Link>
			</div>
			<div className="group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl">
				{image}
			</div>
			<div className="hidden lg:block bg-gray-200 text-lg h-[10%] flex pl-10 group-hover:bg-black group-hover:text-white flex justify-center items-center py-1 mx-1 mb-1 transition-all">
				{subtitle}
			</div>
		</div>
	)
}

export default MenuItem
