import React from 'react'
import "./Contactstyles.css";

export default function ContactForm() {
  return (
    <div className='from-container'>
      <h1>Send a Message to Us!!</h1>
      <form>
        <input placeholder='Enter Your Name' required/>
        <input placeholder='Enter Your Email ID' required/>
        <input placeholder='Enter Your Contact' required/>
        <input placeholder='Enter Your Desired Destination' required/>
        <textarea placeholder='Shoot us Your Message!!!!!' rows='6' required></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}
