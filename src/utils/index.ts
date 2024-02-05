import { Map, LngLatLike } from "mapbox-gl";

const { VITE_MAPBOX_ACCESS_TOKEN } = import.meta.env;

export const initMap = (container: HTMLDivElement, coords: LngLatLike) =>
  new Map({
    container,
    // style: "mapbox://styles/mapbox/satellite-v9",
    // pitchWithRotate: false,
    center: coords,
    zoom: 2,
    accessToken: VITE_MAPBOX_ACCESS_TOKEN,
    doubleClickZoom: false,
    projection: { name: "globe" },
  });
