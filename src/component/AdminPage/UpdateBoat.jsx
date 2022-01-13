import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import UpdateBoatName from "./UpdateBoatName";

const UpdateBoat = ({url}) => {
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

  return (
    <div>
      <Card className="customCard">
      <UpdateBoatName update={update} boatIDProps={setBoatID} />
      </Card>
    </div>
  );
};

export default UpdateBoat;
