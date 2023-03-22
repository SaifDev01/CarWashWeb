import React from 'react'
import Footer from '../components/Footer/Footer';
import PartnerSlider from '../components/PartnerSlider/PartnerSlider';
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import WeDo from '../components/WeDo/WeDo';
import HeroSection from '../components/HeroSection/HeroSection';
import Services1 from '../components/Services1/Services1';
import Testimonials from '../components/Testimonial/Testimonial'

function Partners() {
  return (
    <>
    <HeroSection link='partners' />
    <Services1/>
    <Testimonials/>
    <PartnerSlider/>
    <WeDo/>
    <RegisterWithUs/>
    <Footer/>    
    </>
  )
}

export default Partners