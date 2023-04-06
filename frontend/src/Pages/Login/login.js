import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input } from "reactstrap";
import { ChangeEvent, useState } from "react";
import ImgLogo from "../../assets/logo.png";
// import ImgSteth from "../../assets/stethscope.png";
// import AnimationIcons from "./animation.js";

function Login(props) {
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState("");
  const [userpassword, setuserpassword] = useState("");

  const login = () => {
    if (useremail === "admin@gmail.com" && userpassword === "password") {
      navigate("/menu");
    } else {
      alert("login failed");
    }
  };

  return (
    <div className="login">
      <div className="login-left">
        <div className="card-left card"></div>
      </div>
      <div className="login-right">
        <div className="card-right card">
          <div className="logo">
            <img src={ImgLogo} className="logo-img" alt="LogoImage"></img>
          </div>
          <div className="mb-2" />
          <div className="mb-1" />
          <div className="title">
            <div className="title-main">
              <div className="title-welcome">Welcome back,</div>
              <div className="title-content">
                Welcome back! please enter your details.
              </div>
            </div>
          </div>
          <div className="mb-1" />
          <div className="form">
            <div className="form-item email">
              <div className="title">Email</div>
              <Input
                className="input"
                placeholder="user@mail.com"
                value={useremail}
                onChange={(e) => setuseremail(e.target.value)}
              ></Input>
            </div>

            <div className="mb-1" />
            <div className="mb-2" />
            <div className="form-item password">
              <div className="title">Password</div>
              <Input
                className="input"
                type="password"
                placeholder="*******"
                value={userpassword}
                onChange={(e) => setuserpassword(e.target.value)}
              ></Input>
            </div>

            <div className="mb-1" />
            <div className="form-item rmbme-n-forgetpwd">
              <div className="select-remeber-me">
                <Input className="check-box" type="checkbox"></Input>
                <div className="remember-me-title">Remember me</div>
              </div>
            </div>

            <div className="mb-1" />
            <div className="mb-2" />
            <div className="form-item login-button">
              <Button type="primary" className="button-login" onClick={login}>
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
