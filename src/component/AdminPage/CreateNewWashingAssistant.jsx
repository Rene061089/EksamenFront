import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';

const CreateNewWashingAssistant = ({facade, url}) => {

    const [createAssistant, setCreateAssistant] = useState({
       
        dto_name: "",
        dto_primaryLanguage: "",
        dto_yearsOfXP:"",
        dto_priceHour:"",
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const op = facade.makeOptions("POST", true, createAssistant);
          await fetch(url + "/api/info/newwashingassistant", op).then(facade.handleHttpErrors);
        } finally {
            setCreateAssistant({dto_name: "", dto_primaryLanguage: "", dto_yearsOfXP:"", dto_priceHour:"" });
        }
      };
    
      const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setCreateAssistant({ ...createAssistant, [id]: value });
      };
    
      function handleClick() {
        const modal = document.querySelector(".modal");
        modal.style.display = "block";
      }
    
      const closeModal = () => {
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
      };


    return (
        <div>
            
             <Card className='customCard'>
             <h2 className="headingCenter" >Create Assistant</h2>
            
            <div className="CreateDiv">
              <button
                className="openModalbtn"
                id="Delete"
                onClick={handleClick}
              >
                Create New Assistant
              </button>
              <div className="modal">
                <div className="modal_content">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      required
                      value={createAssistant.dto_name}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Name"
                      id="dto_name"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={createAssistant.dto_primaryLanguage}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Languege"
                      id="dto_primaryLanguage"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={createAssistant.dto_yearsOfXP}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Years of XP"
                      id="dto_yearsOfXP"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={createAssistant.dto_priceHour}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Price pr. hour"
                      id="dto_priceHour"
                    />
                    {<br></br>}
                    <button
                      className="closeModalbtn"
                      style={{ backgroundColor: "red" }}
                      type="Submit"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                    <button className="closeModalbtn" onClick={closeModal}>
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {<br></br>}
            </Card>
        </div>
    )
}

export default CreateNewWashingAssistant
