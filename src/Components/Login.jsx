import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { login } from "../App";
import image from "./logo.jpeg";


export default function Login() {
  const ref = useRef();
  const [show, setShow] = useState(false)
  const [pass, setPass] = useState("");
  const { setLoggedIn, oldUser, setUser } = useContext(login);
  const navigate = useNavigate();
  let login1 = (localStorage.getItem("userInfo") === null ? "" : JSON.parse(localStorage.getItem("userInfo")).loginUser);


  const handleSubmit = (e) => {
    e.preventDefault();
    let info = (Object.fromEntries(new FormData(e.target)));

    if (!oldUser) {
      if (pass == info.userPassword) {
        setLoggedIn(true);
        let data = { ...info, loginUser: true };
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      } else {
        ref.current.style.border = "3px solid red"
        setShow(true)
      }
    } else {
      let email = JSON.parse(localStorage.getItem("userInfo")).userEmail;
      let password = JSON.parse(localStorage.getItem("userInfo")).userPassword;
      if (email === info.userEmail && password === info.userPassword) {
        setLoggedIn(true);
        let data = { ...info, loginUser: true };
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/home");
      } else {
        alert("Credentials didn`t matched.")
      }
    }
  }


  const handleReset = () => {
    let cnfrm = confirm("Your all data will be lost.")
    if (cnfrm) {
      localStorage.clear();
      setUser(false)
      navigate("/")
    }
  }
  useEffect(() => {
    if (login1 !== "") {
      if (login1) {
        setLoggedIn(true);
        navigate("/home");
      } else if (!login1) {
        setUser(true);
      }
    }
  }, [])


  return (
    <Container>

      <div className="cont">
        <div className="top__logo">
          <img src={image} alt="OUR REMINDER" />
        </div>
        <div className="text">
          <p>{oldUser ? "Welcome Back" : "Get`s Things Done"}</p>
          <p>{oldUser ? "To" : "with TODO"}</p>

          <h3>OUR REMINDER</h3>
        </div>
        <form className="form__login" onSubmit={(e) => { handleSubmit(e) }} id="form">

          <input
            type="email"
            placeholder="Enter Your Email"
            autoComplete="useremail"
            required
            name="userEmail"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            autoComplete="current-password"
            required
            minLength={3}
            name="userPassword"
          />

          {oldUser ? null : (
            <>

              <input
                type="password"

                placeholder="Confirm your Password"
                autoComplete="confirm-password"
                required
                minLength={3}
                ref={ref}
                onChange={(e) => { setPass(e.target.value) }}
              />
              {show && <div style={{ color: "red", textAlign: "left", fontSize: "0.8rem", position: "relative", top: "-3vh" }}><span style={{ marginLeft: "10vw" }}>*Password didn`t match.</span></div>}
            </>

          )}
          <div className="optional">
            {oldUser ? <span style={{ color: "red", cursor: "pointer" }} onClick={handleReset}>Reset Credentials?</span> : null}
            <button type="submit">{oldUser ? "Sign In" : "Register"}</button>
          </div>
        </form>
        <div className="bottom">
          {oldUser ? (
            <p>
              Dont have an account?
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => setUser(!oldUser)}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => setUser(!oldUser)}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .cont {
    height: 100%;
    padding-bottom: 2rem;
    text-align: center;
    background: rgba(244, 194, 127, 0.67);
  }
  .top__logo {
    text-align: center;
    img {
      max-width: 80%;
      min-width: 40%;
      height: 100%;
    }
  }
  .text {
    text-align: center;
  }
  .form__login {
    margin-top: 1.5rem;
    input {
      margin: auto;
      width: 80%;
      padding: 9px;
      border-radius: 22px;
      font-style: normal;
      margin-bottom: 1rem;
      font-size: 13px;
      line-height: 137.19%;
      display: flex;
      align-items: center;
      letter-spacing: 0.06em;
      outline-color: #f4c27f;
      border: none;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .optional {
    text-align: center;
    margin-top: 3rem;
    padding-bottom: 2rem;
    button {
      font-size: 1.2rem;
      cursor: pointer;
      display: block;
      margin: auto;
      margin-top: 2rem;
      width: 80%;
      height: 56px;
      background: linear-gradient(267.72deg, #d8605b -0.89%, #f4c27f 112.29%);
      mix-blend-mode: normal;
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
    }
  }
`;
