import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import {login, logout, selectUser} from "./features/counter/userSlice";
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

/* rfce sets up basic redux setup for the code */
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
        })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  },[]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
            <div className="appBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
