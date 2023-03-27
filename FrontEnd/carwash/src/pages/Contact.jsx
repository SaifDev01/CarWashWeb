import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import GetApp from '../components/GetApp/GetApp';
import ContactForm from '../components/ContactForm/ContactForm';


function Contact() {
  return (
    <>
     <HeroSection link='contact' /> 
      <ContactForm/>  
     <GetApp/>
     
        </>
  )
}

export default Contact