import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);


    const auth = getAuth();

    /////////////// login email and password
    const signInUsingLoginForm = () => {
        setIsLoading(true);
        if (password.length < 6) {
            setError('Password Must Contain 6 Character');
            return;
        };
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case ');
            return;
        };
        if (isLogin) {
            signInOldUser(email, password);
        }
        else {
            signUpNewUser(email, password);
        }

    };
    ////////  old user
    const signInOldUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(user);
                setError('');
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    ///////// new user
    const signUpNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError('');
                verifyEmail();
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };
    /// toggle sign in 
    const toggleSignIn = e => {
        setIsLogin(e.target.checked);
    };

    // google login 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    };
    //// log out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    };
    /////// fire base observer 

    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    /////////
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })

    };
    /////////
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setPassword(result)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    };

    return { logOut, signInUsingGoogle, modalShow, setModalShow, error, user, isLoading, isLogin, setError, setUser, setEmail, setPassword, setIsLogin, setIsLoading, resetPassword, toggleSignIn, signInUsingLoginForm };

};
export default useFirebase;