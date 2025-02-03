"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Career() {
     const [openAccordion, setOpenAccordion] = useState(null);
                                
                                    const toggleAccordion = (index) => {
                                      setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                                    };
  return (
    <div className='relative'>
      <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
     <div className='absolute left-0 w-full bottom-0 max-md:hidden '>
                 <Image
                                       src={"/assets/png/wave-7.png"}
                                       width={1440}
                                       height={376}
                                       alt="logo"
                                       className="w-full"
                                     />
             </div>
                                 <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose a Career at Nebula Vets:</h1>
                                 <div className='mt-[40px] w-full max-w-[1080px]'>
                         <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Commitment to Excellence</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 1 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we strive for excellence in everything we do. Our team is committed to providing the highest quality veterinary care, utilizing advanced technologies, and staying up-to-date with the latest advancements in the field. We foster a culture of continuous learning and growth, encouraging our team members to expand their knowledge and skills.</p>
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
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Collaborative and Supportive Environment</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 2 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We value teamwork and collaboration. At Nebula Vets, you will be part of a supportive and inclusive team that shares a common goal: providing exceptional care to our patients. Our collaborative environment encourages open communication, knowledge sharing, and mutual support among team members.</p>
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
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Advanced Facilities and Technology</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 3 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Nebula Vets is equipped with state-of-the-art facilities and cutting-edge technology to support our veterinary professionals. We believe in investing in the best resources to deliver outstanding care. Our advanced equipment and tools enable our team to provide accurate diagnoses and deliver effective treatments.</p>
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
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Focus on Work-Life Balance</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 4 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We understand the importance of maintaining a healthy work-life balance. At Nebula Vets, we strive to create schedules that allow our team members to enjoy their personal lives while pursuing fulfilling careers. We prioritize employee well-being and believe that a happy team leads to better patient care.
           </p>
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
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Continuous Professional Development</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 5 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Nebula Vets is committed to the growth and development of our team members. We offer opportunities for continuing education, conferences, workshops, and training programs to enhance your veterinary skills and broaden your knowledge base. We believe in supporting your professional goals and providing the resources you need to excel in your career.</p>
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
                             <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>A Culture of Compassion</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
                             {openAccordion === 6 && (
                                 <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, compassion is at the heart of everything we do. We not only care for our patients but also prioritize empathy and understanding towards their families. Our team is dedicated to delivering personalized care with kindness, sensitivity, and respect.</p>
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
                             </div>
  )
}

export default Career