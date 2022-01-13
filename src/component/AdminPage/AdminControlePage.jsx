import React from "react";
import "../../styles/AdminStyles.css";
import "../../styles/createNewBoat.css";
import { Container, Row, Col } from "react-bootstrap";
import DeleteBoat from "./DeleteBoat";
import UpdateBoat from "./UpdateBoat";
import SetBoatOwner from "./SetBoatOwner";
import Harbours from "../Harbours";
import Boats from "../Boats";
import PutBoatInHarbour from "./PutBoatInHarbour";
import CreateBoat from "./CreateBoat";
import OwnerPage from "../OwnerPage";


const CreateNewBoat = ({ facade, url}) => {

  return (
    <div>
      <Row>
        <Col lg={4}>
          <Container className="AdminEditBackground" fluid>
            <div>
              <Boats facade={facade} />
              <OwnerPage facade={facade}  />
            </div>
          </Container>
        </Col>

        <Col lg={4}>
          <Container className="LoginBackground" fluid>
            <CreateBoat facade={facade} url={url}/>
            <PutBoatInHarbour facade={facade} url={url} />
            <UpdateBoat facade={facade}  url={url}/>
            <DeleteBoat facade={facade}  url={url}/>
            <SetBoatOwner facade={facade}  url={url}/>
          </Container>
        </Col>

        <Col lg={4}>
          <Container className="AdminEditBackground" fluid>
            <Harbours facade={facade}  />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default CreateNewBoat;
