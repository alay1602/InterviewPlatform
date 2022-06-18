import Webrtccontext from "./Webrtccontext";
import { io } from 'socket.io-client'
import Peer from 'simple-peer'
import React, { useEffect, useRef, useState } from 'react'

const socket = io('http://localhost:3001');
const Webrtcconnection = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

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
  }, [socket]);


  // const showMyFace=async ()=>{
  //   let currentStream=new MediaStream()
  //   currentStream= await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  //   // .then((currentStream) => {

  //     myVideo.current.srcObject = currentStream;
    

  //   // }).then((currentStream) => {

  //     setStream(currentStream);
  //   // }).catch((err) => {
  //   //   console.log(err);
  //   // });

  // }
  // function showMyFace() {
  //   navigator.mediaDevices.getUserMedia({audio:true, video:true})
  //     .then(stream => myVideo.srcObject = stream)
  //     // .then(stream => pc.addStream(stream))
  //     .catch(function(err) {
  //        console.log(err);
  //     });
  // }
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

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

    connectionRef.current = peer;
  };


  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
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
    callUser,
    leaveCall,
    answerCall,
    // showMyFace
    videoOn
  }} >
    {children}
  </Webrtccontext.Provider>)


}

export default Webrtcconnection