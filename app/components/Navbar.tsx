"use client";

import Link from 'next/link';
import {useState} from 'react'
import {HiMenuAlt3, HiX} from 'react-icons/hi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("/");

  return (
    <header className='flex w-full h-[70px]'>
        <div className='w-full h-full flex justify-end items-center px-[60px]'>
            <ul className=' flex justify-center items-center space-x-[33px]'>
            {['blog', 'works','contact'].map((item, index) =>(
                <Link onClick={() => setIsActive(`/${item}`)} 
                className={isActive === `/${item}` ? 'capitalize text-[#FF6464]' : 'capitalize'} key={item+index} href={`/${item}`}>{item}</Link>
            ))}
            </ul>
            
            <div className='md:hidden flex justify-center items-center h-[35px] w-[35px]'>
              <HiMenuAlt3 className='h-[80%] w-[80%] text-blue-500'/>
            </div>

        </div>
    </header>
  )
}

export default Navbar;