import React from 'react';
import Service from './Service';



const Services = () => {
    const services=[
        {
            _id: 1,
            name: '3.1s',
            description: 'Improved handling and aerodynamics allow for a top speed of 162 mph',
            img: "https://blog.dupontregistry.com/wp-content/uploads/2020/06/mclaren-720s-11.jpg"
        },
        {
            _id: 2,
            name: '162mph',
            description: 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds',
            img: "https://i.insider.com/60f860760729770012b91c62?width=700"
        },
        {
            _id: 3,
            name: 'AWD',
            description: 'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
            img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/tesla_model_s_one_gemini_battery.jpg"
        },
    ];
    return (
        <div>
            <h1 class="text-secondary font-bold uppercase text-center mt-6 ">Humbarg_Manufacturer and our team is always at your service</h1>
            <div class="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service=><Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;