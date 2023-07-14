import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import * as busStopData from "./data/busstops.json";

function App() {
  const [activeStop, setActiveStop] = useState(null);
  const position = [-1.288, 36.825];
  const zoom = 16;
  return (
    <>
      <h1>Nairobi Bus Stops</h1>
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {busStopData.features.map(stop => (
          <Marker
            key={stop.properties.stop_id}
            position={[
              stop.properties.stop_lat,
              stop.properties.stop_lon,
            ]}
            onClick={() => {
              setActiveStop(stop);
            }}
          >
            <Popup>
              <div>
                <p>{stop.properties.stop_name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
