import { Container } from "react-bootstrap";
import React, { useState } from "react";
import "../styles/loginstyle.css";
import "../styles/userInfoLabel.css";
import facade from "./apiFacade";
import url from "./Url";
import { useNavigate } from "react-router-dom";

const UserData = ({ setLoggedIn }) => {
  const [userdata, setUserdata] = useState({
    dto_userName: "",
    dto_userPass: "",
    dto_name: "",
    dto_gender: "",
    dto_age: "",
    dto_phone: "",
    dto_height: "",
  });

  var loading = <p className="signUpBlinker">Please wait</p>;

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const [res, setRes] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userdata.dto_userPass !== userdata.repeatPW) {
      setRes("Passwords does not match");
    } else if (userdata.dto_phone.length !== 8) {
      setRes("Invalid phone number");
    } else {
      const op = facade.makeOptions("POST", true, userdata);
      await fetch(url + "/api/info", op)
        .then(facade.handleHttpErrors)
        .then(setRes(loading))
        .then(await delay(2000))
        .then(await facade.login(userdata.dto_userName, userdata.dto_userPass))
        .then(setLoggedIn(true));
      navigate("/mypage");
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setUserdata({ ...userdata, [id]: value });
  };

  return (
    <Container className="LoginBackground">
      <div style={{ marginTop: 100 }}>
        <h3>Enter your information</h3>
        <form onSubmit={handleSubmit}>
          {<br></br>}
          <label className="formLabel" for="dto_gender">
            Male
          </label>
          <input
            type="radio"
            required
            onChange={handleChange}
            value="Male"
            name="gender"
            id="dto_gender"
          />
          <label className="formLabel" for="dto_gender">
            Female
          </label>
          <input
            type="radio"
            required
            onChange={handleChange}
            value="Female"
            name="gender"
            id="dto_gender"
          />
          <label className="formLabel" for="dto_gender">
            Other
          </label>
          <input
            type="radio"
            required
            onChange={handleChange}
            value="Other"
            name="gender"
            id="dto_gender"
          />
          {<br></br>}
          <input
            type="text"
            required
            onChange={handleChange}
            className="input1"
            placeholder="User name"
            id="dto_userName"
          />
          {<br></br>}
          <input
            type="text"
            required
            onChange={handleChange}
            className="input1"
            placeholder="Your name"
            id="dto_name"
          />
          {<br></br>}
          <input
            type="number"
            required
            onChange={handleChange}
            className="input1"
            placeholder="Age"
            id="dto_age"
          />
          {<br></br>}
          <input
            type="number"
            required
            onChange={handleChange}
            className="input1"
            placeholder="Phone"
            id="dto_phone"
          />
          {<br></br>}
          <input
            type="password"
            required
            onChange={handleChange}
            className="input1"
            placeholder="Password"
            id="dto_userPass"
          />
          {<br></br>}
          <input
            type="password"
            required
            onChange={handleChange}
            className="input1"
            placeholder="Repeat Password"
            id="repeatPW"
          />
          {<br></br>}
          <button
            required
            style={{ backgroundColor: "dodgerblue", color: "white" }}
            type="Submit"
          >
            Submit
          </button>
          <button
            style={{
              marginLeft: 20,
              backgroundColor: "crimson",
              color: "white",
            }}
          >
            Cancel
          </button>
        </form>
        <h1>
          <label id="resp">{res}</label>
        </h1>
      </div>
    </Container>
  );
};

export default UserData;
