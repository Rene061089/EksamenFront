import { useNavigate } from "react-router-dom";
import "../../styles/deleteUser.css";

function DeleteUser({ setLoggedIn, url, facade }) {
 
  const userToDelete = facade.getUserName();
  let navigate = useNavigate();

  function deleteThatUserNow() {
    const op = facade.makeOptions("DELETE", true, userToDelete);
    fetch(url + "/api/info/" + userToDelete, op)
      .then(facade.handleHttpErrors)
      .then(localStorage.clear())
      .then(
        alert("The user with username " + userToDelete + " has been deleted")
      )
      .then(setLoggedIn(false));
    navigate("/");
  }

  function handleClick() {
    const modal = document.querySelector(".modal");  
    modal.style.display = "block";
   
  }

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  return (
    <div className="deleteDiv">
      <button className="openModalbtn" id="Delete" onClick={handleClick}>
        Delete user with username "{userToDelete}"
      </button>
      <div className="modal">
        <div className="modal_content">
          <h4 className="modalh4">"Du er ved at slette din konto. Ønsker du at fortsætte så dobbeltklik på "JA"</h4>
          <button className="deletebtn" id="Delete" onDoubleClick={deleteThatUserNow}>
            Ja
          </button>
          <button className="closeModalbtn" onClick={closeModal}>
            Nej
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteUser;
