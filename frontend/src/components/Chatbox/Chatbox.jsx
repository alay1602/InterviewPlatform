import React ,{useContext}from 'react'
import "./chatbox.css"
import Button from '@mui/material/Button';
import Webrtccontext from "../../context/webrtc/Webrtccontext";
// const Bottombar = () => {
 
const Chatbox = () => {
  const { message,
    setmessage,
    recivemessage,
    sendMessage} = useContext(Webrtccontext);
 const message1= recivemessage
  return (
      <>
      <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <h1>
        message:{message1}
      </h1>
   
  
      
  </div> 
  <div className="container my-3">
   <input  type="text" placeholder='Message' onChange={(event) => {
        setmessage(event.target.value);
      }} />
      <button onClick={()=>{sendMessage()}}>Send Message</button>
   </div>
  </div>  
    </>
  )
}

export default Chatbox