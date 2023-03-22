import React from 'react'
import './WeDo.css'
import ServiceSlideshow from '../SlideService/SlideService'
function WeDo() {
  return (
  
  <>
  <div className="all-container">
    <div className='text-container'>
        <div className='all-text'>
        <h3>What We Do</h3>
        <h1>Premium Washing Services</h1>
        <p>Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt, enim lorem scelerisque massa, vel ultricies.</p>
        </div>
    </div>
    <div className="car-red">
      <div className="car-container">
        
      </div>
      <div className="slide-container">
      <ServiceSlideshow/>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default WeDo