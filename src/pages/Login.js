import React,{useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const {googleSignIn, user} = useAuth();
    // const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    const history = useHistory();
    const redirectPath = location.state?.from || "/home";
    // console.log(path);

    const handleGoogleLogin = () => {
        // setIsloading(true);

        googleSignIn()
        .then (result => {
            history.push(redirectPath)
        })
        // .finally(() =>
        // setIsloading(false))
    }
    return (
        <div>
            <button onClick = { handleGoogleLogin }>
                Google Sign In
            </button>
        </div>
    );
};

export default Login;