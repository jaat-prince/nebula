import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Visitpr from '../components/Folder/Eighteen-page/Visitpr'
import Heropr from '../components/Folder/Eighteen-page/Heropr'
import Downpr from '../components/Folder/Eighteen-page/Downpr'

function page() {
  return (
    <div>
<Navbar/>
<Heropr/>
<Downpr/>
<Visitpr/>
<Footer/>
    </div>
  )
}

export default page