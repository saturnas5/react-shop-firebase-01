import React, {useState, useEffect, useContext} from "react";
import HomePage from "./page/HomePage/HomePage";
import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ShopPage from "./page/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./page/SignInSignUp/SignInSignUp";
import { auth } from "./firebase/firebase.utils";
import {Provider as AuthProvider} from "../src/context/AuthContext";


const App = () => {
    const [token, setToken] = useState(null);
    const [uid, setUid] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const uid = localStorage.getItem('uid')
        console.log(uid)
    }, [])

  return (
      <>
      <Header/>
      <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/shop'>
              <ShopPage/>
          </Route>
          <Route path='/signin'>
              <SignInSignUp/>
          </Route>
      </Switch>
      </>
  )
}

export default () => {
  return (
      <BrowserRouter>
          <AuthProvider>
            <App/>
          </AuthProvider>
      </BrowserRouter>
  );
};
