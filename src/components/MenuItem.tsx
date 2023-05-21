import Link from 'next/link'
import { motion } from 'framer-motion'
import { MotionConfig } from 'framer-motion'

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
				<motion.div
					transition={{ duration: 2 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					{title}
				</motion.div>
			</div>

			<div className="group-hover:bg-black group-hover:h-[90%] mx-1 mt-1 flex items-center justify-center rounded-tr-3xl">
				<Link href={link}>{image}</Link>
			</div>

			<div className="pl-10  bg-gray-200 text-lg h-[10%] flex lg:pl-10 group-hover:bg-black group-hover:text-white flex justify-start items-center py-1 mx-1 mb-1 transition-all">
				{subtitle}
			</div>
		</div>
	)
}

export default MenuItem

// hidden lg:block
