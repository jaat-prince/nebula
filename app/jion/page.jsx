import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Ourji from '../components/Folder/Nineteen-page/Ourji'
import Heroji from '../components/Folder/Nineteen-page/Heroji'
import Career from '../components/Folder/Nineteen-page/Career'
import Silderji from '../components/Folder/Nineteen-page/Silderji'

function page() {
  return (
    <div>
<Navbar/>
<Heroji/>
<Silderji/>
<Career/>
<Ourji/>
<Footer/>
    </div>
  )
}

export default page