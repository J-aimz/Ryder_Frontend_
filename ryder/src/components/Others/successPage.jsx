import React from 'react'
import checks from '../../images/icons/Successfully.png'
import '../../styles/success.css'
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate();
    function back(){
        navigate('/ryder-dashboard')
    }
    function take(){
        navigate('/bidding')
    }
  return (
    <div className='holders'>
        <div className="sucess">
            <img src={checks} alt="" srcset="" />
            <p className='mt-3'>You have Successfully ended your ride!</p>

            <div>
                <button className='back mr-2' onClick={back}>Back to Dashboard</button>
                <button className='mt-2 take' onClick={take}>Take another ride</button>
            </div>
        </div>
    </div>
  )
}

export default SuccessPage