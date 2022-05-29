import React from 'react';

const BusinessSummary = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'50px 0'}}>
            <div class="stats shadow">

                <div class="stat place-items-center">
                    <div class="stat-title">Customer Served</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">From January 1st,2020 to February 1st,2022</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Users</div>
                    <div class="stat-value text-secondary">4,200</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;