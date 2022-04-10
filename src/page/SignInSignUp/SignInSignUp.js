import React from "react";
import './SignInSignUp.scss'
import {upload} from "@testing-library/user-event/dist/upload";
import SignIn from "../../components/SignIn/SignIn";

const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            Sign in
            <SignIn/>
        </div>
    )
}

export default SignInSignUp;