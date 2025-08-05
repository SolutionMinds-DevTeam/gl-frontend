import { ColContainer, Container } from '@/components/ui/Container'
import { Image, imgFile } from '@/components/ui/Image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <ColContainer className='flex-row justify-center pt-10'>

      <Container className='bg-[#FFFEFE] !w-[80%] sm:w-[70%] rounded-2xl items-center justify-center gap-6'>
        
        <ColContainer className='md:!w-[50%] w-full'>
          <Container className='gap-3 items-center'>
            <Image src={imgFile.logo} h='h-12' w='w-12' />
            <h1 className='text-[#004571] text-3xl font-semibold'>GROWW LIBRARY</h1>
          </Container>

          <Container className='gap-2'>
            <Image src={imgFile.login} className='lg:mb-5'/>
            <ColContainer className='!w-[85%] text-[#004571]'>
              <h1 className='text-[26px]'>Walcome Back!</h1>
              <p className='text-[14px]'>Please enter  Sign up details below</p>
            </ColContainer>
          </Container>

          <ColContainer className="max-w-[340px]">
            <ColContainer className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="w-full px-4 pt-4 pb-2 border border-[#004571] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="name"
                className="absolute top-2 left-8 text-sm text-black pointer-events-none"
              >
                Name
              </label>
            </ColContainer>

            <ColContainer className="relative">
              <input
                type="text"
                id="emailOrPhone"
                placeholder=" "
                className="w-full px-4 pt-4 pb-2 border border-[#004571] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="emailOrPhone"
                className="absolute top-2 left-8 text-sm text-black pointer-events-none"
              >
                Email / Phone
              </label>
            </ColContainer>

            <ColContainer className="relative">
              <input
                type="password"
                id="password"
                placeholder=" "
                className="w-full px-4 pt-4 pb-2 border border-[#004571] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="password"
                className="absolute top-2 left-8 text-sm text-black pointer-events-none"
              >
                Password
              </label>
            </ColContainer>

            <ColContainer className="relative">
              <input
                type="password"
                id="confirmpassword"
                placeholder=" "
                className="w-full px-4 pt-4 pb-2 border border-[#004571] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="confirmpassword"
                className="absolute top-2 left-8 text-sm text-black pointer-events-none"
              >
                Confirm Password
              </label>
            </ColContainer>
          </ColContainer>

          <ColContainer className='max-w-[340px]'>
            <button className='bg-[#004571] outline-none text-[#FFFFFF] text-[20px] py-2.5 rounded-[8px]'>Sign Up</button>
          </ColContainer>

          <Container className='max-w-[340px] items-center justify-center gap-1'>
            <p className='text-[12px]'>Click for login !</p>
            <Link href='/auth/login' className='text-[14px] font-semibold hover:text-[#FF7802]'>Login</Link>
          </Container>
          
        </ColContainer>

        <ColContainer className='max-w-[40%] hidden md:block'>
          <Image src={imgFile.signuppageimage} h='h-[80%]' w='w-[80%]'/>
        </ColContainer>

      </Container>

    </ColContainer>
  )
}

export default page