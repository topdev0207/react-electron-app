import React from "react";
import "./setting.css";
import ImgMark from "../../assets/white_logo.png";
import { Button, Input } from "reactstrap";

function Setting(props) {
  return (
    <div className="setting">
      <div className="setting-header"></div>
      <div className="setting-body">
        <div className="setting-body-left"></div>
        <div className="setting-body-content">
          <div className="content-margin-x"></div>
          <div className="content-body">
            <div className="content-title-top-space" />
            <div className="content-title">CheckList Name</div>
            <div className="content-title-bottom-space" />
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Introduce yourself"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="ABC Approach"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Assign Roles"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Get IV Access"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Assign Roles"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Assign Roles"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
            <div className="content-list-item-space" />{" "}
            <div className="content-list-item">
              <Input
                className="checklist-item-input"
                defaultValue="Assign Roles"
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={true}
              ></Input>
              <Input
                className="checklist-item-checkbox"
                type="checkbox"
                defaultChecked={false}
              ></Input>
            </div>
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
