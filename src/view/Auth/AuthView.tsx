import React from "react";
import SignIn from './components/SignIn'
import { Link } from "react-router-dom";

const AuthView = () => {
   return (
   <>
      <SignIn></SignIn>
     <div style={{ textAlign: "center" }}> not a user? 
        <br/>
     <Link to="/signup">
         sign up
      </Link>
     </div>

      
   </>
   );
}
export default AuthView;