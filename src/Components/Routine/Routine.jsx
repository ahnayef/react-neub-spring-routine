import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./routine.css";
import routineData from './routine.json'
import Routinebox from './RoutineBox/Routinebox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillSetting } from "react-icons/ai";
import { FaDiscord, FaFacebookMessenger, FaGithub, FaLink, FaShareAlt, FaTelegramPlane, FaTimes } from "react-icons/fa"
import "animate.css"
import Weekend from '../Weekend/Weekend'
import { Link } from 'react-router-dom';
import { BiMessageRounded } from 'react-icons/bi'
import ReactGA from 'react-ga4';
import DeviceDetector from "device-detector-js";

export default function Routine() {



  ReactGA.initialize(import.meta.env.VITE_GA_MID);
  // ReactGA.send("pageview");




  const [routine, setRoutine] = useState(routineData.monday);

  const [date, setDate] = useState(new Date());

  const [today, setToday] = useState(date.toLocaleDateString("en-US", { weekday: 'long' }));

  const [check, setCheke] = useState(false);




  useEffect(() => {

    // console.log(device);
    // console.log(deviceInfo);
    // ReactGA.event({
    //   category: 'Device Info',
    //   action: 'Device Info',
    //   label: 'Device Info',
    //   client: deviceInfo.client,
    //   os: deviceInfo.os,
    //   device: deviceInfo.device,
    //   isbot: deviceInfo.isbot,
    // });


    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(navigator.userAgent);

    const deviceInfo = {
      client: `${device.client.name} ${device.client.version} ${device.client.type}`,
      os: `${device.os.name} ${device.os.version} ${device.os.platform}`,
      device: device.device.type,
      isbot: device.bot || "Not a bot",
    }
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      client: deviceInfo.client,
      os: deviceInfo.os,
      device: deviceInfo.device,
      isbot: deviceInfo.isbot,
    });

    // ReactGA.event({
    //   category: 'Device Info',
    //   action: 'Device Info',
    //   label: 'Device Info',
    //   client: deviceInfo.client || "Unknown",
    //   os: deviceInfo.os || "Unknown",
    //   device: deviceInfo.device || "Unknown",
    //   isbot: deviceInfo.isbot || "Unknown",
    // });






    if (today === "Friday" || today === "Saturday") {
      // alert("No class today :: Enjoy your day!");
      setCheke(false);
      console.log("No class today :: Enjoy your day!");
      document.title = `Routine | ${today}`
      ReactGA.event({
        category: 'Page Visit',
        action: `${today}`,
        label: `Page Visit ${today}`,
      });

    } else {
      setCheke(true);
      document.title = `Routine | ${today}`

      ReactGA.event({
        category: 'Page Visit',
        action: `${today}`,
        label: `Page Visit ${today}`,
      });


    }
    setRoutine(routineData[today.toLowerCase()])
    // console.log(today)


  }, [today]);



  const handlePrev = () => {

    ReactGA.event({
      category: 'Change Day',
      action: 'Prev Click',
      label: 'Prev Button Clicked'

    });

    date.setDate(date.getDate() - 1);
    //set new day
    setToday(date.toLocaleDateString("en-US", { weekday: 'long' }));
    //set new routine
    setRoutine(routineData[today.toLowerCase()])
  }

  const handleNext = () => {

    ReactGA.event({
      category: 'Change Day',
      action: 'Next Click',
      label: 'Next Button Clicked'
    });


    date.setDate(date.getDate() + 1);
    //set new day
    setToday(date.toLocaleDateString("en-US", { weekday: 'long' }));
    //set new routine
    setRoutine(routineData[today.toLowerCase()])
  }


  const handleSettingClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Hamburger Click',
      label: 'Hamburger Menu Clicked',
    });
  };

  const handleCloseIconClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Close Icon Click',
      label: 'Close Icon Clicked',
    });
  };


  const handleCrClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'CR Click from Nav',
      label: 'Contact CR Link Clicked',
    });
  };

  const handleCopy = () => {

    ReactGA.event({
      category: 'Navigation',
      action: 'Copy Page Url',
      label: 'Copy Page Url Clicked',
    });

    navigator.clipboard.writeText(location.href);
    navigator.vibrate(40);
    toast.success("Copied to clipboard")
  }
  const handleShare = () => {

    ReactGA.event({
      category: 'Navigation',
      action: 'Share Button Clicked',
      label: 'Share Button Clicked',
    });


    navigator.share({
      title: 'NEUB Spring 23 Routine | CSC',
      url: window.location.href
    })
  }

  return (
    <>
      <ToastContainer theme='dark' />

      <div className="settinfIcon">
        <label htmlFor="settingTr" onClick={handleSettingClick} ><AiFillSetting /></label>
        <input type="checkbox" name="settingTr" id="settingTr" hidden />

        <div className="settingBox">
          <label htmlFor="settingTr" id='settingBoxClose' onClick={handleCloseIconClick}  ><FaTimes /></label>
          <h2>MENU</h2>

          {/* <a href={pdfLink} download className='btn dPdf'><FaFilePdf/> Download PDF</a> */}
          {/* <a href="https://discord.gg/jCVgCr37nJ" target="_blank" className='btn btnDis'><FaDiscord/> Join Our Server</a> */}
          <Link to="/cr" className='btn' onClick={handleCrClick}><BiMessageRounded /> Contact CR</Link>
          <div className="btn" onClick={handleCopy}><FaLink /> Copy Page Url</div>
          <i className='btn' onClick={handleShare}><FaShareAlt /> Share</i>
          <a href="https://github.com/ahnayef/react-neub-spring-routine/" target='_' className='btn'><FaGithub /> Source Code</a>

          <div className="socialLinks">
            <a href='https://ahnayef.t.me' className='socialIcon' target="_blank"><FaTelegramPlane /></a>
            <a href='https://m.me/ahsanhabibnayef' className='socialIcon' target="_blank"><FaFacebookMessenger /></a>
            <a href='https://discord.com/users/783328131377135626' className='socialIcon' target="_blank"><FaDiscord /></a>
          </div>

        </div>
      </div>

      <div className="routineMain">
        <div className="routineList">
          <div className="dayArea">
            {today != "Sunday" ? <button onClick={handlePrev}>&lt;</button> : " "}
            <h1>{today}</h1>
            {today != "Thursday" ? <button onClick={handleNext}>&gt;</button> : " "}
          </div>
          {
            check ? routine.map((item) => { return (<Routinebox lab={item.lab} name={item.name} teacher={item.teacher} time={item.time} roomNo={item.roomNo} section={item.section} courseCode={item.courseCode} key={item.name} />) }) : <Weekend />
          }
        </div>
        {/* <div className="copyPageUrl" onClick={handleCopy}><FaLink/> Copy Page Url</div> */}
      </div>
    </>
  )
}
