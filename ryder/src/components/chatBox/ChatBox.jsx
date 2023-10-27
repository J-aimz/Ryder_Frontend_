import React, { useState } from 'react';
import styles from "./ChatBox.module.css"


const ChatBox = ({ message, sender }) => {
    const [showEmojis, setShowEmojis] = useState(false);

    const toggleEmojis = () => {
        setShowEmojis(!showEmojis);
    };

    const emojis = ['😀', '😂', '😍', '👍', '👎'];

    return (
      // <div className={`chat-box ${sender === 'me' ? 'me' : 'other'}`}>
      <div className={`${styles.sender}`}>
        <div className="message">{message}</div>
        <div
          className={styles.emojis}
          onMouseEnter={toggleEmojis}
          onMouseLeave={toggleEmojis}
        >
          {showEmojis &&
            emojis.map((emoji, index) => (
              <span
                key={index}
                className="emoji"
                onClick={() => alert(`Sending ${emoji}`)}
              >
                {emoji}
              </span>
            ))}
        </div>
      </div>
    );
};

export default ChatBox;
