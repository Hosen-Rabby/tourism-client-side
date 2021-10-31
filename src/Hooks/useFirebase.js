import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();


const useFirebase = () => {
    const [user, setUser] = useState({});

    // for loading
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    // observer user state change
    useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;

    }, [])


    return {
        user, googleSignIn, logOut, isLoading
    }
}


export default useFirebase;