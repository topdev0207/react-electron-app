import React, { useState } from "react";
import "../Setting/setting.css";
import { FormGroup, Label, Input } from "reactstrap";

function Choice(props) {
  const [isRadio, setIsRadio] = useState("option1");
  const handleOptionChange = (event) => {
    console.log(event.target.value);
    setIsRadio(event.target.value);
  };
  console.log("isradio:::::;", isRadio);
  return (
    <>
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Introduce yourself"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option1"
          onChange={handleOptionChange}
          checked={isRadio === "option1"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="ABC Approach"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option2"
          onChange={handleOptionChange}
          checked={isRadio === "option2"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Assign Roles"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option3"
          onChange={handleOptionChange}
          checked={isRadio === "option3"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Get IV Access"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option4"
          onChange={handleOptionChange}
          checked={isRadio === "option4"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Assign Roles"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option5"
          onChange={handleOptionChange}
          checked={isRadio === "option5"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Assign Roles"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option6"
          onChange={handleOptionChange}
          checked={isRadio === "option6"}
          // defaultChecked={true}
        ></Input>
      </div>
      <div className="content-list-item-space" />{" "}
      <div className="content-list-item">
        <Input
          className="checklist-item-input"
          defaultValue="Assign Roles"
        ></Input>
        <Input
          className="checklist-item-radio"
          type="radio"
          value="option7"
          onChange={handleOptionChange}
          checked={isRadio === "option7"}
          // defaultChecked={true}
        ></Input>
      </div>
    </>
  );
}

export default Choice;
