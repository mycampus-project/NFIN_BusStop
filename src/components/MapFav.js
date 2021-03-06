import React, { useState } from "react";
import L from "leaflet"
import { MapContainer as LeafletMap, TileLayer, Marker, Popup} from "react-leaflet";
import "./map.css";
import busStopIcon from './busStop.png'

//* Custom icon that marker component uses
const markerIcon = new L.Icon({
    iconUrl: busStopIcon,
    iconSize: [20, 20],
    iconAnchor: [-5, -15],
  })
//*Map component that fires up the map
export default function StopMapFav(props) {
  const [getStop, setStop] = useState(null);
  //*Map centers based on bus stop location 
  //*Markers and popoups added to campuses and stops 
  return (
    <LeafletMap center={[props.stop.lat, props.stop.lon]} zoom={16} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.lat, props.stop.lon]}
          icon={markerIcon}
          onClick={() => {
            setStop(props.stop);
            console.log(props.stop);
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