import styles from "./AllOrders.module.css";
import React, { useState, useEffect } from "react";

function AllOrders() {
  const [orders, setOrders] = useState([]);
  const appUserId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if appUserId and token are available in local storage
    if (appUserId && token) {
<<<<<<< HEAD
      fetch(`https://ryder-backend-xzhk.onrender.com/api/v1/Order/allOrderProgress/${appUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
=======
      // fetch(`https://ryder-test.onrender.com/api/v1/Order/allOrderProgress/${appUserId}`, {
      fetch(
        `${process.env.REACT_APP_base}/api/v1/Order/allOrderProgress/${appUserId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
>>>>>>> 8550554e2ba1ae1fd15e1d814241dac07a874ab0
        .then((response) => response.json())
        .then((data) => setOrders(data.data || []))
        .catch((error) => console.error(error));
    }
  }, [appUserId, token]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>My Orders</span>
        <span>See all</span>
      </div>
      <div className={styles.orders_container}>
        {orders.map((order) => (
          <div key={order.orderId} className={styles.orders_item}>
            <div>
              <span>
                <span className={styles.dayOfTheWeek}>Today</span> {order.updatedAt}
              </span>
              <span>Order No - {order.orderId}</span>
            </div>
            <div>
              <span className={styles[order.status.toLowerCase()]}>{order.status}</span>
              <span> &#x20A6; {order.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllOrders;
