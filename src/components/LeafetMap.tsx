"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

const LeafletMap = () => {
  return (
    <MapContainer
      center={[30.06374017520576, 31.335468954332644]} // Latitude and Longitude for initial center
      zoom={16}
      style={{ height: "500px", width: "100%" }}
      className="z-[1]"
    >
      {/* Add the Tile Layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Add a Marker with CustomTooltip */}
      <Marker position={[30.06374017520576, 31.335468954332644]}>
        {/* Render the Custom Tooltip as a child */}
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
