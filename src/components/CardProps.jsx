import React from 'react'

const CardProps = ({image, title, description, reverse = false }) => {
    return (
        <>
            <div className="bg-base-200 min-h-screen py-10 lg:py-20 w-full overflow-hidden">
                <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 lg:gap-20 items-center`}>
                    <div className="w-full md:flex-1 flex justify-start">
                        {image}
                    </div>

                    <div className={`bg-base-10 w-full md:flex-1 shrink-0 my-10 lg:my-20 px-4 md:px-8 ${reverse ? 'md:pl-12 lg:pl-20' : 'lg:px-0'}`}>
                        <h1 className="card-title text-3xl w-full max-w-lg"> {title} </h1>
                        <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'> {description} </p>
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
            </div>
        </>
    )
}

export default CardProps