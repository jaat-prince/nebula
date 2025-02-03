import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Heromi from '../components/Folder/Fourteen-page/Heromi'
import Wisemi from '../components/Folder/Fourteen-page/Wisemi'
import Lookmi from '../components/Folder/Fourteen-page/Lookmi'

function page() {
  return (
    <div>
        <Navbar/>
        <Heromi/>
        <Wisemi/>
        <Lookmi/>
<Footer/>
    </div>
  )
}

export default page