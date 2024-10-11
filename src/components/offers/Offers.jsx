import React from 'react'
import OfferRow from './OfferRow'
import support from "../../assets/images/services/support.jpg"
import knowledge from "../../assets/images/services/knowledge.jpeg"
import client_focus from "../../assets/images/services/client_focused.jpg"
import pricing from "../../assets/images/services/greyphin-transparent-pricing.webp"

const offers = [{
        title: "Transparent Pricing",
        text: "NDPT ensures clear and straightforward pricing structures, offering investors full visibility into costs without hidden fees, making financial planning more predictable.",
        bg: support,
        orientation:"right"
        }, {
        title: "Client-Focused Approach",
        text: " NDPT prioritizes the individual needs of each investor, providing personalized solutions and support to align with specific financial goals and preferences.",
        bg: knowledge,
        orientation:"left"

    },
    {
        title: "Expert Knowledge of Accounting",
        text: "NDPT leverages deep accounting expertise to manage financial records, ensuring compliance, accuracy, and transparency in all investment-related transactions",
        bg: client_focus,
        orientation:"right"

        
    },
    {
        title: "Comprehensive Business Suppor",
        text: "NDPT offers extensive business support services, guiding Nigerians in the Diaspora through every step of their investment journey, from project initiation to sustainable growth and management.",
        bg: pricing,
        orientation:"left"


    }]

const Offers = () => {
  return (
    <section className='px-4'> 
        <div className='max-w-7xl m-auto'>


        {offers.map(offer  => (
            <OfferRow key={offer.title} title={offer.title} text={offer.text} background={offer.bg} pos={offer.orientation}/>
        ))}
        </div>

        
  </section>

  )
}

export default Offers