'use-client'
import React from 'react'
import { Image, imgFile } from '../ui/Image'
import Link from 'next/link'

function Header() {
  return (
    <div>
        <div className="w-full h-[80px] border- border-red-600  px-20 flex justify-between items-end ">
          <Image src={imgFile.logo} h='h-[70px]' w='w-[70px]' />
          <div className="flex gap-10   ">
            <Link href='/'>Home</Link>
            <Link href='/about'>Pricing</Link>
            <Link href='/about'>Contact</Link>
            <Link href='/about'>About</Link>
            <Link href='/about' className='text-[#FF7802]'>Login</Link>
          </div>
        </div>      
    </div>
  )
}

export default Header