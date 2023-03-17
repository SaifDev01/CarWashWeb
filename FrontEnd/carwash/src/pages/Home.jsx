import '../App.css'
import HeroSection from '../pages/Home'
import React from 'react'
import Cards from '../components/Cards/Cards';
import ServiceCard from '../components/ServiceCard/ServiceCard';

function Home(){
    return (
        <>
        <HeroSection/>
        <Cards/>
        
        </>
    )
}

export default Home;