import React from 'react'

function Map() {
  return (
    <div className="mapouter">
    <div className="gmap_canvas">
      <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" 
        src="https://maps.google.com/maps?width=700&amp;height=570&amp;hl=en&amp;q=2468 18th Street, SW, Washington DC, 20003&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>
      <a href="https://sprunkin.com/">Sprunki Phases</a>
    </div>
  </div>
  
  )
}

export default Map