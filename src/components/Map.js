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
  const [currentPos, setcurrentPos] = useState(null)
  //handleClick = this.handleClick.bind(this);

  const handleClick= (e) => {
    setcurrentPos({ currentPos: e.latlng });
    console.log(e.latlng.lat)
  }
  
  return (
    <LeafletMap 
      center={[props.stop.stop.lat, props.stop.stop.lon]} 
      zoom={15} 
      scrollWheelZoom={false} 
      zoomControl={false}
      onClick={handleClick}
    >

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
          <Popup position={[props.stop.stop.lat, props.stop.stop.lon]}
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
        
        {/* currentPos && <Marker position={currentPos} draggable={true}>
            <Popup position={currentPos}>
              Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
            </Popup>
          </Marker>*/}

    </LeafletMap>
  );
}
