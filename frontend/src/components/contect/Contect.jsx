import React,{useContext} from 'react'
import Webrtccontext from "../../context/webrtc/Webrtccontext";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Contect = () => {
    const {me,callAccepted,name,setname,callEnded,leaveCall,callUser} = useContext(Webrtccontext)
  return (
    <div>
        <CopyToClipboard text={me} className="">
<button>
    copy your ID
</button>
        </CopyToClipboard>
    </div>
  )
}

export default Contect