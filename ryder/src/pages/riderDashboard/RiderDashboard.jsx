import styles from "./RiderDashboard.module.css";

function RiderDashboard() {
  return (
    <div>
      <div>
        <h1>Request Details</h1>

        <div>
          <span>Pickup location</span>
          <p>5, Akintayo Street, Victoria Island, Lagos</p>
        </div>
        <div>
          <span>Delivery Location</span>
          <p>89b, Olumakinde Stree, lekki, Lagos</p>
        </div>
        <div>
          <span>Package details</span>
          <p>New Hp core i7 Laptop(fully packed)</p>
        </div>
        <div>
          <span>Drop off Contact</span>
          <p>Tomiwa Olatunde</p>
          <p>080 XXXX XXX</p>
        </div>
        <div>
          <span>Payment method</span>
          <p>N3,500</p>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Card payment</label>
          <img src="" alt="" />
        </div>
        <button type="button">Accept Request</button>
        <button type="button">Decline request</button>
      </div>
      <div></div>
    </div>
  );
}

export default RiderDashboard;
