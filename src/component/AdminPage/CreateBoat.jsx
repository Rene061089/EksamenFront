import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';


const CreateBoat = ({facade, url}) => {

    const [createBoat, setCreateBoat] = useState({
        dto_brand: "",
        dto_make: "",
        dto_name: "",
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const op = facade.makeOptions("POST", true, createBoat);
          await fetch(url + "/api/info/newboat", op).then(facade.handleHttpErrors);
        } finally {
          setCreateBoat({ dto_brand: "", dto_make: "", dto_name: "" });
        }
      };
    
      const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setCreateBoat({ ...createBoat, [id]: value });
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
            <h2>Create Boat</h2>
            <div className="CreateDiv">
              <button
                className="openModalbtn"
                id="Delete"
                onClick={handleClick}
              >
                Create New Boat
              </button>
              <div className="modal">
                <div className="modal_content">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      required
                      value={createBoat.dto_brand}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Brand"
                      id="dto_brand"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={createBoat.dto_make}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Origin"
                      id="dto_make"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={createBoat.dto_name}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Boat name"
                      id="dto_name"
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

export default CreateBoat
