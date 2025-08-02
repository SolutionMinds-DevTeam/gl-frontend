// components/ui/Image.js
import React from 'react'
import NextImage from 'next/image'
import logo from '../../../public/assets/logo.svg'

const imgFile = {
  logo: logo
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
