import React from 'react';
import "./routinebox.css";
import {FaClock} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';

export default function Routinebox(routine) {

    // console.log(routine.time);

    return (
        <div className="routineBox">
            <p className="courseCode">{routine.courseCode}</p>
            {routine.lab ? <div className="lab">LAB</div> : " "}
            <h2 className='gre-text'>{routine.name}</h2>
            <h4>{routine.teacher}</h4>
            <div className="time">                
            {routine.time.map((time)=>{return(
            <h3><i><FaClock/></i> {time}</h3>
            )})}
            </div>
            <h3><i><MdLocationOn/></i> {routine.roomNo}</h3>
            {routine.section && <h3>{routine.section} only</h3>}
        </div>
    )
}
