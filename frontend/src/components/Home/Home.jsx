import React from 'react'
import Bottombar from '../Bottombar/Bottombar';
import Chatbox from '../Chatbox/Chatbox';
import Sidebar from '../Sidebar/Sidebar';
import Videocomponent from '../VideoComponent/Videocomponent';
import  "./home.css";
const Home = () => {
  return (
<div className=''>
    <div className="row">
        <div className="col-md-1">
        <div className='d-flex vh-100  '>
         <Sidebar/>
        </div>
        </div>
        <div className="col-md-8 vh-100  ">
            <div className="row ">
            <div class="col-md-6 p-2"><Videocomponent/></div>
            <div class="col-md-6 p-2"><Videocomponent/></div>
            </div>
          
  <div class="p-2 "><Bottombar/></div>
           
{/* <div className="d-flex   "> */}

               
{/* </div> */}
 </div>
        <div className="col-md-3">
<Chatbox/>

    </div></div>
   

</div>
  )
}

export default Home