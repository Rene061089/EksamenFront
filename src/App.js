import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import "./styles/Table.css";
import Home from "./component/Home";
import React, { useEffect } from "react";
import { LoginUI } from "./component/LogIn";
import { Logout } from "./component/Logout";
import Signup from "./component/Signup";
import facade from "./component/apiFacade";
import { useState } from "react";
import DeleteUser from "./component/AdminPage/DeleteUser";
import UserSettings from "./component/UserSettings";
import AdminPage from "./component/AdminPage/AdminPage";
import Url from "./component/Url";
import WashingAssistants from "./component/WashingAssistants";
import UserBookings from "./component/UserBookings";
import AdminCarWashControle from "./component/AdminPage/AdminCarWashControle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    if (facade.getToken() !== null) {
      setLoggedIn(true);
    }
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="bagGrund">
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {facade.hasUserAccess("admin", loggedIn) && (
            <li>
              <NavLink to="/adminuserpage">Admin user page</NavLink>
            </li>
          )}
          {facade.loginCheck(loggedIn) && (
            <li>
              <NavLink to="/Login">Sign-in</NavLink>
            </li>
          )}
          {facade.loginCheck(loggedIn) && (
            <li>
              <NavLink to="/signup">Sign-up</NavLink>
            </li>
          )}
          
         
          {facade.hasUserAccess("user", loggedIn) && (
          <li>
              <NavLink to="/washingassistants">Washing Assistants</NavLink>
            </li>
            )}
             {facade.hasUserAccess("user", loggedIn) && (
             <li>
              <NavLink to="/userbookings">My Bookings</NavLink>
            </li>
            )}
            {facade.hasUserAccess("admin", loggedIn) && (
            <li>
              <NavLink to="/admincarcontrolepage">Admin Controle page</NavLink>
            </li>
            )}
            {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          )}
        
          {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/deleteUser">Delete user</NavLink>
            </li>
          )}
               {facade.loginCheck(!loggedIn) && (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
          <li>
            <h3 className="customhead">Welcome to the car-wash sytem</h3>
          </li>
        </ul>
        <br />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              className="LoginBackground"
              path="/login"
              element={
                <LoginUI
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  facade={facade}
                />
              }
            />

            <Route
              className="LoginBackground"
              path="/logout"
              element={<Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />

            {facade.hasUserAccess("admin", loggedIn) && (
              <Route
                path="/adminuserpage"
                element={
                  <AdminPage
                    url={Url}
                    setLoggedIn={setLoggedIn}
                    facade={facade}
                  />
                }
              />
            )}
          
          {facade.hasUserAccess("admin", loggedIn) && (
              <Route
              path="/admincarcontrolepage"
              element={<AdminCarWashControle facade={facade} setLoggedIn={setLoggedIn} url={Url} />}
            />
            )}
            {facade.hasUserAccess("user", loggedIn) && (
            <Route
              path="/washingassistants"
              element={<WashingAssistants facade={facade} setLoggedIn={setLoggedIn} />}
            />
            )}
             {facade.hasUserAccess("user", loggedIn) && (
            <Route
              path="/userbookings"
              element={<UserBookings facade={facade} url={Url} />}
            />
            )}
            {facade.hasUserAccess("user", loggedIn) && (
              <Route
                path="/settings"
                element={
                  <UserSettings
                    setLoggedIn={setLoggedIn}
                    facade={facade}
                    url={Url}
                  />
                }
              />
            )}
            <Route
              path="/signup"
              element={
                <Signup
                  facade={facade}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  url={Url}
                />
              }
            />
            {facade.hasUserAccess("user", "admin", loggedIn) && (
              <Route
                path="/deleteUser"
                element={
                  <DeleteUser
                    facade={facade}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    url={Url}
                  />
                }
              />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
