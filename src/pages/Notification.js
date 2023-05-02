import React from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { connect } from "../data/connect";
import SearchSVG from "../assets/images/search.svg";

const Notification = () => {
  const notificationItems = [
    { type: "Vibration", name: "Toyota 1", time: "13-03-2023 14:20" },
    { type: "Movement", name: "Test", time: "13-03-2023 13:20" },
    { type: "Exit Geofence", name: "BMW", time: "11-03-2023 13:10" },
  ];

  return (
    <IonPage id="speaker-list">
      <IonHeader>
        <div className="flex relative bg-[#18AFF5] justify-center items-center pt-2 pb-8">
          <IonBackButton
            defaultHref="#"
            className="absolute left-2 text-white"
          ></IonBackButton>
          <p className="text-white font-semibold">Avis</p>
        </div>
      </IonHeader>
      <div className="bg-[#F1F4FA] h-full">
        <div className="p-2">
          <input
            type="search"
            placeholder="Search Vehicle...."
            className="rounded-lg p-3 w-full border-[1px_solid_#A9A9A9] bg-[#F1F4FA] text-xs"
          />
        </div>
        <div className="flex gap-3 p-2">
          <input
            type="date"
            placeholder="From"
            className="rounded-lg w-full p-3 border-[1px_solid_#A9A9A9] bg-[#F1F4FA] text-xs"
          />
          <input
            type="date"
            placeholder="To"
            className="rounded-lg w-full p-3 border-[1px_solid_#A9A9A9] bg-[#F1F4FA] text-xs"
          />
          <img src={SearchSVG} alt="" className="mx-3 w-[30px]" />
        </div>
        <IonGrid className="text-center text-[#2E516D] mt-3 my-6">
          <IonRow className="text-sm font-semibold px-4">
            <IonCol className="text-left">Alert</IonCol>
            <IonCol>Vehicle Name</IonCol>
            <IonCol>Time</IonCol>
          </IonRow>
          {notificationItems.map((item, index) => (
            <IonRow
              key={`list-item-${index}`}
              className="ml-0 px-3 py-2 text-sm font-medium bg-white mb-1 rounded-md"
            >
              <IonCol className="text-left">{item.type}</IonCol>
              <IonCol>{item.name}</IonCol>
              <IonCol>{item.time}</IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </div>
    </IonPage>
  );
};

export default connect({
  component: React.memo(Notification),
});
