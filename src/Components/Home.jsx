import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {FaFilePdf, FaShareAlt, FaTelegramPlane} from 'react-icons/fa'
import {TbClipboardText} from 'react-icons/tb'
import pdfLink from "../assets/pdf/Spring_23_11.pdf"

export default function Home() {

const handleShare = ()=>{
  navigator.share({
    title: 'Spring 23 Routine',
    url: window.location.href
  })
}

  return (
    <div className="homeMain">
      <h2>North East University Bangladesh</h2>
      <h3>Spring 23 Routine</h3>
      <div className="homeSelectArea">
      <Link to="/routine"><button className='btn'><TbClipboardText/> View Routine</button></Link>
      <a className='downloadPDF' href={pdfLink} download><FaFilePdf/> Download PDF</a>
      </div>

      <div className="footer">
        <div className="actionBox">
          <i onClick={handleShare}><FaShareAlt/></i>
          <a href='https://ahnayef.t.me' target="_blank"><FaTelegramPlane/></a>
        </div>
      </div>

    </div>
  )
}
