import React from 'react'
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const WashingAssistants = ({facade}) => {

    const [toggle, setToggle] = useState(false);
  const [getWashingAssistants, setWashingAssistants] = useState([
    {
        dto_wa_id: "",
        dto_name: "",
        dto_primaryLanguage: "",
        dto_yearsOfXP: "",
        dto_priceHour: "",
    },
  ]);

  const getWAInfo = (data) => {
    setWashingAssistants(data);
  };
  

  useEffect(() => {
    facade.fetchData("info/allwashingassistants", getWAInfo);
  }, [toggle]);

  const toggleOnClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

let counter = 0;
    return (
        <div>
           <div >
    
         <h3 className="headingCenter">View of all Washing Assistants </h3> 
         <div className="centerTable">
        <div className="BoatTable2">
        <button className="headingCenterbutton" onClick={toggleOnClick}>Refresh</button>
          <Table  bordered  responsive>
            <thead >
              <tr className="tr-color">
                <th style={{ textAlign: "center" }}>ID</th>
                <th style={{ textAlign: "center" }}>Name</th>
                <th style={{ textAlign: "center" }}>Language</th>
                <th style={{ textAlign: "center" }}>Years of XP</th>
                <th style={{ textAlign: "center" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {getWashingAssistants.map((item) => (
                <tr key={counter++}>
                  <td>{item.dto_wa_id}</td>
                  <td>{item.dto_name}</td>
                  <td>{item.dto_primaryLanguage}</td>
                  <td>{item.dto_yearsOfXP}</td>
                  <td>{item.dto_priceHour}{" "}{"Kr."}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </div>
        </div>
        </div>
    )
}

export default WashingAssistants
