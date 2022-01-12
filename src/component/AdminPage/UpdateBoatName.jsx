import React from "react";
import { useState } from "react";


const UpdateBoatName = ({ update, boatIDProps }) => {
  const [dto_name, setBoatName] = useState("");
  const [boatID, setBoatID] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    update({ dto_name });
    setBoatName("");
  };

  const onSubmitID = (event) => {
    event.preventDefault();
    boatIDProps(boatID);
    setBoatID("");
  };

  console.log(boatID);
  console.log(dto_name);
  return (
    <div>
      <h2>Update boat name</h2>
      <form onSubmit={onSubmitID}>
        <input
          type="number"
          required
          value={boatID}
          className="input1"
          placeholder="Boat ID"
          onChange={(e) => setBoatID(e.target.value)}
        />{" "}
        
        <button style={{ backgroundColor: "red" }} type="Submit">
          Submit
        </button>
      </form>
      
      <form onSubmit={onSubmit}>
        <input
          type="text"
          required
          value={dto_name}
          className="input1"
          placeholder="Boat name"
          onChange={(e) => setBoatName(e.target.value)}
        />
       {" "}
        <button style={{ backgroundColor: "red" }} type="Submit">
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default UpdateBoatName;
