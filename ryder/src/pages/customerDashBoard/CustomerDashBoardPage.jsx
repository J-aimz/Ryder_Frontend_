import styles from "./CustomerDashBoardPage.module.css"

//imgs
import { overviewIcon } from "../../assets"

//components
import { OrdersOverview } from "../../components"

function CustomerDashBoard() {
  return (
      <div>
          <div>
                <img src={overviewIcon } alt="over view svg" />
                <h2>Orders</h2>
          </div>
          <div className={styles.content_container}>
              
              <div className={styles.lhs_container}>
                  <OrdersOverview />
              </div>

              <div className={styles.rhs_container}>
                  
              </div>
          </div>

    </div>
  )
}

export default CustomerDashBoard