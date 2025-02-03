import Image from 'next/image'
import React from 'react'

function Travelpr() {
  return (
     <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[146px] relative'>
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
             <div className='w-full max-w-[1075px]'>
              <div>
                           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal'>Pet Travel Certificates</h1>
                           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>At Nebula Vets, we understand that your pet is an important part of your family, and we want to make sure they can accompany you on your domestic or international travels. We offer assistance in obtaining the necessary health certificates and paperwork required for your pet's travel.</p>
                           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]'>Documentation Assistance</h1>
                           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Gathering the required documentation for travel can be overwhelming and confusing. Our team will provide detailed instructions on the documentation needed and guide you through the process. We will assist you in completing the paperwork accurately, including filling out any forms and providing relevant information to ensure a smooth and hassle-free travel experience for you and your pet.</p>
                           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]'>Domestic Travel</h1>
                           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Regulations for pet travel vary between states, and how you’re getting there. Each airline has different requirements and specific forms for you to fill out about your pet. Our vets can advise on what exactly you need.</p>
                           <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]'>International Travel</h1>
                           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>For international travel planning is important. Health requirements and restrictions on entry can vary, such as requiring a current rabies vaccination no less than 30 days before travel. Some countries may also require your pet to be quarantined for a certain amount of time upon arrival, or have a blood test before travelling.</p>
                           <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Please contact us before booking your appointment, so we can determine the exact requirements for your planned travel and ensure you’re able to get the travel certificate you need.</p>
                         
                           </div>
             </div>
             </div>
              </div>
  )
}

export default Travelpr