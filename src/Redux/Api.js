import axios from "axios";

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


export default Connection;