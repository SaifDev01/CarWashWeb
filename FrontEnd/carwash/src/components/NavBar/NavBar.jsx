import React , {useState} from 'react'
import {Link} from 'react-router-dom'
// import { Button } from '../Button/Button'
import './NavBar.css' 
function NavBar() {
  const [click , setClick] = useState(false)
  const handleClick = ()=> setClick(!click)
  const closeMobileMenu = ()=> setClick(false)


  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className= "navbar-logo">
                LOGO
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/partners' className='nav-links' onClick={closeMobileMenu}>
                  Partners
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
            {/* {button &&  <Button buttonStyle='btn--outline'>SignUp</Button> } */}
        </div>
    </nav>
    </>
  )
}

export default NavBar