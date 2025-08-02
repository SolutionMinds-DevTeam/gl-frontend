// components/ui/Image.js
import React from 'react'
import NextImage from 'next/image'
import logo from '../../../public/assets/logo.svg'
import checkmark from '../../../public/assets/checkmark.svg'
import email from '../../../public/assets/email.svg'
import instagram from '../../../public/assets/Instagram.svg'
import linkdin from '../../../public/assets/LinkedIn.svg'
import whatsapp from '../../../public/assets/WhatsApp.svg'
import menu from '../../../public/assets/Menu.svg'
import cancel from '../../../public/assets/Cancel.svg'



const imgFile = {
  logo: logo,
  checkmark: checkmark,
  email: email,
  instagram: instagram,
  linkdin: linkdin,
  whatsapp: whatsapp,
  menu: menu,
  cancel: cancel

}

const Image = ({ src, w = 'w-8', h = 'h-auto', className = '', alt = '', ...props }) => {
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
