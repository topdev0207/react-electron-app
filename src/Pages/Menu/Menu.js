import { Col, Divider, Row } from "antd";
import { Button, Typography } from "antd";

import "./style.css";

const { Title } = Typography;

function MenuPages() {
  return (
    <>
      <Row className="total-margin">
        <Col span={11}>
          <Row className="menupage_left_item">
            <Button type="primary" style={{ width: "100" }}>
              New SBE
            </Button>
          </Row>

          <Row className="menupage_left_item">
            <Button type="primary" style={{ width: "100" }}>
              Review SBE
            </Button>
          </Row>

          <Row className="menupage_left_item">
            <Button type="primary">Setting</Button>
          </Row>

          <Row className="menupage_left_item">
            <Button type="primary">About Us</Button>
          </Row>

          <Row className="menupage_left_item">
            <Title level={2} style={{ color: "#1a4450" }}>
              Capture, communicate, and collaborate with ease.
            </Title>
          </Row>
        </Col>

        <Col span={1}></Col>

        <Col span={12} className="menupage_right">
          <img className="white_logo" />
        </Col>
      </Row>
    </>
  );
}

export default MenuPages;
