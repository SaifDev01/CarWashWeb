import '../App.css'
import HeroSection from '../components/HeroSection/HeroSection'
import React from 'react'
import Cards from '../components/Cards/Cards';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import Order from '../components/Order/Order'
import GetApp from '../components/GetApp/GetApp';
import PartnerSlider from '../components/PartnerSlider/PartnerSlider';
import WeDo from '../components/WeDo/WeDo';
import RegisterWithUs from '../components/RegisterWithUs/RegisterWithUs';
import Footer from '../components/Footer/Footer';
function Home(){
    return (
        <>
        
        <HeroSection 
          link='/'
          image='../../assets/home.png'
        />
        <Cards/>
        <ServiceCard/>
      <Order/>
      <GetApp/>
      <PartnerSlider/>
      <WeDo/>
      <RegisterWithUs/>
      <Footer/>
        </>
    )
}

export default Home;