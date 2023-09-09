import styles from "./AllOrders.module.css";

function AllOrders() {
  return (
      <div>
          <div>
              <span>My Orders</span>
              <span>See all</span>
          </div>
          <div className={styles.orders_container}>
                <div className={styles.orders_item}>
                     <div>
                      <span></span>
                      <span></span>
                    </div>
                    <div>
                      <span></span>
                      <span></span>
                      
                    </div>
                </div>
          </div>
    </div>
  )
}

export default AllOrders