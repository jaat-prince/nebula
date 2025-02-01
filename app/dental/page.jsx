import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herode from '../components/Folder/Fivethcare/Herode'
import Wedental from '../components/Folder/Fivethcare/Wedental'
import Vetdental from '../components/Folder/Fivethcare/Vetdental'
import Scalede from '../components/Folder/Fivethcare/Scalede'
import Dentalde from '../components/Folder/Fivethcare/Dentalde'

function page() {
  return (
    <div>
<Navbar/>
<Herode/>
<Scalede/>
<Dentalde/>
<Vetdental/>
<Wedental/>
<Footer/>

    </div>
  )
}

export default page