import React, { useState } from "react";
import L from "leaflet";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

const markerIcon = new L.icon({
  iconUrl: require('./bus-stop.png'),
  iconSize: [30, 45]
})

export default function StopMap(props) {
  const [getStop, setStop] = useState(null);

  const stop1 = [props.stop.stop.lat, props.stop.stop.lon];
  
  return (
    <LeafletMap center={stop1} zoom={16} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.stop.lat, props.stop.stop.lon]}
          icon={markerIcon}
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
