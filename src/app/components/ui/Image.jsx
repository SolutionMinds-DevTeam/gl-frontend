import React from 'react'




const imgFile = {
   

}



const Image = ({src,w='w-8', h='h-8',className=''}) => {
  return (
    <img src={src} className={`${h} ${w} ${className}`.trim()} />
  )
}


export { Image, imgFile }