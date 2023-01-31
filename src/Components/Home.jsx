import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="homeMain">
      <h1>North East University Bangladesh</h1>
      <h2>Spring 23 Routine</h2>
      <div className="homeSelectArea">
      <h3>Select your Section</h3>
      <Link to="/"><button className='btn'>Section A</button></Link>
      <Link to="/"><button className='btn'>Section B</button></Link>
      </div>
    </div>
  )
}
