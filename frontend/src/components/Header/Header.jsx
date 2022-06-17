import React from 'react'
import Notification from '../Notification/Notification'

const Header = () => {
  return (
    <div><nav class="navbar border-dark mx-2 border rounded-2 bg-light mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <i class="fa-solid fa-screen-users"></i>
      </a>
      <Notification/>
    </div>
  </nav></div>
  )
}

export default Header