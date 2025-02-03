import Image from 'next/image'
import React from 'react'

function Downpr() {
  return (
         <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] py-[60px] md:py-[80px] relative'>
                                <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
                               <div className='w-full absolute bottom-0 left-[0px]'>
                                                               <Image
                                                                                   src={"/assets/png/wave-5.png"}
                                                                                   width={1440}
                                                                                   height={455}
                                                                                   alt="logo"
                                                                                   className="w-full"
                                                                                 />
                                                         </div>
                               <div className='w-full max-w-[1440px] flex flex-wrap-reverse lg:flex-nowrap'>
                               <div className='w-full max-lg:mt-[60px] max-sm:max-w-[250px] lg:max-w-[423px]'>
                <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av'>Downtown</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] mt-5'>2468 18th Street, SW </p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)]'>Washington DC, 20003</p>
                <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av mt-6'>Opening Hours</h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] mt-5'>Monday - Friday: 8AM - 6PM</p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)]'>Saturday: 9AM - 5PM</p>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] '>Sunday: Closed</p>
                <h1 className='text-2xl font-normal text-[var(--Brown,#494336)] max-md:ff-av mt-6'>Opening Hours</h1>
                <a href='#' className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)] mt-5'>Phone: (212) 123-4567</a>
                <p></p>
                <a href='#' className='text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[var(--Brown,#494336)]'>hello@nebulavets.com</a>
       </div>
                                
                                <div className='w-full max-w-[600px]'> 
                                              <Image
                                                                                   src={"/assets/png/map.png"}
                                                                                   width={600}
                                                                                   height={620}
                                                                                   alt="logo"
                                                                                   className="w-full "
                                                                                 />
                                             </div>
                                           
                               </div>
                               </div>
                                </div>
  )
}

export default Downpr