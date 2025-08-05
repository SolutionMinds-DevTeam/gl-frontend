import React from 'react'
import { Image, imgFile } from '../ui/Image'
import { ColContainer, Container, LayoutContainer } from '../ui/Container'


function Footer() {
  return (
    <ColContainer className='px-0 lg:!px-[10%] lg:py-12 bg-[#F8FAFC] '>
      <LayoutContainer
        classNameLeft='lg:!w-[60%]'
        classNameRight='lg:!w-[40%]'
        leftChild={
          <ColContainer>
            <div className='items-center flex w-full'>
              <Image src={imgFile.logo} h='h-[70px]' w='w-[70px]' />
              <h1 className='text-4xl lg:text-5xl font-bold'>Groww-Library</h1>
            </div>

            <p className='py-1 px-5 font-light text-[12px]'>Built for modern private libraries, GrowwLibrary helps you manage members, shifts, and revenue with ease. It supports biometric or QR-based attendance, detailed reporting, and expense tracking — all in one powerful dashboard.</p>
          </ColContainer>
        }

        rightChild={
          <div className='flex w-full px-4 justify-between'>
            <ColContainer>
              <h3 className='pl-10 font-bold'>Company Info</h3>
              <ColContainer className='gap-1.5'>
                <Container className='gap-1.5'>
                  <Image src={imgFile.checkmark} w='w-6 h-6' />
                  <p className='text-xs lg:text-md'>About-us</p>
                </Container>
                <Container className='gap-1.5'>
                  <Image src={imgFile.checkmark} w='w-6 h-6' />
                  <p className='text-xs lg:text-md'>Terms & Condition</p>
                </Container>
                <Container className='gap-1.5'>
                  <Image src={imgFile.checkmark} w='w-6 h-6' />
                  <p className='text-xs lg:text-md'>Privacy Policy</p>
                </Container>
                <Container className='gap-1.5'>
                  <Image src={imgFile.checkmark} w='w-6 h-6' />
                  <p className='text-xs lg:text-md'>Careers (optional)</p>
                </Container>
              </ColContainer>
            </ColContainer>
            <ColContainer className='w-auto text-center'>
              <h1 className='font-bold'>Contact-us</h1>
              <ColContainer className="gap-1.5 items-center">
                {/* Email */}
                <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                  <Image src={imgFile.email} w="w-10" h="h-10" />
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Image src={imgFile.instagram} w="w-10" h="h-10" />
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <Image src={imgFile.whatsapp} w="w-10" h="h-10" />
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                </a>
              </ColContainer>
            </ColContainer>
          </div>
        }

      />

      <hr />
      <span className='text-[13px] text-center'>@Copyright groww liabrary</span>
    </ColContainer>
  )
}

export default Footer