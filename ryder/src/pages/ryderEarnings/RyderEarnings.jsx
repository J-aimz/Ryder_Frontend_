import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ryderEarnings.css'
import Vector from '../../images/Vector.svg';
import Time from '../../images/Time.svg'
import RiderNavbar from '../../components/dashboard/riderNavbar'



export default function RyderEarnings(){
      const [earningsData, setEarningsData] = useState({
        totalEarning: 0.00,
        rides: 0,
        totalDuration:'00:00:00',
        list: []
      });
    
      useEffect(() => {
        const id = localStorage.getItem('riderId')
          axios.get(`https://ryder-test.onrender.com/api/v1/Rider/Rider-Earnings/${id}`)
          .then((response) => response.data.data.rides)
            .then((data) => {
              // Calculate total earnings from the "amount" property of each element in the response array
              const totalEarning = data.reduce((total, item) => total + item.amount, 0);

              // Number of rides is the length of the response array
              const rides = data.length;

              // Calculate total duration from the "startTime" and "endTime" properties of each element
              const totalDuration = data.reduce((total, item) => {
                const startTime = new Date(item.startTime);
                const endTime = new Date(item.endTime);
                const duration = endTime - startTime;
                return total + duration;
              }, 0);

              // Format total duration into HH:MM:SS
              const totalDurationFormatted = new Date(totalDuration).toISOString().substr(11, 8);

              // Set the state with the calculated values and the response data
              setEarningsData({
                totalEarning,
                rides,
                totalDuration: totalDurationFormatted,
                list: data,
              });
            })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div>
      <RiderNavbar />
      <div className="container-fluid parent mt-4">
        <div className="container-fluid layer"></div>
        <div className="card container">
            <div className='container show-earnings text-center py-3'>
                <p className='myEarnings'>MY EARNINGS</p>
            <h4 className='fs-3 fw-bold earning-amount'> N{" "} {earningsData.totalEarning.toFixed(2)}</h4>
                <div className='container d-flex flex-row justify-content-evenly mt-4'>
                    <section>
                        <img src= {Vector} alt='car'/>
                        <span className='ps-2'>{earningsData.rides} Rides</span>
                    </section>

                    <section>
                        <img src={Time} alt="time" />
                        <span className='ps-2'>{earningsData.totalDuration}</span>
                    </section>
                </div>
            </div>
            <div className="card-body">
                {earningsData.list.map((item) => (
                <TodayEarnings 
                date = {item.createdAt}
                time = {item.createdAt}
                amount = {item.amount.toFixed(2)}/>))}
            </div>
        </div>
      </div>
    </div>
  );
}


function TodayEarnings({date, time, amount}){
    return (
        <div className='container child-container d-flex flex-row justify-content-between border shadow-sm mb-3'>
            <span className='align-self-center today'><span className='fw-bold'>{new Date(date).toLocaleDateString()}</span>,
            {new Date(time).toLocaleTimeString()} </span>
            <span className='lh-1 py-3'>
                <p className='delivered border py-2 px-4'>Delivered</p>
                <p className='ps-4'>N{amount}</p>
            </span>
        </div>
    )
}
