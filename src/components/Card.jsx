import React from 'react'
import CardProps from './CardProps'

const Card = () => {
    return (
        <>
            <CardProps

                image={<img src="https://banksluxuryapartments.com/assets/room-with-comfortable-couch.55acbd7a.webp" className="w-full h-auto object-cover rounded-none" alt="Comfortable couch room" />}
                title="Enjoy the luxury experience at any of our locations"
                description={`Banks L.A. exclusively manages the best handpicked and home-grown holiday apartments across several destinations (and counting). Just 1 in 10 properties that apply make the Banks L.A. list. If they are not beautifully furnished, filled with character and in a great location, you will not find them here.

                            Provisioned to five-star standards by your very own concierge, with all the extra touches, you are assured of more than just a home stay. Whether you stay for 2 nights or 2 weeks, Banks L.A. service is designed to make short stays more than just a holiday.`}
                    />

                {/* <div className="bg-base-200 min-h-screen py-10 lg:py-20 w-full overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                    <div className="w-full lg:flex-1 flex justify-start">
                        <img src="https://banksluxuryapartments.com/assets/room-with-comfortable-couch.55acbd7a.webp" className="w-full h-auto object-cover rounded-none" alt="Comfortable couch room" />
                    </div>

                    <div className="bg-base-10 w-full lg:flex-1 shrink-0 my-10 lg:my-20 px-4 md:px-12 lg:px-0">
                        <h1 className="card-title text-3xl w-full max-w-lg"> Enjoy the <span className='text-[#f04d22]'>luxury</span>  experience at any of our locations</h1>
                        
                        <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'>Banks L.A. exclusively manages the best handpicked and home-grown holiday apartments across several destinations (and counting). Just 1 in 10 properties that apply make the Banks L.A. list. If they are not beautifully furnished, filled with character and in a great location, you will not find them here. <br /> <br />

                            Provisioned to five-star standards by your very own concierge, with all the extra touches, you are assured of more than just a home stay. Whether you stay for 2 nights or 2 weeks, Banks L.A. service is designed to make short stays more than just a holiday.</p>

                        <div className='flex mt-10 justify-start'>
                            <button className="bg-[#f04d22] border border-[#f04d22] py-4 px-7 text-white"> About Us</button>
                            <button className='border py-4 px-2 border-[#f04d22]'><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="#f04d22" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Card