import { useState } from "react";
import { FacebookButton } from "./facebook";
import { AppleButton } from "./apple";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Validation from "./LoginValidation";
import "./loginstyle.css";
import axios from "axios";
import { useEffect } from "react";
import { auth, provider } from "./googleSignin/config";
import { signInWithPopup } from "firebase/auth";
import { PostingComponent } from "./posting";
import { fbprovider } from "./googleSignin/config";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;1,700&family=Play:wght@700&family=Poppins:wght@200&family=Ubuntu:wght@300&display=swap');
</style>;

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorHTML, setErrorHTML] = useState("");
  const history = useHistory();
  const [isGoogleClicked, setIsGoogleClicked] = useState(false);
  const [isFacebookClicked, setIsFacebookClicked] = useState(false);
  const handleGoogleClick = () => {
    setIsGoogleClicked(true);
    handleclick();
  };
  const handleFacebookClick = () => {
    setIsFacebookClicked(true);
    handlefbclick();
  };
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      // User is authenticated, update the login status
      onLogin();
    }
  }, [onLogin]);

  useEffect(() => {
    if (isSubmitting) {
      setErrors(Validation(email, pass));
      setErrorHTML("");
      if (Errors.length === 0 && email && pass) {
        axios
          .post("http://localhost:8081/login", {
            email: email,
            password: pass,
          })
          .then((res) => {
            if (res.data === "success") {
              localStorage.setItem("isAuthenticated", "true"); // Store authentication status
              onLogin();
              history.push("/posting");
            } else {
              setErrorHTML("Invalid email or password");
            }
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setIsSubmitting(false);
          });
      } else {
        setIsSubmitting(false);
      }
    }
  }, [isSubmitting, Errors, email, pass, history, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userEmail = data.user.email;
      localStorage.setItem("email", userEmail);
      localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated
      onLogin(); // Update login status
      history.push("/posting"); // Redirect to the /posting page
    });
  };
  const handlefbclick = () => {
    signInWithPopup(auth, fbprovider).then((data) => {
      const userEmail = data.user.email;
      localStorage.setItem("email", userEmail);
      localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated
      onLogin(); // Update login status
      history.push("/posting"); // Redirect to the /posting page
    });
  };

  return (
    <>
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
              <button
                onClick={handleGoogleClick}
                class="btngooglee"
                disabled={isGoogleClicked}
              >
                Signup Using Google
              </button>

              <img
                className="googleimg"
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt="none"
              />
            </div>
            <div onClick={handlefbclick} className="facebook-login">
              <FacebookButton disabled={isFacebookClicked}></FacebookButton>
            </div>
            <div className="apple-login">
              <AppleButton></AppleButton>
            </div>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              Enter your username or email address
            </label>
            {Errors.includes("Email is required.") && (
              <p className="error-message">Email is required.</p>
            )}

            <input
              type="text"
              name="UserName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="userName"
              placeholder="Username or email address"
            ></input>

            {/* Display email required error */}

            <label htmlFor="password">Enter your password</label>
            {Errors.includes("Password is required.") && (
              <p className="error-message">Password is required.</p>
            )}
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              value={pass}
              id="password"
              placeholder="Password"
            ></input>

            {/* Display password required error */}
            {errorHTML && <p className="error-message">{errorHTML}</p>}
            <input
              className="login"
              type="submit"
              id="Login"
              name="Login"
              value="Sign in"
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
