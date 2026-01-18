import React, { useEffect } from 'react'
import logo from '../assets/logotop.svg'
import Right from '../assets/Right.svg'

const Navbar = () => {

  useEffect(() => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const mobileMenus = document.querySelectorAll('.mobile-menu');

    menuButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        mobileMenus[index].classList.toggle('hidden');
      });
    });
  }, []);

  return (
    <nav className="h-[70px] relative w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

      <a href="#">
        <img className="h-7" src={logo} alt="dummyLogoColored" />
      </a>

      <ul className="md:flex hidden items-center gap-6 sm:gap-8 md:gap-10">
        <li><a className="hover:text-gray-500/80 transition" href="#">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Features</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Community</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Blog</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">Pricing</a></li>
      </ul>

      <button type="button" className="bg-[#4CAF4F] text-white border md:inline text-sm font-medium active:scale-95 transition-all w-32 sm:w-36 md:w-40 h-10 sm:h-11 rounded-md flex items-center justify-center gap-2">
        Register Now
        
      </button>

      <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-4 sm:p-6 hidden md:hidden">
        <ul className="flex flex-col space-y-4 text-lg">
          <li><a href="#" className="text-sm">Home</a></li>
          <li><a href="#" className="text-sm">Features</a></li>
          <li><a href="#" className="text-sm">Community</a></li>
          <li><a href="#" className="text-sm">Blog</a></li>
          <li><a href="#" className="text-sm">Pricing</a></li>
        </ul>

        <button type="button" className="bg-[#28CB8B] text-white border md:hidden text-sm font-medium active:scale-95 transition-all w-full h-11 rounded-md flex items-center justify-center gap-2 mt-4">
          Register Now   
        </button>
      </div>
    </nav>
  )
}

export default Navbar
