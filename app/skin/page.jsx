import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herosk from '../components/Folder/Thirteen-page/Herosk'
import Skinsk from '../components/Folder/Thirteen-page/Skinsk'
import Nebsk from '../components/Folder/Thirteen-page/Nebsk'
import Looksk from '../components/Folder/Thirteen-page/Looksk'

function page() {
  return (
    <div>
        <Navbar/>
        <Herosk/>
        <Skinsk/>
        <Nebsk/>
        <Looksk/>
        <Footer/>
    </div>
  )
}

export default page