import React, { useState, useEffect } from "react";
import L from "leaflet"
import campus from "../Campuses";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

/*function setStopIcon(_iconSize) {
  return L.icon({
        iconUrl: require("/InnoProject/NFIN_BusStop/src/Icons/bus.png"),
        iconSize: [_iconSize]
      });
    }*/

export default function StopMap(props) {
  const [getStop, setStop] = useState(null);
  const state = {
    lat: 60.225509,
    lng: 24.760651,
    zoom: 14
  };

  const stop1 = [state.lat, state.lng];
  
  return (
    <LeafletMap center={stop1} zoom={state.zoom} scrollWheelZoom={false} /*style={{height: "200px", width: "100%"}}*/>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.stop.lat, props.stop.stop.lon]}
          onClick={() => {
            setStop(props.stop);
            console.log(props.stop);
          }}
        >
          <Popup 
          position={[
            props.stop.stop.lat, 
            props.stop.stop.lon
          ]}
          onClose={() => {
            setStop(null);
          }}>
            <div>
              <h2>{props.stop.stop.name}</h2>
              <p>{props.stop.distance}</p>
            </div>
          </Popup>
        </Marker>
    </LeafletMap>
  );
}
