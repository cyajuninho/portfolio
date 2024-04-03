"use client";
import React from 'react'

const Home = () => {
  return (
      <section className='w-100 h-screen flex justify-start items-start p-96 dark'>
        <div className="">
          <div>
            <span className='text-xl bg-primary px-1 text-white rounded-md'>Hello</span>
            <span className='pl-2 text-xl'>I'm</span>
          </div>
          <h1 className="text-6xl font-bold">Junior Rodrigues</h1>
          <h3 className="text-3xl font-semibold">
            Fullstack 
            <span className='text-primary'> Developer</span>
          </h3>
        </div>
      </section>
  )
}

export default Home
