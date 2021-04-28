import React from "react";
import L from "leaflet"
import { MapContainer as LeafletMap, TileLayer, Marker } from "react-leaflet";
//import "./map.css";

function setStopIcon(_iconsize) {
      return L.icon({
        iconUrl: require("../icon/bus.png"),
        iconSize: _iconsize
      })
}

export default function StopMap() {

  const state = {
    lat: 60.225509,
    lng: 24.760651,
    zoom: 16
  };

  const stop1 = [state.lat, state.lng];
 
  return (
    <LeafletMap center={[state.lat, state.lng]} zoom={13} /*style={{height: "200px", width: "100%"}}*/ scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={stop1} icon={setStopIcon(20)}>

      </Marker>
    </LeafletMap>
  );
}
