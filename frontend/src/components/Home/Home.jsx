import React, { useContext, useEffect } from "react";
import Bottombar from "../Bottombar/Bottombar";
import Chatbox from "../Chatbox/Chatbox";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Videocomponent from "../VideoComponent/Videocomponent";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import "./home.css";
const Home = () => {

  const { name, connectionRef, callAccepted, myVideo, videoOn, userVideo, callEnded, stream, call } = useContext(Webrtccontext);
  useEffect(() => {
    const init = async () => {
      await videoOn()

      if (connectionRef.current) {

        connectionRef.current.on('stream', (currentStream) => {
          userVideo.current.srcObject = currentStream;
        });
      }


    }
  }, [connectionRef.current])


  return (
    // <div className=' d-flex flex-nowrap  my-2 ' style={{"maxHeight":95+"vh"}}>
    //    <div className="d-flex">
    //         <Sidebar />
    //       </div>

    <div className="mx-2 row w-100" >
      {/* <div className="col-md-1"> */}
      {/* <div className="d-flex vh-100  ">
            <Sidebar />
          </div> */}
      {/* </div> */}
      <div className=" mh-100  ">
        <div className="mx-2 row">
          <Header />
        </div>
      
        <Chatbox />
        <div className="row">
          <div class="p-2 container w-50 " style={{ "marginTop": 55 + "px" }}>
            <Bottombar />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
