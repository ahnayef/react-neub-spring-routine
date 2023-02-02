import React from 'react';
import "./routine.css";
import routine from './routine.json'

export default function Routine() {

  // const getDay = () => {
  //   var date = new Date();
  //   date.toLocaleDateString("en-US", { weekday: 'long' });
  // }

  return (
    <div className="routineMain">
      <div className="routineList">
        <div className="routineBox">
          <div className="lab">LAB</div>
          <h2>Basic Electric Engineering</h2>
          <h4>Mr. Shahadat Hussain Parvez</h4>
          <h3>08:30 - 09:55</h3>
          <h3>R-501</h3>
          <h3>Sention A</h3>
        </div>
      </div>
    </div>
  )
}
