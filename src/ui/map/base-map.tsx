import Head from "next/head";
import { ReactNode } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export const BaseMap = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
          key="leaflet"
        />
      </Head>
      <MapContainer
        style={{
          height: 500,
          zIndex: 1,
        }}
        center={[42, 11]}
        zoom={5}
        scrollWheelZoom={false}
      >
        {children}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};
