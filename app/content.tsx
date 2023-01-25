"use client"

import React from 'react'
import Footer from './footer'
import Header from './header'

function Content() {

  return (
    <div className="container bgImage h-screen bg-no-repeat w-full bg-cover bg-center">
      <Header/>
      <div className="text-white w-[420px] h-full relative text-left 
        flex justify-center items-start flex-col my-auto mx-40">
        <div className='aboslute mb-[300px] david'>
          <h1 className='text-5xl font-david font-light tracking-[.15em]'>DAVID</h1>
        </div>
        <div className='absolute mb-[170px] kristiawan'>
          <h1 className='text-7xl font-kristiawan font-bold tracking-[.15em]'>KRISTIAWAN</h1>
        </div>
        <div className={`absolute mb-[50px] frontend`}>
          <h1 className='text-2xl tracking-[.43em]'>Front-End Developer</h1>
        </div>
        <div className='absolute space-x-20 mt-[100px]'>
          <button className='
            border-solid border-2 rounded-full px-12 py-1 text-lg mt-5 transition duration-300
            font-david hover:cursor-pointer hover:bg-white hover:text-black'>Resume</button>
          <button className='
            border-solid border-2 rounded-full px-12 py-1 text-lg mt-5 transition duration-300
            font-david hover:cursor-pointer hover:bg-white hover:text-black'>Portfolio</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Content