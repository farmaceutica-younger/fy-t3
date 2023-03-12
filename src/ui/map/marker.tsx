import { Marker, MarkerProps } from "react-leaflet";
import { DivIcon } from "leaflet";

import L from "leaflet";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";

type ReactProps = {
  children: JSX.Element;
  className?: string;
};

type DivIconMarkerProps = ReactProps & { marker: MarkerProps };

export const MapMarker = ({
  children,
  marker,
  className,
}: DivIconMarkerProps) => {
  const tagName = "div";
  const element = L.DomUtil.create(tagName, "");
  const divIcon = new DivIcon({ html: element, className });
  const portal = createPortal(children, element);

  useEffect(() => {
    return () => {
      L.DomUtil.remove(element);
    };
  });

  const { position, eventHandlers } = marker;
  return (
    <>
      {portal}
      <Marker
        position={position}
        icon={divIcon}
        eventHandlers={eventHandlers}
      ></Marker>
    </>
  );
};
