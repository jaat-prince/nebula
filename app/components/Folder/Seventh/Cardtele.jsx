import React from 'react'
import Button from '../../Common/Button'
import Slidetele from './Slidetele'


function Cardtele() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-[60px] lg:py-[80px] ">
<Slidetele/>
      <div className='mt-[47px] lg:mt-[80px] flex justify-center'>
      <Button
                btn={"CHAT WITH A VET"}
                btnclass={"max-sm:py-[8px] max-sm:px-[19px] px-[33px] py-[10px]"}
              />
      </div>
    </div>
  )
}

export default Cardtele