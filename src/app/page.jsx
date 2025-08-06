import { ColContainer, Container, LayoutContainer} from '@/components/ui/Container'
import { Image, imgFile } from '@/components/ui/Image'
import React from 'react'

const page = () => {
  return (
    <ColContainer className='sm:relative overflow-hidden !pb-0'>
      <ColContainer>
        <LayoutContainer 
          leftChild={
            <ColContainer className="pl-6 pt-15 pb-6 sm:pl-20 sm:pt-25 relative">
              <h1 className="text-[#004571] text-3xl sm:text-5xl font-bold pb-3 z-10">GROW FASTER,</h1>
              <h1 className="text-[#004571] text-3xl sm:text-5xl font-bold pb-4 z-10">MANAGE BETTER</h1>

              <div>
                <div className='h-15 w-15 border-5 border-[#FFFEFE] rounded-full absolute top-0 right-15 md:hidden '></div>

                <div className='h-10 w-10 border-5 border-[#FFFEFE] rounded-full absolute top-25 right-5 md:hidden'></div> 

                <div className='h-45 w-45 bg-[#004571] rounded-full absolute right-[-130px] bottom-1 md:hidden'></div>
              </div>

              <p className='text-[12px] pb-5 pr-10 z-10'>
                GrowwLibrary is a smart solution for managing study-based libraries and reading halls. From seat booking to fee billing and attendance, everything is automated and centralized. Whether you manage one branch or many, GrowwLibrary makes your operations smoother and faster.
              </p>

              <button className='outline-none w-[150px] bg-[#FF7802] py-2 rounded-[8px] text-white font-semibold'>START MANAGE</button>
            </ColContainer>
          }
          
          rightChild={
            <ColContainer className='relative'>
              <div className='h-26 w-26 border-5 border-[#FFFEFE] rounded-full ml-20 mt-[-12px] hidden md:block '></div>

              <div className='h-10 w-10 border-5 border-[#FFFEFE] rounded-full ml-56 mt-[-28px] hidden md:block '></div> 

              <div className='h-80 w-80 bg-[#004571] rounded-full absolute right-[-200px] hidden md:block'></div>

              <div className='w-160 h-100 relative hidden md:block'>
                <div className='h-5 w-5 rounded-full bg-[#FF7802] absolute left-60 top-22 '></div>
                <Image src={imgFile.landing} className='!w-full !h-auto object-contain'/>
                <Image src={imgFile.landingphoneview} className='!w-full !h-auto object-contain md:hidden'/>
              </div>

              <div className='max-w-160 max-h-160 md:hidden mx-auto'>
                <div className='h-60 w-60 bg-[#FF7802] rounded-full absolute left-[-200px] bottom-3 md:hidden'></div>

                <Image src={imgFile.landingphoneview} className='!w-full !h-auto object-contain '/>
              </div>
            </ColContainer>
          }

          />
      </ColContainer>

      <ColContainer className='sm:bg-[#FFFEFE]'>
        <LayoutContainer
          leftChild={
            <ColContainer className='pb-7'>
              <h1 className='text-4xl font-bold pl-2 py-8 sm:pl-18 sm:py-10'>
                Key Features of Our Platform
              </h1>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Multi-Branch Management</h2>
                  <p className='text-[12px]'>
                    Easily manage multiple library branches from a single dashboard. Perfect for expanding businesses and franchise-style setups.
                  </p>
                </ColContainer>
              </Container>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Smart Seat Allocation</h2>
                  <p className='text-[12px]'>
                    Real-time seat management system to track availability, bookings, and usage — maximizing space utilization and avoiding overbooking.
                  </p>
                </ColContainer>
              </Container>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Digital Fee Billing</h2>
                  <p className='text-[12px]'>
                    Generate and share professional fee receipts directly via WhatsApp or email. Fast, paperless, and easy for both admin and students.
                  </p>
                </ColContainer>
              </Container>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Biometric & QR Attendance</h2>
                  <p className='text-[12px]'>
                    Mark attendance using biometric devices or QR-enabled ID cards — ensuring security, authenticity, and time tracking.
                  </p>
                </ColContainer>
              </Container>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Member & Fee Management</h2>
                  <p className='text-[12px]'>
                    Efficiently handle all member records, payments, renewals, and plan upgrades in one place. Automated due tracking included
                  </p>
                </ColContainer>
              </Container>

              <Container className='pl-6 sm:pl-24 place-items-start gap-2'>
                <Image src={imgFile.checkmark} className='!w-7 !h-7 object-cover mt-2' />

                <ColContainer className='!w-[85%] pt-0'>
                  <h2 className='text-[28px] font-bold'>Profit & Loss Analysis</h2>
                  <p className='text-[12px]'>
                    View real-time profit/loss insights with smart calculations based on income and expenses — helping you make informed decisions.
                  </p>
                </ColContainer>
              </Container>

            </ColContainer>
          }

          rightChild={
            <ColContainer className='justify-center items-center'>
              <div className='max-w-160 max-h-160 hidden sm:block mx-auto'>
                <Image src={imgFile.keyFeature} className='!w-full !h-auto object-contain'/>
              </div>
            </ColContainer>
          }
        />
      </ColContainer>

      <ColContainer className='pt-10 items-center'>
        <ColContainer className='max-w-133 items-center pl-6 sm:pl-0'>
          <h2 className='text-2xl font-bold pb-2'>Why Choose GrowwLibrary?</h2>
          <p className='text-[12px]'>
            Your study library deserves more than spreadsheets and manual registers. GrowwLibrary is built to help you save time, reduce errors, and grow faster — all from a single, powerful platform.
          </p>
        </ColContainer>

        <Container className='justify-center gap-15 sm:gap-30 pt-10 '>
          <ColContainer className='bg-[#FFFFFF] max-w-80 rounded-[12px] items-center px-5 py-10 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Image src={imgFile.launchpadyellow} className='!w-12 !h-12'/>

            <h3 className='text-[20px] font-bold py-5'>Grow Your Library Business</h3>
            <p className='text-[12px] max-w-50 text-center py-3'>
              Easily manage one or multiple library branches with complete visibility into attendance, revenue, and expenses. Scale without stress.
            </p>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-80 rounded-[12px] items-center px-5 py-10 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Image src={imgFile.sportStopwatch} className='!w-12 !h-12'/>

            <h3 className='text-[20px] font-bold py-5'>Save Time with Automation</h3>
            <p className='text-[12px] max-w-50 text-center py-3'>
              From seat booking to WhatsApp billing and attendance tracking — everything is automated. Focus more on growing your business, not managing paperwork.
            </p>
          </ColContainer>
        </Container>

        <Container className='justify-center gap-15 sm:gap-30 pt-12'>
          <ColContainer className='bg-[#FFFFFF] max-w-80 rounded-[12px] items-center px-5 py-10 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Image src={imgFile.piechart} className='!w-12 !h-12'/>

            <h3 className='text-[20px] font-bold py-5'>Smart Insights, Real Results</h3>
            <p className='text-[12px] max-w-50 text-center py-3'>
              Get real-time reports on income, expenses, and profit/loss. Make informed decisions with data at your fingertips — no Excel needed.
            </p>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-80 rounded-[12px] items-center px-5 py-10 hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Image src={imgFile.secure} className='!w-12 !h-12'/>

            <h3 className='text-[20px] font-bold py-5'>Secure & Reliable</h3>
            <p className='text-[12px] max-w-50 text-center py-3'>
              With biometric and QR-based attendance, secure admin access, and cloud backups — your data stays safe and your system always works.
            </p>
          </ColContainer>

        </Container>

        <h2 className='text-2xl font-bold pt-17 pb-5'> What Our Clients Say</h2>
      </ColContainer>

      <ColContainer className='bg-[#004571] py-10'>
        <Container className='justify-center gap-12 sm:gap-20 '>
          
          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>
        </Container>

        <Container className='justify-center gap-12 sm:gap-20 pt-10 sm:pt-15'>
          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>

          <ColContainer className='bg-[#FFFFFF] max-w-75 px-5 pt-8 pb-4 rounded-[20px] hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
            <Container className='!gap-0'>
              <Image src={imgFile.doublecot} className='!W-4 !h-4'/>
              <p className='text-[12px] w-[80%] pb-2'>
                GrowwLibrary has completely changed how we operate. Seat management and attendance used to be a mess — now everything runs like clockwork!” — <span className='font-semibold'>Ravi Sharma,</span> Owner, StudyPoint Library
              </p>
            </Container>

            <div className='h-[1px] bg-[#D9D9D9]'></div>

            <Container className='pt-3'>
              <Image src={imgFile.ellipse} className='!w-7 !h-7 object-cover'/>
              <ColContainer className='!w-[80%] !pt-0'>
                <h5 className='text-[12px] font-bold'>Ravi Sharma</h5>
                <p className='text-[8px]'>StudyPoint Library</p>
              </ColContainer>
            </Container>
          </ColContainer>
        </Container>

      </ColContainer>
      
    </ColContainer>

  )
}

export default page
