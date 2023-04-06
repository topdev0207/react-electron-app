import React from "react";
import "../Setting/setting.css";
import { Input } from "reactstrap";

function Checkbox(props) {
  return (
    <>
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
      </div>
    </>
  );
}

export default Checkbox;
