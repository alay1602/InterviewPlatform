import React from 'react'
import "./chatbox.css"
import Button from '@mui/material/Button';
const Chatbox = () => {
  return (
      <>
    {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Chat</button> */}

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      </div>
    </div>
    </>
  )
}

export default Chatbox