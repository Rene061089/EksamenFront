import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "../styles/homepage.css"

const Boats = ({ facade, setLoggedIn }) => {

  const [toggle, setToggle] = useState(false);
  const [getBoats, setBoats] = useState([
    {
      dto_boatId: "",
      dto_brand: "",
      dto_make: "",
      dto_name: "",
    },
  ]);
  const [getBoatOwner, setBoatOwner] = useState([""]);
  const [boatId, setBoatId] = useState("");
  const [res, setRes] = useState("");
  const getBoatInfo = (data) => {
    setBoats(data);
  };
  const getBoatOwnerinfo = (data) => {
    setBoatOwner(data);
  };

  useEffect(() => {
    facade.fetchData("info/allboats", getBoatInfo);
  }, [toggle]);

  const toggleOnClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const boatLength = getBoats.map((item) => item.dto_boatId).slice(-1);
  //husk rekkefølgen det er vigtigt. den læser altid fra toppen og ned
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (boatId.includes(".")) {
      setRes("du kan kun skrive hele tal");
    } else if (boatId <= boatLength) {
      setRes("");
      facade.fetchData("info/boatsowners/" + boatId, getBoatOwnerinfo);
    } else {
      setRes("Du har valgt et båd-id id som ikke findes");
      facade.fetchData("info/boatinharbour/" + boatId, getBoatOwnerinfo);
    }
    setBoatId("");
  };
  console.log();
  console.log(getBoats.dto_boatId);
  let counter = 0;
  return (
    
      <div >
    
         <h3 className="headingCenter">View of all boats </h3> 
         <div className="centerTable">
        <div className="BoatTable2">
        <button className="headingCenterbutton" onClick={toggleOnClick}>Refresh</button>
          <Table  bordered  responsive>
            <thead >
              <tr className="tr-color">
                <th style={{ textAlign: "center" }}>#</th>
                <th style={{ textAlign: "center" }}>Brand</th>
                <th style={{ textAlign: "center" }}>Origin</th>
                <th style={{ textAlign: "center" }}>Name</th>
              </tr>
            </thead>
            <tbody>
              {getBoats.map((item) => (
                <tr key={counter++}>
                  <td>{<strong>{item.dto_boatId}</strong>}</td>
                  <td>{<strong>{item.dto_brand}</strong>}</td>
                  <td>{<strong>{item.dto_make}</strong>}</td>
                  <td>{<strong>{item.dto_name}</strong>}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </div>

        
        <h3 className="headingCenter">View of boat owner/owners</h3>
        <div className="centerTable">
        <div className="BoatTable2"> 
          <form onSubmit={handleSubmit}>
            <label>
              Input boat id to see boat owner
              <br></br>
              <input
                style={{ color: "black" }}
                required
                type="number"
                value={boatId}
                onChange={(e) => setBoatId(e.target.value)}
              />
            </label>
            <button style={{ backgroundColor: "red" }} type="Submit">
              Submit
            </button>
          </form>
          {res}
          <Table bordered responsive>
            <thead>
              <tr className="tr-color">
                <th style={{ textAlign: "center" }}>#</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Address</th>
                <th style={{ textAlign: "center" }}>Phone</th>
              </tr>
            </thead>
            <tbody>
              {getBoatOwner.map((item) => (
                <tr key={counter++}>
                  <td>{<strong>{item.dto_owner_id}</strong>}</td>
                  <td>{<strong>{item.dto_name}</strong>}</td>
                  <td>{<strong>{item.dto_address}</strong>}</td>
                  <td>{<strong>{item.dto_phone}</strong>}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        </div>
      </div>
    
  );
};

export default Boats;
