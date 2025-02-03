import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Heroph from '../components/Folder/Nineth-page/Heroph'
import Nebulph from '../components/Folder/Nineth-page/Nebulph'
import Weph from '../components/Folder/Nineth-page/Weph'
import Workph from '../components/Folder/Nineth-page/Workph'
import Chooseph from '../components/Folder/Nineth-page/Chooseph'

function page() {
  return (
    <div>
<Navbar/>
<Heroph/>
<Workph/>
<Chooseph/>
<Nebulph/>
<Weph/>
<Footer/>

    </div>
  )
}

export default page