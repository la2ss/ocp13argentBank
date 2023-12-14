import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { GetUser } from "../Redux/Api";
import { selectUser, editUser, edit } from "../Redux/reducers/userReducer";
import EditProfil from "./EditProfil";

export default function Welcome () {
  const user = useSelector(selectUser);
  const {error, isLoading}= GetUser();
  const dispatch = useDispatch();
  const isEdited = useSelector(edit);
  error && <span> il y a une erreur</span>;
  const editNameFunction =(e)=>{
   
    e.preventDefault();

    dispatch (editUser(true));
  }

  return (
    <>
      {isLoading ? (
        <span> chargement !!!</span>
      ):(
        <div className="header">
          { isEdited ? (
            <EditProfil user={user}/>
          ):(
            <>
              <h1>
                Welcome back<br />
                <span>
                  {user.firstName} {user.lastName}
                </span>

              </h1>
              <button className="edit-button" onClick={editNameFunction}> 
                Edit Name
              </button> 

            </>


          )}

        </div>
      )}

    </>
  );
}