import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import "./styles/Table.css";
import Home from "./component/Home";
import React from "react";
import { LoginUI } from "./component/LogIn";
import { Logout } from "./component/Logout";
import Signup from "./component/Signup";
import facade from "./component/apiFacade";
import { useState } from "react";
import DeleteUser from "./component/AdminPage/DeleteUser";
import UserSettings from "./component/UserSettings";
import AdminPage from "./component/AdminPage/AdminPage";
import OwnerPage from "./component/OwnerPage";
import Harbours from "./component/Harbours";
import Boats from "./component/Boats";
import Url from "./component/Url";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import AdminControlePage from "./component/AdminPage/AdminControlePage";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="bagGrund">
        <ul className="header">
          <li>
            <NavLink to="/harbour">Home</NavLink>
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
              <NavLink to="/owners">Owners</NavLink>
            </li>
          )}
          {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/harbours">Harbours</NavLink>
            </li>
          )}
          {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/boats">Boats</NavLink>
            </li>
          )}
          {facade.hasUserAccess("admin", loggedIn) && (
            <li>
              <NavLink to="/admincontrolepage">Admin Page</NavLink>
            </li>
          )}
          {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          )}
          {facade.loginCheck(!loggedIn) && (
            <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
          )}
          
          {facade.hasUserAccess("user", loggedIn) && (
            <li>
              <NavLink to="/deleteUser">Delete user</NavLink>
            </li>
          )}
          <li>
            <h2 className="customhead">Welcome to the boat harbour sytem</h2>
          </li>
        </ul>
        <br />
        <div className="content">
          <Routes>
            <Route path="/harbour" element={<Home />} />

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
              element={<Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} loggedin={loggedIn} />}
            />
            {facade.hasUserAccess("admin", loggedIn) && (
              <Route path="/adminuserpage" element={<AdminPage url={Url} />} />
            )}
            {facade.hasUserAccess("admin", loggedIn) && (
              <Route
                path="/admincontrolepage"
                element={
                  <AdminControlePage
                    url={Url}
                    facade={facade}
                    setLoggedIn={setLoggedIn}
                  />
                }
              />
             )} 
            {facade.hasUserAccess("user", loggedIn) && (
              <Route path="/owners" element={<OwnerPage facade={facade} />} />
            )}
            {facade.hasUserAccess("user", loggedIn) && (
              <Route path="/harbours" element={<Harbours facade={facade} />} />
            )}
            {facade.hasUserAccess("user", loggedIn) && (
              <Route path="/boats" element={<Boats facade={facade} />} />
            )}
            {facade.hasUserAccess("user", loggedIn) && (
              <Route
                path="/settings"
                element={<UserSettings />}
                facade={facade}
              />
            )}
            <Route
              path="/signup"
              element={
                <Signup
                  facade={facade}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            {facade.hasUserAccess("user", loggedIn) && (
              <Route
                path="/deleteUser"
                element={
                  <DeleteUser
                    facade={facade}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
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
