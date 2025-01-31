import React from 'react'
import Button from '../../Common/Button'
import Image from 'next/image'

function Heroch() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
<div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
    <div className='absolute right-0 top-[-140px] lg:top-[-120px] w-full max-w-[211px] lg:max-w-[528px]'>
         <Image
                      src={"/assets/png/HealthCheck.png"}
                      width={528}
                      height={521}
                      alt="logo"
                      className="w-full max-w-[528px]"
                    />
    </div>
    <div>
        <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av'>Animal Health Check</h1>
        <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[644px]'>This comprehensive assessment involves a thorough evaluation of your pet's major organ systems. During this visit, we take the opportunity to discuss important aspects of your pet's well-being, including their behavior, appetite, exercise routines, and daily activities at home. It is also an ideal occasion for us to recommend any routine diagnostic tests that could be advantageous for your pet's health or to determine if any vaccinations are due.</p>
        <Button
            btn={"BOOK NOW"}
            btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
          />
    </div>

</div>
    </div>
  )
}

export default Heroch