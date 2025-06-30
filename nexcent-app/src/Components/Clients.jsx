import React from 'react'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg' 
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'

const Clients = () => {
    return (
        <div className="text-center pt-12 sm:pt-16 px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Our Clients</h1>
            <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">
                We have been working with some Fortune 500+ clients
            </p>
        <div>
            <div className="flex flex-wrap justify-evenly items-center gap-6 sm:gap-8 mt-8 sm:mt-10">
                <img className="h-10 sm:h-12 md:h-16" src={icon1} alt="Client 1" />
                <img className="h-10 sm:h-12 md:h-16" src={icon2} alt="Client 2" />
                <img className="h-10 sm:h-12 md:h-16" src={icon3} alt="Client 3" />
                <img className="h-10 sm:h-12 md:h-16" src={icon4} alt="Client 4" />
                <img className="h-10 sm:h-12 md:h-16" src={icon5}alt="Client 5" />
                <img className="h-10 sm:h-12 md:h-16" src={icon6} alt="Client 6" />
            </div>
        </div>
            
        </div>
    )
}

export default Clients
