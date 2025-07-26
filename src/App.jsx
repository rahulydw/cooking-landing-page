import React, { useState } from 'react'
import { AlignJustify, Facebook, Instagram, TwitterIcon, X } from 'lucide-react'
import Home from './pages/Home';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navMenu = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "About us", link: "/" },
  ];
  return (
    <div className='w-screen h-screen bg-[#ffffff] overflow-x-hidden select-none'>
      {/* Header */}
      <header className='sticky top-0 z-50 lg:border-b-2 border-gray-300/30 w-full h-[55px] backdrop-blur-2xl flex justify-between items-center px-5'>
        {/* Left */}
        {/* Brand Name  */}
        <a href="#">
          <p className='text-xl md:text-2xl text-center font-lobster'>
            Foodieland<span className='text-2xl text-red-400 font-extrabold'>.</span>
          </p>
        </a>

        {/* Center Menu List Desktop */}
        <ul className='hidden md:flex items-center gap-5 font-tinos text-xl'>
          {navMenu.map((items, index) => (
            <li key={index} className='relative group'>
              <a href={items.link}>{items.name}</a>
              <span className='absolute w-0 h-[2px] left-0 bottom-0 bg-gray-900 group-hover:w-full transition-all eas duration-500' />
            </li>
          ))}
        </ul>

        {/* Right Social Icons Desktop*/}
        <div className='hidden md:flex items-center gap-4 [&>a]:hover:text-blue-800'>
          <a href="#"> <TwitterIcon size={18} /></a>
          <a href="#"><Instagram size={18} /></a>
          <a href="#"><Facebook size={18} /></a>
        </div>
        {/* Right MenuButton For Mobile */}
        <button onClick={() => setMenuOpen(prev => !prev)} className='border-none outline-none focus:ring-1 ring-gray-100 transition-all ease-in-out duration-700 block md:hidden'>{menuOpen ? <X size={28} /> : <AlignJustify size={28} />}</button>
      </header>

      {/* Home Section */}
      <Home  navMenuFooter={navMenu}/>
    </div>
  )
}

export default App