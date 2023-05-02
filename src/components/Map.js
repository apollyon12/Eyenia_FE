import { useIonViewWillEnter } from "@ionic/react";
import React, { useRef, useEffect, useState } from "react";
import Store from "../helpers/Store";

const Map = () => {
  const [location, setLocation] = useState({
    current: {
      id: "",
      name: "",
      lat: 0,
      lng: 0,
    },
    locations: [],
  });
  const mapEle = useRef(null);
  const map = useRef();

  useEffect(() => {
    const lat = +location.current.lat;
    const lng = +location.current.lng;

    const myLatLng = { lat: lat, lng: lng };

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
      location.locations.forEach((markerData) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${markerData.name}</h5>`,
        });

        const otherLat = +markerData.lat;
        const otherLng = +markerData.lng;

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

  return <div ref={mapEle} className="map-canvas"></div>;
};

export default Map;
