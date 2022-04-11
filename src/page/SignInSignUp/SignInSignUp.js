import React from "react";
import './SignInSignUp.scss'
import {upload} from "@testing-library/user-event/dist/upload";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUp;