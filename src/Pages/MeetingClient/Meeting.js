//MEETING PAGE
import React, { useState } from 'react';
import AvailableSession from './AvailableSession/AvailableSession';
import MeetingBanner from './MeetingBanner/MeetingBanner';

const Meeting = () => {
    const [date, setDate] = useState(new Date())  //child a jeno pathatey shubidha hoy tai parent a declare kora holo
    console.log(date)
    return (
        <div style={{marginTop:'20px'}}>
            <MeetingBanner date={date} setDate={setDate}/>
            <AvailableSession date={date}></AvailableSession>
        </div>
    );
};

export default Meeting;