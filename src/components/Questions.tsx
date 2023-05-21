const Questions = () => {
	return (
		<>
			<p className="flex items-center text-sm text-gray-400 font-Mono uppercase">
				Need Help
				<button
					onMouseOver={() => {
						document.getElementById('popover-description').style.display = 'block'
					}}
					onMouseOut={() => {
						document.getElementById('popover-description').style.display = 'none'
					}}
					type="button"
				>
					<svg
						className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clipRule="evenodd"
						></path>
					</svg>
					<span className="sr-only">Show information</span>
				</button>
			</p>
			<div
				id="popover-description"
				role="tooltip"
				className="absolute bottom-7 z-10 inline-block text-sm transition-all bg-white  w-full max-w-[30em] "
				style={{ display: 'none' }}
			>
				<div
					onMouseOver={() => {
						document.getElementById('popover-description').style.display = 'block'
					}}
					className="p-10 space-y-2 font-Mono space-y-5 "
				>
					<h1 className="text-black uppercase">How does it work?</h1>
					<p className="text-gray-400  uppercase ">
						Simply paste in a wallet address into the input field to view wallet NFTs.
					</p>
					<h1 className="text-black uppercase ">Need a sample?</h1>
					<p className="text-gray-400 ">HERE, TRY THIS: 0x54DCd05271B4DF974dEd75970b903A13BbEb319a</p>
				</div>
				<div data-popper-arrow></div>
			</div>
		</>
	)
}

export default Questions
