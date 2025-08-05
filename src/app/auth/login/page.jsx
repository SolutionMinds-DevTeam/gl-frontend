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
              <p className='text-[14px]'>Please enter  log in details below</p>
            </ColContainer>
          </Container>

          <ColContainer className="max-w-[340px]">
            <ColContainer className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="w-full px-4 pt-4 pb-2 border border-[#004571] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-8 text-sm text-black pointer-events-none"
              >
                Email
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
          </ColContainer>

          <ColContainer className='max-w-[340px]'>
            <p className='text-end text-[14px] pb-2'>Forget Password?</p>
            <button className='bg-[#004571] outline-none text-[#FFFFFF] py-2.5 rounded-[8px]'>Login</button>
          </ColContainer>

          <Container className='max-w-[340px] items-center justify-center flex-nowrap gap-2'>
            <div className='h-px w-[30%] bg-[#004571] opacity-70'></div>
            <div className='text-[12px]'>or continue</div>
            <div className='h-px w-[30%] bg-[#004571] opacity-70'></div>
          </Container>

          <ColContainer className='max-w-[340px]'>
            <Container className='bg-[#004571] rounded-[8px] items-center justify-center gap-1'>
              <Image src={imgFile.google} h='h-6.5' w='w-6.5'/>
              <p className='text-[#ffffff] text-[14px]'>Log In With Google</p>
            </Container>
          </ColContainer>

          <Container className='max-w-[340px] items-center justify-center gap-1'>
            <p className='text-[12px]'>Don’t have an account?</p>
            <Link href='/auth/signup' className='text-[14px] font-semibold hover:text-[#FF7802]'>Sign Up</Link>
          </Container>

        </ColContainer>

        <ColContainer className='max-w-[40%] hidden md:block'>
          <Image src={imgFile.passwordmanager} h='h-[80%]' w='w-[80%]'/>
        </ColContainer>
      </Container>

    </ColContainer>
  )
}

export default page