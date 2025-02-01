"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Dentalde() {
     const [openAccordion, setOpenAccordion] = useState(null);
    
        const toggleAccordion = (index) => {
          setOpenAccordion((prevState) => (prevState === index ? null : index)); 
        };
  return (
     <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
            <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose Nebula Vets for Dental Care:</h1>
            <div className='mt-[40px] w-full max-w-[980px]'>
    <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Oral Health and Beyond</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 1 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Dental health plays a significant role in your pet's overall well-being. Poor oral hygiene can lead to various issues such as gum disease, tooth decay, infections, and even systemic health problems affecting vital organs. Regular dental care can prevent these issues, promoting a healthier and longer life for your furry friend.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Comprehensive Dental Examinations</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 2 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our skilled veterinarians perform thorough dental examinations, assessing your pet's teeth, gums, and oral tissues. We check for signs of dental disease, tartar buildup, tooth decay, and other oral abnormalities. This comprehensive evaluation allows us to detect potential issues early and provide timely treatment.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Professional Teeth Cleaning</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 3 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Dental cleanings are an essential part of maintaining your pet's oral health. Our state-of-the-art dental equipment and techniques allow us to perform professional cleanings with precision and care. We remove plaque, tartar, and bacteria from the teeth and gum line, ensuring a fresh and clean mouth.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Periodontal Disease Management</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 4 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Periodontal disease is a common dental condition in pets. We are well-equipped to manage and treat this condition. Our dental services include deep cleaning, periodontal therapy, and extraction of severely affected teeth, providing relief and restoring oral health.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Tooth Extractions and Oral Surgery</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 5 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>In some cases, tooth extractions or oral surgery may be necessary to address severe dental disease, fractured teeth, or other oral conditions. Our veterinarians have expertise in performing these procedures with precision and ensuring your pet's comfort throughout.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Pain Management and Anesthesia</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 6 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Your pet's comfort is our priority. We utilize modern anesthesia protocols and advanced pain management techniques to ensure their safety and minimize any discomfort during dental procedures. Our experienced team closely monitors your pet throughout the process, ensuring a smooth and stress-free experience.</p>
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
        <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Client Education and Home Care</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
        {openAccordion === 7 && (
            <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We believe in empowering pet owners with knowledge. Our dental care services include client education on proper dental hygiene at home, brushing techniques, and recommended dental care products. We provide guidance on preventive measures, diet choices, and regular dental check-ups to maintain your pet's oral health between visits.</p>
        )}
          <Image
                                      src={"/assets/png/line.png"}
                                      width={603}
                                      height={376}
                                      alt="logo"
                                      className="w-full mt-[32px]"
                                    />
            </div></div>
    
        </div>
  )
}

export default Dentalde