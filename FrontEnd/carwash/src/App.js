import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/HeroSection/HeroSection'
import Cards from './components/Cards/Cards';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Order from './components/Order/Order'

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
      <Cards/>  
      <ServiceCard/>
      <Order/>
      <Cards/>    
    </Router>
  
  );
}

export default App;
