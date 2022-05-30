import Home from "./components/Home/Home";
import { Routes,Route } from "react-router-dom";
import Webrtccontext from "./context/webrtc/Webrtccontext";
import CodeIDE from "./components/CodeIDE/CodeIDE";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Whiteboard from "./components/WhiteBoard/Whiteboard";
function App() {
  return (
 <>
 {/* <Webrtccontext> */}
     {/* <Home/> */}
     <div className=' d-flex flex-nowrap  my-2 ' style={{"maxHeight":95+"vh"}}>
       <div className="d-flex    ">
            <Sidebar />
          </div>
          <Routes>
        <Route path="/CodeIde" element={<CodeIDE />} />
        <Route path="/" element={<Home />} />
        <Route path="/WhiteBoard" element={<Whiteboard/>} />
      </Routes>
          </div>
    
     {/* </Webrtccontext> */}
 </>
  );
}

export default App;
