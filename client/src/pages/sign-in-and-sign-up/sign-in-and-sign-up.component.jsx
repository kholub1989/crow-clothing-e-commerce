import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sing-up/sing-up.component";

import { SignInAndSignUpContainer } from "./sign-in-and-sing-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
