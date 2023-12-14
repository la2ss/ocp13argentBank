import React, { useState }  from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/reducers/userReducer";
import { useNavigate} from "react-router-dom";
import { Connection } from "../../Redux/Api";
//import userIcon from "../../assets/user.svg"
//import {  selectToken } from "../../Redux/reducers/userReducer"


export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const fields = document.querySelectorAll('input[type= "email"], input[type ="password"]')
  const errorFields = document.querySelectorAll('.error')
  const errorDiv = document.createElement("div");   
  errorDiv.classList.add('error'); 

  function validateField(field){
    if (field.checkValidity()){
      return true;   
    } else {

      let message = field.validationMessage;
      let showMessage = document.createElement("div");
      showMessage.textContent = message;
      showMessage.classList.add("error");
      field.parentNode.appendChild(showMessage);    
      return false;

    }
  }

  function removeMsg(field){
    let msg = document.querySelectorAll(".error");
    msg.forEach((message) =>{
      if(message.parentNode === field.parentNode){
        field.parentNode.removeChild(message);
      }
    });
  }

  fields.forEach((field) =>{
    field.addEventListener('input',(e)=>{ removeMsg(field);validateField(field);});
  });

  const handledSubmit = (e) => {
    e.preventDefault()
    const form = document.querySelector(".sign-in-content");
    errorFields.forEach(el=>el.parentElement === form ? el.remove():null) 

    Connection(email, password)
    .then((token) => {
      localStorage.setItem("token", token);
      dispatch(login(token));
      console.log("success");
      navigate("/profile")

    })
    .catch((error) => {
      form.prepend(errorDiv);
     
      errorDiv.innerHTML = error.message;
    })

  }
  return(
    <main className="main bg-dark login-main">
  <section className="sign-in-content" >

        <h1>Sign In</h1>
        <form onSubmit={(e) => handledSubmit(e)} noValidate >
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              minLength={6}
              required
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onClick={() => setRememberMe(!rememberMe)}
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