import React from 'react'
import { CiUser , CiSearch , CiVideoOn , CiBasketball } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
const Aside = () => {
  return (
    <div className='bg-black text-white h-screen fixed top-0 w-[10vw]' >
      <h1 className='text-center text-2xl font-bold text-amber-500' >Brand</h1>
      <nav className='h-[70vh] flex flex-col items-center justify-around mt-12' >
        <i className='text-2xl cursor-pointer ' ><CiUser/></i>
        <i className='text-2xl cursor-pointer ' ><CiSearch/></i>
        <i className='text-2xl cursor-pointer ' ><FaHome/></i>
        <i className='text-2xl cursor-pointer ' ><PiTelevisionSimple/></i>
        <i className='text-2xl cursor-pointer ' ><CiVideoOn/></i>
        <i className='text-2xl cursor-pointer ' ><CiBasketball/></i>
        <i className='text-2xl cursor-pointer ' ><BiCategory/></i>
      </nav>
    </div>
  )
}

export default Aside
