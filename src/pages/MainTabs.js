import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faListDots,
  faUserCircle,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "./MainTabs.scss";
import Profile from "./Profile";
import Corte from "./Corte";
import Notification from "./Notification";
import List from "./List";
import AddVehicle from "./AddVehicle";
import { GrHomeRounded } from "react-icons/gr";
import { TbClipboardList } from "react-icons/tb";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineSetting } from "react-icons/ai";

const MainTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet className="bg-[#e5e5e5] p-2">
        <>
          <Redirect exact path="/tabs" to="/tabs/corte" />
          {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/tabs/corte" render={() => <Corte />} exact={true} />
          <Route path="/tabs/list" render={() => <List />} exact={true} />
          <Route
            path="/tabs/notification"
            render={() => <Notification />}
            exact={true}
          />
          <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
          <Route
            path="/tabs/addvehicle"
            render={() => <AddVehicle />}
            exact={true}
          />
        </>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="h-16 bg-white relative">
        <IonTabButton tab="home" href="/tabs/corte">
          <GrHomeRounded className="text-[#18567f] text-xl" />
        </IonTabButton>
        <IonTabButton tab="list" href="/tabs/list">
          <TbClipboardList className="text-[#18567f] text-xl" />
        </IonTabButton>
        <IonTabButton className="bg-[#18567F] rounded-3xl drop-shadow-[0_4px_4px_#00000040] text-white text-xl">
          +
        </IonTabButton>
        <IonTabButton tab="notification" href="/tabs/notification">
          <VscBellDot className="text-[#18567f] text-xl" />
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <AiOutlineSetting className="text-[#18567f] text-lg" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
