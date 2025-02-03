import Image from 'next/image'
import React from 'react'
import Button from '../../Common/Button'

function Herosu() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
        <div className='absolute right-0 top-[-140px] lg:top-[-40px] w-full max-w-[225px] lg:max-w-[447px]'>
             <Image
                          src={"/assets/png/Surgery.png"}
                          width={447}
                          height={442}
                          alt="logo"
                          className="w-full max-w-[447px]"
                        />
        </div>
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av'>Surgery</h1>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>In our state-of-the-art surgery suite, equipped with advanced technology and facilities, our highly experienced veterinarians are proficient in performing a wide range of surgical procedures. From routine surgeries like spays and neuters to more specialized soft tissue surgeries such as mass removals, laceration repair, abscess treatment, and dental procedures, we offer comprehensive surgical care for your pet.</p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    
    </div>
        </div>
  )
}

export default Herosu