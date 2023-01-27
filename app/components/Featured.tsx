import React from 'react'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <section className='py-[50] px-[11px] md:px-[148px]'>
        <h3 className=' text-[18px] sm:text-[22px] leading-[60px] text-center sm:text-left'>Featured works</h3>
        <div className='flex flex-col space-y-6'>
            <FeaturedCard 
                imgUrl="/shoes.png"
                title="Designing Dashboard"
                category='Dashbord'
                yearWork={2020}
                desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                   Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />

            <FeaturedCard 
                imgUrl="/about04.png"
                title="Designing Dashboard"
                category='Dashbord'
                yearWork={2020}
                desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet."
                />
        </div>
    </section>
  )
}

export default Featured