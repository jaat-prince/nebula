import Image from 'next/image'
import React from 'react'

function Examch() {
  return (
    <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[140px] relative'>
        <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
            <div className='w-full absolute bottom-1 sm:bottom-0 left-[0px]'>
                  <Image
                                      src={"/assets/png/wave-2.png"}
                                      width={1440}
                                      height={450}
                                      alt="logo"
                                      className="w-full"
                                    />
            </div>
            <div className='w-full max-w-[980px]'>
<h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>Animal Health Check Exam</h1>
<p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements.</p>
   <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of your pets:</p>
   <ul>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Vaccinations</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Blood panels</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Parasitic prevention</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Microchipping</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Dental care</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Fecal tests</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Skin tests</li>
    <li className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>-Dietary advise</li>
   </ul>
   </div>
        </div>
    </div>
  )
}

export default Examch