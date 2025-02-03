import Image from 'next/image'
import React from 'react'

function Visinab() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] lg:py-[80px] flex justify-between flex-wrap lg:flex-nowrap lg:gap-[60px]'>
        <div className='w-full max-w-[600px]'>
             <Image
                                      src={"/assets/png/people.png"}
                                      width={600}
                                      height={620}
                                      alt="logo"
                                      className="w-full "
                                    />
        </div>
        <div className='w-full max-lg:mt-[60px] lg:max-w-[547px]'>
            <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av'>Inspiration and Vision</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5'>Daniel's journey began with a profound inspiration to make a positive impact on the lives of pets and their owners. He envisioned a veterinary practice that would go beyond the conventional norms, offering exceptional care, innovative treatments, and a compassionate approach.</p>
            <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av mt-6'>Elevating the Standard of Care</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5'> Determined to raise the standard of care, Daniel assembled a team of like-minded professionals who shared his vision and values.Together, they worked tirelessly to create a veterinary practice that would exceed expectations and set new benchmarks in veterinary medicine.</p>

        </div>
    </div>
  )
}

export default Visinab