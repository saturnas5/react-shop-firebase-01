import React, { useState, useContext } from "react";
import './SignUp.scss'
import FormInput from "../FormInput/Forminput";
import Button from "../Button/Button";
import {Context as AuthContext} from "../../context/AuthContext";

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('')
    const {state: {errorMessage}, signup} = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if(password !== confirmPassword) {
            setErr('Password must match!');
            return;
        }
        if(!errorMessage) {
            signup(displayName, email, password);
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <>
            <div className="sign-up">
                <h2 className="title">
                    I do not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={setDisplayName}
                        label='Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        handleChange={setEmail}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={setPassword}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={setConfirmPassword}
                        label='Confirm Password'
                        required
                    />
                    {errorMessage && <p>{errorMessage}</p>}
                    {err && <p>{err}</p>}
                    <Button type='submit'>SIGN UP</Button>
                </form>
            </div>
        </>
    );
}

export default SignUp;