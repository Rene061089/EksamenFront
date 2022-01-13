import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const DeleteBooking = ({facade, url}) => {
    const [bookingID, setBookingID] = useState("")
  const [msg, setMsg] = useState("")
  const [getBookings, setBookings] = useState([{}]);


  const getBookingInfo = (data) => {
    setBookings(data);
  };
  useEffect(() => {
    facade.fetchData("info/allbookings", getBookingInfo);
  }, [msg]);
    

    // const nytArray = (() => {
    //   let text = getBookings.map((item) => item.dto_boatId).toString();
    //     return text
    // })
    

    const onSubmit = async (e) => {
      e.preventDefault();
        const op = facade.makeOptions("DELETE", true);
        await fetch(url + "/api/info/booking/" + bookingID, op).then(
          facade.handleHttpErrors
        );
        setBookingID("");
        setMsg("Booking med id: " + bookingID + " er blevet slettet");
      };
    

    return (
        <div>
        <Card className='customCard'>
           <h2>Delete Booking</h2>
           <form onSubmit={onSubmit}>     
      <input
          type="number"
          required
          value={bookingID}
          className="input1"
          placeholder="Booking ID"
          onChange={(e) => setBookingID(e.target.value)} 
        />
         <br></br>
        <button style={{ backgroundColor: "red" }} type="Submit">
          Submit
        </button>
        <br></br>
        {msg}
      </form>
      <br></br>
        
      </Card>
      </div>
    )
}

export default DeleteBooking
