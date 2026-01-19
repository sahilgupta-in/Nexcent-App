import React from 'react'
import HeroImg from '../assets/Illustration.svg'

const Hero = () => {
  return (
    <div>
        <main className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 m-8 sm:m-12 md:mt-24">
    <div className="flex flex-col items-center md:items-start max-w-2xl text-center md:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-black leading-tight">
            Lessons and insights 
            <br />
            <span className="text-[#4CAF4F]">
                from 8 years
            </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-gray-500 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Where to grow your business as a photographer: site or social media?
        </p>
        <div className="flex items-center mt-6 justify-center md:justify-start">
            <button className="relative">
                <span className="bg-[#4CAF4F]  text-white text-sm font-semibold px-8 py-3 rounded-md transition cursor-pointer">
                    Register
                </span>
                
            </button>
            
        </div>
    </div>
    <img className="w-64 sm:w-72 md:w-96 scale-x-[-1] max-md:mt-10" src={HeroImg} alt="HeroImg" />
</main>
      
    </div>
  )
}

export default Hero
