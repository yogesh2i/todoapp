import React, { useRef } from "react";
import styled from "styled-components";

export default function Add({ getValue, display }) {
  const ref = useRef();

  const saveTask = () => {
    getValue(ref.current.value, "hide");
  };
  const cancelTask = () => {
    ref.current.value = "";
    getValue(ref.current.value, "hide");
  };

  return (
    <Container>
      <div className="box">
        <input type="text" ref={ref} autoFocus  onKeyDown={(e)=>{e.key=="Enter"?saveTask():null}} />
        <div className="button__box">
          <button onClick={() => saveTask()}>Save</button>
          <button onClick={() => cancelTask()}>cancel</button>
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
        padding: 2px;
        background-color: burlywood;
        border-radius: 20%;
      }
    }
  }
`;
