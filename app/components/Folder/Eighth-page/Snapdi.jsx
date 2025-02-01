import React from 'react'
import Slider from './Slider'

function Snapdi() {
  return (
    <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] py-[60px] lg:py-[80px]'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
        <h1 className='text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av text-[var(--Brown,#494336)] mb-[40px]'>Available SNAP Tests</h1>
        <Slider/>
        </div>
    </div>
  )
}

export default Snapdi