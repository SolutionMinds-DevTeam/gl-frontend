
import { ColContainer, Container } from '@/components/ui/Container'
import { Image, imgFile } from '@/components/ui/Image'
import React from 'react'

const price = () => {
  return (
    <ColContainer>
      <Container className='md:pl-50 pt-5'>
        <Image src={imgFile.rupee} className='h-12 w-12 mt-2'/>

        <ColContainer className='!w-[80%]'>
          <h4 className='text-[28px] font-bold mb-[-4px]'>Pricing Plans</h4>
          <p className='text-[10px] max-w-[410px] min-w-[300px]'>
            Choose the plan that fits your library’s size and goals. Whether you manage a single reading room or a chain of branches — GrowwLibrary has you covered.
          </p>
        </ColContainer>
      </Container>

      <Container className='justify-center gap-15 pt-8'>
        <ColContainer className='bg-[#FFFFFF] !w-[320px] rounded-[16px]  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <Container className='items-center gap-1 pl-18'>
            <Image src={imgFile.add1}/>
            <h4 className='text-[20px] font-bold'>Basic Plan</h4>
          </Container>

          <ColContainer>
            <p className='mt-[-10px] mb-1 text-[15px] font-medium'>
              ₹799/month (Ideal for small libraries)
            </p>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>1 Branch Access</p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Up to 100 Active Members
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Seat & Shift Management
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Digital Billing (PDF/WhatsApp)
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Basic Reports (Revenue, Fees)
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Email & Chat Support
              </p>
            </Container>

            <Container className='gap-1.5 pt-35'>
              <Image src={imgFile.checkmark} h='h-5' w='w-5' className=''/>
              <p className='text-[14px] w-[85%]'>
                Perfect for independent libraries just starting out.
              </p>
            </Container>
          </ColContainer>
        </ColContainer>

        <ColContainer className='bg-[#FFFFFF] !w-[320px] rounded-[16px]  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <Container className='items-center gap-1 pl-20'>
            <Image src={imgFile.add2}/>
            <h4 className='text-[20px] font-bold'>Pro Plan</h4>
          </Container>

          <ColContainer>
            <p className='mt-[-10px] mb-1 text-[15px] pl-2 font-medium'>
              ₹1499/month (Most Popular)
            </p>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                All Basic Features
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Up to 3 Branches
              </p>
            </Container>

            <Container className='gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px] w-[80%]'>
                Biometric & QR Attendance Integration
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                WhatsApp Notification System
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Manual Attendance Support
              </p>
            </Container>

            <Container className='gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px] w-[80%]'>
                Advanced Reports (Profit/Loss, Attendance)
              </p>
            </Container>

            <Container className='gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px] w-[80%]'>
                Expense Tracking
              </p>
            </Container>

            <Container className='gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px] w-[80%]'>
                Priority Support via WhatsApp
              </p>
            </Container>

            <Container className='gap-1.5 pt-8'>
              <Image src={imgFile.star} h='h-5' w='w-5' className=''/>
              <p className='text-[14px] w-[85%]'>
                Best value for growing study libraries and mid-size operations.
              </p>
            </Container>
          </ColContainer>
        </ColContainer>

        <ColContainer className='bg-[#FFFFFF] !w-[320px] rounded-[16px]  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <Container className='items-center gap-1 pl-15'>
            <Image src={imgFile.add3}/>
            <h4 className='text-[20px] font-bold'>Enterprise Plan</h4>
          </Container>

          <ColContainer>
            <p className='mt-[-10px] mb-1 text-[15px] pl-2 font-medium'>
              ₹Custom Pricing (Tailored for chains/franchises)
            </p>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Unlimited Branches & Users
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Unlimited Members
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Full Customization Support
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Dedicated Account Manager
              </p>
            </Container>

            <Container className='gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px] w-[80%]'>
                Custom Integrations (CRM, Payment Gateway, etc.)
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                Onboarding & Staff Training
              </p>
            </Container>

            <Container className='items-center gap-1.5'>
              <Image src={imgFile.done} h='h-5' w='w-5' className='mb-[-16px]'/>
              <p className='mb-[-12px]'>
                24/7 Premium Support
              </p>
            </Container>

            <Container className='gap-1.5 pt-18'>
              <Image src={imgFile.launchpad} h='h-5' w='w-5' className=''/>
              <p className='text-[14px] w-[85%]'>
                Perfect for independent libraries just starting out.
              </p>
            </Container>
          </ColContainer>
        </ColContainer>

      </Container>
    </ColContainer>
  )
}

export default price