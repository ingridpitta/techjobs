import React from "react";
import { MainTitle } from "../../atoms";
import { FormSignUp } from "../../molecules";
import "./signUpContent.css";

const SignUpContent = ({onFinish}) => {
  return (
    <main className="signUpContent--container">
     <FormSignUp onFinish={onFinish}/>
    </main>
  );
};
export default SignUpContent;
