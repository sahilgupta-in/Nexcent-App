import React from 'react'
import pana from '../assets/pana.svg'
const Site = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around text-sm rounded-2xl m-2 p-8 sm:p-12 md:p-16 w-full bg-white">
          <img
            className="w-64 sm:w-72 md:w-96 scale-x-[-1] max-md:mt-10"
            src={pana}
            alt="excitedWomenImage"
          />
    
          <div className="flex flex-col text-center md:text-left items-center md:items-start pt-8 sm:pt-14 md:p-10 max-w-xl md:max-w-none">
            <h2 className="md:text-4xl text-2xl font-semibold text-gray-800 leading-tight">
              How to design your site footer like we did
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br /> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br /> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br />nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br /> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br /> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
    
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              <button
                type="button"
                aria-label="getStarted"
                className="bg-[#4CAF4F] px-7 py-2.5 text-white rounded-md active:scale-95 transition-all cursor-pointer"
              >
                Learn more
              </button>
             
            </div>
          </div>
        </div>
  )
}

export default Site
