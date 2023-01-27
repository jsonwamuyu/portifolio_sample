import React from 'react'

const FeaturedCard = ({title, imgUrl, category, yearWork, desc}:{title:string, imgUrl:string, category:string,yearWork:number, desc:string}) => {
  return (
    <article className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 items-center sm:items-start border-b-2 py-5 w-full' >
        <img src={imgUrl} alt="work" className='sm:w-[246px] sm:h-[180px] w-[339px] h-[230px]  object-cover rounded-[6px]'/>
        <div className='flex flex-col space-y-4 '>
            <h4 className='sm:text-[30px] sm:leading-[44px] leading-[30px] font-bold text-[24px]'>{title}</h4>
            <div className='flex space-x-6'>
                <button className='bg-[#142850] text-white rounded-[1rem] h-[25px] w-[62px] flex items-center 
                justify-center font-extrabold text-[16px] sm:text-[18px] leading-[60px]'>{yearWork}</button>
                <p className="text-[#8695A4] text-[20px] leading-[29px] sm:max-w-[507px]">{category}</p>
            </div>
            <p className='max-w-md'>{desc}</p>
        </div>
    </article>
  )
}

export default FeaturedCard