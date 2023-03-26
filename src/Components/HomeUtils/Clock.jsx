import React, { useState } from "react";
import styled from "styled-components";

function Clock() {

  const [hour, setHour] = useState(0);
  
  function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();



    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");

    const hourDegrees = (hours / 12) * 360 - 90;
    const minuteDegrees = (minutes / 60) * 360 - 90;
    const secondDegrees = (seconds / 60) * 360 - 90;

if(hourHand!==null){

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}
 
    if (hours > 12 && hours < 16) {
      setHour("Good AfterNoon")
    } else if (hours > 16 && hours <= 18) {
      setHour("Good Evening")
    } else if (hours > 18 && hours <= 24) {
      setHour("Good Night")
    } else {
      setHour("Good Morning")
    }
  }
 
    
    setInterval(updateClock, 1000);
  
  return (
    <Container>

      <div className="box">
        <div className="clock">
          <div className="digit1">
            <p>12</p>
            <p>6</p>
          </div>
          <div className="digit2">
            <p>9</p>
            <p>3</p>
          </div>

          <div className="hour-hand" ></div>
          <div className="minute-hand" ></div>
          <div className="second-hand" ></div>
          <div className="center-circle"></div>
        </div>
      </div>
      <p className="greet">
        {hour}
      </p>
    </Container>
  );
}

export default Clock;
const Container = styled.div`
    height: 12rem;
.box{
    display: flex;
    justify-content: center;
    padding: 1rem;
  
}
  .digit1 {
    height: 7.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .digit2 {
    height: auto;
    width: 7.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .clock {
    padding: 2px;
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    background: #f5efef;
    border-radius: 50%;
    box-shadow: 0px 4px 12px 6px rgba(244, 194, 127, 0.67);
  }

  .hour-hand {
    width: 32.56px;
    height: 1.45px;
    background: #d8605b;
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    transform-origin: left center;
  }

  .minute-hand {
    width: 38.73px;
    height: 1.38px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left center;
    background-color: #f00;
  }
  
  .second-hand {
    width: 45px;
    height: 1.4px;
    
    background-color: #f4c27f;
    /* background: #c1c0c0; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: left center;
    z-index: 10;
  }

  .center-circle {
    z-index: 100;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    /* background-color: #333; */
  }
.greet{
    position: relative;
    text-align: center;
    top: 7rem;
}

`;
