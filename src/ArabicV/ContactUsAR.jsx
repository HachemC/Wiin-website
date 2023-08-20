import { useState } from "react";
import { MyComponent } from "../imges";
import { MyLogo } from "../logo";
import { useHistory } from "react-router-dom";
import "./contactusAR.css";

export const ContactUsAR = (props) => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const history = useHistory();

  return (
    <>
      <div className="grid-containerAR">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>

        <p className="welcometextAR">
          <h2 className="welcometext-titleAR">اتصل بنا</h2>
          من فضلك، قم بإدخال اسمك، عنوان البريد الإلكتروني ورسالتك
        </p>

        <div className="contact-containerAR">
          <div className="text-oneAR">
            <p>
              مرحبًا مجددًا <span>WiiN</span>{" "}
            </p>
            <h1>اتصل بنا</h1>
          </div>

          <form className="message-formAR" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              أدخل اسم المستخدم أو عنوان البريد الإلكتروني
            </label>
            <input
              type="text"
              name="UserName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="userName"
              placeholder="اسم المستخدم أو عنوان البريد الإلكتروني"
            ></input>
            <label htmlFor="Name">الاسم</label>

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="Name"
              value={Name}
              id="Name"
              placeholder="اسم المستخدم"
            ></input>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="Message"
              value={Message}
              id="Message"
              placeholder="اكتب شيئًا..."
            ></textarea>
            <input
              onClick={() => history.push("/PostingAr")}
              className="SendAR"
              type="submit"
              id="Send"
              name="Send"
              value="إرسال"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
