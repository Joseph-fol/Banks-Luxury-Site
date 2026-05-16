import React from 'react'

const QualitiesPage = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row mx-auto gap-2 lg:px-5'>
                <div className='p-5 w-full md:flex-1'>
                    <h1 className='text-3xl text-black'>Comfort</h1>
                    <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'> Comfort is a necessary ingredient of luxury. We try to represent this as much as possible in our approach. To our select clientele, we have an utmost focus on comfortability as a core element in the delivery of our services as we believe luxury speaks "comfort". </p>
                </div>

                <div className='p-5 w-full md:flex-1'>
                    <h1 className='text-3xl text-black'>Aesthetics</h1>
                    <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'> What is comfort and luxury without the look and feel of it? All our apartments don’t just offer that top-notch feeling of comfortability but also the look and feel of style and elegance merged into a homely setting. We provide you with that feeling of ambience and style with our apartments down to the tiniest detail.</p>
                </div>

                <div className='p-5 w-full md:flex-1'>
                    <h1 className='text-3xl text-black'>Grandeur</h1>
                    <p className='w-full max-w-lg my-5 font-light leading-relaxed text-sm'> Banks L.A. seeks to serve and satisfy the need of our high-value customers and it is only right we match their elite taste while exceeding it at the same time. Our structures satisfy our client's needs for luxury with a blend of 21st-century architectural home designs. </p>
                </div>
            </div>
        </>
    )
}

export default QualitiesPage