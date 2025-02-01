import Image from 'next/image'
import React from 'react'

function Usetele() {
  return (
    <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[140px] relative'>
                   <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
                       <div className='w-full absolute bottom-0 left-[0px]'>
                             <Image
                                                 src={"/assets/png/wave-4.png"}
                                                 width={1440}
                                                 height={450}
                                                 alt="logo"
                                                 className="w-full"
                                               />
                       </div>
                       <div className='w-full max-w-[1075px]'>
                           <div>
           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>Why use Telemedicine</h1>
           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Nebula Vets' online telemedicine service is designed to provide immediate advice and guidance for various veterinary issues. Whether you're unsure about the severity of a symptom or need assistance in determining the best course of action for your pet, our experienced veterinarians can offer real-time advice through the telemedicine platform.</p>
           </div>
                           
                           <div className='w-full max-w-[1075px] mt-5 md:mt-[38px] lg:mt-[50px]'>
           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>During the online consultation</h1>
           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary.</p>
           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary.</p>
           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary.</p>
           </div>
              </div>
                   </div>
               </div>
  )
}

export default Usetele