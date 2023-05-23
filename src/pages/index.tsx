import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NftCard from 'src/components/NftCard'
import Image from 'next/image'
import Coin from 'public/images/coin.gif'
import { motion } from 'framer-motion'
import LoadingNFTS from 'src/components/LoadingNfts'
import NFTModal from '@/components/NftModal'
import Questions from '@/components/Questions'
import Noise from 'public/noise.gif'

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
		<div className="flex  items-start justify-center min-h-screen bg-[#333333] px-14 ">
			<div className="flex flex-col justify-end lg:flex lg:flex-row w-full max-w-screen-2xl min-h-screen  lg:relative ">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="relative bg-[rgba(51, 51, 51, 0.5)]  flex flex-col items-start justify-center lg:w-8/12 inset-0 lg:fixed lg:pt-14 z-10 space-y-10 ml-14 px-14"
				>
					<h1 className="text-9xl max-w-[30em]  ">Power Government AI With Your Data</h1>
					<h3 className="text-xl max-w-[50em] pb-24">
						Make the best models with the best data. Scale Data Engine leverages your enterprise data, and
						with Scale Generative AI Platform, safely unlocks the value of AI.
					</h3>
				</motion.div>
				<div className=" flex flex-col mt-[5em] w-[50em] bg-[#333333] ">
					<Image src={Noise} alt="Noise" />
				</div>
			</div>
		</div>
	)
}

export default Search
