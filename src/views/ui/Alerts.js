import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Alert
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <Alert color="primary">Alerte 1</Alert>
            <Alert color="secondary">Alerte 2</Alert>
            <Alert color="success">Alerte 3</Alert>
            <Alert color="danger">Alerte 4</Alert>
            <Alert color="warning">Alerte 5</Alert>
            <Alert color="info">Alerte 6</Alert>
            <Alert color="light">Alerte 7</Alert>
            <Alert color="dark">Alerte 8</Alert>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;
