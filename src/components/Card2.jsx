import React from 'react'
import CardProps from './CardProps'

const Card2 = () => {
    return (
        <>
            <CardProps
                reverse={true}
                image={<img src="https://banksluxuryapartments.com/assets/property-img.d9b87116.webp" className="w-full h-auto object-cover rounded-none" alt="Properties" />}

                title="List your Property"

                description="If you love to travel (or live overseas or interstate) and would prefer to have your home taken care of whilst you are away, there is no better way than listing your home through Banks L.A. Your very own property concierge will take care of your property, greet your guests, and remain on-call during their stay." />
        </>
    )
}

export default Card2