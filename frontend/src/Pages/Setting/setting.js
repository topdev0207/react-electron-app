import React, { useState } from "react";
import Checkbox from "../components/checkbox";
import Shortanwser from "../components/shortanswer";
import Longanswer from "../components/longanswer";
import Choice from "../components/choice";
import "./setting.css";
import ImgMark from "../../assets/white_logo.png";
import { Button, Input } from "reactstrap";
import { Dropdown } from "antd";
import {
  MdShortText,
  MdSubject,
  MdRadioButtonChecked,
  MdCheckBox,
} from "react-icons/md";

const items = [
  {
    key: "1",
    label: "short answer",
    icon: <MdShortText />,
  },
  {
    key: "2",
    label: "long answer",
    icon: <MdSubject />,
  },
  {
    key: "3",
    label: "Multi Choice",
    icon: <MdRadioButtonChecked />,
  },
  {
    key: "4",
    label: "Check box",
    icon: <MdCheckBox />,
  },
];

function Setting(props) {
  const [display, setdisplay] = useState();

  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        setdisplay(<Shortanwser />);
        break;
      case "2":
        setdisplay(<Longanswer />);
        break;
      case "3":
        setdisplay(<Choice />);
        break;
      case "4":
        setdisplay(<Checkbox />);
        break;
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="setting">
      <div className="setting-header"></div>
      <div className="setting-body">
        <div className="setting-body-left"></div>
        <div className="setting-body-content">
          <div className="content-margin-x"></div>
          <div className="content-body">
            <div className="content-title-top-space" />
            <div className="content-title">
              CheckList Name
              <Dropdown
                className="dropdownitem"
                menu={menuProps}
                placement="bottom"
              >
                <Button></Button>
              </Dropdown>
            </div>
            <div className="content-title-bottom-space" />
            {display}
            <div className="content-comment-title-y-space"></div>
            <div className="content-comment-title">Comments</div>
            <div className="content-comment-title-y-space"></div>
            <Input
              className="content-comment-input"
              defaultValue="The team has a very systematic approach"
              type="textarea"
            ></Input>
            <div className="content-submit-top-space"></div>
            <Button className="content-submit">Submit</Button>
            <div className="content-submit-bottom-space"></div>
          </div>
          <div className="content-margin-x"></div>
        </div>
        <div className="setting-body-right">
          <img src={ImgMark} className="img-mark"></img>
        </div>
      </div>
      <div className="setting-footer"></div>
    </div>
  );
}

export default Setting;
