import React from 'react'
import { useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';


const OwnerPage = ({facade, setLoggedIn}) => {
//   if(facade.getToken() !== undefined ){
//     setLoggedIn(true)
//  }

    const [getOwners, setOwners] = useState([]);

    const getOwnerInfo = (data) => {
        setOwners(data)
        
    }

useEffect(() => {
    facade.fetchData("info/allowners", getOwnerInfo)
},[])

let counter = 0;
    return (
       
        <div>
          
          <h3 className="headingCenter">All owners </h3>
          <div className="centerTable">
          <div className="BoatTable2">
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
            {getOwners.map((item) => (
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
        
    )
}

export default OwnerPage
