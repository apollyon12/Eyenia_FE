import { IonPage } from "@ionic/react";
import React from "react";
import Logo from "../../assets/icon.png";

const Auth = () => {
  return (
    <IonPage className="items-center h-full bg-white px-9">
      <img src={Logo} alt="" className="mt-72 w-28 my-6" />
      <button className="bg-[#18567F] text-white text-lg font-semibold rounded-[10px] mt-44 mb-6 py-4 px-9 w-full">
        Login
      </button>
      <button className="bg-white text-[#18567F] text-lg font-semibold rounded-[10px] border-[2px] border-solid border-[#18567F] mb-auto py-4 px-9 w-full">
        Sign Up
      </button>
    </IonPage>
  );
};

export default Auth;
