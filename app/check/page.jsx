import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Heroch from '../components/Folder/Animal check/Heroch'
import Examch from '../components/Folder/Animal check/Examch'
import Vetsch from '../components/Folder/Animal check/Vetsch'
import Soonch from '../components/Folder/Animal check/Soonch'

function page() {
  return (
    <div>
        <Navbar/>
        <Heroch/>
        <Examch/>
        <Vetsch/>
        <Soonch/>
        <Footer/>
    </div>
  )
}

export default page