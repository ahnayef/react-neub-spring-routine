import React from 'react'

export default function Routinebox(props) {
    return (
        <div className="routineBox">
            {props.lab ? <div className="lab">LAB</div> : " "}
            <h2>{props.name}</h2>
            <h4>{props.teacher}</h4>
            <h3>{props.startTime} - {props.endTime}</h3>
            <h3>{props.roomNo}</h3>
            {props.section && <h3>{props.section}</h3>}
        </div>
    )
}