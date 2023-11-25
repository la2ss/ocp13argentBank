import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/reducers/userReducer";
import Connection from "../../Redux/Api";
import {  selectToken } from "../../Redux/reducers/userReducer"


export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
 const token = useSelector(selectToken)
 console.log(login(token))

  const handledSubmit = (e) => {
    e.preventDefault()

    Connection(email, password)
			.then((token) => {
				localStorage.setItem("token", token);
				dispatch(login());
        console.log("success")
			})
			.catch((error) => {

				console.log("Erreur d'identification",error);
			} )


  }
  return(
    <main className="main bg-dark login-main">
    <section className="sign-in-content" >
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handledSubmit(e)}>
          <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
           type="email"
           id="email" 
           defaultValue={email}
           onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"

             onClick={() => setRememberMe(!rememberMe)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"

          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button"  >
          Sign In
        </button>
      </form>
    </section>
  </main>
  );
}