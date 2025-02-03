import Image from 'next/image'
import React from 'react'

function Whysp() {
  return (
   <div className='bg-[var(--Grey-2,rgba(215,217,221,0.50))] pt-[60px] md:pt-[80px] pb-[120px] md:pb-[146px] relative'>
          <div className='max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 md:ml-[65px]'>
         <div className='w-full absolute bottom-0 left-[0px]'>
                                         <Image
                                                             src={"/assets/png/wave-5.png"}
                                                             width={1440}
                                                             height={455}
                                                             alt="logo"
                                                             className="w-full"
                                                           />
                                   </div>
         <div className='w-full max-w-[1075px]'>
          <div>
                       <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal'>Why spay or neuter?</h1>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Spaying and neutering has many health and behavioral benefits for your cat or dog. Spaying at a young age has been shown to reduce the occurrence of mammary cancers and uterine infections (also known as pyometra). It also removes heat cycles and coming into season.</p>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Neutering has been proven to prevent testicular cancer and may prevent different forms of prostate diseases, and both spaying and neutering may also help prevent or alter unwanted behaviors, such as aggressive behavior and urine marking.</p>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av'>When to spay or neuter.</p>
                       <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]'>When to spay or neuter?</h1>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Dog spays and neuters are performed between the ages of 6 and 9 months of age. Large breed dogs, it is advised to wait until they’re a little older to take full advantage of their growth hormones and allow their bones to mature.</p>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Cat spays and neuters should typically be carried out around 6 months of age.</p>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>In older pets who are no spayed or neutered, we’ll discuss all of your options at your first wellness visit and advise on the best time for your pet to be spay or neutered.</p>
                       <h1 className='text-[var(--Brown,#494336)] ff-av text-2xl md:text-[32px] lg:text-[36px] font-normal mt-5 lg:mt-[30px]'>Long-Term Cost Savings</h1>
                       <p className='text-[var(--Brown,#494336)] text-sm sm:text-base md:text-lg lg:text-xl font-normal ff-av mt-5 lg:mt-[30px]'>Spaying or neutering your pet can save you money in the long run. The cost of the procedure is typically less than the expenses associated with caring for a litter or treating health conditions that may arise from not being spayed or neutered.</p>
                     
                       </div>
         </div>
         </div>
          </div>
  )
}

export default Whysp