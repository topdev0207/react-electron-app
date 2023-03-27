import React from "react";
// import { AiFillPlayCircle, AiOutlineClockCircle } from "react-icons/ai";
// import { FaStopCircle } from "react-icons/fa";
// import { BsRecordCircle, BsCalendar4Range } from "react-icons/bs";
// import { FiMic } from "react-icons/fi";
// import { TiArrowMove } from "react-icons/ti";
// import { TbPlayerTrackNextFilled } from "react-icons/tb";
// import { MdOutlineDisplaySettings } from "react-icons/md";
import "./animation.css";
// import ImgMark from "../../assets/green_logo.jpeg";
// import { Input } from "reactstrap";

function AnimationIcons(props) {
  const { ImgSrc } = props;
  return (
    <div class="swing">
      <img src={ImgSrc} width="200"></img>
    </div>
  );
}

export default AnimationIcons;
