import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from "./components/FormComponent";
import { Row, Col } from "react-bootstrap";
import Images from "./components/Images";
import ShowUserData from "./components/ShowUserData";

const App = () => {
  const [userData, setUserData] = useState({});

  const handleSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <FormComponent handleSubmit={handleSubmit} />
        </Col>
        <Col>
          <Images />
        </Col>
        <Col>
          <ShowUserData data={userData} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
