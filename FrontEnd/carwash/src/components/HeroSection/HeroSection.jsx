import React from 'react'
import './HeroSection.css'
import '../../App.css'
import NavBar from '../NavBar/NavBar';
import HomeImage from '../../assets/home.png';
import AboutImage from '../../assets/about.png';
import ServicesImage from '../../assets/services.png';

function HeroSection(props) {

   if(props.link === '/' || props.link === 'home'){
       return (
   
            <>
              <NavBar/>
          
              <div  style={{ background: `url(${HomeImage})  center center/cover no-repeat `}} className='hero-container'>

                  <h3>Modern Equipment</h3>
                  <h1>Interior and exterior cleaning</h1>
                  <p>We provide fast, courteous and inexpensive towing services in New York</p>

              </div>
              
              </>
  )
    }else   if(props.link === 'about'){
      return (
        <>
        <NavBar/>
        <div  style={{ background: `url(${AboutImage})  center center/cover no-repeat `}} className='hero-container'>

                   <h3>Home / About</h3>
                  <h1>About Us</h1>
                  <p>Online Booking Service</p>

        </div>
        
        </>
      )
    }

    else   if(props.link === 'services'){
      return (
        <>
        <NavBar/>
        
        <div  style={{ background: `url(${ServicesImage})  center center/cover no-repeat `}} className='hero-container'>

                   <h3>Home / Services</h3>
                  <h1>Car Washing</h1>
                  <p>Online Booking Service</p>

        </div>
        

        
        </>
      )
    }
    else   if(props.link === 'partners'){
      return (
        <>
        <NavBar/>
        <div  style={{ background: `url(${AboutImage})  center center/cover no-repeat `}} className='hero-container'>

                   <h3>Home / About</h3>
                  <h1>Service Providers</h1>
                  <p>Our Successful Marchant </p>

        </div>
        
        </>
      )
    }
    else   if(props.link === 'contact'){
      return (
        <>
        <NavBar/>
        <div  style={{ background: `url(${AboutImage})  center center/cover no-repeat `}} className='hero-container'>

                   <h3>Home / About</h3>
                  <h1>Contact Us</h1>
                  <p>Any question or remarks? Just write us a message! </p>

        </div>
        
        </>
      )
    }
 
}

export default HeroSection