import { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

const Harbours = ({ facade }) => {
  const [getHarbours, setHarbours] = useState([""]);
  const [getBoatsInHarbour, setBoatsInHArbour] = useState([""]);
  const [harbourId, setHarbourID] = useState("");
  const [res, setRes] = useState("");

  const getHarbourInfo = (data) => {
    setHarbours(data);
  };
  const getBoatsInHarborInfo = (data) => {
    setBoatsInHArbour(data);
  };

  useEffect(() => {
    facade.fetchData("info/allharbours", getHarbourInfo);
  
  }, []);

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (harbourId !== ""){
    setRes("")
    facade.fetchData("info/boatinharbour/" + harbourId, getBoatsInHarborInfo);
  }
    else  {
      setRes("Du har valgt et havne-id id som ikke findes")
      facade.fetchData("info/boatinharbour/" + harbourId, getBoatsInHarborInfo);
    }
    setHarbourID("")
  };


  let counter = 0;
  
  return (
   
      <div>
        <h3>All harbours</h3>
        <div className="BoatTable2"> 
          <Table bordered responsive>
            <thead>
              <tr className="tr-color">
                <th style={{ textAlign: "center" }}>#</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Address</th>
                <th style={{ textAlign: "center" }}>Capacity</th>
              </tr>
            </thead>
            <tbody>
              {getHarbours.map((item) => (
                <tr key={counter++}>
                  <td>{<strong>{item.dto_harbour_id}</strong>}</td>
                  <td>{<strong>{item.dto_name}</strong>}</td>
                  <td>{<strong>{item.dto_address}</strong>}</td>
                  <td>{<strong>{item.dto_capacity}</strong>}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        
        <h3>All boats in harbours</h3>
        <div className="BoatTable2">  
        <form onSubmit={handleSubmit}>
          <label>
            Input harbour id to see boats<br></br>
            <input
            style={{color: "black"}}
              type="number"
              value={harbourId}
              onChange={(e) => setHarbourID(e.target.value)}
            />
          </label>
          <button style={{backgroundColor: "red"}} type="Submit">Submit</button>
        </form>
        {res}
          <Table bordered responsive>
            <thead>
              <tr className="tr-color">
                <th style={{ textAlign: "center" }}>#</th>
                <th style={{ textAlign: "center" }}>Brand</th>
                <th style={{ textAlign: "center" }}>Origin</th>
                <th style={{ textAlign: "center" }}>Name</th>
              </tr>
            </thead>
            <tbody>
              {getBoatsInHarbour.map((item) => (
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
    
  );
};





export default Harbours;
