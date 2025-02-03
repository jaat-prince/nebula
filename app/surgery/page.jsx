import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosu from '../components/Folder/Tenth-page/Herosu'
import Caresu from '../components/Folder/Tenth-page/Caresu'
import Petssu from '../components/Folder/Tenth-page/Petssu'
import Doessu from '../components/Folder/Tenth-page/Doessu'
import Wesu from '../components/Folder/Tenth-page/Wesu'

function page() {
  return (
    <div>
        <Navbar/>
        <Herosu/>
        <Doessu/>
        <Petssu/>
        <Caresu/>
      <Wesu/>
        <Footer/>
    </div>
  )
}

export default page