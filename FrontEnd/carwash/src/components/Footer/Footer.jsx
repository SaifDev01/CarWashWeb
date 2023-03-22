import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='foot-main'>
        <div className="logo-container">
            <h1 className='logo-text similar'> LOGO</h1>
            <p className='moto-text similar'>"Upgrade your car maintenance routine for less with our discount vouchers on popular services."
            </p>
        </div>
        <div className="contact-container">
            <div className="contact-1">
                <div className="info">
                    <img src="Vector (2).svg" alt="" />
                    <p className='similar'>+123456789</p>
                    
                </div>
               

            </div>
            <div className="contact-1">
                <div className="info">
                    <img src="Vector (2).svg" alt="" />
                    <p className='similar'>info@domainname.com</p>
                </div>
            </div>
            <div className="contact-1">
                <div className="info">
                    <img src="Vector (2).svg" alt="" />
                    <p className='similar'>Mon-Sat 07:00 AM-10:00 PM</p>

                </div>
              
                
            </div>
        </div>
        <div className="right-container-1">
            <span className='similar copy'>Powered By Traxxis © All Rights Reserved - 2023
</span>
        </div>
    </div>
  )
}

export default Footer