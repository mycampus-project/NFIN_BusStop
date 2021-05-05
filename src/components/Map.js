import React, { useState } from "react";
import L from "leaflet";
import Campuses from "../Campuses";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
import campus from './campus.png'
import busStop from './busStop.png'
import styled from "styled-components"

//* Custom icon that marker component uses
const busStopIcon = new L.icon({
  iconUrl: busStop,
  iconSize: [20, 20],
  popupAnchor: [-5, -15]
})
const campusIcon = new L.icon({
  iconUrl: campus,
  iconSize: [20, 20],
})

//* Styled popup that gets passed on popup component and shows a popup when marker is clicked
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

//*Map component that fires up the map
export default function StopMap(props) {
  const [getStop, setStop] = useState(null);
  //*Map centers based on bus stop location 
  //*Markers and popoups added to campuses and stops 
  return (
    <div>
    <LeafletMap center={[props.stop.stop.lat, props.stop.stop.lon]} zoom={14} scrollWheelZoom={false} zoomControl={false} dragging={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <Marker
          position={[props.stop.stop.lat, props.stop.stop.lon]}
          icon={busStopIcon}
          onClick={() => { //sets the bus stop where the marker is located
            setStop(props.stop);
            console.log(props.stop);
          }}
        >
          <StyledPop 
          position={[
            props.stop.stop.lat, 
            props.stop.stop.lon
          ]}
          onClose={() => { // When popup is closed, onClose function will set the state as null and popup is closed
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
           <StyledPop // Campus locations shown as markers
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
    </div>
  );
}

