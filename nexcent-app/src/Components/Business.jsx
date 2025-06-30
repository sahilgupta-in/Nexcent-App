import React from 'react';
import twopeople from '../assets/twoicon.svg';
import handicon from '../assets/handicon.svg';
import finicon from '../assets/finicon.svg';
import paymenticon from '../assets/paymenticon.svg';

const Business = () => {
  return (
    <div className="flex flex-col bg-[#F5F7FA] text-center md:text-left items-center md:items-start p-8 sm:p-12 md:p-16 m-4 sm:m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-20 items-start justify-center w-full max-w-6xl mx-auto">
        <div>
          <h2 className="md:text-4xl font-semibold text-gray-800 leading-tight">
            Helping a local <br /> <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-md mx-auto md:mx-0">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <button
                type="button"
                className="flex items-center justify-between font-bold text-gray-800/80 rounded text-sm h-20 w-full max-w-xs pr-7 bg-white"
              >
                <div className="h-full flex items-center justify-center px-3">
                  <img src={twopeople} alt="people icon" className="w-12 h-12" />
                  <div className='font-bold text-gray-800 text-2xl ml-6'>
                  2,245,341
                  <p className='font-normal text-[16px]'>Members</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
             <button
                type="button"
                className="flex items-center justify-between font-bold text-gray-800/80 rounded text-sm h-20 w-full max-w-xs pr-7 bg-white"
              >
                <div className="h-full flex items-center justify-center px-3">
                  <img src={handicon} alt="people icon" className="w-12 h-12" />
                  <div className='font-bold text-gray-800 text-2xl ml-6'>
                  46,328
                  <p className='font-normal text-[16px]'>Clubs</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex items-center justify-between font-bold text-gray-800/80 rounded text-sm h-20 w-full max-w-xs pr-7 bg-white"
              >
                <div className="h-full flex items-center justify-center px-3">
                  <img src={finicon} alt="people icon" className="w-12 h-12" />
                  <div className='font-bold text-gray-800 text-2xl ml-6'>
                  828,867
                  <p className='font-normal text-[16px]'>Event Bookings</p>
                  </div>
                </div>
              </button>
            </div>
            <div>
             <button
                type="button"
                className="flex items-center justify-between font-bold text-gray-800/80 rounded text-sm h-20 w-full max-w-xs pr-7 bg-white"
              >
                <div className="h-full flex items-center justify-center px-3">
                  <img src={paymenticon} alt="people icon" className="w-12 h-12" />
                  <div className='font-bold text-gray-800 text-2xl ml-6'>
                  1,926,436
                  <p className='font-normal text-[16px]'>Payments</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
