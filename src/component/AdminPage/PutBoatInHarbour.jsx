import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';


const PutBoatInHarbour = ({facade, url}) => {

    const [boatID, setBoatID] = useState("");
    const [harbourID, setHarbourID] = useState("");

    const handleSubmitForBoatsInHArbour = async (e) => {
        e.preventDefault();
        try {
          const op = facade.makeOptions("PUT", true);
          await fetch(
            url + "/api/info/putboatharbour/" + boatID + "/" + harbourID,
            op
          )  
        } finally {
          setBoatID("");
          setHarbourID("");
        }
      };


    return (
        <div>
            <Card className='customCard'>
            <h2>Put boat in harbour</h2>
            <form onSubmit={handleSubmitForBoatsInHArbour}>
              <input
                type="number"
                required
                value={boatID}
                className="input1"
                placeholder="Boat ID"
                onChange={(e) => setBoatID(e.target.value)}
              />
              {<br></br>}
              <input
                type="text"
                required
                value={harbourID}
                className="input1"
                placeholder="Harbour ID"
                onChange={(e) => setHarbourID(e.target.value)}
              />
              {<br></br>}
              <button style={{ backgroundColor: "red" }} type="Submit">
                Submit
              </button>
            </form>
            {<br></br>}
            </Card>
        </div>
    )
}

export default PutBoatInHarbour
