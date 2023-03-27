import React from "react";
import "./Menu.css";
import ImgMark from "../../assets/white_logo.png";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="dashboard-header"></div>
      <div className="dashboard-body">
        <div className="dashboard-body-left"></div>
        <div className="dashboard-body-content">
          <Button
            className="button-item"
            onClick={() => navigate("/dashboard")}
          >
            New SBE
          </Button>
          <div className="content-item-space"></div>
          <Button className="button-item">Review SBE</Button>
          <div className="content-item-space"></div>
          <Button className="button-item" onClick={() => navigate("/setting")}>
            Setting
          </Button>
          <div className="content-item-space"></div>
          <Button className="button-item">About Us</Button>
        </div>
        <div className="dashboard-body-right">
          <img src={ImgMark} className="img-mark"></img>
        </div>
      </div>
      <div className="dashboard-footer">
        <p className="footer-text">
          Capture, communicate, and collaborate with ease.
        </p>
      </div>
    </div>
  );
}

export default Menu;
