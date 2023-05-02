import React, { useRef, useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  useIonRouter,
  IonSlides,
  IonSlide,
  IonButton,
  IonBadge,
} from "@ionic/react";
import { connect } from "../data/connect";
import "./Corte.scss";
import HistorySVG from "../assets/images/history.svg";
import GeoSVG from "../assets/images/Geofence.svg";
import BatterySVG from "../assets/images/battery.svg";
import ClockSVG from "../assets/images/clock.svg";
import FuelSVG from "../assets/images/Fuel.svg";
import NetworkSVG from "../assets/images/network.svg";
import CloseSVG from "../assets/images/close.svg";
import AlarmSVG from "../assets/images/alarm.svg";
import SettingSVG from "../assets/images/settings.svg";
import SendSVG from "../assets/images/send.svg";
import SatSVG from "../assets/images/satellite.svg";
import LocationSVG from "../assets/images/location.svg";
import LandMarkSVG from "../assets/images/landmark.svg";
import DurationSVG from "../assets/images/duration.svg";

import { isPlatform } from "@ionic/react";

import moment from "moment";
import { useParams } from "react-router";
import { all } from "../helpers/Experiences";

const Corte = ({}) => {
  // const params = useParams();

  const [location, setLocation] = useState({
    current: {
      id: "",
      name: "",
      lat: 41.1533,
      lng: 20.1683,
    },
    locations: [],
  });
  const mapEle = useRef(null);
  const map = useRef();

  // const router = useIonRouter();
  const [openOption, setOpenOption] = useState(false);
  // const [markerPosition, setMarkerPosition] = useState();
  const [currentBtn, setCurrentBtn] = useState(SatSVG);
  // const deviceInfo = {
  //   name: "AUDI",
  //   imei: "866907059053711",
  //   speed: 54,
  //   fuel: 50,
  //   connection: true,
  //   status: true,
  //   battery: 100,
  //   signal: 4,
  //   timestamp: "14:20 13-03-2023",
  //   position: "Ew Arret 7 mi",
  //   street: "57, Street Rock Garden, 59800 Washington ",
  // };

  useEffect(() => {
    const google = window.google;
    const lat = location.current.lat;
    const lng = location.current.lng;

    const myLatLng = { lat, lng };

    map.current = new google.maps.Map(mapEle.current, {
      center: myLatLng,
      zoom: 4,
    });

    google.maps.event.addListenerOnce(map.current, "idle", () => {
      if (mapEle.current) {
        mapEle.current.classList.add("show-map");
      }
    });

    addMarkers();

    new google.maps.Marker({
      position: myLatLng,
      map: map.current,
      title: "Hello",
    });

    function addMarkers() {
      location.locations?.forEach((markerData) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`,
        });

        const otherLat = markerData.lat;
        const otherLng = markerData.lng;

        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(otherLat, otherLng),
          map: map.current,
          title: markerData.name,
        });

        marker.addListener("click", () => {
          infoWindow.open(map.current, marker);
        });
      });
    }
  }, [location]);

  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div>
          <div id="map-view">
            <div
              ref={mapEle}
              className="absolute h-full w-full bg-transparent opacity-0 transition-opacity"
              onClick={() => setOpenOption(true)}
            ></div>
            <img src={currentBtn} alt="" className="absolute left-2 my-3" />
            <div className="absolute right-2 top-0">
              <img
                src={SatSVG}
                alt=""
                className="my-3"
                onClick={() => setCurrentBtn(SatSVG)}
              />
              <img
                src={DurationSVG}
                alt=""
                className="my-3"
                onClick={() => setCurrentBtn(DurationSVG)}
              />
              <img
                src={LocationSVG}
                alt=""
                className="my-3"
                onClick={() => setCurrentBtn(LocationSVG)}
              />
              <img
                src={LandMarkSVG}
                alt=""
                className="my-3"
                onClick={() => setCurrentBtn(LandMarkSVG)}
              />
            </div>
            <div
              className={`absolute bottom-[50px] bg-white z-[1000] w-full`}
              style={{ visibility: openOption ? "visible" : "hidden" }}
            >
              <div className="flex pl-7 pr-14 relative">
                <p className="py-2 pr-5 font-semibold text-[#2E516D] text-2xl">
                  AUDI
                </p>
                <div className="flex items-end w-full">
                  <div className="flex justify-between w-full items-center text-[#2E516D] text-[12px] font-semibold">
                    <div className="flex items-center gap-1">
                      <img src={ClockSVG} alt="" />
                      <p>54km/h</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={FuelSVG} alt="" />
                      <p>50L</p>
                    </div>
                    <div className="text-sm">
                      <img src={NetworkSVG} alt="" />
                    </div>
                    <div className="flex items-center gap-1">
                      <p>45%</p>
                      <img src={BatterySVG} alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-1 right-1"
                  onClick={() => setOpenOption(false)}
                >
                  <img src={CloseSVG} alt="" />
                </div>
              </div>
              <div>
                <IonSlides pager={true} className="pt-4 pb-4 mb-1">
                  <IonSlide className="flex justify-between px-10 relative">
                    <div className="text-left text-[#2E516D] text-[10px]">
                      <p>Ew Arret 7 mi</p>
                      <p>57, Street Rock Garden, 59800 Washington</p>
                    </div>
                    <IonButton fill="clear" className="absolute top-1 right-2">
                      <img src={SendSVG} alt="" />
                    </IonButton>
                  </IonSlide>
                  <IonSlide className="flex justify-between">
                    <IonButton fill="clear">
                      <img src={HistorySVG} alt="" />
                    </IonButton>
                    <IonButton fill="clear">
                      <img src={GeoSVG} alt="" />
                    </IonButton>
                    <IonButton fill="clear">
                      <IonBadge
                        className="absolute bg-red-800 -top-[1px] -right-[6px] rounded-full"
                        color="danger"
                      >
                        5
                      </IonBadge>
                      <img src={AlarmSVG} alt="" />
                    </IonButton>
                    <IonButton fill="clear">
                      <img src={SettingSVG} alt="" />
                    </IonButton>
                  </IonSlide>
                </IonSlides>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  component: Corte,
});
