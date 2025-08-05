import { ColContainer, Container, LayoutContainer } from '@/components/ui/Container'
import { Image, imgFile } from '@/components/ui/Image'
import React from 'react'


function page() {
    return (
        <ColContainer className='pt-10  gap-5 justify-center items-center'>
            <Container className="lg:!w-[80%] h-auto flex flex-col justify-center items-center gap-4 ">
                <h1 className='text-black px-5 py-2 border w-40 rounded-[2vw] text-center'>
                    About Us
                </h1>
                <span className='text-center lg:text-4xl font-bold  '>Grow faster, Manage better with Groww Library</span>
                <p className='font-extralight w-[90%] lg:w-[60%] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. Whether you run a single branch or multiple study centers, our platform helps you handle everything — from seat allocation, shift scheduling, attendance tracking (via biometric or QR code), to automated fee billing and expense monitoring. With real-time revenue reports, profit/loss analysis, and WhatsApp integration, GrowwLibrary streamlines your operations and gives you full control at your fingertips. Make smarter decisions, improve member experience, and scale your library business with confidence.</p>
            </Container>
            <Container className='flex justify-center lg:!w-[80%] h-auto '>
                <Image src={imgFile.back} className='w-full' />
            </Container>
            <ColContainer className='lg:!w-[80%] h-auto'>
                <LayoutContainer

                    classNameLeft='lg:!w-[60%] !p-0'
                    classNameRight='lg:!w-[40%] !p-0'
                    leftChild={
                        <Container>
                            <div className='items-center  w-full flex flex-col gap-5 '>
                                <h1 className='text-3xl lg:text-4xl font-bold'>Empowering Study Libraries with Smart, Scalable, and Simple Management Solutions</h1>
                                <p className='font-light'>GrowwLibrary ek modern Library Management System hai jo private study libraries ke liye design kiya gaya hai. Humara mission hai ki har library owner ko ek smart, fast, aur error-free system mile jisse woh apne business ko aasan tareeke se manage kar sakein. Automation, reporting, aur seamless experience ke saath, hum aapka library management bilkul digital bana dete hain.</p>
                            </div>

                        </Container>
                    }

                    rightChild={
                        <Container className='py-2.5 gap-10 '>
                            <div className='h-60 border border-gray-500'></div>

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <span className='text-5xl'>2025</span>
                                    <p className='font-light'>Founded</p>
                                </div>

                                <div>
                                    <span className='text-5xl'>100%</span>
                                    <p className='font-light'>Remote</p>
                                </div>

                                <div>
                                    <span className='text-5xl'>10K</span>
                                    <p className='font-light'>Conections</p>
                                </div>
                            </div>
                        </Container>
                    }


                />
            </ColContainer>

            <Container className='!w-[80%] '>
                <Image src={imgFile.intelligence} className='mt-[-20px]' />
                <div className=' '>
                    <span className='text-2xl font-semibold'>
                        Meet the Minds Behind GrowwLibrary
                    </span>
                    <p>The Team That Thinks in Solutions Powered by People, Driven by Passion</p>
                </div>
            </Container>
            <Container className='!w-[80%] justify-end '>
                <p>We Are <span className='text-[#FF7802] text-4xl'>SolutionMinds</span></p>

            </Container>


            <hr className='border w-[80%] border-[#004571] ' />

            <Container className='!w-[80%] gap-10 justify-center'>
                <div className='w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center gap-1.5 p-5  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-[50%] flex justify-center items-center '>Profile Pic</div>
                    <span className='text-2xl text-[#FF7802] font-bold'>ROHIT KUMAR</span>
                    <span className='text-[15px] text-[#004571]'>TECH LEAD & BACKEND DEVELOPER</span>
                    <p className='font-light text-[13px] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. </p>
                    <Container className="gap-1.5  items-center justify-center !p-0">
                        {/* Email */}
                        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.email} w="w-10" h="h-10" />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.instagram} w="w-10" h="h-10" />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                        </a>
                    </Container>
                </div>

                <div className='w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center gap-1.5 p-5  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-[50%] flex justify-center items-center '>Profile Pic</div>
                    <span className='text-2xl text-[#FF7802] font-bold'>RUPESH KUMAR</span>
                    <span className='text-[15px] text-[#004571]'>ACCOUNTED & FULLSTACK DEVELOPER</span>
                    <p className='font-light text-[13px] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. </p>
                    <Container className="gap-1.5  items-center justify-center !p-0">
                        {/* Email */}
                        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.email} w="w-10" h="h-10" />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.instagram} w="w-10" h="h-10" />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                        </a>
                    </Container>
                </div>

                <div className='w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center gap-1.5 p-5  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-[50%] flex justify-center items-center '>Profile Pic</div>
                    <span className='text-2xl text-[#FF7802] font-bold'>NISHANT KUMAR</span>
                    <span className='text-[15px] text-[#004571]'>MEDIA & MARKETING HEAD</span>
                    <p className='font-light text-[13px] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. </p>
                    <Container className="gap-1.5  items-center justify-center !p-0">
                        {/* Email */}
                        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.email} w="w-10" h="h-10" />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.instagram} w="w-10" h="h-10" />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                        </a>
                    </Container>
                </div>

                <div className='w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center gap-1.5 p-5  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-[50%] flex justify-center items-center '>Profile Pic</div>
                    <span className='text-2xl text-[#FF7802] font-bold'>CHANDAN KUMAR</span>
                    <span className='text-[15px] text-[#004571]'>UI/UX & FRONTEND DEVELOPER</span>
                    <p className='font-light text-[13px] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. </p>
                    <Container className="gap-1.5  items-center justify-center !p-0">
                        {/* Email */}
                        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.email} w="w-10" h="h-10" />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.instagram} w="w-10" h="h-10" />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                        </a>
                    </Container>
                </div>

                <div className='w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center gap-1.5 p-5  hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
                    <div className='w-[150px] h-[150px] bg-gray-200 rounded-[50%] flex justify-center items-center '>Profile Pic</div>
                    <span className='text-2xl text-[#FF7802] font-bold'>AKASH KUMAR</span>
                    <span className='text-[15px] text-[#004571]'>FRONTEND DEVELOPER</span>
                    <p className='font-light text-[13px] text-center'>A modern Library Management System built specifically for private study libraries and reading halls. Unlike traditional libraries, GrowwLibrary is designed to manage seat-based subscription models with ease. </p>
                    <Container className="gap-1.5  items-center justify-center !p-0">
                        {/* Email */}
                        <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.email} w="w-10" h="h-10" />
                        </a>

                        {/* Instagram */}
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.instagram} w="w-10" h="h-10" />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <Image src={imgFile.linkdin} w="w-10" h="h-10" />
                        </a>
                    </Container>
                </div>
            </Container>
        </ColContainer>
    )
}

export default page