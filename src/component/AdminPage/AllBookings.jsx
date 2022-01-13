import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../../styles/homepage.css"

const AllBookings = ({facade}) => {
    const [bookingID, setBookingID] = useState("")
    const [toggle, setToggle] = useState(false);
    const [getBookings, setBookings] = useState([{}]);
    const [res, setRes] = useState("");


    const getBookingInfo = (data) => {
    setBookings(data);
  };
  useEffect(() => {
    facade.fetchData("info/allbookings", getBookingInfo);
  }, [toggle]);


  const toggleOnClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };


  console.log();
  console.log(getBookings.dto_boatId);
  let counter = 0;
    return (
        <div >
    
        <h3 className="headingCenter">View of all bookings </h3> 
        <div className="centerTable">
       <div className="BoatTable2">
       <button className="headingCenterbutton" onClick={toggleOnClick}>Refresh</button>
         <Table  bordered  responsive>
           <thead >
             <tr className="tr-color">
             <th style={{ textAlign: "center" }}>ID</th>
                  <th style={{ textAlign: "center" }}>Duration</th>
                  <th style={{ textAlign: "center" }}>Date</th>
                  <th style={{ textAlign: "center" }}>Time</th>
             </tr>
           </thead>
           <tbody>
             {getBookings.map((item) => (
               <tr key={counter++}>
                 <td>{item.dto_booking_id}</td>
                 <td>{item.dto_duration}</td>
                 <td>{item.dto_date}</td>
                 <td>{item.dto_time}</td>
               </tr>
             ))}
           </tbody>
         </Table>
         </div>
       </div> 
     </div>
    )
}

export default AllBookings
