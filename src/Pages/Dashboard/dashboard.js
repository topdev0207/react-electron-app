import React from "react";
// import { Button, Row, Col, Container } from "reactstrap";
import "./dashboard.css";
import ImgMark from "../../green_logo.jpeg";
import { AiFillPlayCircle } from "react-icons/ai";

function Landing(props) {
  return (
    <div className="landing">
      <div className="landing-left">
        <AiFillPlayCircle size="30px" />
      </div>
      <div className="landing-body">
        <div className="landing-body-header">222</div>
        <div className="landing-body-content">
          <div className="camera-top-position">
            <div className="camera-body camera-first">PTZ camera 1</div>
            <div className="camera-body camera-second">PTZ camera 1</div>
          </div>
          <div className="camera-bottom-position">
            <div className="camera-body camera-third">PTZ camera 1</div>
            <div className="camera-body camera-monitor">External Monitor</div>
          </div>
        </div>
        <div className="landing-body-footer">444</div>
      </div>
      <div className="landing-right">
        <div className="landing-right-top"></div>
        <div className="landing-right-image">
          <img src={ImgMark} className="img-mark"></img>
        </div>
        <div className="landing-right-bottom"></div>
      </div>
    </div>
  );
}

export default Landing;
