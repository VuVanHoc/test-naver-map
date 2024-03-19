"use client";

import React from "react";
import { useEffect } from "react";

function MapComponent() {
  useEffect(() => {
    const loadNaverMapsScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://openapi.map.naver.com/openapi/v3/maps.js?clientId=asfg7hwrrn";
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      const map = new naver.maps.Map("map", mapOptions);

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.3595704, 127.105399),
        map: map,
      });
    };

    if (window.naver) {
      initializeMap();
    } else {
      loadNaverMapsScript();
    }

    return () => {
      // Clean up if needed
    };
  }, []);

  return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
}
export default MapComponent;
