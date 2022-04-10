import React, {useState, useContext} from "react";
import './SignIn.scss';
import FormInput from "../FormInput/Forminput";
import Button from "../Button/Button";
import {Context as AuthContext} from "../../context/AuthContext";


const SignIn = () => {
    const {googleSignin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setEmail('');
        setPassword('');

    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput handleChange={setEmail} name='email' type='text' value={email} label='email'/>
                <FormInput name='password' type="password" value={password} handleChange={setPassword} label='password'/>
                <Button type="submit" >Sign In</Button>
                <Button onClick={() => googleSignin()} >Sign In With GOOGLE</Button>
            </form>
        </div>
    )

}

export default SignIn;