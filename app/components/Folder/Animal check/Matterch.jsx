"use client"
import { useState }  from 'react'
import { AddIcon, CrossIcon } from '../../Helper/Icon'
import Image from 'next/image';

function Matterch() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
      setOpenAccordion((prevState) => (prevState === index ? null : index)); 
    };
  
  return (
    <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px] py-[60px] md:py-[80px]'>
        <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal w-full max-sm:max-w-[274px]'>Why Animal Health Checks Matter:</h1>
        <div className='mt-[40px] w-full max-w-[980px]'>
<div className='accordion-title cursor-pointer' onClick={() => toggleAccordion(1)}>
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between items-center'><span className='w-full max-[430px]:max-w-[234px]'>Early Detection and Prevention</span> <span className="ml-2"> {openAccordion === 1 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 1 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Regular health checks are essential for detecting and preventing potential health issues before they become more serious. By identifying subtle changes in your pet's health, we can address them promptly, potentially saving them from discomfort, pain, and costly treatments in the long run.</p>
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
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Tailored Care for Different Life Stages</span> <span className="ml-2"> {openAccordion === 2 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 2 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Pets go through various life stages, each with its unique needs. From playful puppies and curious kittens to mature adults and cherished seniors, our animal health checks are tailored to cater to your pet's specific life stage. We provide age-appropriate screenings, vaccinations, and personalized recommendations to support your pet's health at every stage of their journey.</p>
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
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Comprehensive Physical Examinations</span> <span className="ml-2"> {openAccordion === 3 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 3 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our skilled veterinarians perform thorough physical examinations during animal health checks, paying attention to your pet's overall appearance, body condition, vital signs, and specific areas of concern. We examine their eyes, ears, nose, mouth, teeth, skin, coat, muscles, joints, and abdomen, ensuring a comprehensive evaluation of their health.</p>
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
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Vaccinations and Preventive Care</span> <span className="ml-2"> {openAccordion === 4 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 4 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Vaccinations are crucial for protecting your pet against contagious diseases. During the animal health check, we assess your pet's vaccination status and provide any necessary boosters or updates to ensure they remain protected. Additionally, we discuss preventive care measures such as flea and tick control, heartworm prevention, and parasite control, tailoring our recommendations to your pet's individual needs.</p>
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
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Diagnostic Screenings</span> <span className="ml-2"> {openAccordion === 5 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 5 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Depending on your pet's age, breed, and medical history, we may recommend diagnostic screenings as part of the animal health check. These may include blood tests, urinalysis, fecal examinations, and imaging studies. These screenings help us assess your pet's internal health, detect underlying conditions, and provide a baseline for future comparisons.</p>
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
    <h1 className='text-base md:text-xl lg:text-2xl font-normal text-[var(--Brown,#494336)] flex justify-between'><span className='w-full max-[430px]:max-w-[234px]'>Nutritional and Behavioral Guidance</span> <span className="ml-2"> {openAccordion === 6 ? <CrossIcon /> : <AddIcon />}</span></h1>
    {openAccordion === 6 && (
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>Our veterinarians understand the impact of nutrition and behavior on your pet's overall health. During the animal health check, we offer guidance on proper nutrition, diet choices, feeding schedules, and exercise routines. We also address behavioral concerns and provide recommendations to foster a harmonious bond between you and your pet.</p>
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
        <p className='text-sm md:text-base lg:text-lg font-normal text-[#000] ff-av mt-6'>At Nebula Vets, we believe in empowering pet owners with knowledge. Our veterinarians take the time to explain the findings of the animal health check, address your questions, and provide guidance on maintaining your pet's well-being. We are here to support you on your pet care journey and offer resources for at-home care and preventive measures.</p>
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

export default Matterch