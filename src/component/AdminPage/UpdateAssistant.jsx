import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import AssistantInfo from './AssistantInfo';


const UpdateAssistant = ({url}) => {
    const [assistant, setUpdateAssistant] = useState({
        dto_name: "",
        dto_primaryLanguage:"",
        dto_yearsOfXP:"",
        dto_priceHour:"",
      });
    
      const [assistantID, setAssistantID] = useState("");
    
      const update = async (info) => {
        
        const result = await fetch(url + "/api/info/updateassistant/" + assistantID, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(info),
        });
        const data = await result.json();
        setUpdateAssistant(data);
    
      };
      useEffect(() => {}, [assistant]);


    
console.log(assistantID);
    return (
      <div>
          <Card style={{marginTop: 40}} className="customCard">
          <AssistantInfo prosID={setAssistantID} update={update} />
          </Card>
      </div>
    )
}

export default UpdateAssistant
