import React from 'react'
import Button from '../../Common/Button'
import Image from 'next/image'

function Heroab() {
  return (
    <div className='bg-[var(--Brown,#494336)] pt-[35px] lg:pt-[140px] pb-[60px] lg:pb-[85px]'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] relative flex justify-between gap-5'>
        <div className='absolute flex right-0 top-[64px] lg:top-[0px] w-full sm:hidden'>
             <Image
                          src={"/assets/png/wave-6.png"}
                          width={1440}
                          height={508}
                          alt="logo"
                          className="w-full "
                        />
        </div>
     
        <div>
            <h1 className='text-[32px] sm:text-[42px] md:text-[52px] lg:text-[70px] font-normal text-[var(--Grey,#D7D9DD)] w-full max-w-[216px] sm:max-w-[360px] ff-av'>About Nebula Vets</h1>
            <Image
                          src={"/assets/png/cat.png"}
                          width={636}
                          height={458}
                          alt="logo"
                          className="w-full mt-[58px] max-w-[636px] flex lg:hidden"
                        />
            <p className='text-base sm:text-xl md:text-2xl font-normal text-[var(--Grey,#D7D9DD)] mt-[30px] sm:mt-5 ff-av w-full lg:max-w-[528px] max-lg:mt-[45px]'>With a foundation built on values, innovation, and a commitment to excellence, Nebula Vets continues to strive for excellence in veterinary care. Our journey is fueled by the passion to make a difference in the lives of pets and their owners, providing you with a trusted partner in your pet's health and well-being. 
         </p>
            <Button
                btn={"BOOK NOW"}
                btnclass={"mt-[45px] sm:mt-[40px] max-sm:py-[6px] max-sm:px-[19px]"}
              />
        </div>
        <div className='w-full max-w-[600px] max-lg:hidden'>
        <Image
                          src={"/assets/png/cat.png"}
                          width={636}
                          height={458}
                          alt="logo"
                          className="w-full xl:max-w-[600px] max-lg:hidden"
                        />
        </div>
    
    </div>
        </div>
  )
}

export default Heroab