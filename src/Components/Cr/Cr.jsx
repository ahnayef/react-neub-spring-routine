import React from 'react';
import './cr.css';
import {  FaChevronCircleLeft, FaFacebook } from 'react-icons/fa';
import { RiMessengerFill, RiWhatsappFill } from 'react-icons/ri';
import { IoCallSharp } from 'react-icons/io5';
import { useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cr() {


  const tiltRef = useRef(null);
  useEffect(() => {
    const tiltElement = tiltRef.current;

    if (tiltElement) {
      VanillaTilt.init(tiltElement, {
        max: 20,
        glare: true,
        "max-glare": 0.3,
        gyroscope: true, // Enable gyroscope on mobile devices
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        scale: 1.1
      });
    }
  }, []);


  return (
    <div className="crMain">
      <div className="crBox" ref={tiltRef}>
        {/* <h1>Cr</h1> */}
        <div className="circle">
        </div>
        <h3>Hrithik Dev Nath</h3>
        <h5>জনগণের সি.আর.৭</h5>
        <div className="socialArea">
          <a href="https://wa.me/+8801729393099" target='_' className='btn' ><i><RiWhatsappFill/></i> Whattsapp</a>
          <a href="https://m.me/hrithikdev0917" target='_' className='btn' ><i><RiMessengerFill/></i> Messenger</a>
          <a href="https://www.facebook.com/hrithikdev0917" target='_' className='btn' > <i><FaFacebook/></i> Facebook</a>
          <a href="tel:+8801729393099" target='_' className='btn' > <i><IoCallSharp/></i> Call</a>
        </div>
      </div>
      <Link to="/" className='btn'><b><FaChevronCircleLeft/></b>Back</Link>
    </div>
  )
}
