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

                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                    <div className="text-left lg:text-center text-white px-4 md:px-12 lg:px-0 lg:max-w-xl w-full flex flex-col items-start lg:items-center lg:mt-40">
                        <h1 className="text-[38px] w-full uppercase">Banks Luxury Serviced Apartments</h1>
                        <p className="pt-2">Banks.LA offers a selection of spacious and convenient properties which are perfect for occupants seeking the best living conditions in the city.</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center relative z-20 -mt-20 lg:-mt-14'>
                <div className='w-full max-w-6xl bg-[#ffeee9] px-6 md:px-10 mx-auto py-10'>
                    <div className='mb-5 flex items-center gap-1 jusfitify-start'>
                        <p className='text-2xl text-[#f04d22]'>Quick Search </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="#f04d22" d="M11 15H6l7-14v8h5l-7 14z" />
                        </svg>
                    </div>

                    <div className='flex gap-5 flex-col md:flex-row flex-wrap items-start md:items-center'>
                        <div className='w-full md:flex-1 min-w-0'>
                            <label htmlFor="setLocation" className='font-normal'>Select Location</label><br />
                            <select name="" id="" className='w-full bg-white p-4 my-2 min-w-0'>
                                <option value="Lekki">Lekki</option>
                                <option value="Ikoyi">Ikoyi</option>
                                <option value="Ikeja">Ikeja</option>
                            </select>
                        </div>

                        <div className='flex w-full md:flex-2 gap-5 min-w-0'>
                            <div className='flex-1 min-w-0'>
                                <label htmlFor="checkIn" className='font-normal'>Check-in Date</label><br />
                                <input type="date" id="checkIn" className='w-full bg-white p-4 my-2 min-w-0' />
                            </div>

                            <div className='flex-1 min-w-0'>
                                <label htmlFor="checkOut" className='font-normal'>Check-out Date</label><br />
                                <input type="date" id="checkOut" className='w-full bg-white p-4 my-2 min-w-0' />
                            </div>
                        </div>

                        <div className='w-full md:w-auto shrink-0'>
                            <button className='bg-[#f04d22] w-full p-4 md:mt-6 text-white hover:bg-[#eb9881]'>Find Apartment</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
