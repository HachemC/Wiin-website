import { RadioAR } from "./RadioAR";
import { useState } from "react";
import { LoginAr } from "./LoginAr";
import { ChoiceOption } from "./RadioAR";
import { MyComponent } from "../imges";
import { MyLogo } from "../logo";
import { useHistory } from "react-router-dom";
import "./registerAR.css"; // Updated AR stylesheet
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export const RegisterAR = (props) => {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, Name, Contact, pass, RadioAR.Radiovalue); // Just testing
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap');
      </style>
      <div className="grid-containerAR">
        <div className="langgg">
          <Link to="/register" className="language-buttonEN">
            EN
          </Link>{" "}
          <Link to="/registerAR" className="language-buttonAR">
            AR
          </Link>
        </div>
        <MyLogo></MyLogo>
        <MyComponent></MyComponent>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <p className="welcometexttAR">
          <h2 className="welcometext-titleAR">
            قم بإنشاء حساب <div className="aAR">الآن</div>
          </h2>
          قم بإنشاء حساب واكتشف إمكانات الخدمات التي تستخدمها. يمنحك حسابك
          المزيد من الخيارات من خلال تخصيص تجربتك ومنحك وصولاً سهلاً إلى أهم
          معلوماتك.
        </p>
        <div className="register-form-containerAR">
          <div className="texttwoAR">
            <p>
              مرحبا بكم في <span>وين</span>{" "}
            </p>
            <h1>انشاء حساب</h1>
          </div>
          <div className="BBAR">
            هل لديك حساب؟
            <input
              type="button"
              onClick={() => history.push("/LoginAr")}
              value="سجل الدخول"
              className="button-linkAR"
              id="B2AR"
            ></input>
          </div>

          <form className="register-formAR" onSubmit={handleSubmit}>
            <label htmlFor="UserNameAR">
              أدخل اسم المستخدم أو عنوان البريد الإلكتروني الخاص بك
            </label>
            <input
              className="unAR"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="اسم المستخدم أو البريد الالكتروني"
              name="UserNameAR"
              id="UserNameAR"
            ></input>

            <div className="NameAndNumberAR">
              <div className="name-fieldAR">
                <label htmlFor="NameAR">الاسم</label>
                <input
                  type="text"
                  placeholder="اسم المستخدم"
                  name="NameAR"
                  id="NameAR"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                ></input>
              </div>

              <div className="contact-fieldAR">
                <label htmlFor="contactNumberAR">رقم الهاتف</label>
                <input
                  onChange={(e) => setContact(e.target.value)}
                  value={Contact}
                  type="number"
                  placeholder="رقم الهاتف"
                  name="contactNumberAR"
                  id="contactNumberAR"
                ></input>
              </div>
            </div>

            <label htmlFor="passwordAR">ادخل رقمك السري</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              placeholder="كلمة المرور"
              name="passwordAR"
              id="passworddAR"
            ></input>

            <label htmlFor="signupAR">سجل ك (اختر واحدا)</label>
            <RadioAR></RadioAR>
            <input
              onClick={() => history.push("/posting")}
              type="submit"
              id="signupAR"
              name="signupAR"
              value="إنشاء حساب"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
