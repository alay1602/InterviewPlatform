import Home from "./components/Home/Home";
import Webrtccontext from "./context/webrtc/Webrtccontext";
function App() {
  return (
 <>
 <Webrtccontext>
     <Home/>

     </Webrtccontext>
 </>
  );
}

export default App;
