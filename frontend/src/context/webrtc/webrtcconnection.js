import Webrtccontext from "./Webrtccontext";
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import React, { useEffect, useRef, useState } from 'react'
import { unstable_composeClasses } from "@mui/material";
const socket = io('http://localhost:3001');
const Webrtcconnection = ({ children }) => {
  const [otherUser, setOtherUser] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [message, setmessage] = useState("")
  // const [room, setroom] = useState("");
  const [recivemessage, setrecivemessage] = useState("")

  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef();

  const videoOn=()=>{
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      setStream(currentStream);

      myVideo.current.srcObject = currentStream;
    });
  
  }
  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({audio:true, video:true})
    // .then(stream1 => myVideo.srcObject = stream1)
    // .then(stream1 => setStream(stream1))
    // .catch(function(err) {
    //    console.log(err);
    // });
    
    videoOn();
   
    socket.on('me', (id) => setMe(id));
    console.log(me);
    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
    socket.on("recieve_message", (data) => {
      console.log(data)
      setrecivemessage(data.message);
      // setTimeout(() => {
      //   setrecivemessage("");
      // }, 10000);
    })
    console.log(recivemessage)
  }, []);



 
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    setOtherUser(id);
    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });
    // const message=()=>{
    //   peer.on("connect",()=>{
    //     peer.send("Hii This is Vatsal");
    // })
    // }
  
    // peer.on("data",(data)=>{console.log(data)})
    connectionRef.current = peer;
  };


  const answerCall = () => {
    setCallAccepted(true);
    setOtherUser(call.from)
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
   
  //  peer.on("data",(data)=>{
  //   console.log(data)
  //  })
    peer.signal(call.signal);
    
    connectionRef.current = peer;
  };

// const handlemessage=()=>{
//   console.log(connectionRef.current)
//   connectionRef.current.on("connect",()=>{
//     console.log("connect")
//     connectionRef.current.send("Hii this from calle")
//    })
//    connectionRef.current.on("data",(data)=>{
//     console.log(data)
//    })
// }
const sendMessage = () => {
  console.log("runn")
  socket.emit("send_message", {message,otherUser});
};
  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };



  return (<Webrtccontext.Provider value={{
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    name,
    setName,
    callEnded,
    me,
    // handlemessage,
    callUser,
    leaveCall,
    answerCall,
    // showMyFace
    videoOn,
    message,
    setmessage,
    recivemessage,
    sendMessage
  }} >
    {children}
  </Webrtccontext.Provider>)


}

export default Webrtcconnection