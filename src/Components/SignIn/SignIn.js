import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import logo from '../../images/logos/logo.png';
import '../../App.css'
const SignIn = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const  history = useHistory();
    const  location = useLocation();
    const  { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn =()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName,email} = res.user;
            const signedInUser={name:displayName,email}
            setLoggedInUser(signedInUser);
            authToken()
            history.replace(from);
            console.log(res);
        })
        .catch(function(error) {
            console.log(error);
            });
    }
    const authToken = ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
            // Send token to your backend via HTTPS
            // ...
            console.log(idToken);
            
          }).catch(function(error) {
            // Handle error
          });
          
    }
    return (
        <section id="signIn">
            <img src={logo} alt="logo"/>
            <div className="signIn-wrapper">
                <h2>Login with</h2>
                <button onClick={handleSignIn}>continue with google</button>
                <p>Don't have account?<Link style={{color:'#0078B9'}} to=""><span >Create an account</span></Link></p>
            </div>
        </section>
    );
};

export default SignIn;