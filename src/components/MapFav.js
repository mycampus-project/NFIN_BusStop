import React, { useState } from "react";
import L from "leaflet"
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import busStop from './busStop.png'

const busStopIcon = new L.icon({
  iconUrl: busStop,
  iconSize: [20, 20],
})

export default function StopMapFav(props) {
  const [getStop, setStop] = useState(null);
  
  return (
    <LeafletMap center={[props.stop.lat, props.stop.lon]} zoom={15} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.lat, props.stop.lon]}
          icon={busStopIcon}
          onClick={() => {
            setStop(props);
            console.log(props);
          }}
        >
          <Popup 
            position={[
            props.stop.lat, props.stop.lon]}
            onClose={() => {
              setStop(null);
            }}>
            <div>
              <h2>{props.stop.name}</h2>
            </div>
          </Popup>
        </Marker>
    </LeafletMap>
  );
}