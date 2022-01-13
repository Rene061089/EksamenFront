import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import "../styles/userInfoLabel.css";
import "../styles/loginstyle.css";

const UpdateUserInfo = ({ onUpdate, facade, url }) => {
 
  const [toggle, setToggle] = useState(false);

  const [placeholder, setPlaceholder] = useState({
    dto_gender: "",
    dto_name: "",
    dto_age: "",
    dto_phone: "",
  });
  const [res, setRes] = useState("");

  const [dto_gender, setGender] = useState("");
  const [dto_name, setName] = useState("");
  const [dto_age, setAge] = useState("");
  const [dto_phone, setPhone] = useState("");

  const getPlaceholderValue = async () => {
    const res = await fetch(url + "/api/info/" + facade.getUserName());
    const data = await res.json();
    setPlaceholder(data);
  };

  useEffect(() => {
    getPlaceholderValue();
  }, [toggle]);

  const toggleOnClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    
      if (dto_phone.length !== 8) {
      setRes("Invalid phone number");
    } else {
      onUpdate({ dto_gender, dto_name, dto_age, dto_phone });
      setGender("");
      setName("");
      setAge("");
      setPhone("");
     
      setToggle(!toggle);
    }
  };
  return (
    <Container className="LoginBackground">
      <Row>
        <Col sm={2}>
          <Button style={{ marginTop: 25, width: 175 }} onClick={toggleOnClick}>
            {!toggle ? "Edit user information" : "Close Edit"}
          </Button>
        </Col>

        {!toggle && (
          <Col sm={5} style={{ width: 350, marginLeft: 210 }}>
            <h3>User info</h3>

            <Table bordered>
              <thead>
                <tr>
                  <th>Gender</th>
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th>Age</th>
              
                  <th style={{ textAlign: "center" }}>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{placeholder.dto_gender}</td>
                  <td>{placeholder.dto_name}</td>
                  <td>{placeholder.dto_age}</td>
          
                  <td>{placeholder.dto_phone}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        )}

        <Col sm={5}>
          <div style={{ width: 250, marginLeft: 220 }}>
            {toggle && <h3>Input your updates</h3>}
            {toggle && (
              <form onSubmit={onSubmit}>
                <lable className="formLabel">
                  <strong> Male</strong>{" "}
                </lable>
                <input
                  type="radio"
                  name="male"
                  value="male"
                  checked={dto_gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  id="male"
                />

                <lable className="formLabel">
                  {" "}
                  <strong> Female </strong>{" "}
                </lable>
                <input
                  type="radio"
                  name="female"
                  value="female"
                  checked={dto_gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  id="female"
                />
                <lable className="formLabel">
                  <strong> Other</strong>{" "}
                </lable>
                <input
                  type="radio"
                  name="Other"
                  value="other"
                  checked={dto_gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  id="Other"
                />
                <br></br>

                <input
                  className="input3"
                  type="text"
                  placeholder={placeholder.dto_name}
                  value={dto_name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
                  className="input3"
                  required
                  type="number"
                  placeholder={"Age: (" + placeholder.dto_age + ")"}
                  value={dto_age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <br></br>
                <input
                  className="input3"
                  required
                  type="number"
                  placeholder={"Phone: (" + placeholder.dto_phone + ")"}
                  value={dto_phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br></br>
                <button
                  style={{ backgroundColor: "dodgerblue", color: "white" }}
                  type="submit"
                >
                  Edit Info
                </button>
              </form>
            )}
            {toggle && (<label id="Res"> {res} </label>)}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateUserInfo;
