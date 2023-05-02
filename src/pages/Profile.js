import React, { useState } from "react";
import { IonHeader, IonContent, IonPage, IonBackButton } from "@ionic/react";
import Logo from "../assets/icon.png";

const Profile = () => {
  const [email, setEmail] = useState("audi@gmail.com");
  const [username, setUsername] = useState("AUDI");
  const [birthday, setBirthday] = useState("07/06/1993");
  const [password, setPassword] = useState("evFTbyVVCd");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [tosError, setTosError] = useState(false);
  const signup = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  // const [currentUser, setCurrentUser] = useState<any>(null);
  // const [showInterestModal, setShowInterestModal] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const { photo, takePhoto } = usePhotoGallery()

  // useEffect(() => {
  //   const fetch = async () => {
  //     setCurrentUser(await fetcCurrenthUser());
  //   };
  //   fetch();
  // }, [setCurrentUser]);

  // const handleGoogle = async () => {
  //   try {
  //     const result = await GoogleAuth.signIn();
  //     console.log({ result });
  //   } catch (e) {
  //     console.log({ error: e });
  //   }
  // };

  // React.useEffect(() => {
  // GoogleAuth.initialize();
  // console.log('Google Auth Init')
  // }, []);

  return (
    <>
      <IonPage>
        <IonHeader>
          <div className="flex relative bg-[#18AFF5] justify-center items-center pt-2 pb-8">
            <IonBackButton
              defaultHref="#"
              className="absolute left-2 text-white"
            ></IonBackButton>
            <p className="text-white font-semibold">Profile</p>
          </div>
        </IonHeader>
        <IonContent style={{ alignItems: "center" }}>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-4 mb-[72px]">
              <img src={Logo} alt="" className="w-[100px]" />
            </div>

            <form noValidate onSubmit={signup} className="px-8 mb-auto w-full">
              <div>
                <p className="text-[#2E516D] text-sm font-medium">Username</p>
                <input
                  name="username"
                  type="text"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs text-[#2E516D] rounded-lg w-full block bg-[#A9A9A9]"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled
                  required
                ></input>
              </div>
              <div className="mt-5">
                <p className="text-[#2E516D] text-sm font-medium">
                  Email Address
                </p>
                <input
                  name="email"
                  type="email"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs text-[#2E516D] rounded-lg w-full block"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
                {formSubmitted && emailError && (
                  <span className="text-red-400">
                    <p className="ion-padding-start">Email is required</p>
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="text-[#2E516D] text-sm font-medium">
                  Current Password
                </p>
                <input
                  name="password"
                  type="text"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs text-[#2E516D] rounded-lg w-full block"
                  placeholder="Current Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                {formSubmitted && passwordError && (
                  <span className="text-red-400">
                    <p className="ion-padding-start">Password is required</p>
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="text-[#2E516D] text-sm font-medium">Password</p>
                <input
                  name="password"
                  type="text"
                  className="p-3 border-[1px_solid_#A9A9A9] text-xs text-[#2E516D] rounded-lg w-full block"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                {formSubmitted && passwordError && (
                  <span className="text-red-400">
                    <p className="ion-padding-start">Password is required</p>
                  </span>
                )}
              </div>
              <div className="mx-5 mt-[93px]">
                <button className="bg-[#2E516D] text-white text-center font-semibold w-full py-2 rounded-[10px]">
                  Update
                </button>
              </div>
            </form>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default React.memo(Profile);
