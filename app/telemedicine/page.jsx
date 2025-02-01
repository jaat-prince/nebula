import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Vettele from '../components/Folder/Seventh/Vettele'
import Herotele from '../components/Folder/Seventh/Herotele'
import Usetele from '../components/Folder/Seventh/Usetele'
import Cardtele from '../components/Folder/Seventh/Cardtele'

function page() {
  return (
    <div>
        <Navbar/>
        <Herotele/>
        <Usetele/>
        <Cardtele/>
        <Vettele/>
        <Footer/>
    </div>
  )
}

export default page