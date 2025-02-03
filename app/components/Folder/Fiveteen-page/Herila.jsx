import Image from 'next/image'
import React from 'react'
import Button from '../../Common/Button'

function Herila() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
        <div className='absolute right-0 top-[-140px] lg:top-[-120px] w-full max-w-[213px] lg:max-w-[420px]'>
             <Image
                          src={"/assets/png/Laser.png"}
                          width={420}
                          height={488}
                          alt="logo"
                          className="w-full max-w-[420px]"
                        />
        </div>
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av'>Laser Therapy</h1>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>At Nebula Vets, we are excited to offer the remarkable benefits of laser therapy for our furry patients. Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets. Join us as we explore the transformative effects of laser therapy.</p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    
    </div>
        </div>
  )
}

export default Herila