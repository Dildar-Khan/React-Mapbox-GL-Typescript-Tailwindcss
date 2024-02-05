import { useEffect, useRef, RefObject } from "react";
import { Map } from "mapbox-gl";
import { initMap } from "../utils";

export const useMap = (container: RefObject<HTMLDivElement>) => {
  const mapInitRef = useRef<Map | null>(null);

  useEffect(() => {
    if (container.current) {
      mapInitRef.current = initMap(
        container.current,
        [-100.31019063199852, 25.66901932031443]
      );
    }
  }, []);

  //   useEffect(() => {
  //     if (!container.current) return;

  //     mapInitRef.current.on("style.load", () => {
  //       mapInitRef.current.setFog({}); // Set the default atmosphere style
  //     });

  //     // At low zooms, complete a revolution every two minutes.
  //     const secondsPerRevolution = 120;
  //     // Above zoom level 5, do not rotate.
  //     const maxSpinZoom = 5;
  //     // Rotate at intermediate speeds between zoom levels 3 and 5.
  //     const slowSpinZoom = 3;

  //     function spinGlobe() {
  //       const zoom = mapInitRef.current && mapInitRef.current.getZoom();
  //       if (zoom && zoom < maxSpinZoom) {
  //         let distancePerSecond = 360 / secondsPerRevolution;
  //         if (zoom > slowSpinZoom) {
  //           // Slow spinning at higher zooms
  //           const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
  //           distancePerSecond *= zoomDif;
  //         }
  //         const center = mapInitRef.current && mapInitRef.current.getCenter();
  //         if (center) {
  //           center.lng -= distancePerSecond;
  //           // Smoothly animate the map over one second.
  //           // When this animation is complete, it calls a 'moveend' event.
  //           mapInitRef.current &&
  //             mapInitRef.current.easeTo({
  //               center,
  //               duration: 1000,
  //               easing: (n) => n,
  //             });
  //         }
  //       }
  //     }

  //     // When animation is complete, start spinning if there is no ongoing interaction
  //     mapInitRef.current.on("moveend", () => {
  //       spinGlobe();
  //     });

  //     spinGlobe();
  //   }, []);

  // useEffect(() => {
  //     mapInitRef.current && mapInitRef.current.on('dblclick', ({ lngLat }) => generateNewMarker({ map: mapInitRef.current!, ...lngLat }))

  //     return () => { mapInitRef.current?.off('dblclick', generateNewMarker) }
  // }, [])

  // useEffect(() => {
  //     mapInitRef.current && mapInitRef.current.on('load', () => generateNewMarker({ map: mapInitRef.current!, ...mapInitRef.current!.getCenter() }))

  //     return () => { mapInitRef.current?.off('load', generateNewMarker) }
  // }, [])
};
