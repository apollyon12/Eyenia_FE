import React from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonBackButton,
} from "@ionic/react";
import { connect } from "../data/connect";
import RemoveSVG from "../assets/images/remove.svg";
import ResetSVG from "../assets/images/reset.svg";
import VectorSVG from "../assets/images/vector.svg";
import RestartSVG from "../assets/images/restart.svg";
import StopSVG from "../assets/images/stop.svg";
import BluetoothSVG from "../assets/images/bluetooth.svg";
import SubscriptionSVG from "../assets/images/subscription.svg";
import NotificationSVG from "../assets/images/notification.svg";
import TrackingSVG from "../assets/images/tracking.svg";

const Setting = () => {
  const settingItems = [
    { title: "Tracking Mode", url: TrackingSVG },
    { title: "Notifications", url: NotificationSVG },
    { title: "Abonnement", url: SubscriptionSVG },
    { title: "Appareils Associe", url: BluetoothSVG },
    { title: "Coupure Circuit", url: StopSVG },
    { title: "Redemarer", url: RestartSVG },
    { title: "Speed Alert", url: VectorSVG },
    { title: "Reset", url: ResetSVG },
    { title: "Delate the Device", url: RemoveSVG },
  ];

  return (
    <IonPage id="notification">
      <IonHeader>
        <div className="flex relative bg-[#18AFF5] justify-center items-center pt-2 pb-8">
          <IonBackButton
            defaultHref="#"
            className="absolute left-2 text-white"
          ></IonBackButton>
          <p className="text-white font-semibold">Reglage</p>
        </div>
      </IonHeader>
      <IonContent>
        <div className="bg-[#F1F4FA] h-full">
          <p className="text-center text-[#2E516D] text-2xl font-semibold pt-[10px] pb-9">
            AUDI
          </p>
          <IonList className="p-0">
            {settingItems.map((item, index) => (
              <div
                key={`setting-${index}`}
                className="flex pl-5 py-[14px] items-center border-b gap-2"
              >
                <img src={item.url} alt="" className="w-7 h-7" />
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  component: React.memo(Setting),
});
