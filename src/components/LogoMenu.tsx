import Image from 'next/image'

const LogoMenu = () => {
	return (
		<div className="mx-auto">
			<div className="grid grid-cols-2 gap-0.5 md:grid-cols-6">
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/2a4d2cdd794587314ad2034778712608ac32e37c/79f3b/images/logos/8.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/aae3d6dfaee9138c485f5305dd33b7f80379edb4/64dd2/images/logos/2.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/4dc5df63255f9f0c1f54c804dd3149cf11308507/b7a70/images/logos/3.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/be7130b04bb6b932ed9222877a5e9146d80c0eba/6511d/images/logos/4.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/456c999508e76cd199714cfa4fad3826ebb02216/9147b/images/logos/5.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<div className="flex justify-center col-span-1 px-8">
					<Image
						src="https://d33wubrfki0l68.cloudfront.net/b5d09ea7476a226d10dd1235e071288761e51da7/e68ac/images/logos/6.svg"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default LogoMenu
