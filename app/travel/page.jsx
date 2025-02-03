import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herotr from '../components/Folder/Telweth-page/Herotr'
import Travelpr from '../components/Folder/Telweth-page/Travelpr'
import Wetr from '../components/Folder/Telweth-page/Wetr'

function page() {
  return (
    <div>
        <Navbar/>
        <Herotr/>
        <Travelpr/>
        <Wetr/>
        <Footer/>
    </div>
  )
}

export default page