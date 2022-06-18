import React ,{useContext}from 'react'
import Webrtccontext from "../../context/webrtc/Webrtccontext";

// const Notifications = () => {
    const Notification = () => {
const { answerCall, call, callAccepted,videoOn } = useContext(Webrtccontext);
        return (
    <>
    {call.isReceivingCall && !callAccepted && (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <h1>{call.name} is calling:</h1>
        {/* <Button variant="contained" color="primary" onClick={answerCall}>
          Answer
        </Button> */}
         <button className='dark' onClick={()=>{videoOn();answerCall();}}>
Answer
         </button>
      </div>
    )}
  </>

  )
}

export default Notification