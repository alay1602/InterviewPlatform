import React ,{useContext} from "react";
import "./bottombar.css"
import Button from '@mui/material/Button';
import CallEndIcon from '@mui/icons-material/CallEnd';
import tel from "./telephone.png"
import Chatbox from "../Chatbox/Chatbox";
import Webrtcconnection from "../../context/webrtc/webrtcconnection";
import Webrtccontext from "../../context/webrtc/Webrtccontext";
const Bottombar = () => {
  const {videoOn,handlemessage} = useContext(Webrtccontext);
  return (
    <div className="border-3 border rounded-4 border-dark">
      <nav class="border-2 border rounded-4 navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample08"
          aria-controls="navbarsExample08"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample08"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa-solid fa-microphone mx-2"></i>
                <i class="fa-solid fa-microphone-slash"></i>
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-video mx-2" onClick={videoOn}></i>
                <i class="fa-solid fa-video-slash"></i>
              

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <CallEndIcon/>
                        {/* <img src={tel} className="img-fluid" alt="" />      */}
              </a>
            </li>
            <li class="nav-item">
               <a  className="nav-link" href="">
               {/* <i class="fa-regular fa-circle-phone-hangup"></i> */}
               </a>
              
              {/* <a
                class="nav-link dropdown-toggle"
                href="http://example.com"
                id="dropdown08"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdown08">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div> */}
            </li>
          </ul>

          <li class="nav-item">
            
              {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >Chat</button> */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handlemessage}>
   chat
</button>

            </li>
        </div>
      </nav>
    </div>
  );
};

export default Bottombar;
