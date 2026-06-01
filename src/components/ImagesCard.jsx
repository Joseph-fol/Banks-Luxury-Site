import React from 'react'

const ImagesCard = () => {
    return (
        <>
            <div className='bg-[#fff4f1] py-15'>
                <div className='flex flex-col md:flex-row mx-auto lg:px-5'>
                    <div className='p-5 w-full md:flex-1'>
                        <img src="https://banksluxuryapartments.com/assets/noahs-court.aa51392e.webp" className='w-full' alt="" />
                        <h1 className='text-md font-normal text-black text-center py-4'>Noah's Court</h1>
                    </div>

                    <div className='p-5 w-full md:flex-1'>
                        <img src="https://banksluxuryapartments.com/assets/second-avenue.fe493160.webp" className='w-full' alt="" />
                        <h1 className='text-md font-normal text-black text-center py-4'>Second Avenue</h1>
                    </div>

                    <div className='p-5 w-full md:flex-1'>
                        <img src="https://banksluxuryapartments.com/assets/temple-road.23ed614b.webp" className='w-full object-cover' alt="" />
                        <h1 className='text-md font-normal text-black text-center py-4'>Temple Road</h1>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row mx-auto lg:px-5'>
                    <div className='p-5 w-full md:flex-1 h-50'>
                        <img src="https://banksluxuryapartments.com/assets/acorn.3b0b3216.webp" className='w-full object-cover h-60' alt="" />
                        <h1 className='text-md font-normal text-black text-center py-4'>Acorn Place</h1>
                    </div>

                    <div className='p-5 w-full md:flex-1 relative'>
                        <div className='absolute inset-0 bg-black opacity-[40] mix-blend-soft-light z-10'></div>
                        <div className='absolute inset-0 flex items-center justify-center z-20'>
                            <h1 className='text-3xl text-white z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Become a Host</h1>
                            <button>Apply Now </button>
                            {/* <button className='bg-[#f04d22] border border-[#f04d22] py-4 px-7 text-white absolute top-full left-1/2 -translate-x-1/2 mt-5 z-20'>List Your Property</button> */}
                        </div>
                        <img src="https://banksluxuryapartments.com/assets/acorn.3b0b3216.webp" className='w-full object-cover h-100' alt="" />
                    </div>

                    <div className='p-5 w-full md:flex-1'>
                        <h1 className='text-3xl text-black'>The brand you can trust</h1>
                        <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'>With over 8 years of experience in the property market and industry we are dedicated to exceptionalism in our designs, constructions, and finishing in all our properties.</p>
                    </div>
                </div>
            </div>

            
            
        </>
    )
}

export default ImagesCard