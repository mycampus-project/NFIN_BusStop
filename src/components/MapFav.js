import React, { useState } from "react";
import L from "leaflet"
import campus from "../Campuses";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import campusIcon from './campus.png'
import busStopIcon from './busStop.png'

const markerIcon = new L.Icon({
    iconUrl: busStopIcon,
    iconSize: [30, 45],
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  })

export default function StopMapFav(props) {
  const [getStop, setStop] = useState(null);

  const stop1 = [props.stop.stop.lat, props.stop.stop.lon];
  
  return (
    <LeafletMap center={stop1} zoom={14} scrollWheelZoom={false} /*style={{height: "200px", width: "100%"}}*/>
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
            props.stop.stop.lat, props.stop.stop.lon]}
          onClose={() => {
            setStop(null);
          }}>
            <div>
              <h2>{props.stop.stop.name}</h2>
            </div>
          </Popup>
        </Marker>
    </LeafletMap>
  );
}