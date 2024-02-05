import { useRef } from "react";
import { useMap } from "../hooks/useMap";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  useMap(mapRef);

  return <div ref={mapRef} className="w-screen h-screen" />;
};

export default Map;
