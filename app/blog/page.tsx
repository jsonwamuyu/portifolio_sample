import React from 'react'
import Card from '../components/Card';

const Blog = () => {
  return (
    <section className="px-[18px] md:px-[148px] lg:px-[235px]">
      <h3 className='text-[44px] leading-[60px] font-bold'>Blog</h3>
      <div className='flex flex-col space-y-8'>
        <Card 
        className="max-w-[682px]"
          title="UI Interactions of the week"
          date='12 Feb 2019'
          tech='Express, Handlebars'
          desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet'
        />
        <Card 
          title="UI Interactions of the week"
          date='12 Feb 2019'
          tech='Express, Handlebars'
          desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet'
        />
          <Card 
          title="UI Interactions of the week"
          date='12 Feb 2019'
          tech='Express, Handlebars'
          desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet'
        />
          <Card 
          className=""
          title="UI Interactions of the week"
          date='12 Feb 2019'
          tech='Express, Handlebars'
          desc='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                  sunt nostrud amet'
        />
      </div>
    </section>
  )
}

export default Blog