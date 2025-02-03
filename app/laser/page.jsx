import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herila from '../components/Folder/Fiveteen-page/Herila'
import Powerla from '../components/Folder/Fiveteen-page/Powerla'
import Therala from '../components/Folder/Fiveteen-page/Therala'
import Lookla from '../components/Folder/Fiveteen-page/Lookla'
import Fqala from '../components/Folder/Fiveteen-page/Fqala'

function page() {
  return (
    <div>
<Navbar/>
<Herila/>
<Powerla/>
<Fqala/>
<Therala/>
<Lookla/>
<Footer/>

    </div>
  )
}

export default page