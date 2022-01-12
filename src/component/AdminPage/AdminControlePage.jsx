import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DeleteBoat from "./DeleteBoat";
import UpdateBoat from "./UpdateBoat";
import SetBoatOwner from "./SetBoatOwner";
import Harbours from "../Harbours";
import Boats from "../Boats";
import "../../styles/AdminStyles.css";
import "../../styles/createNewBoat.css";
import PutBoatInHarbour from "./PutBoatInHarbour";
import CreateBoat from "./CreateBoat";
import OwnerPage from "../OwnerPage";


const CreateNewBoat = ({ facade, url, setLoggedIn, loggedin }) => {

  console.log("se her " + facade.getToken());
  if(facade.getToken() !== undefined ){
   setLoggedIn(true)
}
  return (
    <div>
      <Row>
        <Col lg={4}>
          <Container className="AdminEditBackground" fluid>
            <div>
              <Boats facade={facade} url={url} />
              <OwnerPage facade={facade} url={url}/>
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
            <Harbours facade={facade} url={url}/>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default CreateNewBoat;
