'use client';
import React from 'react'
import {MdMenu} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdApps} from 'react-icons/io'
import {FaCircleUser} from 'react-icons/fa6'
import { Button} from '@material-tailwind/react'
import { SiGoogledocs } from 'react-icons/si'
const Header = () => {
  return (
    <div className='flex items-center sticky top-0 z-50 px-4 py-2 bg-white shadow-md justify-between'>
      {/* left icons */}
      <div className='flex items-center justify-center mr-5'>
    <Button variant='text' className='rounded-full p-3 hidden md:block'>
    <MdMenu color='gray' size={30}/>
    </Button>
    <SiGoogledocs className='md:ml-4' size={30} color='purple'/>
    <p className='hidden md:block md:ml-3 text-2xl text-gray-600'><span className='text-gray-700 font-semibold'>Google</span> Docs</p>
      </div>

    {/* searchbar */}
    <div className='flex flex-row shadow bg-gray-50 items-center justify-center px-2 rounded focus-within:shadow-md text-gray-700 flex-grow'>
        <AiOutlineSearch size={24} color='gray'/>
        <input type="text" name="" id="" placeholder='Search' className='bg-gray-50 px-2 py-2 focus:ring-transparent focus:outline-none w-full '/>
    </div>

    {/* right icons */}
    <div className='flex items-center justify-center space-x-3 ml-3'>
    <Button variant='text' className='rounded-full p-3 hidden  md:block'>
    <IoMdApps color='gray' size={30} className=''/>
    </Button>
    <FaCircleUser color='gray' size={30} className=''/>
    </div>
    </div>
  )
}

export default Header
