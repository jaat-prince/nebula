import Image from 'next/image'
import React from 'react'

function Workph() {
  return (
   <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[83px] pb-[118px] md:pb-[140px] relative'>
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
   <div className='w-full absolute bottom-0 left-[0px]'>
                                   <Image
                                                       src={"/assets/png/wave-4.png"}
                                                       width={1440}
                                                       height={455}
                                                       alt="logo"
                                                       className="w-full"
                                                     />
                             </div>
   <div className='w-full max-w-[1075px]'>
    <div>
                 <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal'>How it works</h1>
                 <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>We understand that time is of the essence when it comes to your pet's health, and waiting for medications to be obtained from an external pharmacy can be inconvenient. By keeping a comprehensive inventory of commonly used medications in our pharmacy, we strive to streamline the process and minimize any delays in providing your pet with the necessary treatment.</p>
                 <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>However, if a specific medication is not readily available in our on-site pharmacy, we have a solution. We work closely with a trusted compounding pharmacy that specializes in creating customized medications. This allows us to quickly obtain or create the specific medication your pet needs. Once the medication is compounded, we can arrange for it to be delivered to you, ensuring that you have it in a timely manner.</p>
               
                 </div>
   </div>
   </div>
    </div>
  )
}

export default Workph