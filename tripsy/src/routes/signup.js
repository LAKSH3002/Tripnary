import React from 'react'
import Navbar from '../components/Navbar'
import "../components/signup.css";
import Footer from '../components/Footer';

export default function signup() {
  return (
    <>
      <Navbar/>
      <h1 className='signup-title'>Signup To Access Itenary Feature!!</h1>
      <div className='from-container'>
      <form>
        <input placeholder='Enter Your Name' required/>
        <input placeholder='Enter Your Email ID' required/>
        <input placeholder='Enter Your Contact' required/>
        <input placeholder='City Residing in?' required/>
        <input placeholder='State and Country Residing in?' required/>
        <button>SignUp Now!</button>
      </form>
      </div>
    </>
  );
}
