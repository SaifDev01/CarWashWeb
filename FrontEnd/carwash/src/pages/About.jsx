import React from 'react'
import About2 from '../components/About2/About2';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
// import NavBar from '../components/NavBar/NavBar';
import PartnerSlider from '../components/PartnerSlider/PartnerSlider';
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import Testimonial from '../components/Testimonial/Testimonial';
import WeDo from '../components/WeDo/WeDo';


function About() {
  return (
    <>
    
    <HeroSection link='about' image='../../assets/home.png'/>
    <About2/>
    <Testimonial/>
    <PartnerSlider/>
    <WeDo/>
    <RegisterWithUs/>
    <Footer/>    
    </>
  )
}

export default About