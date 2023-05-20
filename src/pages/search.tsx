import React from 'react'
import Link from 'next/link'
import Bio from 'src/components/Bio'
import NftList from '@/components/NftList'
import Image from 'next/image'
import Coin from 'public/coin.gif'

const Search = () => {

    const learnings = [
		{
			title: 'Library',
			sub: 'Good Reads',
			description:
				"Books that I've read, want to read, and am currently reading. Feel free to follow me on Goodreads!",
			link: 'https://www.goodreads.com/user/show/164155100-william-phan',
		},
	]

	return (
        <div className="flex  items-start justify-center bg-[#F8F8F8] min-h-screen ">


        <div className="flex flex-col justify-end lg:flex lg:flex-row w-full max-w-screen-2xl min-h-screen  lg:relative">
      
            <div className="flex flex-col items-center justify-start lg:w-1/2 inset-0 lg:fixed">
                <Link href={'/'}>
            <svg className='absolute left-5 top-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg></Link>
            <div className=' flex items-center justify-center my-10'> <Image src={Coin} width={200} height={200} alt={''}/></div>
            <input className='rounded-tr-3xl py-12 w-full max-w-[24em] sm:max-w-[30em] placeholder:text-black placeholder:text-center placeholder:font-Mono' placeholder='..TYPE ADDRESS OR NAME..' type="text" style={{ backgroundColor: '#A9BCBF' }} />

<div className='mt-1 rounded-bl-3xl mb-10 py-12 w-full max-w-[24em] sm:max-w-[30em] text-black text-center font-Mono bg-white  uppercase flex  flex-row justify-start space-x-14 relative'>
           
                <div className='text-gray-400 absolute top-9 left-10'>ETH Balance</div>
           
                <div className='flex items-end justify-end absolute top-9 right-10'>
             12.34 Ξ
                </div>
                </div>

            <div className='py-6 mt-14 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative'>
                <div className='text-gray-400 absolute left-10 top-9'>ETH TO USD</div>
                <div className='absolute right-10 top-9'>12.34 Ξ</div>
                </div>
            <div className='mb-10 w-full max-w-[30em] text-black text-center font-Mono uppercase flex  flex-row justify-center relative'>
                <div className='text-gray-400 flex absolute left-10 top-9'>Wallet</div>
                <div className='absolute right-10 top-9'>0x5d4...319a</div>
                </div>
                <div className='flex items-center justify-center lg:hidden mt-20 pb-10'>
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg></div>
            </div>
        
     


            <div className="w-full lg:w-1/2 flex flex-col pt-20 bg-white">

               
            <NftList  sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
               
            <NftList  sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
               
            <NftList  sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
            <NftList sub="title" title="ALBERT FLORES" description="{LDAZ..3A..X4..3A}" link="title" />
    
        
            </div>
        </div>
    </div>
	)
}

export default Search
