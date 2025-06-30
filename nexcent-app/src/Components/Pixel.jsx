import React from "react";
import leftimg from "../assets/rafiki.svg";

const Pixel = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around text-sm rounded-2xl m-2 p-8 sm:p-12 md:p-16 w-full bg-white">
      <img
        className="w-64 sm:w-72 md:w-96 scale-x-[-1] max-md:mt-10"
        src={leftimg}
        alt="excitedWomenImage"
      />

      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-8 sm:pt-14 md:p-10 max-w-xl md:max-w-none">
        <h2 className="md:text-4xl text-2xl font-semibold text-gray-800 leading-tight">
          The unseen of spending three <br /> years at Pixelgrade
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan <br /> quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>

        <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
          <button
            type="button"
            aria-label="getStarted"
            className="bg-[#4CAF4F] px-7 py-2.5 text-white rounded-md active:scale-95 transition-all cursor-pointer"
          >
            Get started
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Pixel;
