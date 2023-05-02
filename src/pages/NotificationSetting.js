import React from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonToggle,
  IonBackButton,
} from "@ionic/react";
import { connect } from "../data/connect";

const NotificationSetting = () => {
  const settingItems = [
    { name: "VIBRATION", status: false },
    { name: "MOVEMENT", status: true },
    { name: "STOP", status: false },
    { name: "ENTRER DE ZONE", status: false },
    { name: "SORTI DE ZONE", status: false },
    { name: "OVERSPEED", status: false },
    { name: "DETACHEMENT", status: true },
    { name: "JAMMING", status: true },
  ];

  return (
    <IonPage id="notification">
      <IonHeader>
        <div className="flex relative bg-[#18AFF5] justify-center items-center pt-2 pb-8">
          <IonBackButton
            defaultHref="#"
            className="absolute left-2 text-white"
          ></IonBackButton>
          <p className="text-white font-semibold">Notifications Settings</p>
        </div>
      </IonHeader>
      <IonContent>
        <div>
          <p className="text-center text-[#2E516D] text-2xl font-semibold py-9">
            AUDI
          </p>
          <IonList className="">
            {settingItems.map((item, index) => (
              <div
                key={`setting-${index}`}
                className="flex justify-between pl-4 pr-5 my-3 items-center"
              >
                <p>{item.name}</p>
                <IonToggle color="success" checked={item.status} />
              </div>
            ))}
          </IonList>
        </div>
        <div className="px-10 mt-28">
          <button className="bg-[#2E516D] text-white text-center font-semibold w-full px-auto py-2 rounded-[10px] mb-auto">
            Confirmer
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  component: React.memo(NotificationSetting),
});
