import Webrtccontext from "./Webrtccontext";

import React from 'react'

const webrtcconnection = (props) => {

    return(<Webrtccontext.Provider value={{}} >
        {props.children}
      </Webrtccontext.Provider>)
    
  
}

export default webrtcconnection