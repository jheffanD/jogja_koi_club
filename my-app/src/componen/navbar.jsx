import React from "react";
import logo from "../asset/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className='flex bg-black '>
      <img src={logo} alt='Logo' className='w-32 h-32 ml-[5rem]' />
      <nav className='flex-grow flex justify-end items-center'>
        <ul className='text-white flex mr-[2rem] space-x-5'>
          <li className='py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl'>
            <Link to='/'>Home</Link>
          </li>
          <li className='py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl'>
            <Link to='/About'>About</Link>
          </li>
          <li className='py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl'>
            <Link to='/Ikan'>Ikan Koi</Link>
          </li>
          <li className='py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl'>
            <Link to='/Rekomendasi'>Rekomendasi</Link>
          </li>
          <li className='py-5 px-5 font-semibold text-[1.1rem] font-poppins cursor-pointer hover:bg-gray-700 hover:text-white hover:rounded-xl'>
            <Link to='/Contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
