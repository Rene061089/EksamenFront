import React from "react";
import "../../styles/AdminStyles.css";
import "../../styles/createNewAssistant.css"
import { Container, Row, Col } from "react-bootstrap";
import DeleteBooking from "./DeleteBooking";
import AllBookings from "./AllBookings";
import CreateNewWashingAssistant from "./CreateNewWashingAssistant";
import WashingAssistants from "../WashingAssistants";
import SetAssistantOnBooking from "../SetAssistantOnBooking";
import UpdateAssistant from "./UpdateAssistant";

const AdminCarWashControle = ({facade, url}) => {
    return (
        <div>
             <Row>
        <Col lg={4}>
          <Container className="AdminEditBackground" fluid>
            <div>
              <AllBookings facade={facade} />
              <WashingAssistants facade={facade}  />
            </div>
          </Container>
        </Col>

        <Col lg={4}>
          <Container className="LoginBackground" fluid>
            <CreateNewWashingAssistant facade={facade} url={url}/>
           
            <SetAssistantOnBooking facade={facade}  url={url}/>
            <DeleteBooking facade={facade}  url={url}/>
            
          </Container>
        </Col>

        <Col lg={4}>
          <Container className="AdminEditBackground" fluid>
            <UpdateAssistant facade={facade} url={url}/>
          </Container>
        </Col>
      </Row>
        </div>
    )
}

export default AdminCarWashControle
