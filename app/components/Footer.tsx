import React from 'react';
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='h-[182px] w-full flex flex-col justify-center items-center space-y-4 pt-[83px]'>
        <div className='flex items-center space-x-4'>
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsLinkedin />
        </div>
        <p className='text-[14px] leading-[21px] text-center'>Copyright ©2020 All rights reserved </p>
    </footer>
  )
}

export default Footer