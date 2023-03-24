import React, { useEffect, useState } from 'react'
import Subtimer from '../components/Subtimer'
import Testtimer from '../components/Testtimer'
import Breaktimer from '../components/Breaktimer'
import "./User.css";

const UserFirstPage = (heading) => {
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    // const [first, setFirst] = useState(true)
    // const [first, setFirst] = useState(true)
    
    useEffect(() => {
      setTimeout(() => {
        setFirst(false);
        setSecond(true);
      }, 20000);
      setTimeout(() => {
        setSecond(false);
        setFirst(true)
      }, 25000);
      setTimeout(() => {
        setFirst(false);
        setSecond(true);
      }, 45000);
      setTimeout(() => {
        setSecond(false);
        setThird(true)
      }, 50000);

      
      setTimeout(() => {
        setThird(false)
      }, 60000);


    }, [])
    
  return (

    <>
    {/* <div>{heading}</div> */}
    <div className="parent">
        <div className="heading">Schedule Starts in..</div>
        <div style={{fontSize:"100px"}}>
        {/* subtimer :subject timer */}
        {first && <Subtimer></Subtimer>}
        {/* Testtimer : test timer */}
        {third && <Testtimer></Testtimer>}
        {/* Breaktimer : break timer */}
        {second && <Breaktimer></Breaktimer>}
        </div>
    </div>
    </>
  )
}

export default UserFirstPage
