import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { editUser, setUser } from "../Redux/reducers/userReducer";
import { EditUserData,GetUser } from "../Redux/Api";

export default function EditProfil({user}){
  const dispatch =useDispatch();
  const [lastName , setLast] = useState("");
  const [firstName , setFirst] = useState("");
  const {error, isLoading}= GetUser();
  error && <span>il y a une erreur</span>

  const CancelFunction =()=>{
 
    dispatch (editUser(false));

  }
  

  const SubmitEditData = (e)=>{
    e.preventDefault();
    EditUserData(firstName,lastName)
    .then(res => dispatch(setUser(res)))
    .catch(error => console.log(error))
    .finally(() => dispatch(editUser(false)))
  }
  return (
<>
      { isLoading ? (
        <span> chargement!!</span>
        ):(
          <h1>
          Welcome back<br />
          <form>
            <div className="data">
              <input type="text" placeholder={user.firstName} id="first" defaultValue={firstName} onChange={(e) =>setFirst(e.target.value)}/>
              <input type="text" placeholder={user.lastName} id="last" defaultValue={lastName} onChange={(e) =>setLast(e.target.value)}/>
            </div>
            <div className="buttons">
              <button className="edit-button" onClick={SubmitEditData}>Save</button>
              <button className="edit-button" onClick={CancelFunction}>Cancel</button>
            </div>              

          </form>
        </h1>
      )}
    </>
  );
}