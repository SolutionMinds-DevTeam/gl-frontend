// components/ui/Image.js
import React from 'react'
import NextImage from 'next/image'
import logo from '../../../public/assets/logo.svg'
import rupee from '../../../public/assets/Rupee.svg'
import add1 from '../../../public/assets/Add1.svg'
import add2 from '../../../public/assets/Add2.svg'
import add3 from '../../../public/assets/Add3.svg'
import done from '../../../public/assets/Done.svg'
import checkmark from '../../../public/assets/Check Mark.svg'
import star from '../../../public/assets/Hand Drawn Star.svg'
import launchpad from '../../../public/assets/Launchpad.svg'
import email from '../../../public/assets/email.svg'
import instagram from '../../../public/assets/Instagram.svg'
import linkdin from '../../../public/assets/LinkedIn.svg'
import whatsapp from '../../../public/assets/WhatsApp.svg'
import menu from '../../../public/assets/Menu.svg'
import cancel from '../../../public/assets/Cancel.svg'
import login from '../../../public/assets/Login.svg'
import passwordmanager from '../../../public/assets/Password manager,login.svg'
import google from '../../../public/assets/Google.svg'
import signuppageimage from '../../../public/assets/Signup page photo.svg'
import intelligence from '../../../public/assets/Intelligence.svg'
import back from '../../../public/assets/back.jpg'



const imgFile = {
  logo: logo,
  rupee: rupee,
  add1: add1,
  done: done,
  checkmark: checkmark,
  add2: add2,
  add3: add3,
  star: star,
  launchpad: launchpad, 
  email: email,
  instagram: instagram,
  linkdin: linkdin,
  whatsapp: whatsapp,
  menu: menu,
  cancel: cancel,
  login: login,
  passwordmanager: passwordmanager,
  google: google,
  signuppageimage: signuppageimage,
  intelligence: intelligence,
  back: back,

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
