import React, { useState } from "react";
import L from "leaflet";
import Campuses from "../Campuses";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import campus from './campus.png'
import busStop from './busStop.png'
import styled from "styled-components"

const busStopIcon = new L.icon({
  iconUrl: busStop,
  iconSize: [20, 20],
  popupAnchor: [-5, -15]
})
const campusIcon = new L.icon({
  iconUrl: campus,
  iconSize: [20, 20],
})
const StyledPop = styled(Popup)`
  background: white;
  border-radius: 0;

  .leaflet-popup-content-wrapper {
    padding: 1px;
	  text-align: left;
	  border-radius: 12px;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
    overflow: hidden;
  }
`;

export default function StopMap(props) {
  const [getStop, setStop] = useState(null);

  const stop1 = [props.stop.stop.lat, props.stop.stop.lon];
  
  return (
    <LeafletMap center={stop1} zoom={15} scrollWheelZoom={false} zoomControl={false}>
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
          <StyledPop 
          position={[
            props.stop.stop.lat, 
            props.stop.stop.lon
          ]}
          onClose={() => {
            setStop(null);
          }}>
            <div>
              <h2>{props.stop.stop.name}</h2>
              <span>Nearest stop is </span>
              <p>{props.stop.distance} m away</p>
            </div>
          </StyledPop>
        </Marker>

        <Marker position={[Campuses[0].lat, Campuses[0].long]} icon={campusIcon}>
           <StyledPop 
          position={[
            Campuses[0].lat, 
            Campuses[0].long
          ]}
          onClose={() => {
            setStop(null);
          }}>
            <div>
              <h2>{Campuses[0].name}</h2>
              <span>{Campuses[0].address}</span>
            </div>
          </StyledPop>
          </Marker>
    </LeafletMap>
  );
}
