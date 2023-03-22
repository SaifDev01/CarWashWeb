import './App.css';
import React from 'react';
// import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
// import Home from './components/HeroSection/HeroSection'.
import Home from './pages/Home'
import Services from './pages/Services'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import About from './pages/About'
  





function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/about' exact Component={About} />
       <Route path='/services' exact Component={Services} />
       <Route path='/partners' exact Component={Partners} />
          <Route path='/contact' exact Component={Contact} />

      </Routes>

      
    </Router>
    
  
  );
}

export default App;
