import React from "react";
import { GoogleLogin} from react-google-Login;
import "./Login.css";

export function Login() {
  <div>
    <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        cookiePolicy={'single_host_origin'}
    />
    <h2>Log in </h2>
    <Input type="email" placeholder="Email Address " />
    <Input type="password" placeholder="Password " />
    <a href="#">Log in</a>
    <a href="#">Forget your password?</a>
    <a href="#">Create account</a>
    <a href="#">Keep me signed in</a>
  </div>;
}
