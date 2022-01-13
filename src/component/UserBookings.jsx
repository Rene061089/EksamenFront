import React from "react";
import "../styles/userstyles.css"
import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import CreateBooking from "./CreateBooking";
import SetAssistantOnBooking from "./SetAssistantOnBooking";
import WashingAssistants from "./WashingAssistants";

const UserBookings = ({ facade, url }) => {
  const [toggle, setToggle] = useState(false);
  const [getMyBookings, setMyBookings] = useState([
    {
      dto_booking_id: "",
      dto_duration: "",
      dto_date: "",
      dto_time: "",
    },
  ]);

  const getBookingInfo = (data) => {
    setMyBookings(data);
  };

  useEffect(() => {
    facade.fetchData("info/booking/" + facade.getUserName(), getBookingInfo);
  }, [toggle]);

  const toggleOnClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  let counter = 0;
  return (
    
    <div>
      <Container className="MyBookingsBackground" fluid>
      <CreateBooking facade={facade} url={url}/>
      <div>
        <h3 className="headingCenter">View all my bookings</h3>
        <div className="centerTable">
          <div className="BoatTable2">
            <button className="headingCenterbutton" onClick={toggleOnClick}>
              Refresh
            </button>
            <Table bordered responsive>
              <thead>
                <tr className="tr-color">
                  <th style={{ textAlign: "center" }}>ID</th>
                  <th style={{ textAlign: "center" }}>Duration</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                  <th style={{ textAlign: "center" }}>Time</th>
                  
                </tr>
              </thead>
              <tbody>
                {getMyBookings.map((item) => (
                  <tr key={counter++}>
                    <td>{item.dto_booking_id}</td>
                    <td>{item.dto_duration}{" "}{"hrs."} </td>
                    <td>{item.dto_date}</td>
                    <td>{item.dto_time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <WashingAssistants facade={facade}/>
      <SetAssistantOnBooking facade={facade} url={url}/>
      </Container>
    </div>
  );
};

export default UserBookings;
