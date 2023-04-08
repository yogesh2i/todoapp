import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function Add({ getValue }) {
  const [hour, setHour] = useState(12);
  const [minute, setMinutes] = useState(59);
  const [am, setAm] = useState('AM');
  const ref = useRef();
  const saveTask = () => {
    let time;
    if (hour < 10 || minute < 10) {
      time = `0${hour}:0${minute} ${am}`
    }
    else {
      time = `${hour}:${minute} ${am}`
    }
    getValue(ref.current.value, time, "hide");
  };
  const cancelTask = () => {
    ref.current.value = "";
    getValue(ref.current.value, '00:00', "hide");
  };

  const timeset = (e, t) => {
    let time = e.target.value;
    switch (t) {
      case "hr":
        setHour(time)
        break;
      case "min":
        setMinutes(time);
        break;
      default:
        setAm("AM");
        break;
    }
  }

  return (
    <Container>
      <div className="box">
        <input type="text" ref={ref} autoFocus onKeyDown={(e) => { e.key == "Enter" ? saveTask() : null }} />
        <span style={{ lineHeight: "4rem" }}>Set Time: <input type="number" min={1} max={12} style={{ width: '3rem', display: 'inline' }} value={hour} onChange={(e) => timeset(e, "hr")} />:<input type="number" min={0} max={59} style={{ width: '3rem', display: 'inline' }} value={minute} onChange={(e) => timeset(e, "min")} /><span style={{ cursor: "pointer" }} onClick={(e) => timeset(e, "am")}>{am}</span></span>
        <div className="button__box">
          <button onClick={() => cancelTask()}>cancel</button>
          <button onClick={() => saveTask()}>Save</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: #ffffff;
  margin: auto;
  width: 100%;
  .box {
    padding: 1rem 1rem 1rem 0.6rem;
    height: auto;
    margin: 0.8rem;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    input {
      display: block;
      width: 100%;
      padding: 2px;
      margin: 2px;
    }
    .button__box {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      button {
        cursor: pointer;
        padding: 2px;
        background-color: burlywood;
        border-radius: 20%;
      }
    }
  }
`;
