import styles from "./CustomerDashBoardPage.module.css";

//imgs
import { overviewIcon } from "../../assets";

//components
import { OrdersOverview, AllOrders, Messages } from "../../components";

function CustomerDashBoard() {
  return (
    <div>
      <div>
        <img src={overviewIcon} alt="over view svg" />
        <h2>Orders</h2>
      </div>
      <div className={styles.content_container}>
        <OrdersOverview />
        <Messages />
        <AllOrders />
        <div className={styles.contact_container}>
          <div>
            <div className={styles.header}>
              <span>Contact Us</span>
            </div>
            <div className={styles.contact_body}>
              <span>Get in touch</span>
              <small>Any question or remarks? Send us a message</small>

              <div className={styles.contact_information_container}>
                <span className={styles.contact_infomation}>
                  <img src="" alt="" />
                  <small>hello@ryder.com</small>
                </span>
                <span className={styles.contact_infomation}>
                  <img src="" alt="" />
                  <small>hello@ryder.com</small>
                </span>
                <span className={styles.contact_infomation}>
                  <img src="" alt="" />
                  <small>hello@ryder.com</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashBoard;
