// components/ui/Image.js
import React from 'react'
import NextImage from 'next/image'
import logo from '../../../public/assets/logo.svg'
import rupee from '../../../public/assets/Rupee.svg'
import add1 from '../../../public/assets/Add1.svg'
import add2 from '../../../public/assets/Add2.svg'
import add3 from '../../../public/assets/Add3.svg'
import done from '../../../public/assets/Done.svg'
import checkMark from '../../../public/assets/Check Mark.svg'
import star from '../../../public/assets/Hand Drawn Star.svg'
import launchpad from '../../../public/assets/Launchpad.svg'

const imgFile = {
  logo: logo,
  rupee: rupee,
  add1: add1,
  done: done,
  checkMark: checkMark,
  add2: add2,
  add3: add3,
  star: star,
  launchpad: launchpad, 
}

const Image = ({ src, w = 'w-8', h = 'h-8', className = '', alt = '', ...props }) => {
  return (
      <NextImage
        src={src}
        alt={alt}
        className={`object-contain ${w} ${h} ${className}`.trim()}
        {...props}
      />
  )
}

export { Image, imgFile }
