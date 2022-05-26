//Particular date a kon kon meeting session free asey seita show korabo 
import { format } from 'date-fns';
import React from 'react';

const AvailableSession = ({date}) => {
    console.log(date)
    return (
        <div style={{margin:'20px'}}>
            <h3 style={{color:'violet',fontWeight:'700'}}>
                {date ?format(date, 'PP'):'Please pick a date to see available sessions'}
            </h3>
        </div>
    );
};

export default AvailableSession;