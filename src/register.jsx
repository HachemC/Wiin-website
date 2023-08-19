import { Radio } from "./Radio";
import { useState } from "react";
import { Login } from "./login";
import { ChoiceOption } from "./Radio";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { useHistory } from "react-router-dom";
import "./registerstyle.css";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); ////so the page dont lose data when reload
    console.log(email, Name, Contact, pass, Radio.Radiovalue); ///just testing
  };

  return (
    <>
      {" "}
      <div className="grid-container">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <p className="welcometextt">
          <h2 className="welcometext-title">
            Sign in to <div className="a">Your Account</div>
          </h2>
          Login to your account and discover the potential of the services you
          use.Your account gives you more options by personalizing your
          experience and giving you easy access to your most important
          information.
        </p>
        <div className="register-form-container">
          <div className="texttwo">
            <p>
              Welcome to <span>WiiN</span>{" "}
            </p>
            <h1>Sign Up</h1>
          </div>
          <div className="BB">
            have an account?
            <input
              type="button"
              onClick={() => history.push("/login")}
              value="Sign In"
              className="button-link"
              id="B2"
            ></input>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              Enter your username or email address
            </label>
            <input
              className="un"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="User name"
              name="UserName"
              id="UserName"
            ></input>

            <div className="NameAndNumber">
              <div className="name-field">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="Name"
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                ></input>
              </div>

              <div className="contact-field">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={Contact}
                  type="number"
                  placeholder="Contact number"
                  name="contactNumber"
                  id="contactNumber"
                ></input>
              </div>
            </div>

            <label htmlFor="password">Enter your password</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              placeholder="Password"
              name="password"
              id="passwordd"
            ></input>

            <label htmlFor="signup">Register as</label>
            <Radio></Radio>
            <input
              onClick={() => history.push("/posting")}
              type="submit"
              id="signup"
              name="signup"
              value="Sign Up"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
