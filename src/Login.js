import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import "./Login.css"
import {login} from "./features/counter/userSlice";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
        );
        }).catch(error => alert(error));

    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user
              .updateProfile({
                displayName: name,
                email: userAuth.user.email,
                photoURL: profilePic,
                followers: Math.floor(Math.random() * 1000),
                following: Math.floor(Math.random() * 1000),
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        }).catch(error => alert(error.message));

    };
  return (
    <div className="login">
        <img src="https://i.postimg.cc/cH1Lw0CY/Logo.png" alt="" />

        <form> 
            <input value = {name} onChange = {e => setName(e.target.value)} placeholder = "Full Name (Required if registering)" type="text" />

            <input value = {email} onChange = {e => setEmail(e.target.value)} placeholder="Email" type="email" />

            <input value = {password} onChange = {e => setPassword(e.target.value)} placeholder="Password" type="password" />

            <input value = {profilePic} onChange = {e => setProfilePic(e.target.value)} placeholder="Profile Picture url (Optional) " type="text" />

            <button type = "submit" onClick = {loginToApp}>Sign In</button>
        </form>

        <p>Not a member? {" "}
            <span className = "loginRegister" onClick={register}>Register Now</span>
        </p>
    </div>

  )
}

export default Login
