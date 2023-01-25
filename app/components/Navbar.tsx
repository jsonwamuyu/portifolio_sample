import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full h-[70px]'>
        <div className='w-full h-full flex justify-end items-center px-[60px]'>
            <ul className=' flex justify-center items-center space-x-[33px]'>
            {['blog', 'works','contact'].map((item, index) =>(
                <Link className='capitalize' key={item+index} href={`/${item}`}>{item}</Link>
            ))}
            </ul>
        </div>
    </header>
  )
}

export default Navbar;