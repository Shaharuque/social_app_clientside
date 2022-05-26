import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MeetingBanner = ({date,setDate}) => {

    let pickedDate = <p>Please pick a day for our meeting.</p>; //initilly pickedDate a ekta html niye nisi 
    if (date) {
        pickedDate = <p>You picked {format(date, 'PP')}.We are eagerly waiting for you.</p>;
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://desktime.com/blog/wp-content/uploads/2021/08/meeting.png" class="max-w-sm rounded-lg shadow-2xl" alt='tool' />
                    <div >
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    <div style={{textAlign:'center',color:'teal',fontWeight:'700'}}>
                        {pickedDate}
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingBanner;