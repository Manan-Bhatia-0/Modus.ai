import React from "react";
import { GoogleLogin} from react-google-Login;
import "./Login.css";

export function Login() {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        cookiePolicy={'single_host_origin'}
      />
      <h2>Log in </h2>
      <Input type="email" placeholder="Email Address " />
      <Input type="password" placeholder="Password " />
      <button className="login">Log in</button>
      <a href="#">Forget your password?</a>
      <a href="#">Create account</a>
      <Input
        type="checkbox"
        name="save_login_state"
        label="Keep me signed in"
        checked={this.state.saveLoginState}
        onChange={this.toggleLoginState.bind(this)}
      />
    </div>
  );
}
