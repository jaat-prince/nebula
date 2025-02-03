"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Chooseph() {
    const [openAccordion, setOpenAccordion] = useState(null);
            
                const toggleAccordion = (index) => {
                  setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                };
  return (
    <div>  <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                   <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose our Pharmacy:</h1>
                   <div className='mt-[40px] w-full max-w-[1080px]'>
           <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Convenience</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 1 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Having an in-house pharmacy at our veterinary practice means you can conveniently obtain all your pet's medications and healthcare products in one place. No more running to different locations or waiting for orders to arrive. Our knowledgeable pharmacy team is ready to assist you and provide expert guidance on proper medication administration.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Quality Assurance</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 2 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We understand the importance of ensuring the safety and effectiveness of medications for your pets. Our pharmacy sources medications directly from reputable manufacturers, guaranteeing their authenticity, quality, and proper storage. You can have peace of mind knowing that the medications you receive from us are of the highest standard.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Prescription Medications</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 3 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our pharmacy carries a wide range of prescription medications to address various medical conditions and treatments. Our veterinarians will carefully evaluate your pet's needs and prescribe the most appropriate medication, dosages, and duration. Our goal is to support your pet's health and recovery with the right medications tailored to their specific requirements.</p>
               )}
                 <Image
                                             src={"/assets/png/line.png"}
                                             width={603}
                                             height={376}
                                             alt="logo"
                                             className="w-full mt-[32px]"
                                           />
                   </div>
           <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(4)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Prescription Diets</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 4 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We offer a selection of therapeutic prescription diets designed to address specific dietary needs and support various health conditions. Whether your pet requires a special diet for weight management, food allergies, kidney disease, or other health concerns, our pharmacy can provide you with the necessary options to meet their nutritional requirements.</p>
               )}
                 <Image
                                             src={"/assets/png/line.png"}
                                             width={603}
                                             height={376}
                                             alt="logo"
                                             className="w-full mt-[32px]"
                                           />
                   </div>
           <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(5)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Wellness and Preventive Products</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 5 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Beyond medications, our pharmacy also stocks a range of wellness and preventive products to support your pet's overall health. This includes flea and tick preventives, heartworm preventives, joint supplements, dental care products, grooming supplies, and more. Our knowledgeable team can help you choose the right products to keep your pet healthy and thriving.</p>
               )}
                 <Image
                                             src={"/assets/png/line.png"}
                                             width={603}
                                             height={376}
                                             alt="logo"
                                             className="w-full mt-[32px]"
                                           />
                   </div>
           <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(6)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Expert Guidance</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 6 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our pharmacy team is composed of experienced professionals who are dedicated to providing you with personalized service and guidance. We are here to answer your questions, address any concerns, and offer advice on medication administration, potential side effects, and proper storage.ur pharmacy team is composed of experienced professionals who are dedicated to providing you with personalized service and guidance. We are here to answer your questions, address any concerns, and offer advice on medication administration, potential side effects, and proper storage.</p>
               )}
                 <Image
                                             src={"/assets/png/line.png"}
                                             width={603}
                                             height={376}
                                             alt="logo"
                                             className="w-full mt-[32px]"
                                           />
                   </div>
           <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(7)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Prescription Refills</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 7 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>If your pet requires ongoing medication, our pharmacy makes it easy for you to refill prescriptions. Simply contact us, and we will have your pet's medications ready for pick-up or arrange for convenient delivery options.</p>
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
           
               </div></div>
  )
}

export default Chooseph