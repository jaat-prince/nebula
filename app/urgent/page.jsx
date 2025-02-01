import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Lookur from '../components/Folder/Sexth-page/Lookur'
import Herour from '../components/Folder/Sexth-page/Herour'
import Chooseur from '../components/Folder/Sexth-page/Chooseur'
import Hourur from '../components/Folder/Sexth-page/Hourur'

function page() {
  return (
    <div>
        <Navbar/>
        <Herour/>
        <Hourur/>
        <Chooseur/>
        <Lookur/>
        <Footer/>
    </div>
  )
}

export default page