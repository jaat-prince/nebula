import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import Herodi from '../components/Folder/Eighth-page/Herodi'
import Testdi from '../components/Folder/Eighth-page/Testdi'
import Panel from '../components/Folder/Eighth-page/Panel'
import Digitdi from '../components/Folder/Eighth-page/Digitdi'
import Imagingdi from '../components/Folder/Eighth-page/Imagingdi'
import Youdi from '../components/Folder/Eighth-page/Youdi'
import Snapdi from '../components/Folder/Eighth-page/Snapdi'

function page() {
  return (
    <div>
<Navbar/>
<Herodi/>
<Testdi/>
<Panel/>
<Imagingdi/>
<Digitdi/>
<Snapdi/>
<Youdi/>
<Footer/>

    </div>
  )
}

export default page