import Home from "./components/Home/Home";
import { Routes,Route } from "react-router-dom";
// import Webrtccontext from "./context/webrtc/Webrtccontext";

import Webrtcconnection from "./context/webrtc/webrtcconnection";
import CodeIDE from "./components/CodeIDE/CodeIDE";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import Whiteboard from "./components/WhiteBoard/Whiteboard";
import Contect from "./components/contect/Contect";
function App() {
  return (
 <>
<Webrtcconnection>
     <div className=' d-flex flex-nowrap  my-2 ' style={{"maxHeight":95+"vh"}}>
       <div className="d-flex    ">
            <Sidebar />
          </div>
          <Routes>
        <Route path="/CodeIde" element={<CodeIDE />} />
        <Route path="/" element={<Home />} />
        <Route path="/WhiteBoard" element={<Whiteboard/>} />
        <Route path="/contect" element={<Contect/>}/>
      </Routes>
          </div>
          </Webrtcconnection>
 </>
  );
}

export default App;
