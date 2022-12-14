import React from "react";
import { Link } from "react-router-dom";
import { Card, Table, CardBody, CardTitle, Col } from "reactstrap";

const Buttons = () => {
  return (
    <div>
      <Col lg="12">
        <Card>
          <CardTitle
            tag="h6"
            className="border-bottom p-3 mb-0 d-flex flex-row justify-content-between"
          >
            <div>
              <i className="bi bi-card-text me-2"> </i>
              <span>Liste de garages</span>
            </div>
            <button class="btn btn-primary">
              <Link to="/Forms" className="text-decoration-none text-white">
                Ajouter garage
              </Link>
            </button>
          </CardTitle>

          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nom</th>
                  <th>Post-nom</th>
                  <th>Sexe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>M</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>F</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>F</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Buttons;
