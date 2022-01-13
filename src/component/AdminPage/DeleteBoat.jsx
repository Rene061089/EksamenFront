import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'


const DeleteBoat = ({facade, url}) => {
  const [boatID, setBoatID] = useState("")
  const [msg, setMsg] = useState("")
  const [getBoats, setBoats] = useState([
    {
      dto_boatId: "",
      dto_brand: "",
      dto_make: "",
      dto_name: "",
    },
  ]);
  const getBoatInfo = (data) => {
    setBoats(data);
  };
  useEffect(() => {
    facade.fetchData("info/allboats", getBoatInfo);
  }, [msg]);
    

    const nytArray = (() => {
      let text = getBoats.map((item) => item.dto_boatId).toString();
        return text
    })
    



  
    const onSubmit = async (e) => {
      e.preventDefault();
     if (nytArray.length === -1) {
        setMsg("der er ingen både i databasen");
        setBoatID("");
      } else if (!nytArray().includes(boatID) || nytArray.length >= 1 ) {
        setMsg("båd med id " + boatID + " findes ikke");
        setBoatID("");
      } else {
        const op = facade.makeOptions("DELETE", true);
        await fetch(url + "/api/info/deleteboat/" + boatID, op).then(
          facade.handleHttpErrors
        );
  
        setBoatID("");
        setMsg("Båd med id: " + boatID + " er blevet slettet");
      }
    };



    return (
        <div>
          <Card className='customCard'>
             <h2>Delete Boat</h2>
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

export default DeleteBoat
