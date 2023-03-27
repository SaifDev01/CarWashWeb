import React from 'react'
import About2 from '../components/About2/About2';
import HeroSection from '../components/HeroSection/HeroSection';
import PartnerSlider from '../components/PartnerSlider/PartnerSlider';
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import Testimonial from '../components/Testimonial/Testimonial';
import GetApp from '../components/GetApp/GetApp'


function About() {
  return (
    <>
    
    <HeroSection link='about' image='../../assets/home.png'/>
    <About2/>
    <Testimonial/>
    <PartnerSlider/>
    <GetApp/>
    <RegisterWithUs/>
    
    </>
  )
}

export default About