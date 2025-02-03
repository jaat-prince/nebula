"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Petssu() {
     const [openAccordion, setOpenAccordion] = useState(null);
                
                    const toggleAccordion = (index) => {
                      setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                    };
  return (
 <div>  <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                   <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose Nebula Vets for Your Pet's Surgery:</h1>
                   <div className='mt-[40px] w-full max-w-[1080px]'>
           <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Expert Surgical Team</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 1 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our team of skilled veterinarians brings years of experience and expertise to the operating table. With a deep understanding of advanced surgical techniques and a commitment to staying abreast of the latest advancements in veterinary surgery, our surgeons are well-equipped to handle a wide range of procedures with exceptional skill and care.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Comprehensive Surgical Services</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 2 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>From routine spays and neuters to complex soft tissue surgeries, orthopedic procedures, tumor removals, and emergency surgeries, our hospital offers a comprehensive range of surgical services tailored to meet the unique needs of your pet. You can trust us to deliver personalized surgical solutions that prioritize your pet's well-being.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Cutting-Edge Facilities and Technology</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 3 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we take pride in our state-of-the-art surgical facilities and advanced equipment. Our hospital is equipped with modern anesthesia monitoring systems, surgical instruments, and techniques, ensuring the highest level of safety, precision, and comfort for your pet.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Personalized Care</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 4 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We understand that each pet is unique, and their surgical needs require individualized attention. Our veterinarians take the time to thoroughly evaluate your pet's health, discuss treatment options, and design a customized surgical plan tailored to their specific condition and requirements. We value open communication and are always available to address any concerns or questions you may have.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Optimal Safety and Comfort</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 5 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Your pet's safety and comfort are of paramount importance to us. Our experienced team utilizes the latest anesthetic protocols tailored to your pet's needs, and we closely monitor their vital signs throughout the entire surgical procedure. We also employ advanced pain management techniques to ensure your pet's well-being and minimize any discomfort.</p>
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
               <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Compassionate Post-Surgical Care</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
               {openAccordion === 6 && (
                   <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our commitment to your pet's well-being extends beyond the operating room. After surgery, we provide attentive post-operative care to support their recovery. We provide detailed instructions on at-home care, pain management, and follow-up appointments to ensure a smooth healing process. Our caring staff is always here to address any concerns and provide support during your pet's recovery journey.</p>
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

export default Petssu