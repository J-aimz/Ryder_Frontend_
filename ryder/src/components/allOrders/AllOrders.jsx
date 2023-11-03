import styles from "./AllOrders.module.css";
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"

function AllOrders() {
  const [orders, setOrders] = useState([]);
  const appUserId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if appUserId and token are available in local storage
    if (appUserId && token) {
      // fetch(`https://ryder-test.onrender.com/api/v1/Order/allOrderProgress/${appUserId}`, {
      fetch(
        `${process.env.REACT_APP_base}/api/v1/Order/allOrderProgress/${appUserId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setOrders(data.data || []))
        .catch((error) => console.error(error));
    }
  }, [appUserId, token]);


  const navigate = useNavigate()
  function getOrderChat(orderId) {
    navigate(`/chat/${orderId}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>My Orders</span>
        <span>See all</span>
      </div>
      <div className={styles.orders_container}>
        {orders.map((order) => (
          <div
            key={order.orderId}
            onClick={() => getOrderChat(order.orderId)}
            className={styles.orders_item}
          >
            <div>
              <span>
                <span className={styles.dayOfTheWeek}>Today</span>{" "}
                {order.updatedAt}
              </span>
              <span>Order No - {order.orderId}</span>
            </div>
            <div>
              <span className={styles[order.status.toLowerCase()]}>
                {order.status}
              </span>
              <span> &#x20A6; {order.amount}</span>
            </div>
          </div>
        ))}
        <div
          onClick={() => getOrderChat("test")}
          className={styles.orders_item}
        >
          <div>
            <span>
              <span className={styles.dayOfTheWeek}>Today</span> 3:32
            </span>
            <span>Order No - 2334</span>
          </div>
          <div>
            <span>laptop</span>
            <span> &#x20A6; what ro do</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOrders;
