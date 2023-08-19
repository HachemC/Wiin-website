import { useState } from "react";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

import "./forgetPassStyle.css";
export const ForgotPass = (props) => {
  const [email, Setmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); ////so the page dont lose data when reload
    ///just testing
  };
  const history = useHistory();

  return (
    <>
      <div className="grid-container">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>
        <div className="welcometext">
          <h2>
            You Forgot <div className="a">password</div>
          </h2>
          <p>
            please enter your email address so we can send you an email to reset
            your password
          </p>
        </div>

        <div className="auth-form-container-foget">
          <div className="textonee">
            <p>
              Welcome to <span>WiiN</span>{" "}
            </p>
            <h1>Forgot password</h1>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              Enter your username or email address
            </label>
            <input
              type="text"
              name="UserName"
              onChange={(e) => Setmail(e.target.value)}
              value={email}
              id="userName"
              placeholder="Username or email address"
            ></input>
            <input
              type="submit"
              value="send"
              onClick={() => history.push("/login")}
              className="login"
              id="Login"
              name="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};
