import Image from 'next/image'
import React from 'react'
import Button from '../../Common/Button'

function Heroho() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
        <div className='absolute right-0 top-[-140px] lg:top-[-40px] w-full max-w-[225px] lg:max-w-[457px]'>
             <Image
                          src={"/assets/png/Euth.png"}
                          width={457}
                          height={453}
                          alt="logo"
                          className="w-full max-w-[457px]"
                        />
        </div>
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-sm:max-w-[216px] ff-av'>Hospice & Euthanasia</h1>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>At Nebula Vets, we understand how difficult it is to say goodbye to a beloved pet. During this emotional time, our compassionate and caring team is here to support you and your pet. We offer hospice services that focus on providing comfort and dignity to your pet during their last days and final moments.</p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    
    </div>
        </div>
  )
}

export default Heroho