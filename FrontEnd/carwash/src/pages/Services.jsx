import React from 'react'
import PartnerSlider from '../components/PartnerSlider/PartnerSlider';
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import HeroSection from '../components/HeroSection/HeroSection';
import Steps from '../components/Steps/Steps';
import GetApp from '../components/GetApp/GetApp'
function Services() {
  return (
    <>
    <HeroSection link='services' />
    <Steps/>
    <PartnerSlider/>
      <GetApp/>
      <RegisterWithUs/>
    </>
  )
}

export default Services