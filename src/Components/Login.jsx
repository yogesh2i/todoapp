import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import image from "./logo.jpeg";

export default function Login({ checker, current }) {
  const [oldUser, setUser] = useState(false);
  const navigate = useNavigate();
  const checkLogin = () => {
    checker(true);
  };
  const handleSign = () => {
    setUser(!oldUser);
  };
  useEffect(() => {
    let login = current;
    if (login) {
      navigate("/");
    }
  });
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
        <form className="form__login">
          {oldUser ? null : <input type="text" placeholder="Enter Your Name" />}
          <input
            type="email"
            placeholder="Enter Your Email"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            autoComplete="current-password"
          />
          {oldUser ? null : (
            <input
              type="password"
              placeholder="Confirm your Password"
              autoComplete="current-password"
            />
          )}
          <div className="optional">
            <input
              type="checkbox"
              onClick={() => {
                checkLogin();
              }}
            />
            <span>Use Without Login</span>
            <button type="submit">{oldUser ? "Sign In" : "Register"}</button>
          </div>
        </form>
        <div className="bottom">
          {oldUser ? (
            <p>
              Dont have an account?
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={handleSign}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={handleSign}
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
    input[type="checkbox"] {
      display: inline;
      margin: 0;
      width: auto;
    }
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
    margin-top: 1rem;
    padding-bottom: 2rem;
    button {
      font-size: 1.2rem;
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
