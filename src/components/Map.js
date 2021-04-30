import React from "react";
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

export default function StopMap() {
  const [getStop, setStop] = React.useState(null);
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
      {campus.map(stp => (
        <Marker
          key={stp.id}
          position={[
            stp.lat,
            stp.long
          ]}
          onClick={() => {
            setStop(stp);
          }}
        />
      ))}

      {getStop && (
        <Popup
          position={[
            getStop.lat,
            getStop.long
          ]}
          onClose={() => {
            setStop(null);
          }}
        >
        {getStop.name}
        </Popup>
      )}
    </LeafletMap>
  );
}
