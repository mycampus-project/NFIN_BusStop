import React, { useState } from "react";
import L from "leaflet";
import Campuses from "../Campuses";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import campus from './campus.png'
import busStop from './busStop.png'

const busStopIcon = new L.icon({
  iconUrl: busStop,
  iconSize: [20, 20],
})
const campusIcon = new L.icon({
  iconUrl: campus,
  iconSize: [20, 20],
})

export default function StopMap(props) {
  const [getStop, setStop] = useState(null);

  const stop1 = [props.stop.stop.lat, props.stop.stop.lon];
  
  return (
    <LeafletMap center={stop1} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.stop.lat, props.stop.stop.lon]}
          icon={busStopIcon}
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

        <Marker position={[Campuses[0].lat, Campuses[0].long]} icon={campusIcon}/>

    </LeafletMap>
  );
}
