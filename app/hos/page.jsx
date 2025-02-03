import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Heroho from '../components/Folder/Sixteen-page/Heroho'
import Euthho from '../components/Folder/Sixteen-page/Euthho'

function page() {
  return (
    <div>
        <Navbar/>
        <Heroho/>
        <Euthho/>
        <Footer/>
    </div>
  )
}

export default page