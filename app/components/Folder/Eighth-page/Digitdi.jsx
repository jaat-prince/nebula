"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Digitdi() {
      const [openAccordion, setOpenAccordion] = useState(null);
                
                    const toggleAccordion = (index) => {
                      setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                    };
  return (
     <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                     <div className='w-full max-w-[1080px]'>
             <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
                 <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Digital Radiography</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
                 {openAccordion === 1 && (
                     <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our advanced digital radiography system allows us to capture high-resolution images of your pet's bones, organs, and soft tissues. Radiographs are particularly useful in diagnosing fractures, assessing the condition of internal organs, identifying tumors or foreign objects, and evaluating the skeletal system.</p>
                 )}
                  <Image
                                               src={"/assets/png/line.png"}
                                               width={603}
                                               height={376}
                                               alt="logo"
                                               className="w-full mt-[32px]"
                                             />
                     </div>
             <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(2)}>
                 <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Ultrasound</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
                 {openAccordion === 2 && (
                     <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>With our cutting-edge ultrasound technology, we can visualize and assess the internal structures of your pet's body in real time. Ultrasounds help us examine the heart, abdomen, reproductive system, and identify abnormalities or potential health concerns. This non-invasive imaging technique aids in diagnosing conditions and guiding treatment decisions.</p>
                 )}
                   <Image
                                               src={"/assets/png/line.png"}
                                               width={603}
                                               height={376}
                                               alt="logo"
                                               className="w-full mt-[32px]"
                                             />
                     </div>
             <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(3)}>
                 <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Echocardiograms</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
                 {openAccordion === 3 && (
                     <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Echocardiogram services to assess the health and function of your pet's heart. An echocardiogram, also known as a cardiac ultrasound, is a non-invasive and painless procedure that provides detailed images of the heart's structures and function.</p>
                 )}
                   <Image
                                               src={"/assets/png/line.png"}
                                               width={603}
                                               height={376}
                                               alt="logo"
                                               className="w-full mt-[32px]"
                                             />
                     </div>
                     </div>
             
                 </div>
  )
}

export default Digitdi