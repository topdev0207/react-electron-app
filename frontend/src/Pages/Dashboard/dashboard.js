import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";
import "./style.css";
import ImgMark from "../../assets/white_logo.png";
import { Modal, Drawer, Input, Button } from "antd";
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
import JSMpeg from "@cycjimmy/jsmpeg-player";
import "react-datepicker/dist/react-datepicker.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ffmpegIP = "localhost";
const { TextArea } = Input;

function Landing(props) {
  const navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(Date);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [text, settext] = useState(""); //input value
  const [updated, setUpdated] = useState("");
  const [chat, setChat] = useState([]);

  const showDrawer = () => {
    setVisible(true);
  };
  const hideDrawer = () => setVisible(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    settext(event.target.value);
    setMessage(event.target.value);
  };
  const handleOk = () => {
    console.log("The modal will be closed after two seconds");
    setrecord();
    setOpen(false);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleClick = () => {
    setUpdated(text);
    setMessage("");
  };
  useEffect(() => {
    if (flag) {
      var videoUrl = `ws://${ffmpegIP}:6789/`;
      var player = new JSMpeg.VideoElement("#video-canvas-first", videoUrl, {
        autoplay: true,
      });
      var player = new JSMpeg.VideoElement("#video-canvas-second", videoUrl, {
        autoplay: true,
      });
      var player = new JSMpeg.VideoElement("#video-canvas-third", videoUrl, {
        autoplay: true,
      });
      var player = new JSMpeg.VideoElement("#video-canvas-fourth", videoUrl, {
        autoplay: true,
      });
    } else {
    }
  }, [flag]);

  const setrecord = () => {
    axios
      .post("http://localhost:5000/record")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("error:", err));
  };

  // var chat = [""];
  // var items = ['items1'];
  useEffect(() => {
    if (updated) {
      let list = [];
      if (JSON.parse(localStorage.getItem("items"))) {
        list = JSON.parse(localStorage.getItem("items"));
      }
      list.push(updated);
      setChat(list);
      localStorage.setItem("items", JSON.stringify(list));
    }
  }, [updated]);

  return (
    <div className="landing">
      <div className="landing-left">
        <div className="space-left-top"></div>
        <div className="landing-left-content">
          <div className="icon-item-div">
            <AiFillPlayCircle
              className="icon-item"
              onClick={() => setflag(true)}
            />
          </div>
          <div className="icon-item-div">
            <FaStopCircle
              className="icon-item"
              onClick={() => setflag(false)}
            />
          </div>
          <div className="icon-item-div">
            <BsRecordCircle className="icon-item" onClick={showModal} />
            <Modal
              title="Would you like to record?"
              open={open}
              onOk={handleOk}
              onCancel={handleCancel}
            ></Modal>
          </div>
          <div className="icon-item-div">
            <FiMic className="icon-item" onClick={showDrawer} />
            <Drawer mask={true} width={360} onClose={hideDrawer} open={visible}>
              <TextArea
                rows={8}
                id="speak"
                name="speak"
                defaultValue={""}
                onChange={handleChange}
                value={message}
              />
              <Button
                type="primary"
                onClick={handleClick}
                ghost
                style={{ margin: "2%" }}
              >
                Send
              </Button>
              <Button type="primary" ghost style={{ margin: "2%" }}>
                Voice
              </Button>
              {chat &&
                chat.map((item, idx) => {
                  return (
                    <div className="imessage" key={idx}>
                      <p className="from-me">{item}</p>
                    </div>
                  );
                })}
            </Drawer>
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
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div className="icon-item-div icon-margin-right">
                <AiOutlineClockCircle
                  style={{ width: "40px", height: "40px", color: "#004170" }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                />
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeClock />
                  </LocalizationProvider>
                </Popover>
              </div>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div className="icon-item-div">
                <BsCalendar4Range
                  style={{ width: "40px", height: "40px", color: "#004170" }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                />
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                  />
                </Popover>
              </div>
            )}
          </PopupState>
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
            {flag ? (
              <div
                className="camera-body camera-first"
                id="video-canvas-first"
                style={{ width: "33vw", height: "37vh" }}
              ></div>
            ) : (
              <div className="camera-body camera-monitor">Camera 1</div>
            )}
            {flag ? (
              <div
                className="camera-body camera-second"
                id="video-canvas-second"
                style={{ width: "33vw", height: "37vh" }}
              ></div>
            ) : (
              <div className="camera-body camera-monitor">Camera 2</div>
            )}
          </div>
          <div className="camera-bottom-position">
            {flag ? (
              <div
                className="camera-body camera-third"
                id="video-canvas-third"
                style={{ width: "33vw", height: "37vh" }}
              ></div>
            ) : (
              <div className="camera-body camera-monitor">Camera 3</div>
            )}

            {flag ? (
              <div
                className="camera-body camera-third"
                id="video-canvas-fourth"
                style={{ width: "33vw", height: "37vh" }}
              ></div>
            ) : (
              <div className="camera-body camera-monitor">Camera 4</div>
            )}
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
          <BsFillClipboardMinusFill
            className="icon-item"
            onClick={() => navigate("/setting")}
          />
          <div className="space-right-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
