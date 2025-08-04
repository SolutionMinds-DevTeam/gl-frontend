'use client'
import React, { useState } from 'react'
import { Image, imgFile } from '../ui/Image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion' // optional if using framer-motion

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="w-full relative">
      {/* Top bar */}
      <div className="w-full h-[80px] px-5 lg:px-20 flex justify-between items-center">
        <Image src={imgFile.logo} w="w-[50px] lg:w-[70px]" />

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-10 text-[#004571]">
          <Link href="/" className="hover:border-b-2 border-[#004571] pb-1 transition duration-300">Home</Link>
          <Link href="/price" className="hover:border-b-2 border-[#004571] pb-1 transition duration-300">Pricing</Link>
          <Link href="/about" className="hover:border-b-2 border-[#004571] pb-1 transition duration-300">Contact</Link>
          <Link href="/about" className="hover:border-b-2 border-[#004571] pb-1 transition duration-300">About</Link>
          <Link href="/login" className="text-[#FF7802] hover:border-b-2 border-[#FF7802] pb-1 transition duration-300">Login</Link>
        </div>

        {/* Menu icon (mobile) */}
        <div className="lg:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <Image src={menuOpen ? imgFile.cancel : imgFile.menu} w="w-8" h="h-8" />
        </div>
      </div>

      {/* Mobile menu overlay with animation */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 
        flex flex-col justify-center items-center text-[#004571] text-xl font-medium gap-6 
        transition-all duration-500 ease-in-out
        ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>

        <h2 className="text-sm mb-2 text-gray-500">Welcome!</h2>
        <h1 className="text-2xl font-bold tracking-wide">GROWW LIBRARY</h1>

        <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">Pricing</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[#FF7802] drop-shadow-md">Login</Link>
      </div>
    </div>
  )
}

export default Header
