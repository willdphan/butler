import Link from 'next/link'
import Image from 'next/image'
import Coin from 'public/coin.gif'
import { useState } from 'react'
import { convertAddressFormat } from 'src/pages/search'
import { motion } from 'framer-motion'

const NFTModal = ({ nft, onClose }) => {
	const [address, setAddress] = useState('')

	const formatText = text => {
		if (text && text.length > 4) {
			return text.slice(0, 4) + '...'
		}
		return text
	}

	// Token ID
	// Address
	// Network
	// Description?

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
			className="pt-5 bg-[#F8F8F8] flex flex-col items-center justify-start w-full fixed lg:w-1/2 inset-0 lg:fixed lg:pt-10"
		>
			<svg
				onClick={onClose}
				className="absolute left-5 top-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="32"
				height="32"
			>
				<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
			</svg>

			<div className=" flex items-center justify-center my-10">
				{' '}
				<img src={nft.image_url} width={200} height={200} alt={''} />
			</div>
			<div className="text-black font-Mono uppercase mb-5">{nft.name ? nft.name : 'N/A'}</div>
			<div className="text-gray-400 font-Mono uppercase">{nft.collection.name}</div>
			<div className="mt-1 rounded-tr-3xl py-8 mt-14 w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-white  uppercase flex  flex-row justify-center  space-x-14 relative">
				<div className="text-gray-400">Floor Price</div>
				<div className="text-black">
					{nft.collection.floor_prices.length > 1
						? nft.collection.floor_prices[1].value * 0.000000000000000001
						: nft.collection.floor_prices.length > 2
						? nft.collection.floor_prices[2].value * 0.000000000000000001
						: nft.collection.floor_prices.length > 0
						? nft.collection.floor_prices[0].value * 0.000000000000000001
						: 0}{' '}
					Ξ
				</div>
			</div>
			{nft?.external_url ? (
				<Link
					href={nft.collection.marketplace_pages[0].nft_url}
					className="mt-1 rounded-bl-3xl py-8  w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-[#F8F8F8] border-[1px] border-black uppercase flex  flex-row justify-center space-x-14 relative hover:bg-black hover:text-white "
				>
					<div className="text-center ">Check out NFT page</div>
				</Link>
			) : (
				<Link
					href={nft.collection.marketplace_pages[0].collection_url}
					className="mt-1 rounded-bl-3xl py-8  w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-[#F8F8F8] border-[1px] border-black uppercase flex flex-row justify-center space-x-14 relative hover:bg-black hover:text-white"
				>
					<div className="text-center  ">Check out collection</div>
				</Link>
			)}

			<div className="py-6 mt-7 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
				<div className="text-gray-400 absolute left-10 top-9">Token ID</div>
				<div className="absolute right-10 top-9">{formatText(nft.token_id)}</div>
			</div>
			<div className="py-6  w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
				<div className="text-gray-400 absolute left-10 top-9">Contract Address</div>
				<div className="absolute right-10 top-9">{convertAddressFormat(nft.contract_address)}</div>
			</div>
			<div className="mb-10 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
				<div className="text-gray-400 flex absolute left-10 top-9">Chain</div>
				<div className="absolute right-10 top-9">{nft.chain}</div>
			</div>
		</motion.div>
	)
}

export default NFTModal
