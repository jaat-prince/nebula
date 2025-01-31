import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herova from '../components/Folder/Fourthva/Herova'
import Petva from '../components/Folder/Fourthva/Petva'
import Coreva from '../components/Folder/Fourthva/Coreva'
import Whenva from '../components/Folder/Fourthva/Whenva'

function page() {
  return (
    <div>
<Navbar/>
<Herova/>
<Coreva/>
<Whenva/>
<Petva/>
<Footer/>

    </div>
  )
}

export default page