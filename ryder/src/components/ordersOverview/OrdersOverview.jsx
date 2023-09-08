import styles from "./OrdersOverview.module.css"

//imgs
import {shoppingBagIcon} from "../../assets"

function OrdersOverview() {
  return (
      <div>
          <div>
              <span>Toatal orders</span>
              <span className={styles.secondary}>make a request</span>
          </div>

          <div>
              <div>
                  <span>200</span>
                  <span>orders completed</span>
              </div>
              <img src={shoppingBagIcon} alt="shopping bag svg icon" />
              
          </div>
          
    </div>
  )
}

export default OrdersOverview