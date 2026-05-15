import React from 'react'

const Header = () => {
    return (
        <>
            <div className="mx-auto relative w-full overflow-hidden h-143.75">
                <div className="absolute top-0 left-0 w-full h-full z-2 bg-black opacity-[.6] mix-blend-soft-light"></div>

                <video className="object-cover absolute top-0 left-0 w-full h-full" autoPlay loop muted playsInline poster="">
                    <source src="https://banksluxuryapartments.com/assets/background.8291f6d9.mp4" type="video/mp4" />
                    <img src="https://banksluxuryapartments.com/assets/poster.782b31f0.webp" width="100%" height="100%" alt="Building Tour" />
                </video>
{/* 

                <div className='flex items-center justify-center'>
                    <div className="text-start text-white px-4 absolute left-0 lg:w-100 w-full flex flex-col">
                        <h1 className="text-[32px] w-85.75 pt-80 uppercase">Banks Luxury Serviced Apartments</h1> */}

                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <div className="text-left lg:text-center text-white px-4 md:px-12 lg:px-0 lg:max-w-xl w-full flex flex-col items-start lg:items-center lg:mt-40">
                        <h1 className="text-[38px] w-full uppercase">Banks Luxury Serviced Apartments</h1>
                        <p className="pt-2">Banks.LA offers a selection of spacious and convenient properties which are perfect for occupants seeking the best living conditions in the city.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
