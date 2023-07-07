import React from 'react'
import './weekend.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord, FaFacebookMessenger } from "react-icons/fa"; 
import party from 'party-js'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Weekend() {



  const handleConfetti = () => {
    party.confetti(document.querySelector('.weekBox'), {
      count: party.variation.range(50, 100)
    });
  }

  useEffect(() => {
    handleConfetti();
  }, []);

  return (
    
    <div className="weekBox" onClick={handleConfetti}>
      {/* <h2>Unleashed!</h2> */}
      {/* <h2 className='gre-text'>Freedom!</h2> */}
      <h2>🎉</h2>
      <h4>Weekend is here!</h4>
      <h4>Seize the Day: No Class, Pure Play! 👊</h4>
      <Link to="/cr" className='btn'>Contact CR</Link>
      <div className="socialIcons">
        <ul>
          <li><a href="https://www.whatsapp.com/" target='_'><IoLogoWhatsapp/></a></li>
          <li><a href="https://www.messegner.com/" target='_'><FaFacebookMessenger/></a></li>
          <li><a href="https://discord.com/invite/jCVgCr37nJ" target='_'><FaDiscord/></a></li>
        </ul>
      </div>
    </div>

  )
}