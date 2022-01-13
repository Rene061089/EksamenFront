import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import "../styles/userstyles.css"

const CreateBooking = ({facade, url}) => {

    const [crateBooking, setCrateBooking] = useState({
       
        
                    dto_duration:"",
                    dto_date: "",
                    dto_time: "",
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const op = facade.makeOptions("POST", true, crateBooking);
          await fetch(url + "/api/info/newbooking/"+facade.getUserName(), op).then(facade.handleHttpErrors);
        } finally {
            setCrateBooking({dto_duration: "", dto_date:"", dto_time:"" });
        }
      };
    
      const handleChange = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        setCrateBooking({ ...crateBooking, [id]: value });
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
            <Card className='customUserCard'>
             <h2 className="headingCenter" >Create Booking</h2>
            
            <div className="CreateDiv">
              <button
                className="openModalbtn"
                id="Delete"
                onClick={handleClick}
              >
                Create New Booking
              </button>
              <div className="modal">
                <div className="modal_content">
                  <form onSubmit={handleSubmit}>
                    {<br></br>}
                    <input
                      type="number"
                      required
                      value={crateBooking.dto_duration}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Duration"
                      id="dto_duration"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={crateBooking.dto_date}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Date"
                      id="dto_date"
                    />
                    {<br></br>}
                    <input
                      type="text"
                      required
                      value={crateBooking.dto_time}
                      onChange={handleChange}
                      className="madalinput"
                      placeholder="Time"
                      id="dto_time"
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

export default CreateBooking
