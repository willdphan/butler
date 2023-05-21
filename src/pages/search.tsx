import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NftCard from 'src/components/NftCard'
import Image from 'next/image'
import Coin from 'public/coin.gif'
import { motion } from 'framer-motion'
import LoadingNFTS from 'src/components/LoadingNfts'
import NFTModal from '@/components/NftModal'

export function convertAddressFormat(address) {
	// Check if the input address is valid
	if (!address || typeof address !== 'string' || address.length < 2) {
		return ''
	}

	// Extract the first five and last four characters of the address
	const prefix = address.substring(0, 5).toUpperCase()
	const suffix = address.substring(address.length - 4).toUpperCase()

	// Combine the formatted prefix, ellipsis, and suffix
	const formattedAddress = `${prefix}...${suffix}`

	return formattedAddress
}

const Search = () => {
	// we get array of objects
	const [nfts, setNfts] = useState([])

	const [address, setAddress] = useState('')

	const [selectedNFT, setSelectedNFT] = useState(null)

	const handleNFTOpen = nft => {
		setSelectedNFT(nft)
	}

	const handleNFTClose = () => {
		setSelectedNFT(null)
	}

	// Function to convert Ethereum address to the desired format

	const [ethToUsd, setEthToUsd] = useState(null)

	const fetchEthToUsd = async () => {
		try {
			const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
			const data = await response.json()
			setEthToUsd(data.ethereum.usd)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchEthToUsd()
	}, [])

	const handleInputChange = e => {
		setAddress(e.target.value)
		fetchNfts(e.target.value)
	}

	const fetchNfts = async address => {
		try {
			// fetch
			const res = await fetch(`/api/nftsAxios?address=${address}`)
			// turn json to reponse
			const data = await res.json()
			// set the new data
			setNfts(data)
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	function sumFloorPrices(response) {
		let total = 0

		// Iterate through the objects in the response
		for (const obj of response) {
			// Retrieve the first object in the floor_prices array
			const floorPrice =
				obj.collection.floor_prices[1] || obj.collection.floor_prices[2] || obj.collection.floor_prices[0]

			if (floorPrice) {
				// Add the value to the total
				total += floorPrice.value
			}
		}
		console.log(total)
		// Return the total
		return total
	}

	return (
		<div className="flex  items-start justify-center min-h-screen bg-white ">
			<div className="flex flex-col justify-end lg:flex lg:flex-row w-full max-w-screen-2xl min-h-screen  lg:relative">
				<div className="relative bg-[#F8F8F8]  flex flex-col items-center justify-start lg:w-1/2 inset-0 lg:fixed lg:pt-14">
					<Link href={'/'}>
						<svg
							className="absolute left-5 top-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="32"
							height="32"
						>
							<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
						</svg>
					</Link>
					<div className=" flex items-center justify-center my-10">
						{' '}
						<Image src={Coin} width={200} height={200} alt={''} />
					</div>
					<input
						className="rounded-tr-3xl py-12 w-full max-w-[24em] sm:max-w-[30em] text-black text-center placeholder:text-black placeholder:text-center placeholder:font-Mono"
						placeholder="..TYPE ADDRESS OR NAME.."
						type="text"
						value={address}
						onChange={handleInputChange} // Add this line
						style={{ backgroundColor: '#A9BCBF' }}
					/>

					<div className="mt-1 rounded-bl-3xl mb-5 py-12 w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-white  uppercase flex  flex-row justify-start space-x-14 relative">
						<div className="text-gray-400 absolute top-9 left-10">ETH Balance</div>

						<div className="flex items-end justify-end absolute top-9 right-10">
							{(sumFloorPrices(nfts) * 0.000000000000000001).toFixed(3)} Ξ
						</div>
					</div>
					{/* QUESTIONS? */}
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
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
									clip-rule="evenodd"
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

					{/* SECOND HALF OF DATA */}
					<div className="py-6 mt-14 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
						<div className="text-gray-400 absolute left-10 top-9">ETH TO USD</div>
						<div className="flex items-end justify-end absolute top-9 right-10">
							{ethToUsd !== null
								? `${(sumFloorPrices(nfts) * 0.000000000000000001 * ethToUsd).toFixed(2)} USD`
								: 'Loading...'}
						</div>
					</div>
					<div className="mb-10 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
						<div className="text-gray-400 flex absolute left-10 top-9">Current Wallet</div>
						<div className="absolute right-10 top-9">
							{address ? convertAddressFormat(address) : '0x000...0000'}
						</div>
					</div>
					<div className="flex items-center justify-center lg:hidden mt-20 pb-10">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
							<path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
						</svg>
					</div>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col pt-20 bg-white">
					{nfts.length > 0 ? (
						nfts.map(nft => (
							<div onClick={() => handleNFTOpen(nft)} key={nft.nft_id}>
								<NftCard
									image={nft.image_url}
									title={nft.name}
									id={nft.token_id}
									value={
										nft.collection.floor_prices.length > 1
											? nft.collection.floor_prices[1].value * 0.000000000000000001
											: nft.collection.floor_prices.length > 2
											? nft.collection.floor_prices[2].value * 0.000000000000000001
											: nft.collection.floor_prices.length > 0
											? nft.collection.floor_prices[0].value * 0.000000000000000001
											: 0
									}
									last={
										nft.last_sale && nft.last_sale.total_price
											? nft.last_sale.total_price * 0.000000000000000001
											: ''
									}
								/>
							</div>
						))
					) : (
						<div className="space-y-2">
							<LoadingNFTS />
							<LoadingNFTS />
							<LoadingNFTS />
							<LoadingNFTS />
							<LoadingNFTS />
							<LoadingNFTS />
						</div>
					)}

					{selectedNFT && <NFTModal nft={selectedNFT} onClose={handleNFTClose} />}
				</div>
			</div>
		</div>
	)
}

export default Search

{
	/* QUESTION MARK SNIPPET */
}
//     <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//     Need Help
//     <button
//         onMouseOver={() => {
//             document.getElementById('popover-description').style.display = 'block'
//         }}
//         onMouseOut={() => {
//             document.getElementById('popover-description').style.display = 'none'
//         }}
//         type="button"
//     >
//         <svg
//             className="w-4 h-4 ml-1 text-gray-400 hover:text-gray-500"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 fill-rule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                 clip-rule="evenodd"
//             ></path>
//         </svg>
//         <span className="sr-only">Show information</span>
//     </button>
// </p>
// <div
//     id="popover-description"
//     role="tooltip"
//     className="absolute bottom-20 z-10 inline-block text-sm transition-opacity bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-[30em] "
//     style={{ display: 'none' }}
// >
//     <div
//         onMouseOver={() => {
//             document.getElementById('popover-description').style.display = 'block'
//         }}
//         className="p-3 space-y-2 font-Mono uppercase"
//     >
//         <h1 className="text-black">How does it work?</h1>
//         <p className="text-gray-400 mb-5">
//             Simply paste in a wallet address into the input field to view wallet NFTs.
//         </p>
//         <h1 className="text-black">Need a sample?</h1>
//         <p className="text-gray-400">Here, try this: 0x54DCd05271B4DF974dEd75970b903A13BbEb319a</p>
//     </div>
//     <div data-popper-arrow></div>
// </div>
