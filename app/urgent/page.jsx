import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Lookur from '../components/Folder/Sexth-page/Lookur'
import Herour from '../components/Folder/Sexth-page/Herour'
import Chooseur from '../components/Folder/Sexth-page/Chooseur'

function page() {
  return (
    <div>
        <Navbar/>
        <Herour/>
        <Chooseur/>
        <Lookur/>
        <Footer/>
    </div>
  )
}

export default page