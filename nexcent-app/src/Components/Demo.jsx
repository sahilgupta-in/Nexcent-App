import React from 'react'

const Demo = () => {
  return (
    <div class="flex flex-col items-center justify-around max-sm:text-sm rounded-2xl m-2 pt-8 pb-5  w-full bg-white">
    <h2 className='md:text-5xl  font-semibold text-gray-800 text-3xl'>Pellentesque suscipit <br /> fringilla libero eu.</h2>
    
    <div class="flex items-center gap-4 mt-6">
        <button type="button" class="bg-[#4CAF4F] transition-all px-8 py-3 text-white font-medium rounded-lg shadow-md active:scale-95 cursor-pointer">
            Get a Demo
        </button>
        
    </div>
</div>
  )
}

export default Demo
