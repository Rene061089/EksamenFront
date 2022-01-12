import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";


const SetBoatOwner = ({ facade, url }) => {
  const [ownerId, setOwnerId] = useState("");
  const [boatID, setBoatID] = useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
    const op = facade.makeOptions("PUT", true);
    await fetch(
      url + "/api/info/putboattoowner/" + ownerId + "/" + boatID,
      op
    ).then(facade.handleHttpErrors);
    setOwnerId("")
    setBoatID("")
  };


  return (
    <div>
      <Card className="customCard" >
      <h2>Set Owner to a boat</h2>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          required
          value={boatID}
          className="input1"
          placeholder="Boat ID"
          onChange={(e) => setBoatID(e.target.value)}
        />
        <br></br>
        <input
          type="number"
          required
          value={ownerId}
          className="input1"
          placeholder="Owner ID"
          onChange={(e) => setOwnerId(e.target.value)}
        />
        <br></br>
        <button style={{ backgroundColor: "red" }} type="Submit">
          Submit
        </button>
      </form>
      {<br></br>}
      </Card>
    </div>
  );
};

export default SetBoatOwner;
