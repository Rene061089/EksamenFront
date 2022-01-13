import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const AdminPage = ({url, facade }) => {


  const [users, setUsers] = useState([
    {
      dto_id: "",
      dto_gender: "",
      dto_name: "",
      dto_age: "",
      dto_phone: "",
      dto_user: "",
    },
  ]);

  function DeleteUser(id) {
    const op = facade.makeOptions("DELETE", true, id);
    fetch(url + "/api/info/" + id, op)
      .then(facade.handleHttpErrors)
      .then(alert("The user with username " + id + " has been deleted"));
      getUserinfo();
  }

  const getUserinfo = async () => {
    const res = await fetch(url + "/api/info/allinfo");
    const data = await res.json();
    setUsers(...[data, users]);
  };

  useEffect(() => {
    getUserinfo();
  }, []);

  let counter = 0;
  return (
    <div>
      <Table bordered responsive variant="dark">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Gender</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Age</th>
            <th style={{ textAlign: "center" }}>Phone</th>
            <th style={{ textAlign: "center" }}>Height</th>
            <th style={{ textAlign: "center" }}>UserName</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={counter++}>
              <td>{<strong>{item.dto_id}</strong>}</td>
              <td>{<strong>{item.dto_gender}</strong>}</td>
              <td>{<strong>{item.dto_name}</strong>}</td>
              <td>{<strong>{item.dto_age}</strong>}</td>
              <td>{<strong>{item.dto_phone}</strong>}</td>
              <td>{<strong>{item.dto_height}</strong>}</td>
              <td>{<strong>{item.dto_user}</strong>}</td>
              <td>
                <button onClick={() => DeleteUser(item.dto_user)}>
                  Delete user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPage;