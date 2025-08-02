'use-client'
import React from 'react'
import { Image, imgFile } from '../ui/Image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className="w-full h-[80px] border- border-red-600  px-20 flex justify-between items-end ">
        <Image src={imgFile.logo} h='h-[70px]' w='w-[70px]' />
        <div className="flex gap-10">
          <Link href="/" className="hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">Home</Link>
          <Link href="/about" className="hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">Pricing</Link>
          <Link href="/about" className="hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">Contact</Link>
          <Link href="/about" className="hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">About</Link>
          <Link href="/about" className="text-[#FF7802] hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">Login</Link>
        </div>

      </div>
    </div>
  )
}

export default Header