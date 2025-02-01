"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Chooseur() {
     const [openAccordion, setOpenAccordion] = useState(null);
        
            const toggleAccordion = (index) => {
              setOpenAccordion((prevState) => (prevState === index ? null : index)); 
            };
  return (
      <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
               <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose Nebula Vets for Emergency and Urgent Care:</h1>
               <div className='mt-[40px] w-full max-w-[980px]'>
       <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Immediate Access to Care</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 1 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Skilled Veterinary Team</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 2 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our veterinarians have extensive experience in emergency medicine and are well-versed in handling urgent and critical cases. They possess the knowledge, skills, and quick decision-making abilities necessary to provide the best possible care for your pet in emergency situations.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>State-of-the-Art Facilities</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 3 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Nebula Vets is equipped with advanced diagnostic equipment and medical technology to support our emergency and urgent care services. From digital radiography and ultrasound to an in-house laboratory, we have the tools needed to quickly and accurately diagnose your pet's condition, enabling us to provide appropriate and timely treatments.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Compassionate and Calm Approach</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 4 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We understand that emergencies can be stressful and emotional for both you and your pet. Our veterinary team is trained to handle these situations with compassion and a calm demeanor. We prioritize providing a comforting environment to help alleviate anxiety and provide support to both you and your pet during difficult times.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Comprehensive Emergency Services</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 5 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Nebula Vets offers a wide range of emergency services, including critical care, trauma management, stabilization, pain management, and advanced life-saving procedures. We are equipped to handle various emergencies, such as severe injuries, poisoning, respiratory distress, seizures, and more.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Collaborative Care</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 6 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We believe in open communication and collaboration. Our team works closely with you to ensure you understand your pet's condition, treatment options, and associated costs. We provide transparent and compassionate guidance to help you make informed decisions about your pet's emergency care.</p>
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
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Seamless Referrals</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 7 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>In complex cases requiring specialized care, we maintain strong relationships with local specialty hospitals and can facilitate seamless referrals when necessary. We work together with trusted specialists to ensure your pet receives the best possible care for their specific needs.</p>
           )}
             <Image
                                         src={"/assets/png/line.png"}
                                         width={603}
                                         height={376}
                                         alt="logo"
                                         className="w-full mt-[32px]"
                                       />
               </div>
       <div className='accordion-title cursor-pointer mt-[32px]' onClick={() => toggleAccordion(8)}>
           <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Emergency Preparedness</span> <span className="ml-2"> {openAccordion === 8 ? <CrossIcon /> : <AddIcon />}</span></h1>
           {openAccordion === 8 && (
               <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We encourage pet owners to be prepared for emergencies. Keep our contact information readily available and familiarize yourself with basic first aid for pets. Prompt action and early intervention can make a significant difference in emergency situations.</p>
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

export default Chooseur