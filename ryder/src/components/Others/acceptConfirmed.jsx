import React from 'react'
import Successful from '../../images/icons/Successfully.png'
import { useNavigate, useLocation  } from "react-router-dom";
import '../../styles/acceptconfirm.css'

function AcceptConfirmed() {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData } = location.state;
  const name = orderData.name;
  
  function handleDirection() {
    navigate('/ryder-dashboard', {
      state: {
        acceptedOrder: orderData,
      },
    });
  }
    console.log('Data:', orderData)
  return (
    <div className='holdaccept'>
        <div className="innerBody">
            
            <img src={Successful} alt="" srcset="" />
            
              <div className="contenthold">
                  <h1>Request Accepted</h1>
              </div>
              <div className="othertext">
                  <span>You've accepted to pick up <b>{name}</b>'s request</span>
              </div>
              <button onClick={handleDirection}>Done</button>
        </div>
    </div>
  )
}

export default AcceptConfirmed;