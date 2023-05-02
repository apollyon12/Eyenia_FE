import React, { useState } from "react";
import { IonPage, useIonRouter } from "@ionic/react";
import {
  setIsLoggedIn,
  setUsername,
  setEmail,
} from "../../data/user/user.actions";
import { connect } from "../../data/connect";
import { RouteComponentProps } from "react-router";
import Logo from "../../assets/icon.png";
import { FaUser } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { TfiLock } from "react-icons/tfi";

const Signup = ({
  setIsLoggedIn,
  history,
  setUsername: setUsernameAction,
  setEmail: setEmailAction,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [tosError, setTosError] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const router = useIonRouter();

  const signup = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    /*
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    

    if (email && password && confirmpassword && agree) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API}/auth/verify`,
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
          alert(message.message);
        } else {
          await response.json();
          Store.set("signup", { email, password, agree });

          router.push("/signup-complete-profile", "forward", "push");
        }
      } catch (err) {
        alert(err);
        console.log(err);
      }
    }
    */
    router.push("/login");
  };

  return (
    <IonPage id="signup-page">
      <div className="flex flex-col h-screen items-center bg-white px-[30px]">
        <div className="flex justify-center">
          <img src={Logo} alt="Ionic logo" className="mt-[60px] w-[60px]" />
        </div>
        <div className="text-[#393F45] text-center">
          <p className="text-[27px] font-semibold mt-9 mb-4">Sign Up</p>
          <p>Sign up for new account to continue!</p>
        </div>

        <form
          noValidate
          onSubmit={signup}
          className="mt-9 w-full content-center"
        >
          <div className="flex items-center p-3 mb-6 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
            <div className="bg-[#18567f29] p-2 rounded-full">
              <FaUser className="text-xs text-[#18567F]" />
            </div>
            <input
              name="username"
              type="text"
              className="focus:outline-none border-none focus:border-none w-full text-xs text-[#00000080]"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center p-3 mb-6 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
            <div className="bg-[#18567f29] p-2 rounded-full">
              <FiPhoneCall className="text-xs text-[#18567F]" />
            </div>
            <input
              name="phone"
              type="text"
              className="focus:outline-none border-none focus:border-none w-full text-xs text-[#00000080]"
              placeholder="Phone Number (facultatif)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center p-3 mb-6 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
            <div className="bg-[#18567f29] p-2 rounded-full">
              <FiMail className="text-xs text-[#18567F]" />
            </div>
            <input
              name="email"
              type="email"
              className="focus:outline-none border-none focus:border-none w-full text-xs text-[#00000080]"
              placeholder="Email"
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

          <div className="flex items-center p-3 mb-11 rounded-[10px] w-full border-[1px] border-solid border-[#18567f8c]">
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

          <button
            type="submit"
            className="w-full px-auto py-6 bg-[#18567f] text-[white] font-bold rounded-[10px]"
          >
            Sign Up
          </button>
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
  component: Signup,
});
