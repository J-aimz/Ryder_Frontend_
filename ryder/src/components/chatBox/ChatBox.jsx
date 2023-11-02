import React, { useState } from 'react';
import styles from "./ChatBox.module.css"


const ChatBox = ({ message, sender, orderId }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  function handleMouseEnter() { 
    setTimeout(() => {
      setShowEmojis(true);
    }, 500);

    return () => clearTimeout();

  }
  
  function handleMouseLeave() {
    setTimeout(() => {
      setShowEmojis( false);
    }, 500);

    return () => clearTimeout();
  }
  
  async function sendEmojie(emoji) {
    
    const requestBody = {
      orderId: orderId,
      messageId: "string",
      emojie: emoji,
    };
     const response = await fetch(
      //  "https://localhost:7000/api/v1/Messages/SendEmoji",
       `${process.env.REACT_APP_base}/api/v1/Messages/SendEmoji`,
       {
         method: "POST",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
           "Content-Type": "application/json",
           //  Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(requestBody),
       }
     );

    const data = await response.json();

    setShowEmojis(false)
  }

  const emojis = ['😀', '🏃🏼', '👍', '👎'];

    return (
      // <div className={`chat-box ${sender === 'me' ? 'me' : 'other'}`}>
      <div
        className={`${styles.sender} ${styles.msg_con}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="message">{message}</div>

        {showEmojis && (
          <div
            className={styles.emojie_container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showEmojis &&
              emojis.map((emoji, index) => (
                <span
                  key={index}
                  className={styles.emoji}
                  onClick={() => sendEmojie(emoji)}
                >
                  {emoji}
                </span>
              ))}
          </div>
        )}
      </div>
    );
};

export default ChatBox;
