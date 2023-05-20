import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NftCard from 'src/components/NftCard'
import Image from 'next/image'
import Coin from 'public/coin.gif'

const Search = () => {
	// we get array of objects
	const [nfts, setNfts] = useState([])

	const [address, setAddress] = useState('')

	const handleInputChange = e => {
		setAddress(e.target.value)
	}

	const fetchNfts = async () => {
		try {
			// fetch
			const res = await fetch('/api/nftsAxios')
			// turn json to reponse
			const data = await res.json()
			// set the new data
			setNfts(data)
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchNfts()
	}, [])

	return (
		<div className="flex  items-start justify-center min-h-screen bg-white ">
			<div className="flex flex-col justify-end lg:flex lg:flex-row w-full max-w-screen-2xl min-h-screen  lg:relative">
				<div className="bg-[#F8F8F8]  flex flex-col items-center justify-start lg:w-1/2 inset-0 lg:fixed lg:pt-14">
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
						className="rounded-tr-3xl py-12 w-full max-w-[24em] sm:max-w-[30em] placeholder:text-black placeholder:text-center placeholder:font-Mono"
						placeholder="..TYPE ADDRESS OR NAME.."
						type="text"
						value={address}
						style={{ backgroundColor: '#A9BCBF' }}
					/>

					<div className="mt-1 rounded-bl-3xl mb-10 py-12 w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-white  uppercase flex  flex-row justify-start space-x-14 relative">
						<div className="text-gray-400 absolute top-9 left-10">ETH Balance</div>

						<div className="flex items-end justify-end absolute top-9 right-10">12.34 Ξ</div>
					</div>

					<div className="py-6 mt-14 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
						<div className="text-gray-400 absolute left-10 top-9">ETH TO USD</div>
						<div className="absolute right-10 top-9">12.34 Ξ</div>
					</div>
					<div className="mb-10 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative">
						<div className="text-gray-400 flex absolute left-10 top-9">Wallet</div>
						<div className="absolute right-10 top-9">0x5d4...319a</div>
					</div>
					<div className="flex items-center justify-center lg:hidden mt-20 pb-10">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
							<path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
						</svg>
					</div>
				</div>

				<div className="w-full lg:w-1/2 flex flex-col pt-20 bg-white">
					{nfts.map(nft => (
						<div key={nft.nft_id}>
							<NftCard
								image={nft.image_url}
								title={nft.name}
								id={nft.token_id}
								value={
									nft.collection.floor_prices.length > 1
										? nft.collection.floor_prices[1].value * 0.000000000000000001
										: ''
								}
								last={
									nft.last_sale && nft.last_sale.total_price
										? nft.last_sale.total_price * 0.000000000000000001
										: ''
								}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Search
