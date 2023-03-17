import React from 'react'
// import CardItem from '../CardItem/CardItem'
import './Cards.css'


function Cards() {
  return (<>
    <div className='cards'>
     
        <div className="cards__container">
        <h1>
          Professional washing and cleaning of car
        </h1>
        <p>
        Phasellus in arcu dapibus, lobortis est in,
        suscipit diam. Vivamus faucibus faucibus eros
        et porttitor. Sed est nulla, tincidunt ac ex eget, 
        dictum mollis tortor. Vivamus faucibus nec ipsum id 
        aliquam lobortis est.
        </p>

       
        <h3 className='no-color'>DOWNLOAD <span className='colorful'>THE APP</span> </h3>
        <div className="img-store"> 
          <img className='play' src="Appstore.png" alt="" />
          <img className='play' src="playstore.png" alt="" />
        </div>
        
            <div className="cards__wrapper">
                {/* <ul className='cards__items'>
                    <CardItem 
                    src="Rectangle 2landing.png"
                    text = "Explore"
                    label = 'Adventure'
                    path='/service'
                    /> 
                </ul> */}
                
            </div>
        </div>
    </div>
    <div className='cards2'>
    <div className="cards__container">
      <img className='phone' src="Rectangle 3landing2.png" alt="" />
    </div>
                
    </div>
    </>
  )
}

export default Cards