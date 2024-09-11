import React from 'react'
import "./Contactstyles.css";

export default function ContactForm() {
  return (
    <div className='from-container'>
      <h1>Send a Message to Us!!</h1>
      <form>
        <input placeholder='Enter Your Name'/>
        <input placeholder='Enter Your Email ID'/>
        <input placeholder='Enter Your Subject'/>
        <textarea placeholder='Message' rows='4'></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}
