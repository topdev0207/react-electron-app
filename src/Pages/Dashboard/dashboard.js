import React from "react";
import { AiFillPlayCircle, AiOutlineClockCircle } from "react-icons/ai";
import { FaStopCircle, FaPills, FaTint, FaClipboard } from "react-icons/fa";
import {
  BsRecordCircle,
  BsCalendar4Range,
  BsFillClipboardMinusFill,
} from "react-icons/bs";
import { FiMic } from "react-icons/fi";
import { TiArrowMove } from "react-icons/ti";
import { HiOutlineUsers } from "react-icons/hi";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import "./dashboard.css";
import ImgMark from "../../assets/white_logo.png";
import { Input } from "reactstrap";
import ImgBG from "./../../assets/background.png";

function Landing(props) {
  return (
    <div className="landing">
      <div className="landing-left">
        <div className="space-left-top"></div>
        <div className="landing-left-content">
          <div className="icon-item-div">
            <AiFillPlayCircle className="icon-item" />
          </div>
          <div className="icon-item-div">
            <FaStopCircle className="icon-item" />
          </div>
          <div className="icon-item-div">
            <BsRecordCircle className="icon-item" />
          </div>
          <div className="icon-item-div">
            <FiMic className="icon-item" />
          </div>
          <div className="icon-item-div">
            <TiArrowMove className="icon-item" />
          </div>
          <div className="icon-item-div">
            <MdOutlineDisplaySettings className="icon-item" />
          </div>
        </div>
        <div className="space-left-middle"></div>
        <div className="icon-item-div">
          <TbPlayerTrackNextFilled className="icon-item" />
        </div>
      </div>
      <div className="landing-body">
        <div className="landing-body-header">
          <div className="space-body-header-front"></div>
          <div className="icon-item-div icon-margin-right">
            <AiOutlineClockCircle className="icon-item" />
          </div>
          <div className="icon-item-div">
            <BsCalendar4Range className="icon-item" />
          </div>
          <div className="channel-title-div">
            <p className="channel-title">SBE Name</p>
          </div>
        </div>
        <div className="landing-body-content">
          {/* <div className="parent">
            <div style={{ backgroundColor: "red" }}>1</div>
            <div style={{ backgroundColor: "blue" }}>1</div>
            <div style={{ backgroundColor: "green" }}>1</div>
            <div style={{ backgroundColor: "red" }}>1</div>
          </div> */}
          <div className="camera-top-position">
            <div className="camera-body camera-first">PTZ camera 1</div>
            <div className="camera-body camera-second">PTZ camera 1</div>
          </div>
          <div className="camera-bottom-position">
            <div className="camera-body camera-third">PTZ camera 1</div>
            <div className="camera-body camera-monitor">External Monitor</div>
          </div>
        </div>
        <div className="landing-body-footer">
          <Input
            name="size"
            min="0"
            max="100"
            type="range"
            className="video-time-range"
            defaultValue="0"
          />
          <div className="footer-icons">
            <div className="icon-item-div">
              <HiOutlineUsers className="icon-item" />
            </div>

            <div className="icon-item-div">
              <IoLanguageSharp className="icon-item" />
            </div>

            <div className="icon-item-div">
              <FaPills className="icon-item" />
            </div>

            <div className="icon-item-div">
              <FaTint className="icon-item" />
            </div>

            <div className="icon-item-div">
              <div className="icon-resuscitation" />
            </div>

            <div className="icon-item-div">
              <FaClipboard className="icon-item" />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-right">
        <div className="landing-right-top"></div>
        <div className="landing-right-image">
          <img src={ImgMark} className="img-mark"></img>
        </div>
        <div className="landing-right-bottom">
          <BsFillClipboardMinusFill className="icon-item" />
          <div className="space-right-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
