import React from 'react'
import { useState } from "react";
import { Card } from "react-bootstrap";

const SetAssistantOnBooking = ({facade, url}) => {
    const [bookingId, setBookingId] = useState("");
    const [assistantId, setAssistantid] = useState("");
    const [msg, setMsg] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
      const op = facade.makeOptions("PUT", true);
      await fetch(
        url + "/api/info/putassistantonbooking/" + bookingId + "/" + assistantId,
        op
      ).then(facade.handleHttpErrors);
      setBookingId("")
      setAssistantid("")
      setMsg("Du har tilføjet assistent med id: " + assistantId +" til bokking med id: " + bookingId)
    };


    return (
        <div>
          
        <Card style={{marginTop: 50}} className="customUsertoAssistCard" > 
        
        <form onSubmit={onSubmit}>
        <h3>Set Assistant on Booking</h3>
          <input
            type="number"
            required
            value={bookingId}
            className="input1"
            placeholder="Booking ID"
            onChange={(e) => setBookingId(e.target.value)}
          />
          <br></br>
          <input
            type="number"
            required
            value={assistantId}
            className="input1"
            placeholder="Assistant Id"
            onChange={(e) => setAssistantid(e.target.value)}
          />
          <br></br>
          <button style={{ backgroundColor: "red" }} type="Submit">
            Submit
          </button>
        </form>
        {msg}
        {<br></br>}
        
        </Card>
      </div>
    )
}

export default SetAssistantOnBooking
