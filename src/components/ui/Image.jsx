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
import landing from '../../../public/assets/Landing.svg'
import landingphoneview from '../../../public/assets/LandingPhoneview.svg'
import keyFeature from '../../../public/assets/KeyFeature.svg'
import launchpadyellow from '../../../public/assets/LaunchpadYellow.svg'
import piechart from '../../../public/assets/PieChart.svg'
import secure from '../../../public/assets/Secure.svg'
import sportStopwatch from '../../../public/assets/SportStopwatch.svg'
import doublecot from '../../../public/assets/DoubleCot.svg'
import ellipse from '../../../public/assets/Ellipse.svg'



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
  landing: landing,
  landingphoneview: landingphoneview,
  keyFeature: keyFeature,
  launchpadyellow: launchpadyellow,
  piechart: piechart,
  secure: secure,
  sportStopwatch: sportStopwatch,
  doublecot: doublecot,
  ellipse: ellipse,

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
