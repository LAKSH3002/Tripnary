import React from 'react'
import "./Contactstyles.css";

export default function ContactForm() {
  return (
    <div className='from-container'>
      <h1>Send a Message to Us!!</h1>
      <form>
        <input placeholder='Enter Your Name'/>
        <input placeholder='Enter Your Email ID'/>
        <input placeholder='Enter Your Contact'/>
        <input placeholder='Enter Your Desired Destination'/>
        <textarea placeholder='Shoot us Your Message!!!!!' rows='6'></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}
