import React from 'react'
import Circ from './Circ'
import Button from '../../Common/Button'

function Teamab() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[80px] lg:pt-[80px] pb-[60px] lg:pb-[85px]'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12'>
        <h1 className='text-2xl sm:text-[38px] md:text-[50px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] mb-[50px] lg:mb-[65px] text-center'>Meet our veterinary team:</h1>
        <Circ/>
        <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    </div>
  )
}

export default Teamab