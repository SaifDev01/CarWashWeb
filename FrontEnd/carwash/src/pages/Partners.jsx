import React from 'react'
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import HeroSection from '../components/HeroSection/HeroSection';
import Services1 from '../components/Services1/Services1';
import Testimonials from '../components/Testimonial/Testimonial'
import GetApp from '../components/GetApp/GetApp';
function Partners() {
  return (
    <>
    <HeroSection link='partners' />
    <Services1/>
    <Testimonials/>
    
    <GetApp/>
    <RegisterWithUs/>
    </>
  )
}

export default Partners