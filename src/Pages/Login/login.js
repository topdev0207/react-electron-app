import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input } from "reactstrap";
import { ChangeEvent, useState } from "react";
import ImgLogo1 from "../../assets/logo1.png";
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
      {/* <AnimationIcons ImgSrc={ImgSteth} styles={{ top: "30%", left: "30%" }} /> */}

      <div className="card">
        <div className="logo">
          <img src={ImgLogo1} className="logo-img"></img>
        </div>
        <div className="mb-2" />
        <div className="title">
          <div className="title-main">
            <div className="title-welcome">Welcome back,</div>
            <dic className="title-content">
              Welcome back! please enter your details.
            </dic>
          </div>
        </div>
        <div className="mb-2" />
        <div className="form">
          <div className="form-item email">
            <div className="title">Email</div>
            <Input
              className="input"
              placeholder="admin@gmail.com"
              value={useremail}
              onChange={(e) => setuseremail(e.target.value)}
            ></Input>
          </div>

          <div className="mb-half" />
          <div className="mb-1" />
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

          <div className="mb-half" />
          <div className="form-item rmbme-n-forgetpwd">
            <div className="select-remeber-me">
              <Input className="check-box" type="checkbox"></Input>
              <div className="remember-me-title">Remember me</div>
            </div>
            <div className="forget-pwd forget-pwd-link">
              {/* reset-password */}
              {/* <Link to="/" className="forget-pwd-link"> */}
              {/* Forgot Password? */}
              {/* </Link> */}
            </div>
          </div>

          <div className="mb-half" />
          <div className="mb-1" />
          <div className="form-item login-button">
            <Button type="primary" className="button-login" onClick={login}>
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className="to-signup"></div>
    </div>
  );
}

export default Login;
