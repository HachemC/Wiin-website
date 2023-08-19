import React, { useState } from "react";
import { MyComponent } from "../imges";
import { MyLogo } from "../logo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

import "./forgetpassstyleAR.css";

export const ForgotPassAR = (props) => {
  const [email, Setmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); ////so the page don't lose data when reloaded
    ///just testing
  };
  const history = useHistory();

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <div className="grid-containerAR">
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>
        <div className="welcometextAR">
          <h2>
            هل نسيت كلمة <div className="aAR">المرور</div>
          </h2>
          <p>
            يرجى إدخال عنوان بريدك الإلكتروني حتى نتمكن من إرسال بريد إلكتروني
            لك لإعادة تعيين كلمة المرور الخاصة بك.
          </p>
        </div>

        <div className="auth-form-container-fogetAR">
          <div className="textoneeAR">
            <p>
              مرحبا بكم في <span className="w">وين </span>{" "}
            </p>

            <h1>نسيت كلمة المرور</h1>
          </div>

          <form className="loginn-formAR" onSubmit={handleSubmit}>
            <label htmlFor="UserNameAR">
              أدخل اسم المستخدم أو عنوان البريد الإلكتروني الخاص بك
            </label>
            <input
              type="text"
              name="UserrNameAR"
              onChange={(e) => Setmail(e.target.value)}
              value={email}
              id="userrNameAR"
              placeholder="اسم المستخدم أو البريد الالكتروني"
            ></input>
            <input
              type="submit"
              value="إرسال"
              onClick={() => history.push("/LoginAR")}
              className="loginAR"
              id="LoginAR"
              name="LoginAR"
            />
          </form>
        </div>
      </div>
    </>
  );
};
