import React from 'react'
import Link from 'next/link'
import Card from './Card'

const Recent = () => {
  return (
    <section className='w-full bg-[#EDF7FA] flex flex-col py-[50] px-[11px] md:px-[148px] items-center'>
        <div className='pb-8 flex flex-col sm:flex-row sm:justify-between w-full '>   
            <h2 className='text-[22px] text-center sm:text-left'>Recent posts</h2>
            <Link href="#" 
            className='hidden sm:block text-[#00A8CC] text-[1rem] text-center
            sm:text-right leading-[24px] hover:underline'>View all</Link>
        </div>
        <div className='flex flex-col sm:flex-row sm:justify-between w-full items-center space-y-8 sm:space-y-0 sm:space-x-8'>
        <Card
         title="Making a design system from scratch" 
         date="12 Feb 2020" 
         tech="Design, Pattern" 
         desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
        <Card
         title="Making a design system from scratch" 
         date="12 Feb 2020" 
         tech="Design, Pattern" 
         desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
        </div>
    </section>
  )
}

export default Recent