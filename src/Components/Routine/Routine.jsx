import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./routine.css";
import routineData from './routine.json'
import Routinebox from './RoutineBox/Routinebox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillSetting } from "react-icons/ai";
import { FaDiscord, FaFacebookMessenger, FaFilePdf, FaLink, FaShareAlt ,FaTelegramPlane,FaTimes } from "react-icons/fa"
import pdfLink from "../../assets/pdf/routine.pdf";
import "animate.css"


export default function Routine() {

  // const getDay = () => {
  //   var date = new Date();
  //   date.toLocaleDateString("en-US", { weekday: 'long' });
  // }

  const [routine, setRoutine] = useState(routineData.monday);
  
  const [date, setDate] = useState(new Date());
  
  const [today, setToday] = useState(date.toLocaleDateString("en-US", { weekday: 'long' }));

  const [check, setCheke] = useState(false);

  useEffect(() => {  
    if(today === "Friday" || today === "Saturday"){
      alert("No class today :: Enjoy your day!");
      window.location.replace("https://discord.gg/jCVgCr37nJ");
    }else{
      setCheke(true)
    }
    setRoutine(routineData[today.toLowerCase()])
    // console.log(today)
  
  }, [today,routine,date]);


  const handlePrev = () => {
    date.setDate(date.getDate() - 1);
    //set new day
    setToday(date.toLocaleDateString("en-US", { weekday: 'long' }));
    //set new routine
    setRoutine(routineData[today.toLowerCase()])
  }
  
  const handleNext = () => {
    date.setDate(date.getDate() + 1);
    //set new day
    setToday(date.toLocaleDateString("en-US", { weekday: 'long' }));
    //set new routine
    setRoutine(routineData[today.toLowerCase()])
  }
  


  const handleCopy = () => {
    navigator.clipboard.writeText(location.href);
    navigator.vibrate(40);
    toast.success("Copied to clipboard")
  }
  const handleShare = () => {
    navigator.share({
      title: 'NEUB Spring 23 Routine | CSC',
      url: window.location.href
    })
  }

  return (
    <>
      <ToastContainer theme='dark' />

      <div className="settinfIcon">
        <label htmlFor="settingTr"><AiFillSetting /></label>
        <input type="checkbox" name="settingTr" id="settingTr" hidden />

        <div className="settingBox">
        <label htmlFor="settingTr" id='settingBoxClose'><FaTimes/></label>
        <h2>MENU</h2>
        <a href={pdfLink} download className='btn dPdf'><FaFilePdf/> Download PDF</a>
        <a href="https://discord.gg/jCVgCr37nJ" target="_blank" className='btn btnDis'><FaDiscord/> Join Our Server</a>
        <div className="btn" onClick={handleCopy}><FaLink /> Copy Page Url</div>
        <i className='btn' onClick={handleShare}><FaShareAlt /> Share</i>

        <div className="socialLinks">
        <a href='https://ahnayef.t.me' className='socialIcon' target="_blank"><FaTelegramPlane/></a>
        <a href='https://m.me/ahsanhabibnayef' className='socialIcon' target="_blank"><FaFacebookMessenger/></a>
        <a href='https://discord.com/users/783328131377135626' className='socialIcon' target="_blank"><FaDiscord/></a>
        </div>

      </div>
      </div>

      <div className="routineMain">
        <div className="routineList">
          <div className="dayArea">
          {today != "Sunday" ? <button onClick={handlePrev}>&lt;</button> : " " }
          <h1>{today}</h1>
           {today !="Thursday" ? <button onClick={handleNext}>&gt;</button> : " "}
          </div>
          {
            check == true && routine.map((item) => { return (<Routinebox lab={item.lab} name={item.name} teacher={item.teacher} startTime={item.startTime} endTime={item.endTime} roomNo={item.roomNo} section={item.section} key={item.name} />) })
          }
        </div>
        {/* <div className="copyPageUrl" onClick={handleCopy}><FaLink/> Copy Page Url</div> */}
      </div>
    </>
  )
}
