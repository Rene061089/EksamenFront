import React from "react";
import "../../styles/AdminStyles.css";
import "../../styles/createNewAssistant.css"
import { Container, Row, Col } from "react-bootstrap";
import DeleteBoat from "./DeleteBoat";
import UpdateBoat from "./UpdateBoat";
import SetBoatOwner from "./SetBoatOwner";
import Harbours from "../Harbours";
import Boats from "../Boats";
import PutBoatInHarbour from "./PutBoatInHarbour";
import CreateNewWashingAssistant from "./CreateNewWashingAssistant";
import OwnerPage from "../OwnerPage";

const AdminCarWashControle = ({facade, url}) => {
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
            <CreateNewWashingAssistant facade={facade} url={url}/>
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
    )
}

export default AdminCarWashControle
