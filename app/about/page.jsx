import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Heroab from '../components/Folder/Seventeen-page/Heroab'
import Visinab from '../components/Folder/Seventeen-page/Visinab'
import Educab from '../components/Folder/Seventeen-page/Educab'
import Edgeab from '../components/Folder/Seventeen-page/Edgeab'
import Teamab from '../components/Folder/Seventeen-page/Teamab'

function page() {
  return (
    <div>
        <Navbar/>
        <Heroab/>
        <Visinab/>
        <Edgeab/>
        <Educab/>
        <Teamab/>
        <Footer/>
    </div>
  )
}

export default page