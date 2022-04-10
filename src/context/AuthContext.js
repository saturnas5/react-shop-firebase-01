import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import { signInWithGoogle, auth } from "../../src/firebase/firebase.utils";
import { GoogleAuthProvider, signOut } from 'firebase/auth';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return {token: action.payload, errorMessage: '', user: action};
        case 'set_google_user':
            return {...state, user: action.payload};
        case 'signout':
            return {...state, token: action.payload};
        default:
            return state;
    }
}

const localSign = dispatch => () => {}
const signin = dispatch => () => {}

const googleSignin = dispatch => async () => {
    const result = await signInWithGoogle();
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    dispatch({type: 'signin', payload: token});
    dispatch({type: 'set_google_user', payload: result.user});
    localStorage.setItem('token', token);
};

const signup = dispatch => () => {}

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
    {token: null, errorMessage: '', user: null}
);