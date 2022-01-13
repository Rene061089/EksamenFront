import React, { useEffect, useState } from "react";
import UpdateUserInfo from "./UpdateUserInfo";


const UserSettings = ({setLoggedIn, facade, url}) => {
//   if(facade.getToken() !== undefined ){
//     setLoggedIn(true)
//  }
 
  const [userInfo, setUserInfo] = useState({
    dto_gender: "",
    dto_name: "",
    dto_age: "",
    dto_phone: "",
  });

  const update = async (info) => {
    const result = await fetch(url + "/api/info/" + facade.getUserName(), {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await result.json();
    setUserInfo(data);
  };
  useEffect(() => {
  }, [userInfo])

  return (
    
  <div>
   <UpdateUserInfo onUpdate={update} facade={facade} url={url} />
  </div>
  
)
};

export default UserSettings;
