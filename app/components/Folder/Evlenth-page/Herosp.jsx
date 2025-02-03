import React from 'react'
import Button from '../../Common/Button'
import Image from 'next/image'

function Herosp() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[176px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative'>
        <div className='absolute right-0 top-[-140px] lg:top-[-40px] w-full max-w-[225px] lg:max-w-[447px]'>
             <Image
                          src={"/assets/png/Spay.png"}
                          width={447}
                          height={442}
                          alt="logo"
                          className="w-full max-w-[447px]"
                        />
        </div>
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[614px] ff-av'>Spay & Neuter</h1>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>Spaying, also known as ovariohysterectomy, is a surgical procedure performed on female animals to render them infertile. It involves the removal of the ovaries and uterus under general anesthesia.</p>
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[664px]'>Neutering is a safe and effective surgical procedure designed to ensure that your male pet cannot reproduce. This important procedure involves the careful removal of your pet's testicles while they are comfortably under general anesthesia.</p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
    
    </div>
        </div>
  )
}

export default Herosp