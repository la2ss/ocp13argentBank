import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/userReducer";

const Connection = async (username, password) => {
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    {
      email: username,
      password: password,
    },

    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );
  return response.data.body.token;
}

const GetUser = async () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    setIsLoading(true);
    axios
      .post("http://localhost:3001/api/v1/user/profile", {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json;charset=utf-8",
          },
        })
      .then((response) => response.data.body)
      .then(res => dispatch(setUser(res)))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setIsLoading(false));

  }, [dispatch]);

  return { error, isLoading };
};
const EditUserData = async (firstName, lastName) => {
  const response = await axios.put(
    "http://localhost:3001/api/v1/user/profile",
    { firstName: firstName, lastName: lastName },

    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json;charset=utf-8",
      },
    },
  );
  return response.data.body;
};



export { Connection, GetUser, EditUserData };