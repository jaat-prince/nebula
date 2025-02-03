import Image from 'next/image'
import React from 'react'
import Button from '../../Common/Button'

function Herosk() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
        <div className='absolute right-0 top-[-140px] lg:top-[-40px] w-full max-w-[225px] lg:max-w-[460px]'>
             <Image
                          src={"/assets/png/Layer.png"}
                          width={460}
                          height={463}
                          alt="logo"
                          className="w-full max-w-[460px]"
                        />
        </div>
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av'>Skin & Dermatology</h1>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>At our practice, we specialize in the treatment of various skin-related issues, ranging from bacterial or yeast infections to bites and rashes. Our approach involves a comprehensive process of test-diagnose-treat, ensuring accurate identification of the underlying cause and tailored treatment plans. Trust us to address your pet's skin concerns with expertise and precision for optimal results.</p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    
    </div>
        </div>
  )
}

export default Herosk