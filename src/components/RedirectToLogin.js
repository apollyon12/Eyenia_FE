import React, { useEffect, useContext } from "react";
import { IonRouterContext } from "@ionic/react";

const RedirectToLogin = ({ setIsLoggedIn, setUsername }) => {
  const ionRouterContext = useContext(IonRouterContext);
  useEffect(() => {
    setIsLoggedIn(false);
    setUsername(undefined);
    ionRouterContext.push("/login");
  }, [setIsLoggedIn, setUsername, ionRouterContext]);
  return null;
};

export default RedirectToLogin;
