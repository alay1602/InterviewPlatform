import React , { useEffect, useRef }from 'react'

const Videocomponent = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia( {video:true,audio:true} )
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };
  return (
    <div>
        <div id="">
        <video className="img-fluid"  ref={videoRef}  playsInline autoPlay controls>
      
        </video>
    </div>
    </div>
  )
}

export default Videocomponent