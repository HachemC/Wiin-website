import { useState } from "react";
import { FacebookButton } from "./facebook";
import { AppleButton } from "./apple";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { useHistory } from "react-router-dom";

import "./loginstyle.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;1,700&family=Play:wght@700&family=Poppins:wght@200&family=Ubuntu:wght@300&display=swap');
</style>;
export const Login = (props) => {
  /////////using usestate to udpate data and store the changes in the state:
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  ////added value to input so react can update values
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); ////so the page dont lose data when reload
    history.push("/posting");
  };

  return (
    <>
      <div className="grid-container">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>

        <p className="welcometext">
          <h2 className="welcometext-title">
            Sign in to <div className="a">Your Account</div>
          </h2>
          Login to your account and discover the potential of the services you
          use.Your account gives you more options by personalizing your
          experience and giving you easy access to your most important
          information.
        </p>

        <div className="auth-form-container">
          <div className="textone">
            <p>
              Welcome to <span>WiiN</span>{" "}
            </p>
            <h1>Sign In</h1>
          </div>

          <div className="noacc">
            <span>No Account?</span>
            <div>
              <input
                type="button"
                className="button-link"
                onClick={() => history.push("/register")}
                value="Sign Up"
              ></input>
            </div>
          </div>
          <div className="loginbuttons">
            <div class="googlebtn">
              <input
                type="button"
                value="Signup Using Google"
                class="btngooglee"
              ></input>
              <img
                className="googleimg"
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt="none"
              />
            </div>
            <div className="facebook-login">
              <FacebookButton></FacebookButton>
            </div>
            <div className="apple-login">
              <AppleButton></AppleButton>
            </div>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              Enter your username or email address
            </label>
            <input
              type="text"
              name="UserName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="userName"
              placeholder="Username or email address"
            ></input>
            <label htmlFor="password">Enter your password</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              value={pass}
              id="password"
              placeholder="Password"
            ></input>
            <input
              className="login"
              type="submit"
              id="Login"
              name="Login"
              value="Sign in"
              onClick={() => history.push("/posting")}
            ></input>
          </form>
          <button
            className="button-link-one"
            onClick={() => history.push("/forgetpass")}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </>
  );
};
