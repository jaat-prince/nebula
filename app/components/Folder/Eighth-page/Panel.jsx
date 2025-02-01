"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Panel() {
     const [openAccordion, setOpenAccordion] = useState(null);
            
                const toggleAccordion = (index) => {
                  setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                };
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                  <div className='w-full max-w-[1080px]'>
          <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Blood Panel</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 1 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Urinalysis</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 2 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Urinalysis is important in diagnosing and monitoring various conditions that can affect your pet's urinary system and overall health. Urine samples provide valuable insights into your pet's well-being, allowing us to detect and address issues such as urinary tract infections (UTIs), kidney diseases, bladder problems, and even diabetes.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Fecal Testing</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 3 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Fecal testing is significant in identifying and treating parasites that can affect the health of your pet and potentially pose a risk to your family members. Fecal testing is a vital diagnostic tool that allows us to detect the presence of various parasites, including worms and Giardia, even when your pet may not display any symptoms of disease.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Cytology</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 4 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Cytology is used for diagnosing and evaluating various conditions that may affect your pet's health. Cytology involves the analysis of cells obtained from different sources, such as skin, ears, or masses, and it provides valuable insights into identifying infections, parasites, and abnormalities, including cancerous or abnormal cells.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Histopathology</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 5 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>For a more in-depth analysis of tissues, we offer histopathology services. Tissue samples obtained through biopsies or surgical procedures are examined under a microscope, allowing us to diagnose and characterize diseases, identify tumors, and guide treatment strategies.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Tick & Heart-worm Testing</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 6 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we place a strong emphasis on preventive care and recommend annual tick and heartworm testing for your pet's overall well-being. Tick-borne diseases and heartworm disease are significant health concerns that can have severe consequences if left untreated. Regular testing, in conjunction with monthly preventatives, allows us to detect these conditions early and provide timely treatment to ensure your pet's optimal health.</p>
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
              <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Allergy Testing</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
              {openAccordion === 7 && (
                  <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Allergy Testing: Nebula Vets offers comprehensive allergy testing to identify the specific allergens that trigger your pet's allergic reactions. Through intradermal or blood-based allergy tests, we determine environmental and food allergies, allowing us to develop tailored treatment plans and improve your pet's quality of life.</p>
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

export default Panel