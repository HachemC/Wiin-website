import { Radio } from "./Radio";
import { useState } from "react";
import { Login } from "./login";
import { ChoiceOption } from "./Radio";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./registerstyle.css";
import { useEffect } from "react";
import RegistrationValidation from "./RegisterValidation";
import axios from "axios";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [pass, setPass] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const history = useHistory();
  const [Errors, setErrors] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!email || !name || !contact || !pass) {
      return;
    }

    // Check for errors and handle form submission
    if (Errors.length === 0 && submitted) {
      axios
        .post("http://localhost:8081/register", {
          email: email,
          name: name,
          contact: contact,
          password: pass,
          pos: selectedRadio,
        })
        .then((res) => {
          if (res.data === "Email already used") {
            setEmailError("Email already used");
            setSubmitted(false);
            return;
          } else {
            history.push("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [Errors, email, name, contact, pass, selectedRadio, history, submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(RegistrationValidation(email, name, contact, pass));
    setSubmitted(true);
  };

  return (
    <>
      {" "}
      <div className="grid-container">
        <div className="langggg">
          <Link to="/login" className="language-buttonEN">
            EN
          </Link>{" "}
          <Link to="/loginAr" className="language-buttonAR">
            AR
          </Link>
        </div>
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
            {Errors.includes("Email is required.") && (
              <p className="error-message">Email is required.</p>
            )}
            {emailError && <p className="error-message">{emailError}</p>}
            <input
              className="un"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="User name"
              name="email"
              id="UserName"
            />

            <div className="NameAndNumber">
              <div className="name-field">
                <label htmlFor="Name">Name</label>
                {Errors.includes("Name is required.") && (
                  <p className="error-message">Name is required.</p>
                )}
                <input
                  type="text"
                  placeholder="Username"
                  name="Name"
                  id="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                ></input>
              </div>

              <div className="contact-field">
                <label htmlFor="contactNumber">Contact Number</label>
                {Errors.includes("Contact number is required.") && (
                  <p className="error-message">Contact number is required.</p>
                )}
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={contact}
                  type="number"
                  placeholder="Contact number"
                  name="contactNumber"
                  id="contactNumber"
                ></input>
              </div>
            </div>

            <label htmlFor="password">Enter your password</label>
            {Errors.includes("Password is required.") && (
              <p className="error-message">Password is required.</p>
            )}
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              placeholder="Password"
              name="password"
              id="passwordd"
            ></input>

            <label htmlFor="signup">Register as</label>
            <Radio selected={selectedRadio} onSelect={setSelectedRadio} />
            <input
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
