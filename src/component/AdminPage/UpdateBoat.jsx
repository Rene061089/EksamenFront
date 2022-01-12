import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";

import UpdateBoatName from "./UpdateBoatName";

const UpdateBoat = ({facade, url}) => {
  const [boatName, setBoatName] = useState({
    dto_name: "",
  });

  const [boatID, setBoatID] = useState("");

  const update = async (info) => {
    const result = await fetch(url + "/api/info/updateboatname/" + boatID, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await result.json();
    setBoatName(data);

  };
  useEffect(() => {}, [boatName]);

//       const update = async (info) => {

//           const op = facade.makeOptions("PUT", true, boatName);
//           console.log(boatName);
//           const result = await fetch(url + "/api/info/updateboatname/" + boatID, op)
//           const res = await result.json();

//           console.log(res);
//           setBoatName(res)
//           console.log(boatName);
//         };
//   useEffect(() => {
//   },[boatName])

  return (
    <div>
      <Card className="customCard">
      <UpdateBoatName update={update} boatIDProps={setBoatID} />
      </Card>
    </div>
  );
};

export default UpdateBoat;
