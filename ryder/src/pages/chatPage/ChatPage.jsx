import React, { useState } from "react";
import styles from "./ChatPage.module.css";
import { useParams } from "react-router-dom";
import { UserNavbar } from "../../components";
import Footer from "../landing_page/footer";
import Oder from "../../images/oder.svg";
import ChatBox from "../../components/chatBox/ChatBox";
import Send from "../../images/send.svg"
function ChatPage() {
  const { order } = useParams();
  console.log(order);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <UserNavbar />
      <div className={styles.container}>
        <div className={styles.body_Con}>
          <div className={styles.header}>
            <img src={Oder} alt="over view svg" />
            <h2>Order</h2>
          </div>
          <div className={styles.msg_con}>
            <div className={styles.messages_container}>
              {/* {messages.map((message, index) => (
                <div key={index}>{message}</div>
              ))} */}
              <ChatBox message={"hello"} />
            </div>
            <form className={styles.input_feild} onSubmit={handleFormSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
                          <button type="submit"><img src={Send} /></button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChatPage;
