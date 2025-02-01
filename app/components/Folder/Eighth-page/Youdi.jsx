import React from 'react'
import Button from '../../Common/Button'
import Image from 'next/image'

function Youdi() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[60px] md:pt-[80px] pb-[191px] lg:pb-[85px] relative'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
        <div className='absolute right-0 w-full max-w-[570px] bottom-0'>
            <Image
                                  src={"/assets/png/wave-3.png"}
                                  width={637}
                                  height={318}
                                  alt="logo"
                                  className="w-full max-w-[637px]"
                                />
        </div>
        <div className='w-full max-w-[817px]'>
            <h1 className='text-[var(--Grey,#D7D9DD)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[230px] sm:max-w-[530px]'>We look forward to seeing you and your pet soon!</h1>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    </div>
        </div>
  )
}

export default Youdi