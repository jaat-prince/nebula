"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Neutersp() {
    const [openAccordion, setOpenAccordion] = useState(null);
                    
                        const toggleAccordion = (index) => {
                          setOpenAccordion((prevState) => (prevState === index ? null : index)); 
                        };
  return (
    <div>  <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
                      <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Choose Nebula Vets for Spay and Neuter</h1>
                      <div className='mt-[40px] w-full max-w-[1080px]'>
              <div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
                  <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Experienced Surgical Team</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
                  {openAccordion === 1 && (
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, our veterinarians have extensive experience in performing spay and neuter surgeries. They possess the expertise to perform these procedures efficiently and safely, ensuring the best possible outcome for your pet.</p>
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
                  <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Health Benefits</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
                  {openAccordion === 2 && (
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Spaying (for females) and neutering (for males) offer numerous health benefits for your pets. Spaying helps prevent uterine infections and reduces the risk of mammary tumors and ovarian cancers, while neutering eliminates the risk of testicular cancer and reduces the incidence of prostate problems. These procedures can also help in curbing certain behavioral issues related to mating instincts.</p>
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
                  <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Surgical Expertise</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
                  {openAccordion === 3 && (
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our veterinary hospital is equipped with state-of-the-art surgical facilities and advanced monitoring equipment. We utilize modern anesthetic protocols and closely monitor your pet's vital signs during the procedure, ensuring their safety and well-being. Our surgical team adheres to the highest standards of precision and sterilization to minimize the risk of complications.</p>
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
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we believe in providing personalized care for each pet. Our veterinarians will evaluate your pet's overall health and discuss the appropriate timing and procedure options based on their age, breed, and individual needs. We prioritize open communication and are here to answer any questions or address any concerns you may have.
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
                  <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Compassionate Post-Surgical Care</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
                  {openAccordion === 5 && (
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>After the spay or neuter procedure, our dedicated staff provides compassionate post-operative care to support your pet's recovery. We provide detailed instructions on pain management, incision care, and follow-up appointments to ensure a smooth healing process. Our team is available to address any concerns and provide guidance throughout your pet's recovery journey.</p>
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
                  <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Overpopulation Control</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
                  {openAccordion === 6 && (
                      <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>By choosing to spay or neuter your pet, you contribute to controlling the overpopulation of animals. Countless unwanted animals end up in shelters or face a life on the streets. Spaying and neutering are responsible choices that help reduce the number of homeless pets and ensure a healthier pet population overall.</p>
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

export default Neutersp