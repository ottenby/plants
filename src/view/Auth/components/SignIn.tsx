import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { User, auth } from "firebase";
import firebase from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../../App";
import { UserHomePage } from "../../Dashboard/user-home-page/UserHomePage";

interface UserData {
  email: string;
  password: string;
}
const SignIn = () => {
  const authContext = useContext(AuthContext);

  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: ""
  } as UserData);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        if(!res.user) {
          return 
        }
        // setLocalstorage
        authContext.setUser && authContext.setUser(res.user);
        // history.push("/dashboard");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <>
    {!authContext.user &&
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      
      <form>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Enter your Email"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          placeholder="Enter your Password"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
}
{authContext.user &&
<UserHomePage
  user = {authContext.user}></UserHomePage>}
    </>
  );
};
export default SignIn;
