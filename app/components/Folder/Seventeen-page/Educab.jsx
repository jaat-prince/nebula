import Image from 'next/image'
import React from 'react'

function Educab() {
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] lg:py-[80px] flex justify-between flex-wrap lg:flex-nowrap lg:gap-[60px]'>

<div className='w-full max-w-[600px]'>
             <Image
                                      src={"/assets/png/jungle.png"}
                                      width={600}
                                      height={620}
                                      alt="logo"
                                      className="w-full "
                                    />
        </div>
        <div className='w-full max-lg:mt-[60px] lg:max-w-[547px]'>
            <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av'>Community Engagement and Education</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5'>Nebula Vets is committed to being an active and integral part of the community we serve. We actively engage in educational initiatives, organizing workshops, seminars, and community events to spread awareness about pet care, responsible ownership, and the importance of preventive medicine.</p>
            <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av mt-6'>Sustainability  & Environmental Responsibility</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] ff-av mt-5'>Recognizing the impact of the veterinary field on the environment, Nebula Vets is dedicated to promoting sustainability and environmental responsibility. We have implemented eco-friendly practices within our facility, reduced waste, and actively participate in initiatives that support a greener future for veterinary medicine.</p>

        </div>
</div>
  )
}

export default Educab