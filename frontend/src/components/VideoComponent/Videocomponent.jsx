import React, {  useContext, useEffect, useRef } from "react";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
const Videocomponent = () => {

  
  const {name,connectionRef,callAccepted,myVideo,videoOn,userVideo,callEnded,stream,call} = useContext(Webrtccontext);
  return (
    <div className="d-flex flex-column ">
      {stream &&<video
        className="img-fluid border-3 border rounded-4 border-dark"
        ref={myVideo}
        playsInline
        autoPlay
        
      ></video>}
       {callAccepted && !callEnded && <video
        className="img-fluid border-3 border rounded-4 border-dark"
        ref={userVideo}
        playsInline
        autoPlay
        
      ></video>}
    </div>
  );
};




export default Videocomponent;
