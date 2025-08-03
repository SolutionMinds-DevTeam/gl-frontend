import { ColContainer, Container } from '@/components/ui/Container'
import React from 'react'

function page() {
    return (
        <ColContainer className='pt-10'>
            <Container w-full flex flex-col justify-center items-center gap-4>
                <h1 className='text-black px-5 py-2 border w-40 rounded-[2vw] text-center'>
                    About Us
                </h1>
                <span className='text-4xl font-bold '>Grow faster, Manage better with Groww Library</span>
            </Container>

            {/* <div className="w-full flex flex-col justify-center items-center gap-4">
                <h1 className='text-black px-5 py-2 border w-40 rounded-[2vw] text-center'>
                    About Us
                </h1>
                <span className='text-4xl font-bold '>Grow faster, Manage better with Groww Library</span>
            </div>           */}

        </ColContainer>
    )
}

export default page