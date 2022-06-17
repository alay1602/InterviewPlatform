import React, { useEffect, useRef } from "react";
const Videocomponent = (props) => {
  //   const videoRef = useRef(null);

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia( {video:true} )
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error("error:", err);
  //     });
  // };
  return (
    <div className="d-flex border justify-content-center p-3">
      <video
        className="img-fluid border-3 border rounded-4 border-dark"
        ref={props.video}
        playsInline
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Videocomponent;
