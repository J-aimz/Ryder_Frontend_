import React, { useState } from "react";
import styles from "./RiderDashboard.module.css";
import { RiderNavbar } from "../../components";
import Footer from "../landing_page/footer";
import { useLocation, useNavigate } from "react-router-dom";
import request from '../../images/icons/mobile.png'
import axios from 'axios';
import {Link} from "react-router-dom" 


//components
import { MapComponent } from "../../components";


function RiderDashboard() {
  const [rideEnded, setRideEnded] = useState(false);
  const location = useLocation();
  const acceptedOrder = location.state?.acceptedOrder;
  const navigate = useNavigate();

  var riderId = localStorage.getItem('riderId');
  var token = localStorage.getItem('token');
  // console.log("Id", riderId)
  // console.log("Order", acceptedOrder.orderId)

  const endRide = async () => {
    try {
      const response = await axios
      .post(
        `https://ryder-backend-xzhk.onrender.com/api/v1/Order/end`,
        {
          riderId,
          orderId: acceptedOrder.orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (response.data.succeeded) {
        setRideEnded(true);
        console.log("Status: ", response.data.data.message);
        navigate('/success-page'); 
      } else {
        console.log("Unable to end ride at the moment")
      }
    } catch (error) {
      console.error('Error ending the ride:', error);
    }
  }

  if (!acceptedOrder) {
    // Handle the case when data is missing
    return (
      <>
        <RiderNavbar />
        <div className={styles.null_container}>
          <div className={styles.null_content_body}>
            <img src={request} alt="" srcset="" />
            <p>You have not accepted any request yet! Proceed to Bidding!</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <RiderNavbar />
      <div className={styles.container}>
        <div className={styles.content_body}>
          <h1>Request Details</h1>

          <div>
            <span>Pickup location</span>
            <p>{acceptedOrder.pickLocation}</p>
          </div>

          <div>
            <span>Delivery Location</span>
            <p>{acceptedOrder.droplocation}</p>
          </div>

          <div>
            <span>Package details</span>
            <p>{acceptedOrder.item}</p>
          </div>

          <div>
            <span>Drop off Contact</span>
            <p>{acceptedOrder.name}</p>
            <p>{acceptedOrder.email}</p>
          </div>

          <div>
            <span>Amount paid</span>
            <p>N{acceptedOrder.Amount}</p>
          </div>

          <div className="status_update">
            <h6>Update Ride Status</h6>
            <button type="button"  className="mb-2"
              onClick={endRide}
              disabled={rideEnded}
              >Deliver this Order </button>

            <button className={styles.decline_btn}
              type="button" onClick={endRide}
              disabled={rideEnded}
            >End this Ride</button>
          </div>
          <button type="button">Accept Request</button>
          <button className={styles.decline_btn} type="button">
            Decline request
          </button>

          <Link
            to={"/chat/:order"}
            className={styles.decline_btn}
            type="button"
          >
            Decline request
          </Link>
        </div>
        <div className={styles.map_container}>
          <MapComponent className={styles.map_container} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RiderDashboard;
