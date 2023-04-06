import React, { useState } from "react";
import "../Setting/setting.css";
import ImgMark from "../../assets/white_logo.png";
import { Button, Input } from "reactstrap";

function Longanswer(props) {
  return (
    <>
      <div className="content-comment-title-y-space"></div>
      <Input
        className="content-comment-input-longanswer"
        defaultValue="This is long answer"
        type="textarea"
      ></Input>
      <div className="content-submit-top-space"></div>
    </>
  );
}

export default Longanswer;
