import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./routine.css";
import routineData from './routine.json'
import Routinebox from './RoutineBox/Routinebox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaLink} from "react-icons/fa"


export default function Routine() {

  // const getDay = () => {
  //   var date = new Date();
  //   date.toLocaleDateString("en-US", { weekday: 'long' });
  // }

const [routine,setRoutine] = useState(routineData.monday);

const [today,setToday] = useState(" ");

const [check,setCheke] = useState(false);

useEffect(()=>{

  let date = new Date();

  let myDay = date.toLocaleDateString("en-US",{weekday:'long'})

  if(myDay === "Friday" || myDay === "Saturday"){
    alert("No class today :: Enjoy your day!");
    window.location.replace("https://youtube.com");
  }else{
    setCheke(true)
  }

  setToday(myDay);
  setRoutine(routineData[myDay.toLowerCase()])
},[]);

const handleCopy = ()=>{
  navigator.clipboard.writeText(location.href);
  navigator.vibrate(40);
  toast.success("Copied to clipboard")
}
  
  return (
    <>
    <ToastContainer theme='dark'/>
    <div className="routineMain">
      <div className="routineList">
        <h1>{today}</h1>
        { 
         check == true &&  routine.map((item)=>{return(<Routinebox lab={item.lab} name={item.name} teacher={item.teacher} startTime={item.startTime} endTime={item.endTime} roomNo={item.roomNo} section={item.section} key={item.name} />)})
        }
      </div>
      <div className="copyPageUrl" onClick={handleCopy}><FaLink/> Copy Page Url</div>
    </div>
    </>
  )
}
