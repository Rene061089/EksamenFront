import React from 'react'
import { useState } from 'react';

const AssistantInfo = ({update, prosID}) => {

    
   
    const [dto_name, setName] = useState("");
    const [dto_primaryLanguage, setPrimaryLanguage] = useState("");
    const [dto_yearsOfXP, setYearsOfXP] = useState("");
    const [dto_priceHour, setPriceHour] = useState("");
    const [assistentID, setAssistentID] = useState("");
  
    const onSubmit = (event) => {
      event.preventDefault();
      update({ dto_name, dto_primaryLanguage, dto_yearsOfXP, dto_priceHour  });
      setName("");
      setPrimaryLanguage("");
      setYearsOfXP("");
      setPriceHour("");
    };
  
    const onSubmitID = (event) => {
      event.preventDefault();
      prosID(assistentID);
      setAssistentID("");
    };


    return (
        <div>
        <h2>Update Assistant</h2>
        <form onSubmit={onSubmitID}>
          <input
            type="number"
            required
            value={assistentID}
            className="input1"
            placeholder="Assistant id"
            onChange={(e) => setAssistentID(e.target.value)}
          />{" "}
          
          <button style={{ backgroundColor: "red" }} type="Submit">
            Submit
          </button>
        </form>
        
        <form onSubmit={onSubmit}>
          <input
            type="text"
            // required
            value={dto_name}
            className="input1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br></br>
            <input
            type="text"
            // required
            value={dto_primaryLanguage}
            className="input1"
            placeholder="Languege"
            onChange={(e) => setPrimaryLanguage(e.target.value)}
          /><br></br>
            <input
            type="text"
            required
            value={dto_yearsOfXP}
            className="input1"
            placeholder="YearsOfXP"
            onChange={(e) => setYearsOfXP(e.target.value)}
          /><br></br>
            <input
            type="text"
            required
            value={dto_priceHour}
            className="input1"
            placeholder="Price pr. hrs."
            onChange={(e) => setPriceHour(e.target.value)}
          /><br></br>
         {" "}
          <button style={{ backgroundColor: "red" }} type="Submit">
            Submit
          </button>
        </form>
        
      </div>
    )
}

export default AssistantInfo
