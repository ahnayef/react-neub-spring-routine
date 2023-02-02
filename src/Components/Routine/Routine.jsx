import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./routine.css";
import routineData from './routine.json'
import Routinebox from './RoutineBox/Routinebox';

export default function Routine() {

  // const getDay = () => {
  //   var date = new Date();
  //   date.toLocaleDateString("en-US", { weekday: 'long' });
  // }

useEffect(()=>{

  let date = new Date();

  const day = date.toLocaleDateString("en-US",{weekday:'long'})

  console.log(day);

},[]);

  const [routine,setRoutine] = useState(routineData.wednesday);
  
  return (
    <div className="routineMain">
      <div className="routineList">
        <h1>Tuesday</h1>
        {routine.map((item)=>{return(<Routinebox lab={item.lab} name={item.name} teacher={item.teacher} startTime={item.startTime} endTime={item.endTime} roomNo={item.roomNo} section={item.section} key={item.name} />)})}
      </div>
    </div>
  )
}
