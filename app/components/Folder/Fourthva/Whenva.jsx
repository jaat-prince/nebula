 "use client"
import Image from 'next/image';
 import React, {useState} from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon';
import Slideva from './Slideva';
import Secondva from './Secondva';

function Whenva() {
      const [openAccordion, setOpenAccordion] = useState(null);
    
        const toggleAccordion = (index) => {
          setOpenAccordion((prevState) => (prevState === index ? null : index)); 
        };
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] lg:py-[80px]'>
<div className='w-full max-w-[980px]'>
    <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full'>Core Dog Vaccines</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 1 && (
            <div>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>FVRCP: A combination vaccine that protects against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Rabies: Legally required in most states, for both indoor and outdoor cats</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Feline Leukemia Virus: A virus transmitted through cat bites during fights. It’s recommended for kittens even if they will not be going outdoors.</p>
            </div>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full'>Non-Core Dog Vaccines</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 2 && (
            <div>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Bordetella: A disease more commonly known as kennel cough and is required by dog boarding and daycare facilities.</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Lyme: Lyme Disease is carried by ticks and can be useful for dogs that visit areas, such as woodland areas, with high tick exposure.</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Canine Influenza Virus: Also called dog flu, a contagious virus that causes respiratory issues.</p>
            </div>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full'>Cat Core Vaccines</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 3 && (
            <div>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>FVRCP: A combination vaccine that protects against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia.</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Rabies: Legally required in most states, for both indoor and outdoor cats</p>
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av'>Feline Leukemia Virus: A virus transmitted through cat bites during fights. It’s recommended for kittens even if they will not be going outdoors.</p>
            </div>
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
<h1 className='text-2xl sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal ff-av text-[var(--Brown,#494336)] mt-[74px] md:mt-[80px]'>When to vaccinate?</h1>
<div className='mt-6 lg:mt-10'>
<Slideva/>
</div>
<div className='mt-[21px]'>
  <Secondva/>
</div>

    </div>
  )
}

export default Whenva