import React from "react";
import { useSelector } from "react-redux";

import { GetUser } from "../Redux/Api";
import { selectUser } from "../Redux/reducers/userReducer";

export default function Welcome () {
  const user = useSelector(selectUser);
  const {error, isLoading}= GetUser();
  error && <span> il y a une erreur</span>;
  return (
    <div className="header">
      {isLoading ? <span> chargement !!!</span> : <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>}
      <button className="edit-button">Edit Name</button>
    </div>
  );
}