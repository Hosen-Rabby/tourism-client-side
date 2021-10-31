import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './style.css'

const Login = () => {
    const { googleSignIn, user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectPath = location.state?.from || "/home";

    const handleGoogleLogin = () => {

        googleSignIn()
            .then(result => {
                history.push(redirectPath)
            })
    }
    return (
        <div className='login'>
            <h3>Please Login First</h3>
            <button onClick={handleGoogleLogin} className='googlesign'>
                Google Sign In
            </button>
        </div>
    );
};

export default Login;