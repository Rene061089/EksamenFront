import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const UserBookings = ({ facade }) => {
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
    </div>
  );
};

export default UserBookings;
