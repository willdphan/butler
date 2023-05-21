import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NftCard from 'src/components/NftCard'
import Image from 'next/image'
import Coin from 'public/images/coin.gif'
import { motion } from 'framer-motion'
import LoadingNFTS from 'src/components/LoadingNfts'
import NFTModal from '@/components/NftModal'
import Questions from '@/components/Questions'

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
				obj.collection.floor_prices[0] || obj.collection.floor_prices[2] || obj.collection.floor_prices[1]

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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="relative bg-[#F8F8F8]  flex flex-col items-center justify-start lg:w-1/2 inset-0 lg:fixed lg:pt-14"
				>
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
						<div className="text-gray-400 absolute top-9 left-10">Portfolio Value</div>

						<div className="flex items-end justify-end absolute top-9 right-10">
							{(sumFloorPrices(nfts) * 0.000000000000000001).toFixed(3)} Ξ
						</div>
					</div>
					{/* QUESTIONS? */}
					{/* <Questions /> */}

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
				</motion.div>
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
											? nft.collection.floor_prices[0].value * 0.000000000000000001
											: 0
											? nft.collection.floor_prices[2].value * 0.000000000000000001
											: 0
											? nft.collection.floor_prices[1].value * 0.000000000000000001
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
						<div className="space-y-1">
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
