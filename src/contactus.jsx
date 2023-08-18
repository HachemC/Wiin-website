import { useState } from "react";
import { MyComponent } from "./imges";
import { MyLogo } from "./logo";
import { useHistory } from "react-router-dom";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;1,700&family=Play:wght@700&family=Poppins:wght@200&family=Ubuntu:wght@300&display=swap');
</style>;
export const ContactUs = (props) => {
  /////////using usestate to udpate data and store the changes in the state:
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  ////added value to input so react can update values

  const handleSubmit = (e) => {
    e.preventDefault(); ////so the page dont lose data when reload
    console.log(email); ///just testing
  };
  const history = useHistory();
  return (
    <>
      <div className="grid-container">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>

        <p className="welcometext">
          <h2 className="welcometext-title">
            Contact
            <div className="a">us</div>
          </h2>
          please enter your name,email address and your message
        </p>

        <div className="contact-container">
          <div className="text-one">
            <p>
              hello again <span>WiiN</span>{" "}
            </p>
            <h1>contact us</h1>
          </div>

          <form className="message-form" onSubmit={handleSubmit}>
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
            <label htmlFor="Name">Name</label>

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="Name"
              value={Name}
              id="Name"
              placeholder="User name"
            ></input>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="Message"
              value={Message}
              id="Message"
              placeholder="Write something.... "
            ></textarea>
            <input
              onClick={() => history.push("/posting")}
              className="Send"
              type="submit"
              id="Send"
              name="Send"
              value="Send"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
