import React, {useState, useContext} from "react";
import './SignIn.scss';
import FormInput from "../FormInput/Forminput";
import Button from "../Button/Button";
import {Context as AuthContext} from "../../context/AuthContext";
import { doc, getDocs, collection, query, where, getDoc, setDoc} from 'firebase/firestore';
import {firestore} from "../../firebase/firebase.utils";

import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

const SignIn = () => {
    const {googleSignin, signin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setEmail('');
        setPassword('');
    };


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={setEmail} name='email' type='text' value={email} label='email'/>
                <FormInput name='password' type="password" value={password} handleChange={setPassword} label='password'/>
                <div className="buttons">
                    <Button type="submit" onClick={() => signin(email, password)} >Sign In</Button>
                    <Button className='google-sign-in'  onClick={() => googleSignin()} >Sign In With GOOGLE</Button>
                </div>
            </form>
        </div>
    )

}

export default SignIn;