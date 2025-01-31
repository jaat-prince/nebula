import Image from 'next/image'
import React from 'react'

function Coreva() {
  return (
      <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[140px] relative'>
            <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
                <div className='w-full absolute bottom-0 left-[0px]'>
                      <Image
                                          src={"/assets/png/wave-2.png"}
                                          width={1440}
                                          height={450}
                                          alt="logo"
                                          className="w-full"
                                        />
                </div>
                <div className='w-full max-w-[1080px]'>
                    <div>
    <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>Why should I vaccinate my pet?</h1>
    <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer.</p>
    </div>
                    <div className='w-full max-w-[1030px] mt-5 lg:mt-[30px]'>
    <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>What are core and non-core vaccines?</h1>
    <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Core vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle.</p>
    <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>Our vets will discuss the suitable vaccines for your pet during the consultation.</p>
    </div>
       </div>
            </div>
        </div>
  )
}

export default Coreva