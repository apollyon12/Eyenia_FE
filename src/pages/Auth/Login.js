import React, { useState } from "react";
import { IonPage, IonToggle } from "@ionic/react";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../../data/user/user.actions";

import { connect } from "../../data/connect";
import { RouteComponentProps } from "react-router";
import Logo from "../../assets/icon.png";
import GoogleSVG from "../../assets/images/google.svg";
import FacebookSVG from "../../assets/images/facebook.svg";
import InstagramSVG from "../../assets/images/instagram.svg";
import { FaUser } from "react-icons/fa";
import { TfiLock } from "react-icons/tfi";

const Login = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [langFr, setLangFr] = useState(true);

  const login = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    /*        
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(JSON.stringify({ email, password }), '=======> ')
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          const message = await response.json();
        } else {
          const result = await response.json();
          Store.set("token", result.token);
          history.push("/tabs/home", { direction: "none" });
        }
      } catch (err) {
        alert(err);
        console.log(err);
      }
    }
    */
    history.push("/tabs/corte");
  };

  return (
    <IonPage id="login-page">
      <div className="flex flex-col items-center h-screen bg-white px-[30px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Ionic logo" className="mt-[60px] w-[60px]" />
        </div>
        <div className="text-[#393F45] text-center">
          <p className="text-[27px] font-semibold mt-9 mb-4">Login back</p>
          <p>Sign in with your account to continue!</p>
        </div>

        <form
          noValidate
          onSubmit={login}
          className="mt-6 w-full content-center"
        >
          <div className="flex items-center p-3 mb-6 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
            <div className="bg-[#18567f29] p-2 rounded-full">
              <FaUser className="text-xs text-[#18567F]" />
            </div>
            <input
              name="email"
              type="email"
              className="focus:outline-none border-none focus:border-none w-full text-xs text-[#00000080]"
              placeholder="Email or number phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {formSubmitted && emailError && (
            <span className="text-red-400">
              <p className="ion-padding-start">Email is required</p>
            </span>
          )}

          <div className="flex items-center p-3 mb-6 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
            <div className="bg-[#18567f29] p-2 rounded-full">
              <TfiLock className="text-xs text-[#18567F]" />
            </div>
            <input
              name="password"
              type="password"
              className="focus:outline-none border-none focus:border-none w-full text-xs text-[#00000080]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>

          {formSubmitted && passwordError && (
            <span className="text-red-400">
              <p className="ion-padding-start">Password is required</p>
            </span>
          )}

          <div className="w-full text-right">
            <a href="/" className="text-[#00000080] font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-auto py-5 mt-6 bg-[#18567F] text-[white] font-bold rounded-[10px]"
          >
            Login
          </button>

          <div className="flex justify-center my-9 gap-1">
            <p className="text-[#000000c2]">Don't have an account?</p>
            <a href="/signup" className="font-semibold text-[#18567F]">
              Sign Up
            </a>
          </div>
          <p className="text-sm font-medium text-[#0A2049] text-center">OR</p>
          <div className="flex justify-center gap-4 mt-7">
            <div className="rounded-full p-3 border-[1px] border-solid border-[#18567f]">
              <img src={GoogleSVG} alt="google" className="w-4" />
            </div>
            <div className="rounded-full p-3 border-[1px] border-solid border-[#18567f]">
              <img src={FacebookSVG} alt="facebook" className="w-4" />
            </div>
            <div className="rounded-full p-3 border-[1px] border-solid border-[#18567f]">
              <img src={InstagramSVG} alt="instagram" className="w-4" />
            </div>
          </div>
        </form>
      </div>
    </IonPage>
  );
};

export default connect({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
    setEmail,
  },
  component: Login,
});
