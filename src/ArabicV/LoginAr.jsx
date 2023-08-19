import { useState } from "react";
import { FacebookButton } from "../facebook";
import { AppleButton } from "../apple";
import { MyComponent } from "../imges";
import { MyLogo } from "../logo";
import { useHistory } from "react-router-dom";

import "./LoginAr.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;1,700&family=Play:wght@700&family=Poppins:wght@200&family=Ubuntu:wght@300&display=swap');
</style>;

export const LoginAR = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/PostingAr");
  };

  return (
    <>
      <div className="grid-containerAR">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap');
        </style>
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>

        <p className="welcometextAR">
          <h2 className="welcometext-titleAR">
            سجّل الدخول إلى <div className="aAR">حسابك</div>
          </h2>
          قم بتسجيل الدخول إلى حسابك واكتشف إمكانات الخدمات التي تستخدمها. يمنحك
          حسابك المزيد من الخيارات من خلال تخصيص تجربتك ومنحك وصولاً سهلاً إلى
          أهم معلوماتك.
        </p>

        <div className="auth-form-containerAR">
          <div className="textoneAR">
            <p>
              مرحبا بكم في <span className="w">وين </span>{" "}
            </p>
            <h1>تسجيل الدخول</h1>
          </div>

          <div className="noaccAR">
            <span>لا حساب ؟</span>
            <div>
              <input
                type="button"
                className="button-linkAR"
                onClick={() => history.push("/registerAR")}
                value="اشتراك"
              ></input>
            </div>
          </div>
          <div className="loginbuttonsAR">
            <div class="googlebtnAR">
              <input
                type="button"
                value="تسجيل الدخول مع جوجل"
                class="btngoogleeAR"
              ></input>
              <img
                className="googleimgAR"
                src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                alt="none"
              />
            </div>
            <div className="facebook-loginAR">
              <FacebookButton></FacebookButton>
            </div>
            <div className="apple-loginAR">
              <AppleButton></AppleButton>
            </div>
          </div>

          <form className="login-formAR" onSubmit={handleSubmit}>
            <label htmlFor="UserName">
              أدخل اسم المستخدم أو عنوان البريد الإلكتروني الخاص بك
            </label>
            <input
              type="text"
              name="UserName"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="userName"
              placeholder="اسم المستخدم أو البريد الالكتروني"
            ></input>
            <label htmlFor="password">أدخل كلمة المرور الخاصة بك</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              value={pass}
              id="password"
              placeholder="كلمة المرور"
            ></input>
            <input
              className="loginAR"
              type="submit"
              id="Login"
              name="Login"
              value="تسجيل الدخول"
              onClick={() => history.push("/postingAR")}
            ></input>
          </form>
          <button
            className="button-link-oneAR"
            onClick={() => history.push("/forgotAr")} // Redirect to ForgotPassAR
          >
            هل نسيت كلمة السر
          </button>
        </div>
      </div>
    </>
  );
};
