import React from 'react'

const ImagesCard = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row mx-auto gap-2 lg:px-5'>
                <div className='p-5 w-full md:flex-1'>
                    <img src="https://banksluxuryapartments.com/assets/noahs-court.aa51392e.webp" className='w-full' alt="" />
                    <h1 className='text-md font-normal text-black text-center py-4'>Noah's Court</h1>
                </div>

                <div className='p-5 w-full md:flex-1'>
                    <img src="https://banksluxuryapartments.com/assets/second-avenue.fe493160.webp" className='w-full' alt="" />
                    <h1 className='text-md font-normal text-black text-center py-4'>Second Avenue</h1>
                </div>

                <div className='p-5 w-full md:flex-1'>
                    <img src="https://banksluxuryapartments.com/assets/temple-road.23ed614b.webp" className='w-full' alt="" />
                    <h1 className='text-md font-normal text-black text-center py-4'>Temple Road</h1>
                </div>
        </div>  
    </>
  )
}

export default ImagesCard