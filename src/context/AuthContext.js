import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import { signInWithGoogle, auth } from "../../src/firebase/firebase.utils";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {firestore} from "../../src/firebase/firebase.utils";
import {setDoc, doc, getDoc} from 'firebase/firestore';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return {token: action.payload, errorMessage: '', user: action};
        case 'set_uid':
            return {...state, user: action.payload};
        case 'signout':
            return {...state, token: action.payload};
        case 'error':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const localSign = dispatch => () => {}

const signin = dispatch => async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            const token = user.accessToken;
            localStorage.setItem('token', token);
            localStorage.setItem('uid', user.uid);
            dispatch({type: 'signin', payload: token});
            dispatch({type: 'set_uid', payload: user.uid});
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        })
}

const googleSignin = dispatch => async () => {
    const result = await signInWithGoogle();
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const docRef = doc(firestore, 'users', result.user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
            await setDoc(doc(firestore, 'users', result.user.uid), {
            firstName: result.user.displayName,
            lastName: '',
            email: result.user.email,
            phone: result.user.phoneNumber,
            id: result.user.uid,
            created: new Date(),
        });
    }

    dispatch({type: 'signin', payload: token});
    localStorage.setItem('token', token);
};

const signup = dispatch => async (firstName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(firestore, 'users', user.uid), {
                firstName: firstName,
                lastName: '',
                email: email,
                phone: '',
                id: user.uid,
                created: new Date(),
            })
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('uid', user.uid);
            dispatch({type: 'signin', payload: user.accessToken});
            dispatch({type: 'set_uid', payload: user.uid});
        })
        .catch(error => {
            console.log(error.message)
            if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                dispatch({type: 'error', payload: 'Password should be at least 6 characters.'});
            } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                dispatch({type: 'error', payload: 'Already taken or bad Email address'});
            } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                dispatch({type: 'error', payload: 'Already taken or bad Email address'});
            } else {
                dispatch({type: 'error', payload: 'Somthing went wrong'});
            }
        });
}

const signout = dispatch => async () => {
    localStorage.removeItem('token')
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
    dispatch({type: 'signout', payload: null})
}

const clearErrorMsg = dispatch => () => {}


export const {Provider, Context} = createDataContext(
    authReducer,
    {localSign, signin, signout, signup, clearErrorMsg, googleSignin},
    {token: null, errorMessage: '', user: null,}
);