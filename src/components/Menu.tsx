import MenuItem from 'src/components/MenuItem'

const Menu = () => {
	return (
		<div className="flex flex-col justify-center lg:flex-row w-full lg:min-h-[45vh] text-black text-4xl font-Mono uppercase  max-w-screen-2xl	">
			<div className="flex flex-row min-h-[22.5vh] w-full ">
				<MenuItem
					link="https://twitter.com/willdphan"
					title="Bird"
					subtitle="Twitter"
					image={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="84" height="84">
							<path
								d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"
								fill="rgba(255,255,255,1)"
							></path>
						</svg>
					}
				/>
				<MenuItem
					link="https://twitter.com/willdphan"
					title="Code"
					subtitle="Github"
					image={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="84" height="84">
							<path
								d="M23 11.9998L15.9289 19.0708L14.5147 17.6566L20.1716 11.9998L14.5147 6.34292L15.9289 4.92871L23 11.9998ZM3.82843 11.9998L9.48528 17.6566L8.07107 19.0708L1 11.9998L8.07107 4.92871L9.48528 6.34292L3.82843 11.9998Z"
								fill="rgba(255,255,255,1)"
							></path>
						</svg>
					}
				/>
			</div>
			<div className="flex flex-row min-h-[22.5vh] w-full">
				<MenuItem
					link="https://twitter.com/willdphan"
					title="API"
					subtitle="Simple Hash"
					image={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="84" height="84">
							<path
								d="M9 12C10.1046 12 11 11.1046 11 10 11 8.89543 10.1046 8 9 8 7.89543 8 7 8.89543 7 10 7 11.1046 7.89543 12 9 12ZM12 1 21.5 6.5V17.5L12 23 2.5 17.5V6.5L12 1ZM4.5 7.65311V16.3469L6.8724 17.7204 14.9446 11.8008 19.5 14.534V7.65311L12 3.311 4.5 7.65311Z"
								fill="rgba(255,255,255,1)"
							></path>
						</svg>
					}
				/>
				<MenuItem
					link="https://twitter.com/willdphan"
					title="HMU"
					subtitle="Mail"
					image={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="84" height="84">
							<path
								d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
								fill="rgba(255,255,255,1)"
							></path>
						</svg>
					}
				/>
			</div>
		</div>
	)
}

export default Menu
