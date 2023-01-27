"use client";

import Link from 'next/link';
import {useState} from 'react'
import {HiMenuAlt3, HiX} from 'react-icons/hi'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("/");

  return (
    <header className='flex w-full h-[70px]  bd'>
        <div className='w-full h-full flex justify-end items-center px-[20px] md:px-[60px]'>
            <ul className='hidden sm:flex justify-center items-center space-x-[33px]'>
            {['blog', 'works','contact'].map((item, index) =>(
                <Link onClick={() => setIsActive(`/${item}`)} 
                className={isActive === `/${item}` ? 'capitalize text-[#FF6464]' : 'capitalize'} key={item+index} href={`/${item}`}>{item}</Link>
            ))}
            </ul>
            
            <div className='relative sm:hidden flex justify-center items-center h-[40px] w-[40px]'>
              <HiMenuAlt3 className='h-[100%] w-[100%] cursor-pointer' onClick={() => setToggle(true)}/>
            </div>
            {
              toggle && (
                <div className='absolute flex justify-between top-0  pt-3 bg-[#f9f8fa] z-10 shadow-lg right-0 h-full w-[90%] px-[20px]'>
                  <ul className='flex flex-col space-y-[33px]'>
                      {['blog', 'works','contact'].map((item, index) =>(
                         <Link onClick={() => setToggle(false)} 
                            className="capitalize" key={item+index} href={`/${item}`}>{item}</Link>
                      ))}
                  </ul>
                  <HiX className='h-[40px] w-[40px] cursor-pointer' onClick={() => setToggle(false)}/>
                </div>
              )
            }

        </div>
    </header>
  )
}

export default Navbar;