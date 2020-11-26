import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { auth, User } from "firebase";
import AuthView from "./view/Auth/AuthView";
import firebase from "firebase";
import { UserHomePage } from "./view/Dashboard/user-home-page/UserHomePage";
import SignUp from "./view/Auth/components/signup";
import {Header} from './view/Auth/components/Header/Header'

interface Store {
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const AuthContext = React.createContext<Store>({});

function App() {
  const [user, setUser] = useState<User>();
  const currentUser = firebase.auth().currentUser;
  const history = useHistory();
  // alternative way of checking log-in state
//   useEffect(() => {
//    firebase.auth().onAuthStateChanged((user: any) => {
//      setUser(user);
//    });
//  }, []);

  useEffect(() => {
   console.log('user logged in', currentUser)
   if(currentUser) {
    history.replace('/userhomepage')
   }
  },[])

  return (
    <>
    <Header></Header>
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          {/* <PrivateRoute exact path="/dashboard" component={DashboardRoutes} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={AuthView} />
          {/* <Route exact path="/userhomepage" component={() => <UserHomePage user={user | any}/>} /> */}
          {/* <Route exact path="/userhomepage" component={UserHomePage} /> */}
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </AuthContext.Provider>
    </>
  )
}

export default App;
