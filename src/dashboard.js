import './App.css';
import { Col, Divider, Row } from 'antd';

function dashboard() {
    
  return (
    // <div className="App">
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */} vvv v              
    //     <h1>hello</h1>
    // </div>
    <>
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    </>
  );
}

export default dashboard;


