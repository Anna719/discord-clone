import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import {useDispatch, useSelector} from "react-redux";
import Chat from "./Chat";
import {login,logout, selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import 'firebase/auth';

function App() {

  const user =useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
      // console.log('user is', authUser);
      if (authUser) {
        // user is logged in
        dispatch(
            login({
              uid: authUser.uid,
              photo: authUser.photoURL,
              email: authUser.email,
              displayName: authUser.displayName
            })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])


  return (
    <div className="app">
        {/*if user is logged in the app will bw rendered*/}
        {user ? (
            <>
                <Sidebar/>
                <Chat/>
            </>
        ): (
           <Login/>
        )}


    </div>
  );
}

export default App;
