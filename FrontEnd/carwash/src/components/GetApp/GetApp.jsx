import React from 'react'
import './GetApp.css'
function GetApp() {
  return (
    <>
     <div className='get-app '>
          <div className="left-container">
              <h1 className='get-app-heading' >Hurry To Join the</h1>
              <h1 className='get-app-heading-2' >DISCOUNT PROGRAM</h1>
          </div>
          <div className="right-container">

                  <div className="btn-cont">
          
                         <button className='get-app-button'>GET THE APP NOW</button>

                      <div className="app-btn-cont">

                          <img className='me' src="Appstore.png" alt="" />
                          <img className='you' src="playstore.png" alt="" /> 
                      </div>
                  </div>
            </div>
    </div>  

   
    </>
    


  )
}

export default GetApp