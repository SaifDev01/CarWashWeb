import React from 'react';
import  { useState } from 'react'   
import './ContactForm.css'
import { TextField  } from '@mui/material';
import { FormControl } from '@mui/material';
import axios from 'axios'

import InputAdornment from '@mui/material/InputAdornment';
function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');
//   const [subject , setSubject] = useState('')
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject : '',
    phone : '',
  })

  const handleSubmit = (event) => {
    
    // axios.post('')
    console.log(formData);
    axios.post('http://localhost:4000/api/v1/form-submit', formData).then((response)=>console.log(response))




    event.preventDefault();
    // Handle form submission
  }
  const handleKeyDown = (event) => {
    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <>
    
    <FormControl className='sbt-one' onSubmit={handleSubmit}>
    <div className="contact-form">

                <div className="contact-inner">
                    <div className="inner-black">
                        <div className="text-cont">
                            <h1 className='green-text'>Contact Information</h1>
                            <p className='white-text'>Say something to start a live chat!</p>
                        </div>
                        <div className="info-cont">
                        <div className="text-image-1">
                            <div className="ti-1 odd">
                                    <img src="Vector (2).svg" alt="" />
                                    <h3 className='white-text'>+1012 3456 789</h3>
                            </div>
                            <div className="ti-1 odd">
                                    <img src="Vector (2).svg" alt="" />
                                    <h3 className='white-text'>demo@gmail.com</h3>
                            </div>
                            <div className="ti-1 odd">
                                    <img src="Vector (2).svg" alt="" />
                                    <h3 className='white-text'>132 Dartmouth Street Boston, Massachusetts 02156 United States</h3>
                            </div>
                            </div>
                        </div>
                        <div className="social-cont">
                            <button>
                                <img className='socials' src="facebook.svg" alt="" />
                            </button>
                            <button>
                            <img className='socials' src="twitter2.svg" alt="" />
                            </button>
                            <button>
                            <img className='socials' src="insta.svg" alt="" />
                            </button>
                            <button>
                            <img className='socials' src="lin.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="info-contact">
                        <form className='form-contact' id='form-1'>
                            <div className="name-email">
                                <TextField required className='standard-basic'  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder='Write your full name' label="Full Name" variant="standard" />
                                <TextField required type='email' className='standard-basic' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder='Write your email' label="Email" variant="standard" />
                            </div>
                            <div className="name-email">
                                <TextField InputProps={{
                                        
            startAdornment: (
            <InputAdornment position="start">+1</InputAdornment>
            ),inputProps:{
                maxLength : 9,
                inputMode: 'numeric',
                pattern: '[0-9]*',
                onKeyDown : handleKeyDown
             
            },
        }} type='tel' className='standard-basic' value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} 
        placeholder='Write your phone number'  label="Phone Number" variant="standard" />
                                <TextField required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className='standard-basic' label="Subject" variant="standard" />
                            </div>
                            <div className="name-email">
                            <TextField required  multiline value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className='standard-basic' placeholder='Write a message' label="Message" variant="standard" />
                            </div>
                            <div className='btn-container-20'>
                                <button className='btn-submit' type="submit">Submit</button>
                            </div>
                            <div className='letter-img'>
                                    <img src="letter.svg" alt="" />
                            </div>
                        </form>
                    </div>
                </div>
             
            </div>
            </FormControl>
    </>
  );
                    }


export default ContactForm;
