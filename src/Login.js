import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import {auth,provider} from "./firebase";

function Login() {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch(
            (error) => alert(error.message))
    };


    return(
        <div className="login">
            <div className="login__logo">
                <img src="https://www.pngix.com/pngfile/big/61-613362_below-are-discord-assets-transparent-background-discord-logo.png" alt=""/>
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    )

}

export default Login;