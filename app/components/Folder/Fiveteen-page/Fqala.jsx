"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Fqala() {
    const [openAccordion, setOpenAccordion] = useState(null);
                            
                                const toggleAccordion = (index) => {
                                  setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                                };
  return (
      <div>  <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                              <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Benefits of Laser Therapy:</h1>
                              <div className='mt-[40px] w-full max-w-[1080px]'>
                      <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Pain Relief</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 1 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>During a laser therapy session, a handheld device emits a concentrated beam of laser light that penetrates the targeted tissues. The light energy is absorbed by the cells, stimulating the production of adenosine triphosphate (ATP), a molecule that fuels cellular activities. This increase in ATP promotes accelerated tissue repair, reduces inflammation, and relieves pain.</p>
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Accelerated Healing</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 2 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>The focused laser light stimulates cellular metabolism and blood flow to the treated area, enhancing the delivery of oxygen, nutrients, and immune cells. This accelerated healing process promotes tissue repair, reduces scar tissue formation, and aids in wound healing.</p>
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Reducedued Inflammation</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 3 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Laser therapy has anti-inflammatory effects by reducing swelling and increasing lymphatic drainage. This is especially beneficial for pets with inflammatory conditions, such as soft tissue injuries, skin infections, or dental diseases.</p>
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Non-Invasive and Drug-Free</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 4 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Laser therapy is a non-invasive alternative to traditional pain management methods, such as medication or surgery. It does not require anesthesia or sedation, making it a safe and stress-free option for pets.
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Enhanced Mobility</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 5 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Pets experiencing joint stiffness or limited mobility due to musculoskeletal conditions can benefit from laser therapy. By reducing inflammation, relieving pain, and promoting tissue repair, laser therapy helps improve range of motion, allowing pets to move more comfortably.</p>
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Quick and Convenient</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 6 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Laser therapy sessions are typically short and can be completed within a few minutes. Pets experience no discomfort during the treatment and often find it relaxing. The frequency and duration of the sessions depend on the pet's condition and response to therapy.</p>
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
                          <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Complementary to Other Treatments</span> <span className="ml-2"> {openAccordion === 7 ? <CrossIcon /> : <AddIcon />}</span></h1>
                          {openAccordion === 7 && (
                              <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Laser therapy can be used in conjunction with other treatment modalities to enhance overall outcomes. It can complement medications, rehabilitation exercises, acupuncture, or post-operative care, providing a holistic approach to pet healthcare.</p>
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

export default Fqala