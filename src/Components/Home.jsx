import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {FaFilePdf} from 'react-icons/fa'
import pdfLink from "../assets/pdf/Spring_23_11.pdf"

export default function Home() {
  return (
    <div className="homeMain">
      <h1>North East University Bangladesh</h1>
      <h2>Spring 23 Routine</h2>
      <div className="homeSelectArea">
      <h4>Select your Section:</h4>
      <Link to="/sectionA"><button className='btn'>Section A</button></Link>
      <Link to="/sectionB"><button className='btn'>Section B</button></Link>
      </div>
      <a className='downloadPDF' href={pdfLink} download><i><FaFilePdf/></i> Download PDF</a>
    </div>
  )
}
