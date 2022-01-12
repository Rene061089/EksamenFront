import { useState } from "react";
import "../styles/loginstyle.css";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./Home";

export function LoginUI({ loggedIn, setLoggedIn, facade }) {
  const login = (user, pass) => {
    let error = "";
    facade
      .login(user, pass)
      .catch((error = "User name or password does not match"))
      .then((res) => setLoggedIn(true));
    return error;
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <Home facade={facade} />
        </div>
      )}
    </div>
  );
}

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [msg, setMsg] = useState("");
  const [loginCredentials, setLoginCredentials] = useState(init);
  const performLogin = (evt) => {
    evt.preventDefault();
    setMsg(login(loginCredentials.username, loginCredentials.password));
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <Row>
        <Col className="displayBlock" lg={3}>
          <Container className="LoginPicBackground" fluid>
            <img
              className="imgTop"
              src="https://random.imagecdn.app/500/150"
              alt="random"
            />
            <br></br>
            <img
              className="img"
              src="https://random.imagecdn.app/500/159"
              alt="random"
            />
            <br></br>
            <img
              className="img"
              src="https://random.imagecdn.app/500/155"
              alt="random"
            />
          </Container>
        </Col>
        
        <Col sm={12} md={12} lg={6}>
          <Container className="LoginBackground" fluid>
            <div className="centerFrom">
              <h2>Login</h2>
              <form onChange={onChange}>
                <input
                  className="input1"
                  placeholder="User Name"
                  id="username"
                />
                {<br></br>}
                <input
                  className="input2"
                  placeholder="Password"
                  id="password"
                />
                {<br></br>}
                <button className="button" onClick={performLogin}>
                  Login
                </button>
              </form>
              <label id="jsonResponse">{msg}</label>
            </div>
          </Container>
        </Col>

        <Col className="displayBlock" lg={3}>
          <Container className="LoginPicBackground" fluid>
            <img
              className="imgTop"
              src="https://random.imagecdn.app/500/157"
              alt="random"
            />
            <br></br>
            <img
              className="img"
              src="https://random.imagecdn.app/500/156"
              alt="random"
            />
            <br></br>
            <img
              className="img"
              src="https://random.imagecdn.app/500/158"
              alt="random"
            />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default LogIn;
