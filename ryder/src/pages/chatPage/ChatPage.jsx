import { HubConnectionBuilder } from "@microsoft/signalr";
import React, { useState, useEffect } from "react";
import styles from "./ChatPage.module.css";
import { useParams } from "react-router-dom";
import { UserNavbar } from "../../components";
import Footer from "../landing_page/footer";
import Oder from "../../images/oder.svg";
import ChatBox from "../../components/chatBox/ChatBox";
import Send from "../../images/send.svg"
function ChatPage() {
  const { order } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [connection, setConnection] = useState(null);



  useEffect(() => { 
    // const fetchMessages = async () => {
      const response = fetch(
        `https://localhost:7000/api/v1/Messages/GetMessages/${order}`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.json();
      console.log(data);
      // setMessages(data);
    // };
    // fetchMessages();
  },[])

  useEffect(() => {
     const newConnection = new HubConnectionBuilder()
       .withUrl(`${process.env.REACT_APP_base}/messenger`)
       .build();

      newConnection.on("sendUserPayementLink", (value) => setMessages(prev => [...prev, value]))

      newConnection.on("sendMessage", (value) =>
        setMessages((prev) => [...prev, value])
    );
    
    //look into this let it only update the message with an emojie i guess u would have to search for the message with the id and update it
    //  newConnection.on("updateMessage", (value) =>
    //    setMessages((prev) => [...prev, value])
    //  );

    newConnection.start().then(() => {
        console.log("connection establised")
        setConnection(newConnection);
      });

     return () => {
       if (connection) {
         connection.stop();
       }
     }

  }, [])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

   const handleFormSubmit = async (event) => {
     event.preventDefault();
     setMessages([...messages, inputValue]);
    
    const requestBody = {
      oderId: order,
      body: inputValue,
    };
     const response = await fetch(
       `${process.env.REACT_APP_base}/api/v1/Messages/SendMessage`,
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
      console.log(data);

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
