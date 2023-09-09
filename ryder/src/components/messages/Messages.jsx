import styles from "./Messages.module.css"

function Messages() {
    const [hasMessages, setHasMessages] = useState(false)

  return (
      <div>
            <div>
                <span>Messages</span>
          </div>
          {/* show this display if there are no messages */}
          {
              !hasMessages &&
            <div className={styles.no_messages_Container}>
                <img src="" alt="" />
                <span>Mo Messages</span>
                <span>You currently do not have any message</span>
            </div>
              
          }
    </div>
  )
}

export default Messages