import React from 'react'
import Footer from '../components/Common/Footer'
import Navbar from '../components/Common/Navbar'
import Herosp from '../components/Folder/Evlenth-page/Herosp'
import Wesp from '../components/Folder/Evlenth-page/Wesp'
import Spaysp from '../components/Folder/Evlenth-page/Spaysp'
import Neutersp from '../components/Folder/Evlenth-page/Neutersp'
import Whysp from '../components/Folder/Evlenth-page/Whysp'

function page() {
  return (
    <div>
        <Navbar/>
        <Herosp/>
        <Whysp/>
        <Neutersp/>
        <Spaysp/>
        <Wesp/>
        <Footer/>
    </div>
  )
}

export default page