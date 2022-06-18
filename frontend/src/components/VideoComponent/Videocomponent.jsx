import React, { useEffect, useRef } from "react";
const Videocomponent = (props) => {

  return (
    <div className="d-flex border justify-content-center p-3">
      <video
        className="img-fluid border-3 border rounded-4 border-dark"
        ref={props.video}
        playsInline
        autoPlay
        
      ></video>
    </div>
  );
};




export default Videocomponent;
