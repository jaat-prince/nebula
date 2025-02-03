"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Skinsk() {
      const [openAccordion, setOpenAccordion] = useState(null);
                        
                            const toggleAccordion = (index) => {
                              setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                            };
  return (
    <div>  <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                          <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose Nebula Vets for Dermatology and Skin Care:</h1>
                          <div className='mt-[40px] w-full max-w-[1080px]'>
                  <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Specialized Expertise</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 1 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our veterinary team includes experienced dermatologists who have a deep understanding of skin conditions and diseases affecting pets. With their specialized knowledge and advanced training, they are equipped to diagnose and treat a wide range of dermatological issues.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Comprehensive Skin Examinations</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 2 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We begin with a thorough examination of your pet's skin, coat, and overall health. Our dermatologists will assess any existing skin problems, identify potential allergies or infections, and perform necessary diagnostic tests to determine the root cause of the issue.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Advanced Diagnostic Techniques</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 3 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we employ state-of-the-art diagnostic techniques to gain a comprehensive understanding of your pet's skin condition. This may include skin scrapings, cytology, bacterial and fungal cultures, allergy testing, and biopsies. These tests provide valuable insights that guide our treatment approach.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Personalized Treatment Plans</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 4 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Every pet is unique, and their skin care needs vary. Our dermatologists develop personalized treatment plans tailored to your pet's specific condition, considering factors such as their breed, age, and medical history. We utilize a combination of medications, topical treatments, dietary adjustments, and lifestyle modifications to address the underlying causes and provide effective relief.
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Allergy Management</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 5 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Allergies are a common cause of skin issues in pets. Our dermatologists have expertise in identifying and managing allergies, whether they are due to food, environmental factors, or parasites. We offer allergy testing, immunotherapy, and recommend appropriate allergen avoidance strategies to help your pet find relief.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Parasite Control</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 6 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Fleas, ticks, and other parasites can wreak havoc on your pet's skin and coat. Our dermatology services include comprehensive parasite control, providing preventive measures and effective treatment options to keep your pet protected and their skin healthy.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Client Education and Support</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 7 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>We believe in empowering pet owners with knowledge and understanding. Our dermatology team will provide you with detailed information about your pet's skin condition, treatment options, and long-term care recommendations. We are here to answer your questions and support you throughout your pet's skin care journey.</p>
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
                      <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Follow-up Care</span> <span className="ml-2"> {openAccordion === 8 ? <CrossIcon /> : <AddIcon />}</span></h1>
                      {openAccordion === 8 && (
                          <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Dermatological conditions often require ongoing management. We offer follow-up appointments to monitor your pet's progress, adjust treatment plans if needed, and ensure optimal skin health in the long run. We are committed to being with you every step of the way.</p>
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

export default Skinsk