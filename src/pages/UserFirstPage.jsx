import React from 'react'
import Clock from '../components/Clock'
import "./User.css";

const UserFirstPage = (heading) => {
  return (

    <>
    {/* <div>{heading}</div> */}
    <div className="parent">
        <div className="heading">Schedule Starts in..</div>
        <div style={{fontSize:"100px"}}>
        <Clock></Clock>
        </div>
    </div>
    </>
  )
}

export default UserFirstPage
