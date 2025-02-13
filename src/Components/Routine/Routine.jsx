import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./routine.css";
import routineData from './routine.json'
import Routinebox from './RoutineBox/Routinebox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillSetting } from "react-icons/ai";
import { FaCalculator, FaDiscord, FaFacebookMessenger, FaGithub, FaLink, FaShareAlt, FaTelegramPlane, FaTimes } from "react-icons/fa"
import "animate.css"
import Weekend from '../Weekend/Weekend'
import { Link } from 'react-router-dom';
import { BiMessageRounded } from 'react-icons/bi'
import ReactGA from 'react-ga4';
import { MdOutlineUpdate } from 'react-icons/md';


export default function Routine() {

  ReactGA.initialize(import.meta.env.VITE_GA_MID);
  ReactGA.send("pageview");

  const [routine, setRoutine] = useState(routineData.monday);

  const [date, setDate] = useState(new Date());

  const [today, setToday] = useState(date.toLocaleDateString("en-US", { weekday: 'long' }));

  const [check, setCheke] = useState(false);


  useEffect(() => {

    if (today === "Friday" || today === "Saturday") {
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

  }, [today]);



  const handlePrev = () => {

    ReactGA.event({
      category: 'Change Day',
      action: 'Prev Click',
      label: 'Prev Button Clicked'

    });

    if (today === "Sunday") {
      return;
    }

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

    if (today === "Thursday") {
      return;
    }

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

  const handleUpdate = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Update Icon Click',
      label: 'Update Icon Clicked',
    });

    if (window.confirm("Are you sure you want to update? This will clear all caches and reload the page.")) {
      if (navigator.serviceWorker) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(reg => reg.unregister());
          caches.keys().then(names => {
            names.forEach(name => caches.delete(name));
          });
          localStorage.clear();
          sessionStorage.clear();
          window.location.reload();
        });
      }
    }
  }

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


  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "p") {
      handlePrev();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "n") {
      handleNext();
    } else if (e.key === "m") {
      document.querySelector("#settingTr").click();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [today]);

  return (
    <>
      <ToastContainer theme='dark' />

      <div className="updateIcon">
        <label onClick={handleUpdate} ><MdOutlineUpdate /></label>
      </div>

      <div className="settinfIcon">
        <label htmlFor="settingTr" onClick={handleSettingClick} ><AiFillSetting /></label>
        <input type="checkbox" name="settingTr" id="settingTr" hidden />

        <div className="settingBox">
          <label htmlFor="settingTr" id='settingBoxClose' onClick={handleCloseIconClick}  ><FaTimes /></label>
          <h2>MENU</h2>
          <i className='btn' onClick={handleShare}><FaShareAlt /> Share</i>
          <div className="btn" onClick={handleCopy}><FaLink /> Copy Page Url</div>
          <Link to="/cr" className='btn' onClick={handleCrClick}><BiMessageRounded /> Contact CR</Link>
          <a href="https://github.com/ahnayef/react-neub-spring-routine/" target='_' className='btn'><FaGithub /> Source Code</a>
          <a href="https://calcg.vercel.app/" target='_' className='btn'><FaCalculator /> CGPA Calculator</a>

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
          <h4 className='smallDate'>{date.toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}</h4>
          {
            check ? routine.map((item) => { return (<Routinebox lab={item.lab} name={item.name} teacher={item.teacher} time={item.time} roomNo={item.roomNo} section={item.section} courseCode={item.courseCode} joinLink={item.joinLink} nextClassAfter={item.nextClassAfter} key={item.name} />) }) : <Weekend />
          }
        </div>
        {/* <div className="copyPageUrl" onClick={handleCopy}><FaLink/> Copy Page Url</div> */}
      </div>
    </>
  )
}
