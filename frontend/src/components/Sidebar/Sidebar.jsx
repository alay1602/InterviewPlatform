import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    // <div className='container  d-flex flex-nowrap mx-2 my-2' style={{"maxHeight":100+"vh"}}>
        <div className="border-dark mx-2 border rounded-2 d-flex bg-success bg-info flex-column flex-shrink-0  bg-light " style={{"width": 4.5+"rem" }} >
    <a href="/" className="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right">
      <img className="img-fluid" src="https://media.istockphoto.com/vectors/job-interview-flat-icon-flat-design-vector-illustration-vector-id1330057346?b=1&k=20&m=1330057346&s=170667a&w=0&h=qbLD84Ov6o3pwpsnjE2D9dHH7Jk2O3rwjL_NNBVbcpQ=" alt="" />
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
      <Link to="/" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"><i class="fa fa-home" aria-hidden="true"></i></Link> 
        {/* <a href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
        <i class="fa fa-home" aria-hidden="true"></i>
        </a> */}
      </li>
      <li>
      <Link to="/codeIDE" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">  <i class="fas fa-code"></i></Link>
      {/* <i class="fas fa-code"></i> */}
        {/* </a> */}
      </li>
      <li>

        <Link to="/WhiteBoard" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right"><i class="fa-solid fa-clipboard"></i></Link>
        {/* <a href="#" >
        
        </a> */}
      </li>

    </ul>
    <div className=" border-top">
      <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"  data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fa-solid fa-moon"></i>

      </a>
      {/* <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul> */}
    </div>
  </div>
  // </div>
  )
}

export default Sidebar