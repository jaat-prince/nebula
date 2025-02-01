import Image from 'next/image'
import React from 'react'

function Scalede() {
  return (
     <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[140px] relative'>
                <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
                    <div className='w-full absolute bottom-0 left-[0px]'>
                          <Image
                                              src={"/assets/png/wave-2.png"}
                                              width={1440}
                                              height={450}
                                              alt="logo"
                                              className="w-full"
                                            />
                    </div>
                    <div className='w-full max-w-[1075px]'>
                        <div>
        <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>Dentals - Scale & Polish</h1>
        <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Dental health is a vital aspect of your pet's overall well-being. Just like humans, pets can experience dental problems, including plaque buildup, gum disease, and tooth decay. At Nebula Vets, we prioritize dental care and offer comprehensive dental services to ensure your pet's oral health remains in top condition.</p>
        </div>
                        <div className='w-full max-w-[1075px] mt-5 md:mt-[38px] lg:mt-[50px]'>
        <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>When to schedule a dental consultation</h1>
        <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options.</p>
        </div>
                        <div className='w-full max-w-[1075px] mt-5 md:mt-[38px] lg:mt-[50px]'>
        <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px] w-full max-sm:max-w-[188px]'>Post Dental Care</h1>
        <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable.</p>
        </div>
           </div>
                </div>
            </div>
  )
}

export default Scalede